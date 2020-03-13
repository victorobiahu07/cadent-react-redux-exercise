import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//including deselectItem, removeItem, selectItem to imports

import {  addItem,
          deselectItem,
          removeItem,
          selectItem} from "../ducks/groceries";


import ListInputs from "./ListInputs";
import ListSelection from "./ListSelection";
import ListTable from "./ListTable";


//updating this

/*const mapStateToProps = ({ groceries: { list: groceryList } }) => ({
  groceryList
});*/

const mapStateToProps = ({
  groceries: {
    list: groceryList,
    isItemSelected,
    selectedItem
  },
}) => ({
  groceryList,
  isItemSelected,
  selectedItem
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addItem, 
      //updating the other actions as well
      removeItem,
      selectItem,
      deselectItem
    },
    dispatch
  );

//had to change to UNSAFE_ will mount to comply with React 17x
class ListContainer extends Component {
  UNSAFE_componentWillMount() {
    /* eslint-disable no-console */
    console.log("groceryList", this.props.groceryList, this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("groceryList", nextProps.groceryList, this);
  }

  //editing list selection and list table as well
  render() {
    return (
      <section className="groceryApp">
        <div className="listInputs">
          <ListInputs addItem={this.props.addItem} />
        </div>
        <div className="types">
          <ListSelection
            isItemSelected={this.props.isItemSelected}
            selectedItem={this.props.selectedItem}
          />
          <ListTable
            groceries={this.props.groceryList}
            removeItem={this.props.removeItem}
            selectItem={this.props.selectItem}
            deselectItem={this.props.deselectItem}
          />
        </div>
      </section>
    );
  }
}

ListContainer.propTypes = {
  // Props ....including props over here
  // Actions
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  deselectItem: PropTypes.func.isRequired,
  // Store
  groceryList: PropTypes.array.isRequired,
  listSelection: PropTypes.array.isRequired
  // Other
};

const ListContainerRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);

export default ListContainerRedux;
