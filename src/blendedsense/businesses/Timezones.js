import React from "react";
import { useSelector } from "react-redux";

export default function Timezones() {
  const timeZonesReduxData = useSelector((state) => state.time);
  console.log(timeZonesReduxData);
  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
  };
  return (
    <div>
      <select
        onChange={onOptionChangeHandler}
        value={timeZonesReduxData.id}
        className="selectoptionForTimezone"
      >
        {timeZonesReduxData.map(({ id, timezone }) => (
          <option value={id}>{timezone}</option>
        ))}
      </select>
    </div>
  );
}
