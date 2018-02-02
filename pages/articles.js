var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
import fetch from 'isomorphic-unfetch';
import Articles from '../components/Articles.js';
import Header from '../components/Header'


const Index = (props) => (
        
            <div>
                <Header />
                <h1>hello there</h1>
                <Articles articles={props.articles} />
            </div>
);

Index.getInitialProps = async function() {
    const res = await Prismic.getApi(apiEndpoint)
    .then((api) => {
        return api.query(""); // An empty query will return all the documents
    })
    return {
        articles:res
    }    
}

export default Index;