var Prismic = require('prismic-javascript');
import config from '../config';
const apiEndpoint = config.apiEndpoint;
const accessToken = config.accessToken;
import fetch from 'isomorphic-unfetch';
import Link from 'next/link'
import Layout from '../components/Layout';
import Head from 'next/head';

const Index = (props) => { 
    return (
            <div className="index" >
                <Head>
                    <title>Jenni Whitehead</title>
                </Head>
                <Layout>
                <div className="hero">
                    <h1>Jenni Whitehead</h1>
                    <h2 className="slideInLeft">Safeguarding in Education</h2>
                </div>
                <section className="intro">
                    <h2>All this content is gathered over x years...</h2>
                    <img src="/static/jwRetires.jpeg" alt="Jenni at retirement celebration" className="jwImage"/>
                    <p>Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.</p>
                </section>
                <div className="articleList">
                    <section className="archiveTitle">
                        <h3>Archive</h3>
                        <div className="marginBottom">
                        <Link href={'/articles'} as={'/articles'} passHref >
                                <a className="linkToAllArticles" href="#">Go to all articles</a>
                        </Link>
                        </div>
                    </section>
                    <section className="preview">
                        {props.articlesIntro.map((article, key)=>{
                            return (
                                <div className="previewDiv" key={key}>
                                    <Link href={`/posts/?uid=${article.uid}`} as={`/posts/${article.uid}`} passHref >
                                        <a className="linkToArticle" href="#">
                                            {article.data.image1.url && <img className="linkImage" src={article.data.image1.url} />}
                                            {!article.data.image1.url && <img className="linkImage" src="../static/image4.jpeg" />  }
                                            <h3>{article.data.articletitle[0].text}</h3>
                                        </a>
                                    </Link>
                                </div>
                            )
                        })}
                    </section>
                </div>
                </Layout>
                <style jsx global >{`
                    .index {
                        // width:98.92787127776vw;
                    }
                    .mainImage {
                        width:100%;
                    }
                    .hero {
                        height:100vh;
                        max-height:400px;
                        width: 100%;
                        background: url("../static/nature-plant-leaf-leaves-6583.jpg") no-repeat center center; 
                        -webkit-background-size: cover;
                        -moz-background-size: cover;
                        -o-background-size: cover;
                        background-size: cover;
                        background-position: absolute;
                        border:solid 1px rgba(0, 0, 0, 0);
                    }
                    .hero h1 {
                        font-family:var(--mainFont);
                        font-size:var(--bigFont);
                        padding: 1% 5% 0% 10%;
                        // border:solid red 1px;
                    }
                    .hero h2 {
                        font-family:var(--mainFont);
                        font-size:var(--midSizeFont);
                        padding: 0.5% 5% 0% 10%;
                        // border:solid red 1px;
                    }
                    .intro {
                        padding:0 15% 0 15%;
                    }
                    .intro h2 {
                        font-family:var(--mainFont);
                        font-size:var(--smallMidFont);
                    }
                    .jwImage {
                        display: block;
                        margin-left: auto;
                        margin-right: auto;
                        // width: 40%;
                        border-radius:50%;
                    }
                    .intro p {
                        font-family:var(--mainFont);
                        font-size:var(--smallFont);
                        color:var(--darkGrey);
                        font-weight:800;
                    }
                    .preview {
                        padding:0 15% 20px 15%;
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-gap:4%;                       
                    }
                    .archiveTitle {
                        padding:0 15% 0px 15%;
                        text-align:right;
                    }
                    .archiveTitle h3 {
                        font-family:var(--mainFont);
                        font-size:var(--midSizeFont);
                    }
                    .articleList section h3 {
                        padding:0 15% 0px 15%;
                        text-align:center;
                    }
                    .previewDiv {
                        align-self: start;
                        box-shadow:0.2px 0.2px 0.2px 0.2px;
                        grid-auto-rows: minmax(25px, 500px);
                        border-radius:1px;
                        text-align:center;
                        min-height:280px;
                        
                    }
                    .previewDiv a {
                        font-family:var(--thickFont);
                        font-size:var(--smallFont);
                        color:var(--blue);
                        display:inline;
                        max-width:30%;
                    }
                    .previewDiv a h3 {
                        font-size:var(--smallFont);
                    }
                    .previewDiv:hover{
                        box-shadow:1px 1px 2px 1px;
                    }
                    .linkImage {
                        padding-top:10px;
                        width:300px;
                        max-width:100%;
                        max-height:180px;

                    }
                    .linkToAllArticles {
                        box-shadow:1px 1px 2px 1px;
                        border-radius:1px;
                        text-decoration:none;
                        margin:0 5% 0 0%;
                        padding:4px;
                    }
                    .linkToAllArticles:hover {
                        box-shadow:1px 3px 4px 1px;
                    }
                    .linkToAllArticles:active {
                        color:white;
                        box-shadow:1px 0px 2px 1px;
                    }
                    .marginBottom {
                        margin-bottom:15px;
                    }
                `}</style>
            </div>
    );
}

Index.getInitialProps = async function() {
    const res = await Prismic.getApi(apiEndpoint,{ accessToken: accessToken })
    .then((api) => {
        return api.query([ Prismic.Predicates.at('document.type', 'article')],
            { orderings : '[my.article.last_publication_date, my.article.first_publication_date,]' }); 
        })
        return {
            articlesIntro:res.results
        }    
}

export default Index;