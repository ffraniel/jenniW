//show all dates available
// show search box to do text search in prismic.io
// add search results list page - just heading and first paragraph

var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
import fetch from 'isomorphic-unfetch';
import Link from 'next/link'
import React from 'react';
import LinksToArticles from './LinksToArticles';
import Loading from './Loading';

class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state={
            loading:true,
            list:''
        }
        this.getDates = this.getDates.bind(this);
    }

    componentDidMount () {
        this.getDates();
    }

    render() {
        return (
            <div>
                <form className="textSearch">
                    <input type="text" />
                    <input type="submit" />
                </form>   
                {this.state.loading && <Loading />}
                {!this.state.loading && <LinksToArticles list={this.state.list} /> }
                <style jsx >{`
                    .textSearch { }
                    .checkBoxes { }
                    `}
                </style>   
            </div>
        )
    }

    getDates() {
        Prismic.api(apiEndpoint).then(api => {
            return api.query("");
        })
        .then((res)=>{
            var x = res.results.sort((a, b)=>{
                return b.uid - a.uid;
            })         
            this.setState({
                list:x,
                loading:false
            })
        })
        .catch(console.log)
    }
    
}
export default Search;