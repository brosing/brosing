import Link from 'next/link'

import { list, listItem } from './styles'

const Stories = ({ stories, className }) => (
  <ul className={className}>
    { stories.map(story => (
      <li key={story.slug}>
        <Link href={`/story/${story.slug}`}>
          <a className="unstyled">{story.title}</a>
        </Link>
      </li>
    )) }

    {/* include styles */}
    <style jsx>{list}</style>
    <style jsx>{listItem}</style>
  </ul>
)

export default Stories
