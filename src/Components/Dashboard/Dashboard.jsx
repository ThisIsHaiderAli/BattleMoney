import React, { useEffect, useState } from "react";
import Navbar from "../Header/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { log } from "react-modal/lib/helpers/ariaAppHider";
import moment from "moment/moment";
import "./Dashboard.css";
import tv from "./tv-solid.svg";
import Sidebar from "./Sidebar";
import cricket from "../../icoons/cricket.png";
import football from "../../icoons/football.png";
import tennis from "../../icoons/tennis.png";
import table_tennis from "../../icoons/table_tennis.png";
import basketball from "../../icoons/basketball.png";
import volleyball from "../../icoons/volleyball.png";
import snooker from "../../icoons/snooker.png";
import politics from "../../icoons/politics.png";
import { FaWallet } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import Dropdown from "react-bootstrap/Dropdown";
import Vertical from '../Vertical/Vertical';
import Vertical2 from '../Vertical2/Vertical2';
import { IoIosTennisball } from "react-icons/io";
import { FaBasketballBall } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import { BiFootball } from "react-icons/bi";
import DashboardMatch_Slider from "../DashboardMatch_Slider/DashboardMatch_Slider";
import DashboardMatchDetail_Tab from "../DashboardMatchDetail_Tab/DashboardMatchDetail_Tab";

//import io from "socket.io-client";

// const SOCKET_URL = "https://live-game-api.nakshtech.info";

