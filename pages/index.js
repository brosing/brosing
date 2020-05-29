import Link from 'next/link'
import matter from 'gray-matter'

export default function Home({ posts, stories }) {

  return (
    <>
      <header className="home-header">
        <h2>Bro<span style={{ opacity: '0.1' }}>w</span>sing</h2>
        <p>Frontend Engineer turn to iOS Engineer</p>
      </header>
      
      <ul>
        { stories.map(story => (
          <li key={story.slug}>
            <Link href={`/story/${story.slug}`}>
              <a className="unstyled">{story.title}</a>
            </Link>
          </li>
        )) }

        { posts.map(post => (
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
  const convertKey = (key) => {
    const slug = key
      .replace(/^.*[\\\/]/, '')
      .split('.')
      .slice(0, -1)
      .join('.')

    return slug
  }

  //get posts & context from folder
  const posts = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = convertKey(key)
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

  const stories = (context => {
    const keys = context.keys()
    const data = keys.map(key => {
      let slug = convertKey(key)
      let replacedSlug = slug.split('-').join(' ')
      let title = replacedSlug.charAt(0).toUpperCase() + replacedSlug.slice(1)
      
      return { slug, title }
    })
    return data
  })(require.context('./story', true, /\.js$/))

  return { props: { posts, stories } }
}