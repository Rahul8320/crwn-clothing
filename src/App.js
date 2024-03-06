import "./categories.style.scss";

const App = () => {
  const categories = [
    {
      id: 1,
      image: "",
      title: "Hats",
    },
    {
      id: 2,
      image: "",
      title: "Jeans",
    },
    {
      id: 3,
      image: "",
      title: "Sneakers",
    },
    {
      id: 4,
      image: "",
      title: "Women",
    },
    {
      id: 5,
      image: "",
      title: "Men",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <div className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <button>Shop Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
