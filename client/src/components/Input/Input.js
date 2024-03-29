import "./Input.scss";
import React, { useState, useEffect } from "react";

function Input({ label, name, type,preloadValue, status}) {

    return (
        <div className="input-section">
            <label htmlFor={name} className="input-section__label">
                {label}
            </label>
            <input type={type} id={name} name={name} className="input-section__input" defaultValue={preloadValue} />
            <label className={status&&status.length>0?"input-section__error":"input-section__hidden"}>
                {status}
            </label>
        </div>
    );
}

export default Input;
