const axios = require('axios')
var pluralize = require('pluralize')
const { createNodeHelpers } = require('gatsby-node-helpers')

async function sourceNodes ({ actions, createNodeId, createContentDigest }, configOptions) {
  const { createNode } = actions
  const { apiURL, collectionTypes } = configOptions
  // Post -> posts   Product -> products
  const types = collectionTypes.map(type => type.toLowerCase()).map(type => pluralize(type))

  // 从外部数据源中获取数据
  const final = await getContents(types, apiURL)
  // 将数据添加至 graphql 数据层中
  for(let [key, value] of Object.entries(final)) {
    // 1. 构建数据节点对象 allPostContent allProductContent
    const nodeHelpers = createNodeHelpers({
      typePrefix: key,
      createNodeId,
      createContentDigest
    })
    const createNodeObject = nodeHelpers.createNodeFactory('content')
    // 2. 根据数据节点对象创建 graphql 数据层的数据节点
    value.forEach(item => createNode(createNodeObject(item)))
  }
}

async function getContents (types, apiURL) {
  const size = types.length
  let index = 0
  const final = {}

  // 初始调用
  await loadContents()

  async function loadContents () {
    if (size === index) return
    const { data } = await axios.get(`${apiURL}/${types[index]}`)
    final[types[index++]] = data
    await loadContents()
  }

  return final
}

module.exports = {
  sourceNodes
}
