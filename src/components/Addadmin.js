import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Sidebar from "./Sidebar";

function Addadmin({handleClose}) {

  


  return (
    <div style={{ boxSizing:"border-box" }}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        {" "}
        <p style={{ fontSize: "18px", fontFamily: 400, color: "#555555" }}>
          Add Admin{" "}
        </p>
        <CloseIcon
          sx={{
            fontSize: "xx-large",
            color: "#2676c2",
            cursor: "pointer",
          }}
          onClick={handleClose}
        />
      </div>
       <form action="">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="a">
            <label htmlFor="">User name</label>
            <input
              type="text"
              placeholder="User Name"
              required
              style={{
                width: "251px",
                height: "30px",
                borderRadius: "2px",
                border: "1px solid #CACACA",
              }}
            />
          </div>
          <div className="a">
            <label htmlFor="">Designation</label>
            <input
              type="text"
              placeholder="Enter Designation"
              style={{
                width: "251px",
                height: "30px",
                borderRadius: "2px",
                border: "1px solid #CACACA",
              }}
              required
            />
          </div>
        </div>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="a">
            <label htmlFor="">User Mobile Number</label>
            <input
              type="text"
              placeholder="Enter User Mobile Number"
              required
              style={{
                width: "251px",
                height: "30px",
                borderRadius: "2px",
                border: "1px solid #CACACA",
              }}
            />
          </div>
          <div className="a">
            <label htmlFor="">New Password</label>
            <input
              type="text"
              placeholder="Enter New Password"
              required
              style={{
                width: "251px",
                height: "30px",
                borderRadius: "2px",
                border: "1px solid #CACACA",
              }}
            />
          </div>
        </div>{" "}
        <br />
        <div className="a">
          <label htmlFor="">Confirm Password</label>
          <input
            type="text"
            required
            placeholder="Re-enter Password"
            style={{
              width: "251px",
              height: "30px",
              borderRadius: "2px",
              border: "1px solid #CACACA",
            }}
          />
        </div>{" "}
        <br />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            type="submit"
            style={{
              background: "#2676c2",
              color: "white",
              textAlign: "center",
              width: "146px",
              height: "31px",
              borderRadius: "4px",
              outline: "none",
              border: "none",
            }}
          >
            Create
          </button>
        </div>
      </form> 
    </div>
  );
}

export default Addadmin;






