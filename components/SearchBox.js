var Prismic = require('prismic-javascript');
import config from '../config';
const apiEndpoint = config.apiEndpoint;
const accessToken = config.accessToken;
import fetch from 'isomorphic-unfetch';
import Link from 'next/link'
import React from 'react';
import LinksToArticles from './LinksToArticles';
import Loading from './Loading';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            searchVal:'',
            change:null
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSearch(e) {
        e.preventDefault();
    }
    handleChange(e) {
        this.setState({
            searchVal:e.target.value,
            change:true
        });
        
    }
    render() {
        return (
            <div className="searchComp">
                <form className="textSearch" onSubmit={this.handleSearch}>
                    <input type="text" value={this.state.searchVal} onChange={this.handleChange}/>
                    <Link prefetch href={`/search/?searchVal=${this.state.searchVal}`} as={`/search/${this.state.searchVal}`} passHref >
                        <a href="#" >
                            <button type="submit" value="search">Search</button>
                        </a>
                    </Link>


                </form>   
                {this.state.loading && <Loading />}
                {!this.state.loading && <LinksToArticles list={this.state.list} /> }
                <style jsx >{`
                    .textSearch { }
                    .checkBoxes { }
                    .searchComp {
                        padding: 0px 0 6px 6px;
                      }
                    `}
                </style>   
            </div>
        )
    }    
}
export default SearchBox;