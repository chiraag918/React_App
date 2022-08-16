import "./search-box.styles.scss";

const SearchBox = (props) => {

    const {className, placeholder, onChangeHandler} = props;

    return(
        <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
    );
}

export default SearchBox;