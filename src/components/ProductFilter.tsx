import { useContext, useState } from "react";
import { ProductContext } from "../context/ProdutContext";

const ProductFilter = () => {
  const { dispatch } = useContext(ProductContext);
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = () => {
    dispatch({ type: "FILTER_PRODUCTS", payload: category });
  };

  const handleSearch = () => {
    dispatch({ type: "SEARCH_PRODUCTS", payload: searchTerm });
  };

  return (
    <div className="bg-blue-900 shadow-md rounded-lg p-4 mb-6">
      <div className="mb-4">
        <label className="block text-blue-100 text-sm font-bold mb-2">
          Filter by Category
        </label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Category"
        />
        <button
          onClick={handleFilter}
          className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
        >
          Filter
        </button>
      </div>
      <div>
        <label className="block text-blue-100 text-sm font-bold mb-2">
          Search by Name
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Search by Name"
        />
        <button
          onClick={handleSearch}
          className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
