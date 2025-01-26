import React from 'react'

export const List = (props) => {
    const { items } = props;
    debugger
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item.title}</li>
            ))}
        </ul>
    );
};