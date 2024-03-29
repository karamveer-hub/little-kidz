import React, { useState } from 'react';
import '../App.scss'; // You can create a CSS file for styling
import '../responsive.scss'

const FormComponent = () => {
    // State to manage form input values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    // Event handler to update form data on input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="form-container display_flex_col">
            <div className="container display_flex">

            {/* Left section for content */}
            <div className="content-section display_flex_col my-10px">
                <h2>We Would Love To <br /> Hear From You. </h2>

                <p>Contact Us at <span className='bold' style={{fontSize:"22px"}}>+91 981 2515 567</span></p>
                <p>or Fill The Form To Get A Callback</p>
            </div>

            {/* Right section for the form */}
            <div className="form-section  display_flex_col my-10px">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit} className='display_flex_col'>
                    <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Enter your phone number"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Enter your message"
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>

        </div>
    );
};

export default FormComponent;
