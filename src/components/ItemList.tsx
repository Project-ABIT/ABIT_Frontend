import React from 'react';
import '../style/Itemlist.css'
type ItemProps = { item : string }
type ItemListProps = {
  title: string,
  items : any
}
const Item: React.FC<ItemProps> = ({item})=>(
  <div className='item-node'>
    {item}
  </div>
)
const ItemList: React.FC<ItemListProps> = ({title, items}) => {
  return (
    <>
      <section className={`item-list ${title}`}>
        <h1 className='title'>{title}</h1>
        <div className='items'>
        {
          items.map((item: any,index:number) => (
            <Item item={item} key={index} />
          ))
        }
        </div>
      </section>
    </>
  )
}
export default ItemList;