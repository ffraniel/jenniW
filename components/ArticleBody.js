import ArticleText from './ArticleText.js';
import Reference from './Reference.js';

const ArticleBody = (props) => (
            <div  className="articleBodyComp">
                {props.articles.map((article, articleKey)=>{
                    if(article.data.initialpublicationdate[0]) { 
                    return (
                        <article key={articleKey} className="singleArticle" >
                            <h1>{article.data.articletitle[0].text}</h1>
                            <h5 className="articleDate" >Date: {article.data.initialpublicationdate[0].text}</h5>
                            <h5>Place {article.data.initialpublicationplace[0].text}</h5>
                            <img src={article.data.image1.url} /> 
                            <ArticleText articleText={article.data.mainarticle} />
                            <Reference references={article.data.references} />
                        </article>
                        )
                    }
                    // else if (!article.data.initialpublicationdate[0]){
                    //     <article key={articleKey}>
                    //         <h1>{article.data.articletitle[0].text}</h1>
                    //         <img src={article.data.image1.url} /> 
                    //         <ArticleText articleText={article.data.mainarticle} />
                    //         <Reference references={article.data.references} />
                    //     </article>
                    // }
                })}
                    <style jsx>{`
                    .singleArticle {
                        font-family:var(--thickFont);
                        border: solid 3px var(--midGrey);
                        background-color:var(--midGrey);
                    }
                    .articleBodyComp {
                        padding-left:15%;
                        padding-right:15%;

                    }
                    .singleArticle  {
                            padding-left:10%;
                            padding-right:10%;
                        }
                    .articleDate {
                        padding-left:20px;
                    }

                    `}
                    </style>
            </div>
        )


export default ArticleBody;