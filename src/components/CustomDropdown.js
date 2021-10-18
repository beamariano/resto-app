import React from "react";

const CustomDropdown = (props) => {
  const onButtonClickFilter = (e) => {
    props.onClickDisplayChosenCategory(e.target.textContent);
    console.log(e.target.textContent + " clicked");
  };

  return (
    <div className="dropdown">
      <button onClick={onButtonClickFilter} className="dropbtn">
        Select Category
      </button>
      <div className="dropdown-content">
        <div onClick={onButtonClickFilter}>All Items</div>
        <div value="Food" onClick={(e) => onButtonClickFilter(e)}>
          Food
        </div>
        <div value="Drinks" onClick={(e) => onButtonClickFilter(e)}>
          Drinks
        </div>
        <div value="Dessert" onClick={(e) => onButtonClickFilter(e)}>
          Dessert
        </div>
      </div>
    </div>
  );
};

export default CustomDropdown;
