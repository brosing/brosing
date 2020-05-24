import Link from 'next/link'
import matter from 'gray-matter'

export default function Home({ posts }) {

  return (
    <>
      <header className="home-header">
        <h2>Bro<span style={{ opacity: '0.1' }}>w</span>sing</h2>
        <p>Frontend Engineer turn to iOS Engineer</p>
      </header>
      
      <ul>
        { posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/post/${post.slug}`}>
              <a className="unstyled">{post.meta.title}</a>
            </Link>
          </li>
        )) }
      </ul>
    </>
  )
}

export async function getStaticProps() {
  //get posts & context from folder
  const posts = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default)
      return {
        meta: document.data,
        markdown: document.content,
        slug,
      }
    })
    return data
  })(require.context('../content', true, /\.md$/))

  return { props: { posts } }
}