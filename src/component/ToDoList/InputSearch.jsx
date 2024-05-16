import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterText } from "../../redux/ToDoSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const filterText = useSelector((state) => state.filterText);

  const onChange = (event) => {
    dispatch(setFilterText(event.target.value));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Фильтр"
        value={filterText}
        onChange={onChange}
      />
    </>
  );
};

export default Filter;
