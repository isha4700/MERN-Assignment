import React from "react";

const MonthAndSearch = ({
  selectedMonth,
  onSearchChange,
  value,
  onMonthChange,
  onClear,
}) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="flex justify-between m-5 items-center">
      {/* Search Box */}
      <div className="bg-[#9bf84a] font-semibold rounded-xl flex items-center shadow-lg">
        <input
          className="bg-[#97f15f] rounded-l-xl p-3 focus:outline-none placeholder-gray-700 text-black"
          type="text"
          value={value}
          onChange={onSearchChange}
          placeholder="🔍 Search transactions..."
        />
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold rounded-r-xl p-3 transition-all duration-300"
          onClick={onClear}
        >
          ✖
        </button>
      </div>
  
      {/* Month Changer */}
      <div className="container max-w-max bg-[#99f146] rounded-xl px-2 shadow-lg">
        <select
          className="bg-[#6bf049] font-semibold rounded-xl p-3 focus:outline-none text-black cursor-pointer hover:bg-[#f3c04d] transition-all duration-300"
          value={selectedMonth}
          onChange={onMonthChange}
        >
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
  
};

export default MonthAndSearch;
