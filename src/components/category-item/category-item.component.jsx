import { useNavigate } from 'react-router-dom';
import './category-item.style.scss'
import { useEffect } from 'react';



const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();
  const routeNav = () => {
        navigate(route);
  }
  return (
    <div className="category-container" onClick={routeNav} >
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}>
      </div>
      <div className="category-body-container"  >
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryItem