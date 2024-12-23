import React from "react";
import "./index.css";

function FormField({name, id, type,placeholder, onChange,children}) {
    return (
        <div className="campoForm">
            <label 
                name={name} 
                htmlFor={id}>
                {children}
            </label>
            <input 
                onChange={onChange} 
                id={id} 
                type={type} 
                placeholder={placeholder}>      
                </input>
        </div>
    )
}

export default FormField;