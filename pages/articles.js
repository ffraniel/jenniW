var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
var accessToken = "MC5Xb0Y0QVNnQUFEYWtveTRM.77-977-9ZR7vv73vv73vv73vv70KNg3vv73vv73vv71NIu-_vTZEN--_ve-_vUHvv70tNUTvv73vv73vv73vv73vv70"; 
import fetch from 'isomorphic-unfetch';
import ArticleBody from '../components/ArticleBody.js';
import Layout from '../components/Layout';


const Articles = (props) => (
            <div>
                <Layout>
                    {props.articles && <ArticleBody articles={props.articles} />}
                    {!props.articles && <h1>No articles found... something must be broken...</h1>}
                </Layout>
                <style jsx>{`
                `}</style>
            </div>
);

Articles.getInitialProps = async function() {
    const res = await Prismic.getApi(apiEndpoint, { accessToken: accessToken })
    .then((api) => {
        return api.query(
            [
                Prismic.Predicates.at('document.type', 'article')            ],
                {   orderings : '[my.article.last_publication_date, my.article.first_publication_date,]'         
                }
          ); 
    })
    return {
        articles:res.results
    }    
}

export default Articles;