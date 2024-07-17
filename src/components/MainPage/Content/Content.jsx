import React, { useEffect, useState } from "react";
import "./Content.css";

function Content() {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/fields");
        const data = await response.json();
        setFields(data);
      } catch (error) {
        console.error("Error fetching fields:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="contentWrapper">
        <div className="fieldtypeList">
          {fields.map((field) => (
            <div key={field.ID} className={`field field${field.ID}`}>
              <p>{field.name}</p>
              <p>
                <strong>
                  {field.bookedQuantity}/{field.quantity}
                </strong>{" "}
                sân đã thuê
              </p>
              <a href="/booking" className="orderBtn">
                Đặt sân
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
