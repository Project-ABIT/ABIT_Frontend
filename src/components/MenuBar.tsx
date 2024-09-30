import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/Menubar.css'
type Props = {
  name : string;
  link : string;
}
const MenuItem: React.FC<Props> = ({name, link}) => {
  const localtion = useLocation();
  const currentPath = localtion.pathname;
  let selected = '';
  if(currentPath === `/${link}`) selected = 'select';
  return(
    <li className={`item ${selected}`}><Link to={`/${link}`}><span>{name}</span></Link></li>
  );
}
const MenuBar: React.FC = () => (
  <nav className="menu-bar">
    <ul className="menu-item">
      <MenuItem name='홈' link='' />
      <MenuItem name='랭킹' link='Rank' />
      <MenuItem name='코디' link='Coordi' />
      <MenuItem name='브랜드' link='Brand' />
      <MenuItem name='이벤트' link='Event' />
      <MenuItem name='스포츠' link='Sport' />
      <MenuItem name='라이프' link='Life' />
      <MenuItem name='디지털' link='Digital' />
    </ul>
  </nav>
);
export default MenuBar;