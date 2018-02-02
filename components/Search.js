var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
import fetch from 'isomorphic-unfetch';


const Search = (props) => (
            <div>
                <h4>Search</h4>
                <form>
                    <input type="text" />
                    <input type="submit" />
                </form>
            </div>
);

// Search.getInitialProps = async function() {
//     const res = await Prismic.getApi(apiEndpoint)
//     .then((api) => {
//         return api.query(""); // An empty query will return all the documents
//     })
//     return {
//         articles:res
//     }    
// }

//can i filter props when retrieved?

export default Search;