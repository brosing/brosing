import Link from 'next/link'

import Twitter from '../public/socmed/twitter.svg'
import Github from '../public/socmed/github.svg'
import Instagram from '../public/socmed/instagram.svg'
import Linkedin from '../public/socmed/linkedin.svg'

const SocmedList = () => {
  const social = [
    // { image: Dribbble, link: 'https://dribbble.com/singgih_nn' },
    { image: Linkedin, link: 'https://www.linkedin.com/in/singgih-nur-nugroho' },
    { image: Github, link: 'https://github.com/brosing' },
    { image: Twitter, link: 'https://twitter.com/singgih_nn' },
    { image: Instagram, link: 'https://www.instagram.com/singgih_nn' },
  ]

  return (
    <ul className="list-socmed">
      { social.map((item) => (
        <li key={item.link}>
          <Link href={item.link} prefetch={false}>
              <a target="_blank" rel="noopener noreferrer">
                <img src={item.image} />
              </a>
            </Link>
          </li>
      ))}
    </ul>
  )
}

export default SocmedList