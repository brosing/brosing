import Link from 'next/link'
import Markdown from 'react-markdown'
import matter from 'gray-matter'

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { swift, javascript} from 'react-syntax-highlighter/dist/cjs/languages/hljs'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

SyntaxHighlighter.registerLanguage('swift', swift)
SyntaxHighlighter.registerLanguage('javascript', javascript)

const CodeBlock = ({ language, value }) => (
  <SyntaxHighlighter language={language} style={dracula}>
    {value}
  </SyntaxHighlighter>
)

export default function PostTemplate({ content, data }) {
  return (
    <div>
      <Link href="/">
        <a className="unstyled">&larr;</a>
      </Link>

      <h1>{data.title}</h1>

      <Markdown
        escapeHtml={false}
        source={content}
        renderers={{ code: CodeBlock }}
      />
    </div>
  )
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query
  const content = await import(`../../content/${slug}.md`)
  const data = matter(content.default)

  return { content, ...data }
}