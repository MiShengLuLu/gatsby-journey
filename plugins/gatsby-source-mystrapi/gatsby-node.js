const axios = require('axios')
var pluralize = require('pluralize')

async function sourceNodes ({ actions }, configOptions) {
  const { apiURL, collectionTypes } = configOptions
  // Post -> posts   Product -> products
  const types = collectionTypes.map(type => type.toLowerCase()).map(type => pluralize(type))

  // 从外部数据源中获取数据
  const final = await getContents(types, apiURL)
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
