import Link from 'next/link';
import SearchBox from './SearchBox';
import Meta from '../components/Meta'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <header className="header">
      <Meta />
        <div className="topBar">
          <h1 className="pageTitle topBlock"><span className="titleBackground">Jenni W</span></h1>
          <nav className="links">
            <Link href="/">
              <a style={linkStyle} className="topBlock sideBorder">Home</a>
            </Link>
            <Link href="/articles">
              <a style={linkStyle} className="topBlock sideBorder">Articles</a>
            </Link>
            <Link href="/about">
              <a style={linkStyle} className="topBlock sideBorder">About</a>
            </Link>
            <Link href="/contact">
              <a style={linkStyle} className="topBlock sideBorder">Contact</a>
            </Link>
          </nav>
          <SearchBox className="topBlock"/>
        </div>
        <style jsx >{`         
          .header {
            background-color:var(--lightGrey);
            overflow: hidden; 
            position: sticky;
            position: -webkit-sticky;
            top:0px;
            border-bottom:solid var(--darkGrey) 0.5px;
            width:100%;
          }
          .pageTitle {
            font-family:var(--titleFont);
            font-size:1.5rem;;
            letter-spacing:5px;
            // border:solid red 0.5px;
          }
          .topBlock {
            display:inline;
            padding:0 20px;
            // border:solid red 0.5px;
          }
          .sideBorder {
            border-left: solid black 1px;
          }
          .topBar {
            display:block;
            position:relative;
            padding: 20px 0;
            // border:solid white 0.5px;
          }
          .links {
            // border:solid white 0.5px;
            display:inline;
          }
          a {
            text-decoration:none;
            color:var(--darkGrey); 
            font-family:var(--thickFont);
            // border:solid white 0.5px;
          }
          a:hover {
            color:black;    
          }
          a:active {
            color:white;
            background-color:var(--darkGrey);
            border-radius: 4px;
          }
        `}</style>
    </header>
)

export default Header