import React from "react";

export const Input = (props) => {
    const { value, onChange, onSubmit } = props;
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit('123456');
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