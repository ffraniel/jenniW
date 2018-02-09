var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
import fetch from 'isomorphic-unfetch';
import ArticleBody from '../components/ArticleBody.js';
import Layout from '../components/Layout';


const Articles = (props) => (
        
            <div>
                <Layout>
                    <ArticleBody articles={props.articles} className="articleBodyComp" />
                </Layout>
                <style jsx>{`
                    .articleBodyComp {
                        padding-left:50px;
                        padding-right:50px;
                    }
                `}</style>
            </div>
);

Articles.getInitialProps = async function() {
    const res = await Prismic.getApi(apiEndpoint)
    .then((api) => {
        return api.query(
            "", { 'orderings' : '[my.article.last_publication_date]' }
          ); 
        //   [my.article.last_publication_date]
        // An empty query will return all the documents
    })
    return {
        articles:res.results.reverse()
    }    
}

export default Articles;