import React from 'react';
import {Card} from '../cards/card.components';
import './card-lists.style.css';

export const CardList = props => {
    return(
        <div className="card-list"> {
            props.monster.map(monsters => 
                <Card key={monsters.id} monster={monsters} />
           )
          } </div>
    )
}