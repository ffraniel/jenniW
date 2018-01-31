	
var Prismic = require('prismic-javascript');
var express = require('express');
var app = express();
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
 
function getAll (req, res) {
    Prismic.getApi(apiEndpoint)
        .then((api) => {
            return api.query(""); // An empty query will return all the documents
        })
        .then((response) => {
            res.send(response.results)
            })
        .catch(console.log) 
}

function getSpecific (req, res){
    Prismic.getApi(apiEndpoint)
        .then((api)=> {
            return api.query(`[at(my.article.uid, "${req.params.UID}")]`)
        })
        .then((response) => {
            res.send(response.results)
            })
        .catch(console.log) 
}

// routes
app.get('/', getAll);
app.get('/:UID', getSpecific)


app.listen(3000);