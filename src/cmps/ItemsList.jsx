import {ItemsPreview} from './ItemsPreview.jsx'

export function ItemsList({ items }) {
    return (
        <div className="toy-list">
            {items.map(item => {
                return <ItemsPreview item={item} />
            })}
        </div>
    )
}