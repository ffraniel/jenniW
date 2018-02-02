import Link from 'next/link'
import Search from './Search'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <div>
            <h1>Jenni W</h1>
        </div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/articles">
          <a style={linkStyle}>Articles</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/contact">
          <a style={linkStyle}>Contact</a>
        </Link>
        <Search />
    </div>
)

export default Header