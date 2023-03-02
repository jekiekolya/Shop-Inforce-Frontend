import React from 'react';

// Styles
import s from './DropdownMenu.module.scss';

export default function DropdownMenu({ handleChooseValue }) {
  return (
    <ul className={s.list}>
      <li
        className={s.item}
        onClick={() => {
          handleChooseValue('name');
        }}
      >
        name
      </li>
      <li
        className={s.item}
        onClick={() => {
          handleChooseValue('count');
        }}
      >
        count
      </li>
    </ul>
  );
}
