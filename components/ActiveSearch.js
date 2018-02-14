var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
var accessToken = "MC5Xb0Y0QVNnQUFEYWtveTRM.77-977-9ZR7vv73vv73vv73vv70KNg3vv73vv73vv71NIu-_vTZEN--_ve-_vUHvv70tNUTvv73vv73vv73vv73vv70";
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import React from 'react';
import Link from 'next/link'
var accessToken = "MC5Xb0Y0QVNnQUFEYWtveTRM.77-977-9ZR7vv73vv73vv73vv70KNg3vv73vv73vv71NIu-_vTZEN--_ve-_vUHvv70tNUTvv73vv73vv73vv73vv70";

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
        this.props.activeSearchChanged();    
        this.setState({
            reactiveSearchResults:filtered
        })
    }

    handleSubmit () {
        if (reactiveSearchResults.length === 0) {
            console.log("there are no results")
        }
        this.setState({
            reactiveSearchValue:''

        })
        //reload page here
    }

    render () {
        return (
            <div>
                <form className="reactiveSearch">
                    <h3>Search Again</h3>
                    <input type="text" value={this.state.reactiveSearchValue} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
                <ul>
                    {(this.state.reactiveSearchResults === "") && <div></div>}
                    {(this.state.reactiveSearchResults.length >= 1 && this.state.reactiveSearchResults < this.props.allArticles) && this.state.reactiveSearchResults.map((article, key)=>{
                        return(
                            <li>
                                <Link key={key} href={`/posts/?uid=${article.uid}`} as={`/posts/${article.uid}`} passHre>
                                    <a href="#">
                                        <h3>{article.data.articletitle[0].text}</h3>
                                    </a>
                                </Link>
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