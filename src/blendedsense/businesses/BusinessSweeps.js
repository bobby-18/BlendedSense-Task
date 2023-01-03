import React, { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { CalendarOutlined } from "@ant-design/icons";

function BusinessSweeps() {
  const { sweepid } = useParams();
  const token = localStorage.getItem("token");
  const [sweepData, setSweepData] = useState([]);
  const [upcomigData, setUpcomingData] = useState([]);
  const headers = {
    Authorization: `Bearer ${token}`,
    "client-id": "4CD884F88F476F647CC4446D4593D",
    "client-secret": "A955BEBD27BFC49E8CE12129346A4",
  };
  axios
    .get(
      `https://stage.blendedsense.com/api/sweep/list/${sweepid}?timeZone=Asia/Calcutta`,
      { headers }
    )
    .then((response) => {
      console.log(response);
      setSweepData(
        response.data.sweeps.history.map((dat) => {
          return {
            date: dat.date,
            title: dat.title,
          };
        })
      );
      setUpcomingData(
        response.data.sweeps.upcoming.map((data) => {
          return {
            title: data.title,
            date: data.date,
            fromtime: data.fromTime,
            totime: data.toTime,
            sweepLocations: data.sweepLocations.map((ele) => ele.location),
          };
        })
      );
    });
  console.log(upcomigData);
  return (
    <div>
      <div className="ActiveSweeps">
        <h3 className="Active">Upcoming Sweeps</h3>
        {upcomigData.map((hist) => {
          return (
            <>
              <div className="upcomingBlock">
                <p>{hist.title}</p>
                <div className="fromtime">
                  <div className="calender" style={{ width: 5 }}>
                    <CalendarOutlined />
                  </div>
                  <p style={{ paddingLeft: 10, fontSize: 10 }}>{hist.date}</p>
                  <p style={{ fontSize: 10 }}>,</p>
                  <p style={{ fontSize: 10 }}>{hist.fromtime}</p>
                  <p style={{ fontSize: 10 }}>-</p>
                  <p style={{ fontSize: 10 }}>{hist.totime}</p>
                </div>
                <div className="location">
                  <p style={{ fontSize: 8, marginLeft: 20 }}>
                    {hist.sweepLocations}
                  </p>{" "}
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="sweepHistoryBlock ">
        <h3 className="history">Sweeps History</h3>
        <div className="dateandtitle">
          <>
            <table>
              <tr>
                <th>Date</th>
                <th className="title">Sweep</th>
              </tr>
              {sweepData.map((sweepDate) => {
                return (
                  <tr>
                    <td>{sweepDate.date}</td>
                    <td className="title">{sweepDate.title}</td>
                  </tr>
                );
              })}
            </table>
          </>
        </div>
      </div>
    </div>
  );
}

export default BusinessSweeps;
