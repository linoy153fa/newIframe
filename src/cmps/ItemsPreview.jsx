
export function ItemsPreview({item}) {
    return (
        <div className="toy-card">
            <img className="img-mock" src=""/>
            <h2 className="item">{item.title}</h2>
            <h2 className="item">{item.price}</h2>
            <h2 className="item">{item.description}</h2>
        </div>
    )
}
