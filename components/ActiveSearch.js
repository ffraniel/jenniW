var Prismic = require('prismic-javascript');
import config from '../config';
const apiEndpoint = config.apiEndpoint;
const accessToken = config.accessToken;
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import React from 'react';
import Link from 'next/link'

class ActiveSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            reactiveSearchValue:'',
            reactiveSearchResults:'',
            allArticles:this.props.allArticles
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (e) {
        e.preventDefault();
        if (this.state.allArticles === "") {
            this.setState({
                allArticles:this.props.allArticles
            })
        }
        this.setState({
            reactiveSearchValue:e.target.value
        })
        const filtered = this.state.allArticles.filter((article)=>{
            const input = new RegExp(e.target.value,'ig');
            return input.test(article.data.searchtext);
            })
        // this.props.activeSearchChanged();    
        this.setState({
            reactiveSearchResults:filtered
        })
    }

    handleSubmit () {
        this.setState({
            reactiveSearchValue:''
        })
        // no prever default so page reloads
    }

    render () {
        return (
            <div>
                <form className="reactiveSearch">
                    <h3>Search</h3>
                    <input type="text" value={this.state.reactiveSearchValue} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
                <ul>
                    {(this.state.reactiveSearchResults === "") && <div></div>}
                    {(this.state.reactiveSearchResults.length >= 1 && this.state.reactiveSearchResults < this.props.allArticles) && this.state.reactiveSearchResults.map((article, key)=>{
                        return(
                            <li key={key}>
                                <Link href={`/posts/?uid=${article.uid}`} as={`/posts/${article.uid}`} passHre>
                                    <a href="#">
                                        <h3>{article.data.articletitle[0].text}</h3>
                                    </a>
                                </Link>
                                <p>{article.data.mainarticle[0].text}...</p>
                            </li>
                        )
                    })}
                    
                </ul>
                <style jsx>                        
                    {`
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

export default ActiveSearch;