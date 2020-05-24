import Link from 'next/link'
import Markdown from 'react-markdown'
import matter from 'gray-matter'

import CodeBlock from '../../components/CodeBlock'

const PostTemplate = ({ content, title }) => (
  <article>
    <Link href="/">
      <a className="unstyled">&larr;</a>
    </Link>

    <h1>{title}</h1>

    <Markdown
      escapeHtml={false}
      source={content}
      renderers={{ code: CodeBlock }}
    />
  </article>
)

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query
  const content = await import(`../../content/${slug}.md`)
  return matter(content.default)
}

export default PostTemplate
