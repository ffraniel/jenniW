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
          .pageTitle {
            font-family:var(--mainFont);
            font-style:italic;
            font-size:var(--midSizeFont);
          }
          a {
            text-decoration:none;
            color:var(--darkGrey); 
            font-family:var(--thickFont)
          }
          a:hover {
            color:black;    
          }
          .header {
            background-color:var(--darkGreen);
          }
        `}</style>
    </div>
)

export default Header