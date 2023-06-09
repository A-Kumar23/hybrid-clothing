import CategoryItem from "../category-item/category-item.component";
// import Category from "../../helper/categories";
import "./directory.style.scss";

const Directory = ({categories}) => {
  // const categories = Category;
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
