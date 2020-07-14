import Link from 'next/link'
import matter from 'gray-matter'

// import Stories from '../components/Stories'
import SocmedList from '../components/SocmedList'

const LetterW = () => (
  <span style={{ opacity: '0.1' }}>w</span>
)

export default function Home({ posts, stories }) {

  return (
    <div className="home">
      <div className="container">
        <header className="home-header mb-5">
          <h2>Bro<LetterW />sing</h2>
          <p>Mencari dan memberikan makna diantara keharmonian design dan code.<br/>
          Sedikit bisa design, kebanyakan web & iOS native developer</p>
          <SocmedList />
        </header>

        {/* <h4>Works</h4>
        <Stories
          stories={stories}
          className="mb-5"
        /> */}

        <h4>Articles</h4>
        <ul>
          { posts.map(post => (
            <li key={post.slug}>
              <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                <a className="unstyled">
                  [{post.meta.date}] - {post.meta.title}
                </a>
              </Link>
            </li>
          )) }
        </ul>
      </div>
    </div>
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

  const posts = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys
      .map((key, index) => {
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
      .sort((a, b) => {
        let aDate = new Date(a.meta.date)
        let bDate = new Date(b.meta.date)
        return aDate - bDate
      })
      .reverse()

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