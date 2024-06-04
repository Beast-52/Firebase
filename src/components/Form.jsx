
import React from "react";
import { IoSearch } from "react-icons/io5";
import useDisclosure from "../hooks/useDisclosure";

const Form = () => {
  const { onOpen } = useDisclosure();
  
  return (
    <div className="flex w-[90%] mx-auto mt-4 items-center justify-center gap-2">
      <div className="search mx-auto relative w-[89%]">
        <input
          type="text"
          className="searchTerm bg-transparent border-2 w-full pl-10 py-2 rounded-lg text-white outline-none"
          placeholder="What are you looking for?"
        />
        <button className="searchButton absolute top-[10px] left-[8px] text-2xl">
          <IoSearch className="searchIcon text-white" />
        </button>
      </div>
      <div>
        <button
          onClick={()=>onOpen()}
          className="text-3xl bg-white w-10 h-10 rounded-full font-medium flex items-center justify-center"
        >
          <span >+</span>
        </button>
      </div>
    </div>
  );
};

export default Form;
