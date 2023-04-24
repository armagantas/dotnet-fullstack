import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { name: "Product1", price: 100.0 },
    { name: "Product2", price: 200.0 },
    { name: "Product3", price: 300.0 },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        name: "Product" + (prevState.length + 1),
        price: prevState.length * 100 + 100,
      },
    ]);
  }

  return (
    <div>
      <h1>StoreApp</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
