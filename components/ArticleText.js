const ArticleText = (props) => (
    <div>
        {props.articleText.map((words, key)=>{
            return (
                <p className="text" key={key}>{words.text}</p>
            )
        })}
    </div>
)

export default ArticleText;