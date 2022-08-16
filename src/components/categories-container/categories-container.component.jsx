import "./categories-container.styles.scss";
import CategoryContainer from "../category-container/category-container.components";

const CategoriesContainer = ({categories}) =>{
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <CategoryContainer key={category.id} category={category}/>
         )
      })}
    </div>
  );
};

export default CategoriesContainer;