import React from "react";
import { v4 as uuidv4 } from 'uuid';

export const Input = (props) => {
    const { value, onChange, onSubmit: onSubmitProp } = props;
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmitProp({ id: uuidv4(), text: value });
            }}
        >
            <div className="flex-row">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
                <button type="submit">Add</button>
            </div>
        </form>
    );
};