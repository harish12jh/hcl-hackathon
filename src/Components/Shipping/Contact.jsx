import React, { useState } from  'react';
import Inputfield from "../Inputfield/input";
const Contact  = ()=>{
    const [formdata, setFormdata] = useState({
        Firstname:"",
        Lastname:"",
        Email:"",
        

    })
    return <div>
       <form>
       <div class="grid gap-6 mb-6 md:grid-cols-2">
        <Inputfield label="Username" 
        type="text" 
        value={""}
        name="username"
        onChange= {(e)=>setName(e.target.value)} 
        placeholder="Enter User Name" variant="Primary"></Inputfield> 

        <Inputfield label="Username" 
        type="text" 
        value={"username"}
        name="username"
        onChange= {(e)=>setName(e.target.value)} 
        placeholder="Enter User Name" variant="Primary"></Inputfield>            
        </div>

        <Inputfield label="Username" 
        type="text" 
        value={"username"}
        name="username"
        onChange= {(e)=>setName(e.target.value)} 
        placeholder="Enter User Name" variant="Primary"></Inputfield> 
        
        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="tel" 
            id="phone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="123-45-678"
             pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />

<Inputfield label="Username" 
        type="text" 
        value={"username"}
        name="username"
        onChange= {(e)=>setName(e.target.value)} 
        placeholder="Enter User Name" variant="Primary"></Inputfield> 
        <Inputfield label="Username" 
        type="text" 
        value={"username"}
        name="username"
        onChange= {(e)=>setName(e.target.value)} 
        placeholder="Enter User Name" variant="Primary"></Inputfield> 
        <div class="grid gap-6 mb-6 md:grid-cols-2">
        <Inputfield label="Username" 
        type="text" 
        value={"username"}
        name="username"
        onChange= {(e)=>setName(e.target.value)} 
        placeholder="Enter User Name" variant="Primary"></Inputfield>
         <Inputfield label="Username" 
        type="text" 
        value={"username"}
        name="username"
        onChange= {(e)=>setName(e.target.value)} 
        placeholder="Enter User Name" variant="Primary"></Inputfield>
         <Inputfield label="Username" 
        type="text" 
        value={"username"}
        name="username"
        onChange= {(e)=>setName(e.target.value)} 
        placeholder="Enter User Name" variant="Primary"></Inputfield>
         <Inputfield label="Username" 
        type="text" 
        value={"username"}
        name="username"
        onChange= {(e)=>setName(e.target.value)} 
        placeholder="Enter User Name" variant="Primary"></Inputfield>

<Inputfield label="Username" 
        type="checkbox" 
        value={"username"}
        name="username"
        onChange= {(e)=>setName(e.target.value)} 
        placeholder="Enter User Name" variant="Primary"></Inputfield>
        </div>

        </form>
    </div>
}
export default Contact