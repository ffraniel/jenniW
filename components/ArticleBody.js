import ArticleText from './ArticleText.js';
import Reference from './Reference.js';

const ArticleBody = (props) => (
            <div>
                {props.articles.map((article, articleKey)=>{
                    if(article.data.initialpublicationdate[0]) { 
                    return (
                        <article key={articleKey}>
                            <h1>{article.data.articletitle[0].text}</h1>
                            <h5>Date: {article.data.initialpublicationdate[0].text}</h5>
                            <h5>Place {article.data.initialpublicationplace[0].text}</h5>
                            {/* <img src=`${article.data.image1.url}` /> */}
                            <img src={article.data.image1.url} /> 
                            <ArticleText articleText={article.data.mainarticle} />
                            <Reference references={article.data.references} />
                        </article>
                        )
                    }
                    else {
                        <article key={articleKey}>
                        <h1>{article.data.articletitle[0].text}</h1>
                        {/* <img src=`${article.data.image1.url}` /> */}
                        <img src={article.data.image1.url} /> 
                        <ArticleText articleText={article.data.mainarticle} />
                        <Reference references={article.data.references} />
                    </article>
                    }
                })}
            </div>
        )


export default ArticleBody;