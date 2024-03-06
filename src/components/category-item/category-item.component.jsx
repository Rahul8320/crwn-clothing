import "./category-item.style.scss";

const CategoryItem = ({ category }) => {
  const { id, image, title } = category;

  return (
    <div key={id} className="category-container">
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
