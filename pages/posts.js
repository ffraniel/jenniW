var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
import fetch from 'isomorphic-unfetch';
import ArticleBody from '../components/ArticleBody.js';
import Layout from '../components/Layout';
import React from 'react';

class Posts extends React.Component {
    static async getInitialProps ({ query: { uid } }) {
        const data = await (Prismic.getApi(apiEndpoint))
            .then((api)=>{
                return api.query(`[at(my.article.uid, "${uid}")]`); 
            })
            .then((res)=>{
                return res
            })
            return { posts:data.results[0].data };
            // console.log(posts)
    }
      
    render () {
        return (
            <div>
                <Layout> 
                    <div className="blog">
                        <h1>hello: {this.props.postID}</h1>
                        <h1>this one {this.props.posts.articletitle[0].text}</h1>
                        <p> then {this.props.posts.mainarticle[0].text}</p>

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
                    `}

                </style>
            </div>
        )
    }
}

export default Posts;