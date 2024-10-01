import React from 'react';
import ItemList from '../components/ItemList'
const Content = [{
  'title':'today',
  'data': ['1','2','3','4','5']
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