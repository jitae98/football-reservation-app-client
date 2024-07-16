import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    fieldType: "Sân 5",
    rentalDate: "",
    rentalTime: "",
    referee: false,
    drinks: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="formWrapper">
      <form className="bookingForm" onSubmit={handleSubmit}>
        <h2>Đặt Sân Bóng</h2>
        <div className="formGroup">
          <label htmlFor="name">Tên người đặt</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="phone">Số điện thoại</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="fieldType">Loại sân</label>
          <select
            id="fieldType"
            name="fieldType"
            value={formData.fieldType}
            onChange={handleChange}
          >
            <option value="Sân 5">Sân 5</option>
            <option value="Sân 7">Sân 7</option>
            <option value="Sân 11">Sân 11</option>
          </select>
        </div>
        <div className="formGroup">
          <label htmlFor="rentalDate">Ngày thuê</label>
          <input
            type="date"
            id="rentalDate"
            name="rentalDate"
            value={formData.rentalDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="rentalTime">Giờ thuê</label>
          <input
            type="time"
            id="rentalTime"
            name="rentalTime"
            value={formData.rentalTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label>
            <input
              type="checkbox"
              name="referee"
              checked={formData.referee}
              onChange={handleChange}
            />
            Trọng tài
          </label>
        </div>
        <div className="formGroup">
          <label>
            <input
              type="checkbox"
              name="drinks"
              checked={formData.drinks}
              onChange={handleChange}
            />
            Nước uống
          </label>
        </div>
        <button type="submit">Đặt sân</button>
      </form>
    </div>
  );
}

export default BookingForm;
