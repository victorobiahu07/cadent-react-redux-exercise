import React from 'react';

/*const ListSelection = () => (
  <div className="listSelection">
    ListSelection
  </div>
);*/

const ListSelection = ({ isItemSelected, selectedItem }) => (
  <div className="listSelection">
    <div><strong>List Selection</strong></div>
    { isItemSelected ? (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Delivery Method</th>
            </tr>
          </thead>
          <tbody>
            {[selectedItem].map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.deliveryMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )
      : (<span>This list selection will keep updating</span>)
    }
  </div>
);

export default ListSelection;
