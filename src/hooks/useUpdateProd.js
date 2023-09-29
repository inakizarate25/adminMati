import { useState } from "react";

export const useUpdateProd = (initialProducts) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productNameFilter, setProductNameFilter] = useState("");

  const filterByCategory = (value) => {
    setSelectedCategory(value);
    setProductNameFilter("");
  };

  const filterByName = (value) => {
    setProductNameFilter(value);
  };

  const filteredItems = initialProducts.filter((product) => {
    return (
      (!selectedCategory || product.categoria === selectedCategory) &&
      (!productNameFilter ||
        product.nombre.toLowerCase().includes(productNameFilter.toLowerCase()))
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
