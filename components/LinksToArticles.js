import Link from 'next/link';

const LinksToArticles = (props) => (
    <div>
        <div className="linksByTag">
            {props.list.map((listItem, key)=>{
                    return (
                        <div key={key}>
                            {listItem.tags.map((tag, key)=>{
                                <ul key={key}><Link><a>{tag}</a></Link></ul>
                            })}
                        </div>
                    )
                }
            )}
        </div>
    </div>


)

export default LinksToArticles;