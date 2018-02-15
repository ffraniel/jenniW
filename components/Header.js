import Link from 'next/link';
import SearchBox from './SearchBox';
import Meta from '../components/Meta'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <header className="header">
      <Meta />
        <div>
            <h1 className="pageTitle">Jenni W</h1>
        </div>
        <nav className="links">
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
        </nav>
        <SearchBox />
        <style jsx >{`
          .pageTitle {
            font-family:var(--mainFont);
            font-style:italic;
            font-size:var(--midSizeFont);
            padding-left:1%;
            padding-top:25px;
          }
          .links {
            padding-bottom:6px;
            padding-left:6px;
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
            overflow: hidden; 
            // border:red solid 1px;
          }

        `}</style>
    </header>
)

export default Header