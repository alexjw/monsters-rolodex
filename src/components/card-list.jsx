import React from 'react';

import './card-list.css'

export const CardList = (props) => {
    return <div className={'card-list'}>{ props.monsters.map((element) => <h1 key={element.id}>{element.name}</h1>) }</div>
};