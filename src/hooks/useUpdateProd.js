import { useState } from "react";
export const useUpdateProd = (products) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productNameFilter, setProductNameFilter] = useState("");

  const filterByCategory = (e) => {
    const { value } = e.target;
    setSelectedCategory(value);
    setProductNameFilter("");
  };

  const filterByName = (event) => {
    const { value } = event.target;
    setProductNameFilter(value);
  };

  const filteredItems = products.filter((product) => {
    return (
      (!selectedCategory || product.category === selectedCategory) &&
      (!productNameFilter ||
        product.name.toLowerCase().includes(productNameFilter.toLowerCase()))
    );
  });

  return {
    selectedCategory,
    productNameFilter,
    filterByCategory,
    filterByName,
    filteredItems,
  };
};
