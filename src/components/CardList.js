import React from 'react';
import Card from './Card';

const CardList= ({robots}) => {
    // pro error
    // if(true) {
    //     throw new Error('ooooops, nooooo, error')
    // }
    return (
        <div>
            {robots.map((user, i) => {
                return (
                    <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}/>
                    );
                })
            }
        </div>
    );
}

export default CardList;