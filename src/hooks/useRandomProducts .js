import { useState, useEffect } from "react";

const useRandomProducts = (products) => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    // Function to generate random indices
    const getRandomIndices = (arrayLength, numberOfIndices) => {
      const indices = [];
      while (indices.length < numberOfIndices) {
        const randomIndex = Math.floor(Math.random() * arrayLength);
        if (!indices.includes(randomIndex)) {
          indices.push(randomIndex);
        }
      }
      return indices;
    };

    // Generate 6 random indices
    const randomIndices = getRandomIndices(products.length, 6);

    // Get the randomly selected products based on the indices
    const selectedProducts = randomIndices.map((index) => products[index]);

    // Update the state with the randomly selected products
    setRandomProducts(selectedProducts);
  }, [products]);

  return randomProducts;
};

export default useRandomProducts;
