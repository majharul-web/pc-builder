export const categories = [
  {
    name: "Processor",
    required: true,
    image: "https://www.startech.com.bd/catalog/view/theme/starship/images/cpu.svg",
  },
  {
    name: "Motherboard",
    required: true,
    image: "https://www.startech.com.bd/catalog/view/theme/starship/images/motherboard.svg",
  },
  {
    name: "RAM",
    required: true,
    image: "https://www.startech.com.bd/catalog/view/theme/starship/images/ram.svg",
  },
  {
    name: "Power Supply Unit",
    required: true,
    image: "https://www.startech.com.bd/catalog/view/theme/starship/images/psupply.svg",
  },
  {
    name: "Storage Device",
    required: true,
    image: "https://www.startech.com.bd/catalog/view/theme/starship/images/hdd.svg",
  },
  {
    name: "Others",
    required: false,
    image: "https://www.startech.com.bd/catalog/view/theme/starship/images/monitor.svg",
  },
];

export const getTotalProductPrice = (products) => {
  // Ensure products array is not empty and has valid data
  if (!Array.isArray(products) || products.length === 0) {
    return 0;
  }

  // Calculate the total price
  const totalPrice = products.reduce((total, product) => {
    // Assuming the product price is stored in the 'price' property
    const productPrice = product?.price || 0;

    // Add the current product price to the running total
    return total + productPrice;
  }, 0);

  return totalPrice;
};
