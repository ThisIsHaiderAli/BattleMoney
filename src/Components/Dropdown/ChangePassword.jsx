import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Matches/./Match.css";
import Navbar from "../Header/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import AllSide from "./AllSide";
import "./AllSide.css";
import { toast } from "react-hot-toast";

function Change_Password() {
  const user = sessionStorage.getItem("user");
  let ress = JSON.parse(user);
  let uId = ress.resultid;



  const[old,setOld]=useState('')
  const [confirm,setConfirm]=useState('')
  const [newpass,setNew]=useState('')

  const handleUpdatePassword=async()=>{
 try {
    if(newpass!=confirm){
      toast.error('New Password and Confirm Password should be same..!!')
      return;
    }else if(!old){
      toast.error('Invalid Password..!!')
      return;
    }else if(!newpass){
      toast.error('Invalid New Password..!!')
      return;
    }else if(!confirm){
      toast.error('Invalid Confirm Password..!!')
      return;
    }
   
        let res=await axios.post(`https://live-game-api.nakshtech.info/Update_pass`,{
          "uid":uId,
          "old_password":old,
          "new_password":newpass
      
        })
        console.log("Even_Type",res.data);
        // setscoreboard_data(res.data)
        if(res.data.data.result==="Update Successfull"){
          toast.success(res.data.data.result)
        }else{
          toast.error(res.data.data.result)
        }
        
    } catch (error) {
        console.log("Something Error in handleUpdatePassword API",error);
    }
}
  return (
    <div>
      <Navbar />
      <main class="main_root wrapper">
        <AllSide />
        {/* <!-----=======body section start=======----> */}
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-12 ">
                <div class="section_bg">
                  <div class="mybet_wedget">
                    <div class="bars_bg">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="section_heading">
                            <h2>Change Password</h2>
                            {/* <a className="btn" href="/Bet_History" >Bet History</a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <from>
                        {/* <div className="col-md-12"> */}
                          <div className="col-md-12">
                            <label className="fromdate"></label>
                            <br />
                            <input
                              className="password from-control"
                              type="text"
                              placeholder="Old Password"
                              value={old}
                              onChange={(e)=>setOld(e.target.value)}
                              maxLength={20}
                            />
                          </div>
                          <div className="col-md-12">
                            <label className="todate"></label>
                            <br />
                            <input
                              className="password from-control"
                              type="text"
                              placeholder="New Password"
                              value={newpass}
                              onChange={(e)=>setNew(e.target.value)}
                              maxLength={20}
                            />
                          </div>
                          <div className="col-md-12">
                            <label className="todate"></label>
                            <br />
                            <input
                              className="password from-control"
                              type="text"
                              placeholder="Confirm Password"
                              value={confirm}
                              onChange={(e)=>setConfirm(e.target.value)}
                            />
                          </div>
                          <div className="col-md-3">
                            <label className="todate"></label>
                            <br />
                            <input
                              className="btn btn-info"
                              // type="submit"
                              value="Change Password"
                              onClick={()=>handleUpdatePassword()}
                            />
                          </div>
                        {/* </div> */}
                        <br />
                      </from>
                    </div>
                  </div>
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

export default Change_Password;
