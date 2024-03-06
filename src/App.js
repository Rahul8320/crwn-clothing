import Categories from "./components/categories/categories.component";

const App = () => {
  const categories = [
    {
      id: 1,
      image: "https://i.ibb.co/cvpntL1/hats.png",
      title: "Hats",
    },
    {
      id: 2,
      image: "https://i.ibb.co/px2tCc3/jackets.png",
      title: "Jackets",
    },
    {
      id: 3,
      image: "https://i.ibb.co/0jqHpnp/sneakers.png",
      title: "Sneakers",
    },
    {
      id: 4,
      image: "https://i.ibb.co/GCCdy8t/womens.png",
      title: "Womens",
    },
    {
      id: 5,
      image: "https://i.ibb.co/R70vBrQ/men.png",
      title: "Mens",
    },
  ];

  return (
    <div>
      <Categories categories={categories} />
    </div>
  );
};

export default App;
