import "./category-item.style.scss";

const CategoryItem = ({ category }) => {
  const { image, title } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default CategoryItem;
