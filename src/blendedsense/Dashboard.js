import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dashboard } from "./redux/actions/BsActions";
import { logout } from "./redux/actions/BsActions";
import {
  HomeOutlined,
  UserOutlined,
  ReloadOutlined,
  SettingOutlined,
  AlignLeftOutlined,
  CalendarOutlined,
  CreditCardOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { Layout } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function Dashboard() {
  const [auth, setAuth] = useState(false);
  const [isLoding, setIsLoding] = useState(true);
  const navigate = useNavigate();
  const [producer, setProducer] = useState(false);
  const [admin, setAdmin] = useState(false);

  function handleClick() {
    setAuth(true);
    localStorage.removeItem("token");
    dispatch(logout());
  }
  if (auth) {
    navigate("/");
  }
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(dashboard({ token }));
  }, [dispatch]);

  const proadm = useSelector((state) => state.user);

  useEffect(() => {
    if (proadm === "producer") setProducer(true);
  }, [proadm]);
  useEffect(() => {
    if (proadm === "admin") setAdmin(true);
  }, [proadm]);

  return (
    <div className="dashboard">
      <Layout>
        <div className="sidebar">
          <Sider />
          <div>
            <img
              src="https://stage.blendedsense.com/img/logo.a39c6ea2.svg"
              alt="logo"
              className="dimg"
            />
          </div>
          <ul className="dashboardUl">
            <div className="sliderflex">
              <div className="icons">
                <HomeOutlined />
              </div>
              <div className="names">
                <li>
                  <Link to="/Dashboard" className="link">
                    Dashboard
                  </Link>
                </li>
              </div>
            </div>
            <div className="sliderflex">
              <div className="icons">
                <UserOutlined />
              </div>
              <div className="names">
                <li>
                  <Link to="/Daashboard" className="link">
                    Users
                  </Link>
                </li>
              </div>
            </div>
            <div className="sliderflex">
              <div className="icons">
                <ScheduleOutlined />
              </div>
              <div className="names">
                <li>
                  <Link to="/Dashboard/projects" className="link">
                    Businesses
                  </Link>
                </li>
              </div>
            </div>
            <div className="sliderflex">
              <div className="icons">
                <CalendarOutlined />
              </div>
              <div className="names">
                <li>
                  <Link to="/Daashboard" className="link">
                    Sweeps
                  </Link>
                </li>
              </div>
            </div>
            <div className="sliderflex">
              <div className="icons">
                <CalendarOutlined />
              </div>
              <div className="names">
                <li>
                  <Link to="/Dashboard/SweepBlocks" className="link">
                    Sweep Blocks
                  </Link>
                </li>
              </div>
            </div>
            <div className="sliderflex">
              <div className="icons">
                <CreditCardOutlined />
              </div>
              <div className="names">
                <li>
                  <Link to="/Daashboard" className="link">
                    Pay Center
                  </Link>
                </li>
              </div>
            </div>
            <div className="sliderflex">
              <div className="icons">
                <AlignLeftOutlined />
              </div>
              <div className="names">
                <li>
                  <Link to="/Daashboard" className="link">
                    Production Menu
                  </Link>
                </li>
              </div>
            </div>
            <div className="sliderflex">
              <div className="icons">
                <ReloadOutlined />
              </div>
              <div className="names">
                <li>
                  <Link to="/Daashboard" className="link">
                    Subscriptions
                  </Link>
                </li>
              </div>
            </div>
            <div className="sliderflex">
              <div className="icons">
                <SettingOutlined />
              </div>
              <div className="names">
                <li>
                  <Link to="/Daashboard" className="link">
                    App Preferences
                  </Link>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{
              padding: 0,
              backgroundColor: "white",
            }}
          >
            <div className="notifications">
              <NotificationsNoneIcon sx={{ fontSize: "20px" }} />
              <button className="logoutbtn" onClick={handleClick}>
                <img
                  className="logoutLogo"
                  src="https://stage.blendedsense.com/img/user.9bf632a1.svg"
                />
              </button>

              <ArrowDropDownOutlinedIcon onClick={handleClick} />
            </div>
          </Header>

          <Content>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 430,
                backgroundColor: "white",
              }}
            >
              <Outlet />
            </div>
          </Content>

          <Footer
            style={{
              textAlign: "center",
              backgroundColor: "white",
            }}
          ></Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;
