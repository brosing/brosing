const fs = require('fs')
const path = require('path')

const POSTS_DIR = path.join(process.cwd(), '/pages/posts/')

const getFiles = (dir) => fs
  .readdirSync(dir)
  .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))

const getContentFromFiles = (arr, dir) => {
  const META = /export\s+const\s+meta\s+=\s+(\{(\r\n|\n|.)*?(\r\n|\n)\})/;

  return arr
    .map((file, index) => {
      const name = path.join(dir, file)
      const contents = fs.readFileSync(name, 'utf-8')
      const match = META.exec(contents)

      if (!match || typeof match[1] !== 'string') {
        throw new Error(`${name} needs to export const meta = {}`)
      }

      // eslint-disable-next-line no-eval
      const meta = eval('(' + match[1] + ')')

      return {
        ...meta,
        path:
          dir.replace(process.cwd() + "/pages", "") +
          file.replace(/\.mdx?$/, ''),
        index,
      }
    })
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
}

const arrOfPosts = getFiles(POSTS_DIR);
const posts = getContentFromFiles(arrOfPosts, POSTS_DIR);
module.exports = { posts }