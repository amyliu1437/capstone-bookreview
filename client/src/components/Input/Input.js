import "./Input.scss";
import React, { useState, useEffect } from "react";

function Input({ label, name, type,preloadValue}) {

    return (
        <div className="field">
            <label htmlFor={name} className="field__label">
                {label}
            </label>
            <input type={type} id={name} name={name} className="field__input" defaultValue={preloadValue} />
        </div>
    );
}

export default Input;
