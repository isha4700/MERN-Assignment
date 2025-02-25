import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import MonthAndSearch from "./monthAndSearch";
import TransactionTable from "./transactionTable";
import Statistics from "./statistics";
import BarChart from "./barChart";

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState("March");
  const [selectedPerPage, setSelectedPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch transactions based on selected month and search text
  const fetchTransactions = async () => {
    try {
      const response = await axios.get(
        `https://roxiler-assignment-backend.vercel.app/api/transactions`,
        {
          params: {
            month: selectedMonth,
            search: searchText,
            page: currentPage,
            perPage: selectedPerPage,
          },
        }
      );

      // console.log(response.data.transactions);

      setTransactions(response.data.transactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  // Handle month change
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  // Handle PerPage Change
  const handlePerPageChange = (e) => {
    setSelectedPerPage(e.target.value);
  };

  // Handle search text change
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  // Handle search box clear
  const handleSearchClear = () => {
    setSearchText("");
  };

  // Handle pagination
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Fetch transactions when component mounts or dependencies change
  useEffect(() => {
    fetchTransactions();
  }, [selectedMonth, searchText, currentPage, selectedPerPage]);

  return (
    <div className="bg-gradient-to-r from-[#d4f1f4] to-[#f0f9f9] py-10">
    <div className="flex items-center justify-center p-6">
      <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center 
        shadow-[0_10px_40px_rgba(0,0,0,0.15)] 
        transform hover:scale-110 transition-transform duration-300 ease-in-out 
        border-4 border-[#b3e6e6] relative overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6fcfc] to-[#ffffff] opacity-60 
          rounded-full"></div>
        
        <p className="text-[#225a5a] font-extrabold text-2xl text-center 
          tracking-wide leading-relaxed z-10">
          Transaction
          <br />
          Dashboard
        </p>
      </div>
    </div>


      <MonthAndSearch
        value={searchText}
        onSearchChange={handleSearchChange}
        onClear={handleSearchClear}
        selectedMonth={selectedMonth}
        onMonthChange={handleMonthChange}
      />
      <TransactionTable
        transactions={transactions}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
        selectedPerPage={selectedPerPage}
        onChange={handlePerPageChange}
        page={currentPage}
      />
      <hr className="border-t-2 border-green-500 my-4 shadow-md" />
<Statistics selectedMonth={selectedMonth} />
<hr className="border-t-2 border-black my-4 shadow-md" />
<BarChart selectedMonth={selectedMonth} />

    </div>
  );
};

export default App;
