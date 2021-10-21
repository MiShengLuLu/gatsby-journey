const xml2js = require('xml2js')
// const { promisify } = require('util')
// const parse = promisify(parseString)
const { createNodeHelpers } = require('gatsby-node-helpers')

async function onCreateNode (data) {
  console.log(data)
  // const { createNode } = actions
  // if (node.internal.mediaType === 'application/xml') {
  //   let content = await loadNodeContent(node)
  //   // let data = await parse(content, { explicitArray: false, explicitRoot: false })

  //   const data = await xml2js.parseStringPromise(content, { explicitArray: false, explicitRoot: false })

  //   // xml2js.parseString(
  //   //   content,
  //   //   {
  //   //     explicitArray: false,
  //   //     explicitRoot: false
  //   //   },
  //   //   (err, result) => {
        
  //   //   }
  //   // )

  //   const { createNodeFactory } = createNodeHelpers({
  //     typePrefix: 'XML',
  //   })
  //   const createNodeObject = createNodeFactory('parsedContent')
  //   createNode(createNodeObject(data))
  // }
}

module.exports = {
  onCreateNode
}
