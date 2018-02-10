var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
import fetch from 'isomorphic-unfetch';
import ArticleBody from '../components/ArticleBody.js';
import Layout from '../components/Layout';
import React from 'react';



class Blog extends React.Component {
    static getInitialProps ({ query: { uid } }) {
        return { postID: uid }
      }

    render () {
        return (
            <div>
                <Layout> 
                    <div className="blog">
                        <h1>hello: {this.props.postID}</h1>
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
    // fetchOneArticle () {
    //     return fetch (Prismic.getApi(apiEndpoint))
    //     .then((api) => {
    //         return api.query(`[at(my.article.uid, "${props.router.query.UID}}")]`); 
    //     })
    //     .then((res)=>{
    //         this.setState({
    //             individualArticle: res.results,
    //             loading:false
    //         })
    //     })
    //     .catch(console.log)
    // }
}



export default Blog;