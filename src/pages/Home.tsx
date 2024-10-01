import React from 'react';
import ItemList from '../components/ItemList'
import img from '../assets/vector.png'
const Content = [{
  'title':'today',
  'data': [{
    'img':`${img}`,
    'shop':'a',
    'price':1234
  },{
    'img':`${img}`,
    'shop':'b',
    'price':1234
  },{
    'img':`${img}`,
    'shop':'c',
    'price':1234
  },{
    'img':`${img}`,
    'shop':'d',
    'price':1234
  },{
    'img':`${img}`,
    'shop':'e',
    'price':1234
  }]
},{
  'title':'next',
  'data':['4','5','6']
}]
const HomePage:React.FC = () => (
  <>
    Home
    {Content.map((item: any,index)=>(
      <ItemList title={item['title']} items={item['data']} key={index}/>
    ))}
  </>
)
export default HomePage;