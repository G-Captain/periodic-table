import React from 'react';
import './ElementTile.css';

export const ElementTile = props => (
  <div
    className={`ElementTile ${props.element.category}`}
    onClick={
      props.elementClicked
        ? props.elementClicked.bind(this, props.element)
        : null
    }
  >
    <div className='number'>{props.element.number}</div>
    <div className='symbol'>{props.element.symbol}</div>
    <div className='name'>{props.element.name}</div>
    <div className='atomic'>{props.element.atomic_mass.toFixed(4)}</div>
  </div>
);
