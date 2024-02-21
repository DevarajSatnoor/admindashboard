import React ,{useState} from "react";
import CloseIcon from "@mui/icons-material/Close";
import Sidebar from "./Sidebar";

function Filter({handleCloseFilter}) {



  return (
    <div style={{ boxSizing:"border-box" }}>
      <form action="">
      <div style={{display:"flex",justifyContent:'space-between',alignItems:''}}>
        <p style={{ fontSize: "18px", fontWeight: 400, color: "#555555" }}>
          File Based On Selection
        </p>
        <CloseIcon
          sx={{
            fontSize: "xx-large",
            color: "#2676c2",
            cursor: "pointer",
            top: "13px",
          }}
          onClick={handleCloseFilter}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <label htmlFor="">
              <input type="checkbox" />
              Active
            </label>
            <label htmlFor="">
              <input type="checkbox" />
              Removed
            </label>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontSize: "14px", color: "#4C4C4C" }}>
              Based on Skills
            </p>
            <label htmlFor="">
              <input type="checkbox" />
              UiUx Design
            </label>
            <label htmlFor="">
              <input type="checkbox" />
              FrontEnd
            </label>
            <label htmlFor="">
              <input type="checkbox" />
              Backend
            </label>
            <label htmlFor="">
              <input type="checkbox" />
              Devops
            </label>
          </div>
        </div>
        <div>
          <p style={{ color: "#4C4C4C", fontSize: "14px", fontWeight: 400 }}>
            Based On Location
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="">
              <input type="checkbox" />
              Banglore
            </label>{" "}
            <label htmlFor="">
              <input type="checkbox" />
              Chainai
            </label>{" "}
            <label htmlFor="">
              <input type="checkbox" />
              Lochi
            </label>{" "}
            <label htmlFor="">
              <input type="checkbox" />
              Hydrabad
            </label>{" "}
            <label htmlFor="">
              <input type="checkbox" />
              Pune
            </label>
          </div>
          <div
            style={{ width: "147px", marginLeft: "40px", marginBottom: "20px" }}
          >
            <button
              style={{
                border: "none",
                width: "147px",
                height: "31px",
                background: "#2676c2",
                color: "white",
                borderRadius: "4px",
                
              }}
              type="submit"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default Filter;