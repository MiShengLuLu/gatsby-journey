const path = require('path')

// 以编程的方式创建页面
// function createPages ({ actions }) {
//   const { createPage } = actions
//   // 1. 获取模板的绝对路径
//   const template = require.resolve('./src/templates/person.js')
//   // 2. 获取模板的数据
//   const persons = [{slug: 'zhangsan', name: '张三', age: 18}, {slug: 'lisi', name: '李四', age: 20}]
//   // 3. 根据模板和数据创建页面
//   persons.forEach(person => {
//     createPage({
//       // 模板的结对路径
//       component: template,
//       // 页面的访问地址
//       path: `/person/${person.slug}`,
//       // 传递给模板的数据
//       context: person
//     })
//   })
// }

async function createPages ({ graphql, actions }) {
  const { createPage } = actions
  // 1. 获取模板文件的绝对路径
  const template = require.resolve('./src/templates/article.js')
  // 2. 获取页面的访问标识
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)
  // 3. 创建页面
  data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      component: template,
      path: `/article/${node.fields.slug}`,
      context: {
        slug: node.fields.slug
      }
    })
  })
}

function onCreateNode ({ node, actions }) {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports = {
  createPages,
  onCreateNode
}