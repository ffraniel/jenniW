const ArticleText = (props) => (
    <div>
        {props.articleText.map((words, key)=>{
            if(words.type === "list-item") {
                return (
                    
                    <p className="list" key={key}><br /><span style={{paddingLeft: 45}}></span> ° {words.text}</p>
                )
            }
            if(words.type === "heading3") {
                return (
                    <h3 className="textHeading" key={key}>{words.text}</h3>
                )
            }
            if(words.type === "heading2") {
                return (
                    <h2 className="textHeading" key={key}>{words.text}</h2>
                )
            }
            if(words.type === "paragraph" && key === 0) {
                return (
                    <p className="text" key={key} style={{fontStyle: "italic", fontFamily:"var(--mainFont)", fontWeight:"800"}}>{words.text}</p>
                )
            }
            if(words.type === "paragraph") {
                return (
                    <p className="text" key={key}>{words.text}</p>
                )
            }
            else {
                return (
                    <p className="text" key={key}>{words.text}</p>
                )
            }
        })}
    </div>
)

export default ArticleText;