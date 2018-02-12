var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
var accessToken = "MC5Xb0Y0QVNnQUFEYWtveTRM.77-977-9ZR7vv73vv73vv73vv70KNg3vv73vv73vv71NIu-_vTZEN--_ve-_vUHvv70tNUTvv73vv73vv73vv73vv70"; 
import fetch from 'isomorphic-unfetch';
import ArticleBody from '../components/ArticleBody.js';
import Layout from '../components/Layout';


const Articles = (props) => (
            <div>
                <Layout>
                    <ArticleBody articles={props.articles} />
                </Layout>
                <style jsx>{`
                `}</style>
            </div>
);

Articles.getInitialProps = async function() {
    const res = await Prismic.getApi(apiEndpoint, { accessToken: accessToken })
    .then((api) => {
        return api.query(
            "", { 'orderings' : '[my.article.last_publication_date]' }
          ); 
    })
    return {
        articles:res.results.reverse()
    }    
}

export default Articles;