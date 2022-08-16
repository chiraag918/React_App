import "./category-container.styles.scss"

const CategoryContainer = (props) =>{

    const {imageUrl,title} = props.category;

    return(
        <div className='category-container'>
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}> </div>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Show Now</p>
        </div>
      </div>
    );
}

export default CategoryContainer;