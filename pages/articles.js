var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
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
    const res = await Prismic.getApi(apiEndpoint)
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