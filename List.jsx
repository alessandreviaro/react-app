import Item from '../Item/Item';

function List({ items = [], onItemClick }) {
    const handleItemClick = (item) => {
        onItemClick && onItemClick(item);
    } 

    const map = items.map((item) => {
        return (
            <Item key={item.id} item={item} onItemClick={handleItemClick} />
        )
    });

    return (
        <div>
            <h2>Lista de Assitentes Virtuais</h2>
            <ul>
                {map}
            </ul>
        </div>
    );
}

export default List;
