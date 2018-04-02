var Prismic = require("prismic-javascript");
import config from "../config";
const apiEndpoint = config.apiEndpoint;
const accessToken = config.accessToken;
import fetch from "isomorphic-unfetch";
import ArticleBody from "../components/ArticleBody.js";
import Layout from "../components/Layout";
import Head from "next/head";

const Articles = props => (
  <div>
    <Head>
      <title>Articles - Jenni Whitehead </title>
    </Head>
    <Layout>
      {props.articles && <ArticleBody articles={props.articles} />}
      {!props.articles && (
        <h1>No articles found... something must be broken...</h1>
      )}
    </Layout>
    <style jsx>{`

    `}</style>
  </div>
);

Articles.getInitialProps = async function() {
  const res = await Prismic.getApi(apiEndpoint, {
    accessToken: accessToken
  }).then(api => {
    return api.query([Prismic.Predicates.at("document.type", "article")], {
      orderings:
        "[my.article.last_publication_date, my.article.first_publication_date,]"
    });
  });
  return {
    articles: res.results
  };
};

export default Articles;
