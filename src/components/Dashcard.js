import React from 'react';
import { Link } from 'react-router-dom';

function DashCard(props) {
  return (
    <>
      <li className='dash__item'>
        <Link className='dash__item__link' to={props.path}>
          {/* <figure className='dash__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure> */}
          <div className='dash__item__info'>
            <h5 className='dash__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default DashCard;
