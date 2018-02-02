import ArticleText from './ArticleText.js';
const Articles = (props) => (
            <div>
                {props.articles.results.map((article, articleKey)=>{
                    return (
                        <article key={articleKey}>
                            <h1>{article.data.articletitle[0].text}</h1>
                            {/* <img src=`${article.data.image1.url}` /> */}
                            <img src={article.data.image1.url} /> 
                            <ArticleText articleText={article.data.mainarticle}/>
                        </article>
                    )
                })}
            </div>
        )

export default Articles;