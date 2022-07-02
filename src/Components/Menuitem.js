import React from 'react';

const Menuitem = ({image,name,price}) => {
    return (
        <div className='menuItem'>
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <p>Rs.{price}</p>
        </div>
    );
};

export default Menuitem;