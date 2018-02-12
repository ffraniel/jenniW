var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
var accessToken = "MC5Xb0Y0QVNnQUFEYWtveTRM.77-977-9ZR7vv73vv73vv73vv70KNg3vv73vv73vv71NIu-_vTZEN--_ve-_vUHvv70tNUTvv73vv73vv73vv73vv70";

import fetch from 'isomorphic-unfetch';
import Link from 'next/link'
import Layout from '../components/Layout';

const Index = (props) => { 

    return (
            <div className="index" >
                <Layout>
                <div className="hero">
                    <h1>Jenni Whitehead</h1>
                    <h2>Education/Social Work/Policy</h2>
                </div>
                <section className="intro">
                    <h2>All this content is gathered over x years...</h2>
                    <img src="/static/jwRetires.jpeg" alt="Jenni at retirement celebration" className="jwImage"/>
                    <p>Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.</p>
                </section>
                <section className="preview">

                    {props.articlesIntro.map((article, key)=>{
                        return (
                                        <div className="previewDiv" key={key}>
                                            <Link href={`/posts/?uid=${article.uid}`} as={`/posts/${article.uid}`} passHref >
                                                <a className="linkToArticle" href="#">
                                                    <img className="linkImage" src={article.data.image1.url} />
                                                    <h3>{article.data.articletitle[0].text}</h3>
                                                </a>
                                            </Link>
                                        </div>
                        )
                    })}

                </section>
                </Layout>
                <style jsx global >{`
                    .index {
                        
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
                        max-width:80%;
                    }

                `}</style>
            </div>
    );
}


Index.getInitialProps = async function() {
    const res = await Prismic.getApi(apiEndpoint,{ accessToken: accessToken })
    .then((api) => {
        return api.query(""); // An empty query will return all the documents
    })
    return {
        articlesIntro:res.results.reverse().slice(0,3),
    }    
}


export default Index;