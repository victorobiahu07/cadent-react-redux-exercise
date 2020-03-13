import React from 'react';
import PropTypes from 'prop-types';

export const ListInputs = ({ addItem }) => {
  const createItem = () => {
  
    //const id =  Math.floor(Math.random() * 100);


    const item = {
      id: 10,
      name: 'Roasted Turkey',
      category: 'Deli',
      deliveryMethod: 'Ground',
    }

    addItem(item);
  }

  //Edited on click message
  return (
    <button
      className="addItemButton"
      onClick={createItem}
    >
      Add Random Item
    </button>
  );
};

ListInputs.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default ListInputs;
