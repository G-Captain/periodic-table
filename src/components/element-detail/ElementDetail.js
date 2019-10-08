import React from 'react';
import './ElementDetail.css';
import { ElementTile } from './../element-tile/ElementTile';

export const ElementDetail = props => (
  <div className='ElementDetail'>
    <ElementTile element={props.element} elementClicked={null} />
    <div className='info-container'>
      <div className='close-button' onClick={props.elementClosed}>
        [&times;]
      </div>
      <div className='info'>
        <div className='title-row'>
          <h1 className='title'>{props.element.name}</h1>
          <div className={`cat-name ${props.element.category}`}>
            {props.element.category}{' '}
          </div>
        </div>
        <div className='description'>
          {props.element.appearance ? (
            <div className='appearance'>
              <strong>Appearance:</strong> {props.element.appearance}
            </div>
          ) : (
            ''
          )}
          <div className='atom-info'>
            <span>Atomic Mass: {props.element.atomic_mass} | </span>
            <span>Density: {props.element.density}</span>
            {props.element.molar_heat ? (
              <span> | Molar Heat: {props.element.molar_heat}</span>
            ) : (
              ''
            )}
            {props.element.melt ? (
              <span> | Melt: {props.element.melt}K</span>
            ) : (
              ''
            )}
            {props.element.boil ? (
              <span> | Boil: {props.element.boil}K</span>
            ) : (
              ''
            )}
          </div>
          <div className='summary'>
            {props.element.summary} ...{' '}
            <a target='_blank' href={props.element.source}>
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
