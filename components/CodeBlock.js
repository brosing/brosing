
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

export default CodeBlock
