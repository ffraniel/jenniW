import Link from 'next/link';
import Search from './Search';
import Meta from '../components/Meta'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div className="header">
      <Meta />
        <div>
            <h1 className="pageTitle">Jenni W</h1>
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
        <style jsx >{`
          a {
            text-decoration:none;
            color:#363C3C
          }
          a:hover {
            color:#95a5a6;            
          }
        `}</style>
    </div>
)

export default Header