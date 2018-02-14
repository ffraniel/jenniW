var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
var accessToken = "MC5Xb0Y0QVNnQUFEYWtveTRM.77-977-9ZR7vv73vv73vv73vv70KNg3vv73vv73vv71NIu-_vTZEN--_ve-_vUHvv70tNUTvv73vv73vv73vv73vv70";
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import React from 'react';
import ActiveSearch from '../components/ActiveSearch.js';
import Link from 'next/link'
var accessToken = "MC5Xb0Y0QVNnQUFEYWtveTRM.77-977-9ZR7vv73vv73vv73vv70KNg3vv73vv73vv71NIu-_vTZEN--_ve-_vUHvv70tNUTvv73vv73vv73vv73vv70";

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
                        {this.state.searchResults.map((article, key)=>{
                            return (
                                <Link key={key} href={`/posts/?uid=${article.uid}`} as={`/posts/${article.uid}`} passHref>
                                    <a className="linkToArticle" href="#">
                                        <h1>{article.data.articletitle[0].text}</h1>
                                    </a>
                                </Link>
                            )
                        })} 
                        <ActiveSearch allArticles={this.state.allArticles} activeSearchChanged={this.activeSearchChanged}/>                       
                    </div> 
                </Layout>
                <style jsx>                        
                    {`
                    .articleBriefList {
                        padding:0 15% 0 15%;
                    }
                    
                    `}

                </style>
            </div>
        )
    }
}

export default Search;