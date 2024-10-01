import React from 'react';
import '../style/Itemlist.css'
type ItemProps = {
  img : string;
  shop : string,
  price : number
}
type ItemListProps = {
  title: string,
  items : any
}
const Item: React.FC<ItemProps> = ({shop,price,img})=>(
  <div className='item-node'>
    <img src={img} className='img'/>
    <h3 className='shop'>{shop}</h3>
    <h3 className='price'>{price}</h3>
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
            <Item shop={item.shop} price={item.price} img={item.img} key={index} />
          ))
        }
        </div>
      </section>
    </>
  )
}
export default ItemList;