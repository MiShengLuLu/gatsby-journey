const xml2js = require('xml2js')
const { promisify } = require('util')
const parse = promisify(xml2js.parseString)
// const { parseStringPromise } = new xml2js.Parser()
const { createNodeHelpers } = require('gatsby-node-helpers')

async function onCreateNode ({ node, actions, loadNodeContent, createNodeId, createContentDigest }) {
  const { createNode } = actions
  if (node.internal.mediaType === 'application/xml') {
    let content = await loadNodeContent(node)

    const data = await parse(content, {
      explicitArray: false,
      explicitRoot: false,
    })

    // const data = await parseStringPromise(content, {
    //   explicitArray: false,
    //   explicitRoot: false,
    // })
    // { person: { name: [ '张三' ], age: [ '20' ] } }
    console.log(data)

    // xml2js.parseString(
    //   content,
    //   {
    //     explicitArray: false,
    //     explicitRoot: false
    //   },
    //   (err, result) => {
    //     console.log(result)
    //   }
    // )

    const { createNodeFactory } = createNodeHelpers({
      typePrefix: 'XML',
      createNodeId,
      createContentDigest,
    })
    const createNodeObject = createNodeFactory('parsedContent')
    createNode(createNodeObject(data))
  }
}

module.exports = {
  onCreateNode
}
