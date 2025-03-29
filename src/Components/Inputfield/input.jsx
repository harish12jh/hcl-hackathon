import React, { useState } from "react";

const Inputfield  = (props)=>{
    let {label,name,value,onChange,placeholder,type } = props
   
    return <div className="input-container">
       
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
        <input type={type} id="first_name" 
        name={name} 
        value={value} 
        onChange={onChange}
        placeholder={placeholder}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
         required />
        
    </div>
}

export default Inputfield