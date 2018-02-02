const ArticleText = (props) => (
    <div>
        {props.articleText.map((words)=>{
            return (
                <p>{words.text}</p>
            )
        })}
    </div>
)


export default ArticleText;