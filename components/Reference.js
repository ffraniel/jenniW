const Reference = (props) => (
    <div>
        {props.references.map((words, key)=>{
            return (
                <p className="text" key={key} style={{fontStyle: "italic"}}>{words.text}</p>
            )
        })}
    </div>
)

export default Reference;