//show all dates available
// show search box to do text search in prismic.io
// add search results list page - just heading and first paragraph

var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
var accessToken = "MC5Xb0Y0QVNnQUFEYWtveTRM.77-977-9ZR7vv73vv73vv73vv70KNg3vv73vv73vv71NIu-_vTZEN--_ve-_vUHvv70tNUTvv73vv73vv73vv73vv70"; 
import fetch from 'isomorphic-unfetch';
import Link from 'next/link'
import React from 'react';
import LinksToArticles from './LinksToArticles';
import Loading from './Loading';

class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state={
            // loading:true,
            // list:''
        }
        // this.getDates = this.getDates.bind(this);
    }

    // componentDidMount () {
    //     this.getDates();
    // }

    render() {
        return (
            <div className="searchComp">
                <form className="textSearch">
                    <input type="text" />
                    <input type="submit" value="Search" />
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

    // getDates() {
    //     Prismic.api(apiEndpoint, { accesstoken: accessToken })
    //         .then(api => {
    //         return api.query("");
    //     })
    //     .then((res)=>{
    //         var x = res.results.sort((a, b)=>{
    //             return b.uid - a.uid;
    //         })         
    //         this.setState({
    //             list:x,
    //             loading:false
    //         })
    //     })
    //     .catch(console.log)
    // }
    
}
export default Search;