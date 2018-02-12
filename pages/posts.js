var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
var accessToken = "MC5Xb0Y0QVNnQUFEYWtveTRM.77-977-9ZR7vv73vv73vv73vv70KNg3vv73vv73vv71NIu-_vTZEN--_ve-_vUHvv70tNUTvv73vv73vv73vv73vv70";
import fetch from 'isomorphic-unfetch';
import ArticleBody from '../components/ArticleBody.js';
import Layout from '../components/Layout';
import React from 'react';
import ArticleText from '../components/ArticleText.js';
import Reference from '../components/Reference.js';
var accessToken = "MC5Xb0Y0QVNnQUFEYWtveTRM.77-977-9ZR7vv73vv73vv73vv70KNg3vv73vv73vv71NIu-_vTZEN--_ve-_vUHvv70tNUTvv73vv73vv73vv73vv70";

class Posts extends React.Component {
    static async getInitialProps ({ query: { uid } }) {
        const data = await (Prismic.getApi(apiEndpoint,{ accessToken: accessToken }))
            .then((api)=>{
                return api.query(`[at(my.article.uid, "${uid}")]`); 
            })
            .then((res)=>{
                return res
            })
            return { posts:data.results[0].data };
    }
      
    render () {
        return (
            <div>
                <Layout>
                    <div className="articlePostComp">
                        <article className="singleArticle">
                            <h1>{this.props.posts.articletitle[0].text}</h1>
                            {this.props.posts.initialpublicationdate[0] && <h5 className="articleDate" >{this.props.posts.initialpublicationdate[0].text}</h5> }
                            {this.props.posts.initialpublicationplace[0] && <h5>{this.props.posts.initialpublicationplace[0].text}</h5> }
                            {this.props.posts.image1.url && <div className="postImageDiv"> <img src={this.props.posts.image1.url} className="postImage" /> </div> }
                            <ArticleText articleText={this.props.posts.mainarticle} />
                            {this.props.posts.references && <Reference references={this.props.posts.references} /> }
                            <button><a id="backA" href="/">Home</a></button>
                        </article>
                        
                    </div> 
                </Layout>
                <style jsx>                        
                    {`
                    .blog {
                        padding:0 15% 0 15%;
                    }
                    .blog h1 {
                        font-family:var(--mainFont);
                        font-size:var(--midSizeFont);
                    }
                    .blog p {
                        font-family:var(--thickFont);
                        font-size:var(--smallFont);
                    }
                    // .postImageDiv {
                    //     width:100%;
                    // }
                    .postImage {
                        display: block;
                        margin-left: auto;
                        margin-right: auto;
                        width: 80%;
                        max-width:80%;
                    }
                    .articlePostComp {
                        padding-left:15%;
                        padding-right:15%;

                    }
                    .singleArticle {
                        font-family:var(--thickFont);
                        border: solid 3px var(--midGrey);
                        background-color:var(--midGrey);
                        padding-left:10%;
                        padding-right:10%
                    }
                    .articleDate {
                        padding-left:20px;
                    }

                    #backA {
                        display:block;
                        width:50px;
                        height:15px;
                        text-decoration:none;
                    }
                    `}

                </style>
            </div>
        )
    }
}

export default Posts;