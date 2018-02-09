var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
import fetch from 'isomorphic-unfetch';
import ArticleBody from '../components/ArticleBody.js';
import Layout from '../components/Layout';
import React from 'react';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            individualArticle:'',
            loading: true
        }
        this.fetchOneArticle = this.fetchOneArticle.bind(this); 
    }
    componentDidMount () {
        this.fetchOneArticle();
    }
    render () {
        return (
            <div>
                <Layout> 
                    <div className="blog">
                        <h1>hello</h1>
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
    fetchOneArticle () {
        return fetch (Prismic.getApi(apiEndpoint))
        .then((api) => {
            return api.query(`[at(my.article.uid, "${props.router.query.UID}}")]`); 
        })
        .then((res)=>{
            this.setState({
                individualArticle: res.results,
                loading:false
            })
        })
        .catch(console.log)
    }
}

// const Blog =  ({ url: { query: { UID } } }) => (
//     <div>
//     <Header />
//     <p>Welcome to About! { UID }</p>
//     </div>
//   )


// Blog.fetchOneArticle = async function() {
//     const res = await Prismic.getApi(apiEndpoint)
//     .then((api) => {
//         return api.query(`[at(my.article.uid, "${props}}")]`); 
//     })
//     .then((res)=>{
//         this.setState({
//             individualArticle: res.results,
//             loading:false
//         })
//     })
//     .catch(console.log)
// }

// Blog.getInitialProps = async function () {
//     const text = await this.props.articles.filter((article) => {
//             return article.data.articletitle[0].text === this.state.val
//     })
//     return {
//         individualArticle: text
//     }
// }

export default Blog;