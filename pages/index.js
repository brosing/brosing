import { withRouter } from 'next/router'
import Link from 'next/link'
import pagination from 'pagination'
import styled from 'styled-components'

import HighlightedText from '../components/HighlightedText'
import Layout from '../components/layouts/default'
import Post from '../components/blog-index-item'
import blogposts from '../utils/posts'
import { siteMeta } from '../blog.config'

function createRange(start, end) {
  return new Array(end - start).fill().map((d, i) => i + start);
}

const Blog = ({ router, page = 1 }) => {
  const paginator = new pagination.SearchPaginator({
    prelink: '/',
    current: page,
    rowsPerPage: siteMeta.postsPerPage,
    totalResult: blogposts.length,
  })

  const {
    previous,
    range,
    next,
    fromResult,
    toResult,
  } = paginator.getPaginationData()
  const results = createRange(fromResult - 1, toResult)

  return (
    <Layout pageTitle="Blog" path={router.pathname}>
      <header>
        <StyledTitle>
          Hi... I'm a <HighlightedText>Front-end Web & Mobile Developer,</HighlightedText> well technically I could
          build iOS app with swift, while android app use react-native for now.
        </StyledTitle>
      </header>

      {blogposts
        .filter((_post, index) => results.indexOf(index) > -1)
        .map((post, index) => (
          <Post
            key={index}
            title={post.title}
            summary={post.summary}
            date={post.publishedAt}
            path={post.path}
          />
        ))}

      <ul>
        {previous && (
          <li>
            <Link href={`/blog?page=${previous}`} as={`/blog/${previous}`}>
              <a>Previous</a>
            </Link>
          </li>
        )}
        {range.map((page, index) => (
          <li key={index}>
            <Link key={index} href={`/blog?page=${page}`} as={`/blog/${page}`}>
              <a>{page}</a>
            </Link>
          </li>
        ))}
        {next && (
          <li>
            <Link href={`/blog?page=${next}`} as={`/blog/${next}`}>
              <a>Next</a>
            </Link>
          </li>
        )}
      </ul>
    </Layout>
  )
}

Blog.getInitialProps = async ({ query }) => {
  return query ? { page: query.page } : {}
}

export default withRouter(Blog)

const StyledTitle = styled.div`
  font-size: 0.8rem;
  max-width: 400px;
  margin-bottom: 4rem;
`