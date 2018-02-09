const Reference = (props) => (
    <div>
        {props.references.map((words, key)=>{
            return (
                <p className="references" key={key} >{words.text}</p>
            )
        })}
        <style jsx>{`
            .references {
                color:black;
                font-style:italic;
                font-size:var(--referenceSize)
            }
        `}</style>
    </div>
)

export default Reference;