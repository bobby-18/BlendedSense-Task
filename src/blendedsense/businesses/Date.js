import * as React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Location from "./Location";
import Time from "./Time";

export default function TableDatePicker() {
  const [startDate, setDate] = React.useState(new Date());

  const defaultEndDate = new Date();
  defaultEndDate.setDate(defaultEndDate.getDate() + 7);

  const today = new Date();

  const selectDateHandler = (d) => {
    setDate(d);
  };
  return (
    <div>
      <label
        style={{
          fontSize: "10px",
          fontWeight: 600,
          marginLeft: "13px",
        }}
      >
        Date*
      </label>
      <div className="DateAndTimeFlex">
        <div
          style={{
            marginLeft: "12px",
            fontSize: "10px",
            width: "20%",
          }}
        >
          <DatePicker
            size="xs"
            className="date-input-field "
            dateFormat="MM/dd/yyyy"
            selected={startDate}
            onChange={selectDateHandler}
            minDate={today}
            todayButton={"Today"}
          />
        </div>
        <div>
          <Time />
        </div>
      </div>
      <Location />
    </div>
  );
}
