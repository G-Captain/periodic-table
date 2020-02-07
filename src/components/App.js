import React from 'react';
import './App.css';
import { elements } from './../elements.js';
import { ElementTile } from './element-tile/ElementTile';
import { ElementDetail } from './element-detail/ElementDetail';

export class App extends React.Component {
  state = {
    elements,
    selectedElement: null
  };

  create2DPeriodicTable() {
    const periodicTable = this.createEmpty2DTable();

    this.state.elements.forEach(el => {
      if (!periodicTable[el.ypos - 1]) {
        periodicTable[el.ypos - 1] = [];
      }
      periodicTable[el.ypos - 1][el.xpos - 1] = el;
    });

    return periodicTable;
  }

  createEmpty2DTable() {
    return new Array(10).fill(null).map(() => new Array(18).fill(null));
  }

  elementClickedHandler = selectedElement => {
    this.setState({
      selectedElement
    });
  };

  elementClosedHandler = () => {
    this.setState({
      selectedElement: null
    });
  };

  render() {
    console.log('tableWithElementPositions', this.create2DPeriodicTable());
    const tableWithOffset = this.create2DPeriodicTable().flat();

    for (let i = 2; i >= 0; i--) {
      tableWithOffset.splice(2 + i * 18, 10);
    }
    console.log(tableWithOffset);

    return (
      <div className='App'>
        <div className='header'>Periodic Table v 0.1</div>
        <div className='periodic-table'>
          {tableWithOffset.map((el, index) =>
            el ? (
              <ElementTile
                key={el.name}
                element={el}
                elementClicked={this.elementClickedHandler}
              />
            ) : (
              <div className='offset' key={index}></div>
            )
          )}
          {this.state.selectedElement ? (
            <ElementDetail
              element={this.state.selectedElement}
              elementClosed={this.elementClosedHandler}
            />
          ) : (
            <div className='ElementDetail'></div>
          )}
        </div>
      </div>
    );
  }
}
