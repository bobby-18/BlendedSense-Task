import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { CalendarOutlined } from "@ant-design/icons";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import { Col } from "react-bootstrap";
function BusinessSweeps() {
  const { sweepid } = useParams();
  const token = localStorage.getItem("token");
  const [sweepData, setSweepData] = useState([]);
  const [upcomigData, setUpcomingData] = useState([]);
  const [activeData, setActiveData] = useState([]);
  const [data, setData] = useState({ itemsToShow: 5 });

  useEffect(() => {
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

        setActiveData(
          response.data.sweeps.active.map((active) => {
            return {
              title: active.title,
              date: active.date,
              fromtime: active.fromTime,
              totime: active.toTime,
              sweepLocations: active.sweepLocations.map((ele) => ele.location),
            };
          })
        );
      });
  }, [sweepid, token]);

  const showMore = () => {
    data.itemsToShow === 5
      ? setData({ ...data, itemsToShow: sweepData.length })
      : setData({ itemsToShow: 5 });
  };

  const showLess = () => {
    setData({ itemsToShow: 5 });
  };

  return (
    <div className="overallContainer">
      <div className="overallActivesweep">
        <div className="ActiveSweepss">
          <h3 className="Active">Active Sweeps</h3>
          {activeData.length === 0 ? (
            <p className="noUpcomingSweep">No Active Sweeps</p>
          ) : (
            activeData.map((act) => {
              return (
                <>
                  <Col
                    lg={7}
                    style={{
                      border: "1px solid #dedede",
                      borderRadius: "5px",
                      marginTop: "10px",
                    }}
                  >
                    <div className="upcomingBlock ">
                      <p className="titlee">{act.title}</p>
                      <div className="fromtime">
                        <div className="calender" style={{ width: 5 }}>
                          <CalendarOutlined />
                        </div>
                        <p style={{ paddingLeft: 17, fontSize: 10 }}>
                          {act.date}
                        </p>
                        <p style={{ fontSize: 10 }}>,</p>
                        <p style={{ fontSize: 10 }}>{act.fromtime}</p>
                        <p style={{ fontSize: 10 }}>-</p>
                        <p style={{ fontSize: 10 }}>{act.totime}</p>
                      </div>
                      <div className="location">
                        <AddLocationAltOutlinedIcon fontSize="xsmall" />
                        <p
                          style={{
                            fontSize: 10,
                            marginLeft: 10,
                            width: "250px",
                            wordWrap: "break-word",
                          }}
                        >
                          {act.sweepLocations}
                        </p>{" "}
                      </div>
                    </div>
                  </Col>
                </>
              );
            })
          )}
        </div>
      </div>
      <div className="overallActivesweep">
        <div className="upcomingSweepsData">
          <div className="ActiveSweeps ">
            <h3 className="Active">Upcoming Sweeps</h3>

            {upcomigData.length === 0 ? (
              <p className="noUpcomingSweep">No Upcoming Sweep</p>
            ) : (
              upcomigData?.map((hist) => {
                return (
                  <>
                    <Col
                      lg={7}
                      style={{
                        border: "1px solid #dedede",
                        borderRadius: "5px",
                        marginTop: "10px",
                      }}
                    >
                      <div className="upcomingBlock">
                        <p className="titlee">{hist?.title}</p>
                        <div className="fromtime">
                          <div className="calender" style={{ width: 5 }}>
                            <CalendarOutlined />
                          </div>
                          <p style={{ paddingLeft: 17, fontSize: 10 }}>
                            {hist?.date}
                          </p>
                          <p style={{ fontSize: 10 }}>,</p>
                          <p style={{ fontSize: 10 }}>{hist?.fromtime}</p>
                          <p style={{ fontSize: 10 }}>-</p>
                          <p style={{ fontSize: 10 }}>{hist?.totime}</p>
                        </div>
                        <div className="location">
                          <AddLocationAltOutlinedIcon fontSize="xsmall" />
                          <p
                            style={{
                              fontSize: 10,
                              marginLeft: 8,
                              width: "400px",
                              wordWrap: "break-word",
                            }}
                          >
                            {hist?.sweepLocations}
                          </p>{" "}
                        </div>
                      </div>
                    </Col>
                  </>
                );
              })
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="sweepHistoryBlock ">
          <h3 className="history">Sweeps History</h3>
          <div className="dateandtitle">
            <>
              <table className="tableClass">
                <thead>
                  <tr>
                    <th style={{ fontSize: "10px" }}>Date</th>
                    <th className="title">Sweep</th>
                  </tr>
                </thead>
                {sweepData.length === 0 ? (
                  <p className="noSweep">No Sweeps</p>
                ) : (
                  sweepData.slice(0, data.itemsToShow).map((sweepDate) => {
                    return (
                      <tbody>
                        <tr>
                          <td style={{ fontSize: "10px" }}>{sweepDate.date}</td>
                          <td className="title">{sweepDate.title}</td>
                        </tr>
                      </tbody>
                    );
                  })
                )}
              </table>

              {data.itemsToShow === 5 ? (
                data.itemsToShow < sweepData.length && (
                  <span onClick={showMore} className="showmore">
                    Show More
                  </span>
                )
              ) : (
                <span onClick={showLess} className="showmore">
                  Show Less
                </span>
              )}
              <div></div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessSweeps;
