var Prismic = require('prismic-javascript');
import config from '../config';
const apiEndpoint = config.apiEndpoint;
const accessToken = config.accessToken;
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import React from 'react';
import ActiveSearch from '../components/ActiveSearch.js';
import Link from 'next/link';
import Head from 'next/head';
import Loading from '../components/Loading.js';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            searchValue:this.props.searchValue,
            searchResults:this.props.posts,
            allArticles:'',
            loading:true
        }
        this.getAll = this.getAll.bind(this);
    }
    componentDidMount () {
        this.getAll();
    }

    static async getInitialProps ({ query: { searchValue } }) {
        if (searchValue === "") {
            return {
                posts:{
                    noInput:true
                },
                searchValue:""
            }
        }
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

    render () {
        return (
            <div>
                <Head>
                    <title>Searched for '{this.props.searchValue}'</title>
                </Head>
                <Layout>
                    <div className="articleBriefList">
                        <ActiveSearch allArticles={this.state.allArticles} />
                        {(this.props.searchValue) && <h1>Searched for "{this.props.searchValue}"</h1>}
                        {(this.state.searchResults.length === 0 && this.state.loading === true) && <Loading />}
                        {(this.state.searchResults.length === 0 && this.state.loading === false && this.props.searchValue) 
                            && <h1>Sorry, we were not able to find any results.</h1>}
                        {(this.state.searchResults.length === 0 && this.state.loading === false && !this.props.searchValue) 
                            && <h1>Search the Archives</h1>}
                        <ul>
                        {this.state.searchResults && this.state.searchResults.map((article, key)=>{
                            return (
                                <li key={key}>                            
                                    <Link href={`/posts/?uid=${article.uid}`} as={`/posts/${article.uid}`} passHref>
                                        <a className="linkToArticle" href="#">
                                            <h3>{article.data.articletitle[0].text}</h3>
                                            <p>{article.data.mainarticle[0].text}...</p>
                                        </a>
                                    </Link>
                                </li>
                            )
                        })}
                        </ul>                     
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
                    a {
                        text-decoration:none
                    }  
                    
                    `}

                </style>
            </div>
        )
    }
}

export default Search;