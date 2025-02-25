import React from "react";

const PerPage = ({ selectedPerPage, onChange }) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 25, 30];
  console.log(selectedPerPage);

  return (
    <div className="flex items-center space-x-3 bg-[#8ff34d] p-3 rounded-xl shadow-lg">
      <span className="text-black font-semibold">Per Page:</span>
      <select
        className="bg-white text-black font-semibold p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#ebb840] transition-all duration-300 cursor-pointer"
        value={selectedPerPage}
        onChange={onChange}
      >
        {pages.map((page, index) => (
          <option key={index} value={page}>
            {page}
          </option>
        ))}
      </select>
    </div>
  );
  
};

export default PerPage;
