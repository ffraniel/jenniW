var Prismic = require('prismic-javascript');
import config from '../config';
const apiEndpoint = config.apiEndpoint;
const accessToken = config.accessToken;
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import React from 'react';
import ActiveSearch from '../components/ActiveSearch.js';
import Link from 'next/link'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            searchValue:this.props.searchValue,
            searchResults:this.props.posts,
            allArticles:'',
            loading:true,
            activeLive:false
        }
        this.getAll = this.getAll.bind(this);
    }
    componentDidMount () {
        this.getAll();
    }

    static async getInitialProps ({ query: { searchValue } }) {
        const data = await (Prismic.getApi(apiEndpoint,{ accessToken: accessToken }))
            .then((api)=>{
                return api.query([
                    Prismic.Predicates.at('document.type', 'article'),
                    Prismic.Predicates.fulltext('document', `${searchValue}`)
                ]); 
            })
            .then((res)=>{
                return res

            })
            return { 
                posts:data.results,
                searchValue:searchValue
            }
    }
    
    getAll () {
        Prismic.getApi(apiEndpoint,{ accessToken: accessToken })
            .then((api)=>{
            return api.query(""); 
                })
                .then((res)=>{
                    this.setState({
                        allArticles:res.results,
                        loading:false
                    })
    
                })
                .catch(console.log)
        }
    activeSearchChanged () {
        if (this.state.activeLive === true) {
            this.setState({
                activeLive:true,
                searchResults:''
            })
        }
    }


    render () {
        return (
            <div>
                <Layout>
                    <div className="articleBriefList">
                        <h3>Search results for "{this.props.searchValue}": </h3>
                        {(this.state.searchResults.length === 0) && <div className="noResults"><h2>Sorry, we could not find "{this.state.searchValue}".</h2></div>}
                        <ul>
                        {this.state.searchResults.map((article, key)=>{
                            return (
                                <li>
                                    <Link key={key} href={`/posts/?uid=${article.uid}`} as={`/posts/${article.uid}`} passHref>
                                        <a className="linkToArticle" href="#">
                                            <h3>{article.data.articletitle[0].text}</h3>
                                        </a>
                                    </Link>
                                </li>
                            )
                        })}
                        </ul> 
                        <ActiveSearch allArticles={this.state.allArticles} activeSearchChanged={this.activeSearchChanged}/>                       
                    </div> 
                </Layout>
                <style jsx>                        
                    {`
                    .articleBriefList {
                        padding:0 15% 0 15%;
                    }
                    ul {
                        list-style: none;
                    }
                    
                    `}

                </style>
            </div>
        )
    }
}

export default Search;