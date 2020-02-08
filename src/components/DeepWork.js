import React, { useState } from "react";
import { DatePicker, message } from "antd";
import "antd/dist/antd.css";

function DeepWork() {
  const [date, setDate] = useState({
    start: "",
    end: "",
  });
  function onChange(date, dateString) {
    console.log(dateString);
    message.info(`Selected Date: ${dateString ? dateString : "None"}`);
    setDate({
      start: dateString[0],
      end: dateString[1],
    });
  }
  console.log(date);
  return (
    <div>
      <DatePicker.RangePicker onChange={onChange} />
      <div style={{ marginTop: 20 }}>
        Selected Date:{" "}
        {date.start && date.end !== "" ? `${date.start} - ${date.end}` : ""}
      </div>
    </div>
  );
}

export default DeepWork;
