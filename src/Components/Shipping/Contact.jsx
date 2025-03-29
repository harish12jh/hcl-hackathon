import React, { useState } from 'react';
import Inputfield from "../../common/Inputfield/input";
import addShipping from '../../Redux/Reducer/shippingReducer'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router';
const Contact = () => {
    const [formdata, setFormdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        postal: "",
    })
    const dispatch = useDispatch();
   

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormdata(formdata)
        console.log(formdata)
        //dispatch(addShipping(formdata))
        //console.log(formdata)  
    }


    return <div>
        <form>
        <h2 classNameName="text-base/7 font-semibold text-gray-900 ">Contact</h2>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <Inputfield label="Firstname"
                    type="text"
                    value={formdata.firstname}
                    name="firstname"
                    onChange={(e) => setFormdata({ ...formdata, firstname: e.target.value })}
                    placeholder="Enter First Name" variant="Primary"></Inputfield>

                <Inputfield label="Lastname"
                    type="text"
                    value={formdata.lastname}
                    name="lastname"
                    onChange={(e) => setFormdata({ ...formdata, lastname: e.target.value })}
                    placeholder="Enter Last Name" variant="Primary"></Inputfield>
            </div>

            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <Inputfield label="Email"
                    type="text"
                    value={formdata.email}
                    name="Email"
                    onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
                    placeholder="Enter Email" variant="Primary"></Inputfield>

                <Inputfield label="Phone"
                    type="tel"
                    value={formdata.phone}
                    name="Email"
                    onChange={(e) => setFormdata({ ...formdata, phone: e.target.value })}
                    placeholder="Enter Phone Number" variant="Primary"></Inputfield>
            </div>
            <div>
                <p>Shipping</p>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                <Inputfield label="Address"
                    type="text"
                    value={formdata.address}
                    name="address"
                    onChange={(e) => setFormdata({ ...formdata, address: e.target.value })}
                    placeholder="Enter Address" variant="Primary"></Inputfield>

                <Inputfield label="City"
                    type="text"
                    value={formdata.city}
                    name="city"
                    onChange={(e) => setFormdata({ ...formdata, city: e.target.value })}
                    placeholder="Enter City" variant="Primary"></Inputfield>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                <Inputfield label="State"
                    type="text"
                    value={formdata.state}
                    name="Email"
                    onChange={(e) => setFormdata({ ...formdata, state: e.target.value })}
                    placeholder="Enter State" variant="Primary"></Inputfield>

                <Inputfield label="Postal code "
                    type="text"
                    value={formdata.postal}
                    name="postal"
                    onChange={(e) => setFormdata({ ...formdata, postal: e.target.value })}
                    placeholder="Enter postal number" variant="Primary"></Inputfield>
                    </div>
            </div>

            <div>
                <div>
                    <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={handleSubmit}
                    >Submit</button>

                </div>
            </div>
        </form>


    </div>
}
export default Contact