function Dashboard() {
  let { name, type } = useParams();
  const [data, setData] = useState([]);

  const [cricketMatches, setCricketMatches] = useState([]);
  const [events_Data, setevents_Data] = useState([]);
  const [eventCatagory_Data, seteventCatagory_Data] = useState([]);
  // const [eventCatagorydata, seteventCatagory] = useState([]);
  const [event_Type, setevent_Type] = useState(0);
  const [event_name, setevent_name] = useState("");
  let navigate = useNavigate();

  const Live_Match_Api = async () => {
    try {
      let res = await axios.get(
        `http://live-game-api.nakshtech.info/getcricketmatches`
      );
      res = res.data.data;
      let data = res;
      console.log("setCricketMatches", data);
      setCricketMatches(data);
      setData(data);
    } catch (e) {
      console.log("Error While Fatch Live_Match_Api", e);
    }
  };

  const Current_Match = async (EventTypeID) => {
    // console.log("EventTypeIDCurrent_Match", EventTypeID);
    try {
      let res = await axios.get(
        `https://live-game-api.nakshtech.info/GetAllCurrentMatches?eventTypeID=${EventTypeID}`
      );
      // res = res.data.data;
      // seteventCatagory_Data(res.data.data);
      console.log("Current_Match", res.data.data);
    } catch (e) {
      console.log("Error While Fatch Current_Match API", e);
    }
  };

  useEffect(() => {
    Live_Match_Api();
    getAllEvents();
  }, []);

  const getAllEvents = async () => {
    try {
      let res = await axios.get(
        "https://battleminey-api.nakshtech.info/FetchAllMatchesData"
      );
      // console.log("getAllEvents=>", res.data);
      // setevents_Data(res.data);
      // setevents_Data(res.data);
    } catch (error) {
      console.log("Something Error in getAllEvents API", error);
    }
  };

  const eventCatagory = async (EventTypeID) => {
    try {
      // console.log("EventType=>", EventTypeID, event_name);
      let res = await axios.get(
        `https://battleminey-api.nakshtech.info/GetAllCompetitionsData?EventTypeID=${EventTypeID}`
      );
      // console.log("Res", res.data);
      // seteventCatagory(res.data);
    } catch (error) {
      console.log("Something Error in eventCatagory API", error);
    }
  };

  function handleClick() {
    let eventType1 = type ?? "4";
    let name1 = name ?? "Cricket";
    eventCatagory(eventType1);
    Current_Match(eventType1);
    setevent_Type(eventType1);
    setevent_name(name1);
  }

  useEffect(() => {
    handleClick();
  }, [name, type]);

  return (
    <div style={{overflow:"hidden"}}>
      <Navbar />

      <main className="main_root wrapper">
        {/* <!-- Sidebar start  --> */}
        <nav id="sidebar" className="sidemenu">
          {/* <ul className="list-unstyled components">
            <button className="badge badge-info " style={{ fontSize: "16px" }}>
              {event_name}
            </button>
            <hr style={{ color: "#fff" }} />
            <li class="active">
              {eventCatagorydata?.map((item, index) => (
                <ul class="collapse list-unstyled show" id="homeSubmenu">
                  <li>
                    <a
                      href=""
                      style={{
                        color: "#fff",
                        textDecoration: "none",
                      }}
                      onClick={() =>
                        navigate(
                          event_name === "Tennis"
                            ? `/Tennis/${item.competition.id}/${event_Type}`
                            : event_name === "Soccer"
                            ? `/Soccer/${item.competition.id}/${event_Type}`
                            : `/scoreboard/${item.competition.id}/${event_Type}`
                        )
                      }
                    >
                      {item?.competition?.name}
                    </a>
                  </li>
                </ul>
              ))}
            </li>
          </ul> */}
          <div className="search-box">
            <div className="form-group">
              <input
                type="text"
                placeholder="Search"
                autoComplete="off"
                className="form-control"
                style={{ textTransform: "lowercase" }}
              />{" "}
              <img
                src="https://wver.sprintstaticdata.com/v14/static/front/img/search.svg"
                className="search-icon"
              />
            </div>
          </div>

          <div className="special-menu">
            <h5 className="text-yellow pl-2">
              <u>Racing Sport</u>
            </h5>

            <ul>
              

              <ul>
              <li>
                <button
                  class="btn ml-3 hxn_btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample200hxn"
                  aria-expanded="false"
                  aria-controls="collapseExample200hxn"
                >
                  Horse Racing
                </button>
                <div class="collapse" id="collapseExample200hxn">
                  <div class="card card-body">
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne200alna"
                            >
                              <span className="glyphicon glyphicon-folder-close"></span>
                              Assembly Election
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseOne200alna"
                          className="panel-collapse collapse in"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>Assembly Election 2023</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <button
                  class="btn ml-3 hxn_btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample201hxn"
                  aria-expanded="false"
                  aria-controls="collapseExample201hxn"
                >
                  Greyhound Racing
                </button>
                <div class="collapse" id="collapseExample201hxn">
                  <div class="card card-body">
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne2002alna"
                            >
                              <span className="glyphicon glyphicon-folder-close"></span>
                              T10 Xl(1)
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseOne2002alna"
                          className="panel-collapse collapse in"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>Assembly Election 2023</td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      News
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      Newsletters
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      Comments
                                    </a>
                                    <span className="badge">42</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseTwo2003alna"
                            >
                              <span className="glyphicon glyphicon-th"></span>
                              T10 Xl(1)
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseTwo2003alna"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">
                                      Sydney vs Auk
                                    </a>{" "}
                                  </td>
                                </tr>
                                {/* <tr>
              <td>
                <a href="">Invoices</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="">Shipments</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="">Tex</a>
              </td>
            </tr> */}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseThree2004alna"
                            >
                              <span className="glyphicon glyphicon-user"></span>
                              T5 Xl
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseThree2004alna"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">GAW 11 vs TKR</a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseFour2005alna"
                            >
                              <span className="glyphicon glyphicon-file"></span>
                              Virtual Cricket
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseFour2005alna"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">Ind vs Pak</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Bng vs Nz</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Afg vs Nep</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Sa vs Wi</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
            </ul>
          </div>

          <div className="special-menu">
            <h5 className="text-yellow pl-2">
              <u>All Sport</u>
            </h5>

            <ul>
              <li>
                <button
                  class="btn ml-3 hxn_btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExamplehxn"
                  aria-expanded="false"
                  aria-controls="collapseExamplehxn"
                >
                 <img src={politics} alt="" className="icn_emg"/> Politics
                </button>
                <div class="collapse" id="collapseExamplehxn">
                  <div class="card card-body">
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne"
                            >
                              <span className="glyphicon glyphicon-folder-close"></span>
                              Assembly Election
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseOne"
                          className="panel-collapse collapse in"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>Assembly Election 2023</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <button
                  class="btn ml-3 hxn_btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample2hxn"
                  aria-expanded="false"
                  aria-controls="collapseExample2hxn"
                >
                 <img src={cricket} alt="" className="icn_emg"/> Cricket
                </button>
                <div class="collapse" id="collapseExample2hxn">
                  <div class="card card-body">
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOnehxn"
                            >
                              <span className="glyphicon glyphicon-folder-close"></span>
                              T10 Xl(1)
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseOnehxn"
                          className="panel-collapse collapse in"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>Assembly Election 2023</td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      News
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      Newsletters
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      Comments
                                    </a>
                                    <span className="badge">42</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseTwohxn"
                            >
                              <span className="glyphicon glyphicon-th"></span>
                              T10 Xl(1)
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseTwohxn"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">
                                      Sydney vs Auk
                                    </a>{" "}
                                  </td>
                                </tr>
                                {/* <tr>
              <td>
                <a href="">Invoices</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="">Shipments</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="">Tex</a>
              </td>
            </tr> */}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseThreehxn"
                            >
                              <span className="glyphicon glyphicon-user"></span>
                              T5 Xl
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseThreehxn"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">GAW 11 vs TKR</a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseFourhxn"
                            >
                              <span className="glyphicon glyphicon-file"></span>
                              Virtual Cricket
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseFourhxn"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">Ind vs Pak</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Bng vs Nz</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Afg vs Nep</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Sa vs Wi</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>





              <li>
                <button
                  class="btn ml-3 hxn_btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample3hxn"
                  aria-expanded="false"
                  aria-controls="collapseExample3hxn"
                >
                 <img src={football} alt="" className="icn_emg"/> Football
                </button>
                <div class="collapse" id="collapseExample3hxn">
                  <div class="card card-body">
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne1hxn"
                            >
                              <span className="glyphicon glyphicon-folder-close"></span>
                              T10 Xl(1)
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseOne1hxn"
                          className="panel-collapse collapse in"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>Assembly Election 2023</td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      News
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      Newsletters
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      Comments
                                    </a>
                                    <span className="badge">42</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseTwo2hxn"
                            >
                              <span className="glyphicon glyphicon-th"></span>
                              T10 Xl(1)
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseTwo2hxn"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">
                                      Sydney vs Auk
                                    </a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseThree3hxn"
                            >
                              <span className="glyphicon glyphicon-user"></span>
                              T5 Xl
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseThree3hxn"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">GAW 11 vs TKR</a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseFour4hxn"
                            >
                              <span className="glyphicon glyphicon-file"></span>
                              Virtual Cricket
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseFour4hxn"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">Ind vs Pak</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Bng vs Nz</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Afg vs Nep</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Sa vs Wi</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>



              <li>
                <button
                  class="btn ml-3 hxn_btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample4hxn"
                  aria-expanded="false"
                  aria-controls="collapseExample4hxn"
                >
                 <img src={tennis} alt="" className="icn_emg"/> Tennis
                </button>
                <div class="collapse" id="collapseExample4hxn">
                  <div class="card card-body">
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne11alna"
                            >
                              <span className="glyphicon glyphicon-folder-close"></span>
                              T10 Xl(1)
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseOne11alna"
                          className="panel-collapse collapse in"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>Assembly Election 2023</td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      News
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      Newsletters
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      Comments
                                    </a>
                                    <span className="badge">42</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseTwo22alna"
                            >
                              <span className="glyphicon glyphicon-th"></span>
                              T10 Xl(1)
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseTwo22alna"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">
                                      Sydney vs Auk
                                    </a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseThree33alna"
                            >
                              <span className="glyphicon glyphicon-user"></span>
                              T5 Xl
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseThree33alna"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">GAW 11 vs TKR</a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseFour44alna"
                            >
                              <span className="glyphicon glyphicon-file"></span>
                              Virtual Cricket
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseFour44alna"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">Ind vs Pak</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Bng vs Nz</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Afg vs Nep</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Sa vs Wi</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>


              <li>
                <button
                  class="btn ml-3 hxn_btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample5hxn"
                  aria-expanded="false"
                  aria-controls="collapseExample5hxn"
                >
                <img src={table_tennis} alt="" className="icn_emg"/> Table Tennis
                </button>
                <div class="collapse" id="collapseExample5hxn">
                  <div class="card card-body">
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne112alna"
                            >
                              <span className="glyphicon glyphicon-folder-close"></span>
                              T10 Xl(1)
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseOne112alna"
                          className="panel-collapse collapse in"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>Assembly Election 2023</td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      News
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      Newsletters
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      Comments
                                    </a>
                                    <span className="badge">42</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseTwo222alna"
                            >
                              <span className="glyphicon glyphicon-th"></span>
                              T10 Xl(1)
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseTwo222alna"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">
                                      Sydney vs Auk
                                    </a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseThree332alna"
                            >
                              <span className="glyphicon glyphicon-user"></span>
                              T5 Xl
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseThree332alna"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">GAW 11 vs TKR</a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseFour442alna"
                            >
                              <span className="glyphicon glyphicon-file"></span>
                              Virtual Cricket
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseFour442alna"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">Ind vs Pak</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Bng vs Nz</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Afg vs Nep</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Sa vs Wi</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>



              <li>
                <button
                  class="btn ml-3 hxn_btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample6hxn"
                  aria-expanded="false"
                  aria-controls="collapseExample6hxn"
                >
                 <img src={basketball} alt="" className="icn_emg"/> Basketball
                </button>
                <div class="collapse" id="collapseExample6hxn">
                  <div class="card card-body">
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne113alna"
                            >
                              <span className="glyphicon glyphicon-folder-close"></span>
                              T10 Xl(1)
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseOne113alna"
                          className="panel-collapse collapse in"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>Assembly Election 2023</td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      News
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      Newsletters
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      Comments
                                    </a>
                                    <span className="badge">42</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseTwo223alna"
                            >
                              <span className="glyphicon glyphicon-th"></span>
                              T10 Xl(1)
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseTwo223alna"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">
                                      Sydney vs Auk
                                    </a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseThree333alna"
                            >
                              <span className="glyphicon glyphicon-user"></span>
                              T5 Xl
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseThree333alna"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">GAW 11 vs TKR</a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseFour443alna"
                            >
                              <span className="glyphicon glyphicon-file"></span>
                              Virtual Cricket
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseFour443alna"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">Ind vs Pak</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Bng vs Nz</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Afg vs Nep</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Sa vs Wi</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>


              <li>
                <button
                  class="btn ml-3 hxn_btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample7hxn"
                  aria-expanded="false"
                  aria-controls="collapseExample7hxn"
                >
                 <img src={volleyball} alt="" className="icn_emg"/> Volleyball
                </button>
                <div class="collapse" id="collapseExample7hxn">
                  <div class="card card-body">
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne114alna"
                            >
                              <span className="glyphicon glyphicon-folder-close"></span>
                              T10 Xl(1)
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseOne114alna"
                          className="panel-collapse collapse in"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>Assembly Election 2023</td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      News
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      Newsletters
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      Comments
                                    </a>
                                    <span className="badge">42</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseTwo224alna"
                            >
                              <span className="glyphicon glyphicon-th"></span>
                              T10 Xl(1)
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseTwo224alna"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">
                                      Sydney vs Auk
                                    </a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseThree334alna"
                            >
                              <span className="glyphicon glyphicon-user"></span>
                              T5 Xl
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseThree334alna"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">GAW 11 vs TKR</a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseFour444alna"
                            >
                              <span className="glyphicon glyphicon-file"></span>
                              Virtual Cricket
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseFour444alna"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">Ind vs Pak</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Bng vs Nz</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Afg vs Nep</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Sa vs Wi</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>



              <li>
                <button
                  class="btn ml-3 hxn_btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample8hxn"
                  aria-expanded="false"
                  aria-controls="collapseExample8hxn"
                >
                 <img src={snooker} alt="" className="icn_emg"/> Snooker
                </button>
                <div class="collapse" id="collapseExample8hxn">
                  <div class="card card-body">
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne115alna"
                            >
                              <span className="glyphicon glyphicon-folder-close"></span>
                              T10 Xl(1)
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseOne115alna"
                          className="panel-collapse collapse in"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>Assembly Election 2023</td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      News
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      Newsletters
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">
                                      Comments
                                    </a>
                                    <span className="badge">42</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseTwo225alna"
                            >
                              <span className="glyphicon glyphicon-th"></span>
                              T10 Xl(1)
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseTwo225alna"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">
                                      Sydney vs Auk
                                    </a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseThree335alna"
                            >
                              <span className="glyphicon glyphicon-user"></span>
                              T5 Xl
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseThree335alna"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">GAW 11 vs TKR</a>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseFour445alna"
                            >
                              <span className="glyphicon glyphicon-file"></span>
                              Virtual Cricket
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseFour445alna"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">Ind vs Pak</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Bng vs Nz</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Afg vs Nep</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">Sa vs Wi</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        {/* <Sidebar /> */}

        {/* <!-- Sidebar end  -->
	    <!-----=======body section start=======----> */}
        <div id="content">
          <div className="container">
          <div className="row">
              <div className="col-md-9 FFl">
                <div className="First_bar_main">
                  <div className="First_bar1 ">
                    <div className="fixure_title">
                      Upcoming <br /> Fixure
                    </div>
                    <div className="sldrr">
                      <Vertical2/>
                    </div>
                  </div>

                  <div className="First_bar2">
                    <marquee behavior="" scrollamount="4" direction="left" className="meqi">
                      Experience the Excitement of Live Sports, Live Casinos,
                      Virtual Casinos and Fantasy Games On Our Exchange. Play
                      Now To Win Unlimited.
                    </marquee>
                    <div className="bellUpper">
                      <img
                        src="https://wver.sprintstaticdata.com/v14/static/front/img/icons/speaker.svg"
                        alt="#"
                        className="bells"
                      />
                    </div>
                  </div>
                </div>

                <div className="second_bar_main">
                  <div className="dv1">
                    <a href="" className="my-3 dv1Inner d-flex justify-content-center align-items-center gap-2">
                      <div className="icn"><IoIosTennisball className="mnicn"/></div>
                      <div>
                        <p className="mb-0 mchDtl">US Open <br /> Women 2023</p>
                      </div>
                    </a>
                  </div>
                  <div className="dv1">
                    <a href="" className="my-3 dv1Inner d-flex justify-content-center align-items-center gap-2">
                      <div className="icn"><IoIosTennisball className="mnicn"/></div>
                      <div>
                        <p className="mb-0 mchDtl">US Open <br /> Men 2023</p>
                      </div>
                    </a>
                  </div>
                  <div className="dv1 basketball">
                    <a href="" className="my-3 dv1Inner d-flex justify-content-center align-items-center gap-2">
                      <div className="icn"><FaBasketballBall className="mnicn"/></div>
                      <div>
                        <p className="mb-0 mchDtl">FIBA World <br /> Cup 2023</p>
                      </div>
                    </a>
                  </div>
                  <div className="dv1 cricket">
                    <a href="" className="my-3 dv1Inner d-flex justify-content-center align-items-center gap-2">
                      <div className="icn"><MdSportsCricket className="mnicn"/></div>
                      <div>
                        <p className="mb-0 mchDtl">Pakistan <br /> Women 2023</p>
                      </div>
                    </a>
                  </div>
                  <div className="dv1 football">
                    <a href="" className="my-3 dv1Inner d-flex justify-content-center align-items-center gap-2">
                      <div className="icn"><BiFootball className="mnicn"/></div>
                      <div>
                        <p className="mb-0 mchDtl">Georgia vs <br /> Spain</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="MatchSlider_Bar">
                  <DashboardMatch_Slider/>
                </div>

                <div className="Match_detailsTab">
                  <DashboardMatchDetail_Tab/>
                </div>

                <div class="games_images">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-2">
                        <div class="img_item">
                          <a>
                            <img src="/assets/images/games/1.jpg" />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="img_item">
                          <a>
                            <img src="/assets/images/games/2.png" />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="img_item">
                          <a>
                            <img src="/assets/images/games/3.jpg" />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="img_item">
                          <a>
                            <img src="/assets/images/games/4.jpg" />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="img_item">
                          <a>
                            <img src="/assets/images/games/5.jpg" />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="img_item">
                          <a>
                            <img src="/assets/images/games/6.jpg" />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="img_item">
                          <a>
                            <img src="/assets/images/games/7.jpg" />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="img_item">
                          <a>
                            <img src="/assets/images/games/8.png" />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="img_item">
                          <a>
                            <img src="/assets/images/games/9.jpg" />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="img_item">
                          <a>
                            <img src="/assets/images/games/10.jpg" />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="img_item">
                          <a>
                            <img src="/assets/images/games/11.jpg" />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="img_item">
                          <a>
                            <img src="/assets/images/games/12.jpg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 ps-0">
                <div className="uPPerBarRT">
                  <div className="lftsD">
                    <div className="fwlltBck d-flex align-items-center">
                      <FaWallet className="wallt" />
                    </div>
                    <div className="text-end">
                      <p className="mb-0 writpts">pts: : 1500</p>
                      <p className="mb-0 writpts">exp: 0</p>
                    </div>
                  </div>

                  {/* <div className="rigtsD">
                    <div className="lftsD">
                      <div className="fwlltBck d-flex align-items-center">
                        <BiUser className="wallt" />
                      </div>
                      <div className="">
                        <Dropdown>
                          <Dropdown.Toggle
                            id="dropdown-basic"
                            className="dmoBtnn"
                          >
                            Demo
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item className="drpitm" href="#/action-1">
                              Account Statement
                            </Dropdown.Item>
                            <Dropdown.Item className="drpitm" href="#/action-2">
                              Current Bets
                            </Dropdown.Item>
                            <Dropdown.Item className="drpitm" href="#/action-3">
                              Casino Results
                            </Dropdown.Item>
                            <Dropdown.Item className="drpitm" href="#/action-4">
                              Set Button Value
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div> */}
                </div>

                <div className="rightSliDr text-danger">
                  <>
                  <Vertical/>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-----=======body section end=========----> */}
      </main>
    </div>
  );
}

export default Dashboard;
