import * as React from "react";
// import { LineChart } from "@mui/x-charts/LineChart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
  // linearGradient,
  // defs,
} from "recharts";

export default function Linechartarea() {
  const data1 = [
    { day: "Mon", views: 700 },
    { day: "Tue", views: 200 },
    { day: "Wed", views: 150 },
    { day: "Thu", views: 300 },
    { day: "Fri", views: 400 },
    { day: "Sat", views: 250 },
    { day: "Sun", views: 500 },
  ];



  return (
    <>
      <p
        style={{
          position: "relative",
          left: "35px",
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          cursor: "pointer",
        }}
      >
        <ArrowBackIcon />
        back
      </p>
      <div
        style={{
          width: "1140px",
          display: "flex",
          marginLeft: "40px",
          gap: "10px",
        }}
      >
        <div
          style={{
            border: "1px solid #B7B7B7",
            width: "350px",
            padding: "20px",
            borderRadius: "10px",
            // gap:'20px'
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "258px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginLeft: "20px",
              // alignItems:'center',
              // justifyContent:'center'
            }}
          >
            <img src="" alt="xyz" width={200} height={200} />
            <span>
              name <span className="samecolor">{"- Renuth Khan"}</span>
            </span>
            <span>
              since <span className="samecolor">{"-1999"}</span>
            </span>
            <span>
              contact no <span className="samecolor">- 54678943</span>
            </span>
            <span>
              designation <span className="samecolor"> - wjhjh</span>
            </span>
            <span>
              Emp No <span className="samecolor"> - 566787</span>
            </span>
          </div>{" "}
          <br /> <br />
          <button
            style={{
              width: "274px",
              height: "39px",
              borderRadius: "5px",
              color: "white",
              background: "#2676c2",
              border: "none",
            }}
          >
            Send Message
          </button>
        </div>
        <div
          style={{
            border: "1px solid #B7B7B7",
            width: "880px",
            padding: "20px",
          }}
        >
          <p style={{ fontSize: "16px", fontWeight: 600, color: "#323232" }}>
            Description
          </p>
          <p style={{ fontSize: "16px", fontWeight: 400, color: "#393939" }}>
            Welcome to the Admin Portal of our Corporate Training Application!
            As an administrator, you have the power to manage users, oversee
            training posts, and ensure the smooth functioning of our training
            platform.
          </p>
          <p style={{ fontSize: "16px", fontWeight: 600, color: "#323232" }}>
            Feed Analytics
          </p>
          <AreaChart width={800} height={300} data={data1}   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient
                id="colorViews"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
                // gradientTransform="rotate(90)"
              >
                <stop offset="30%" stopColor="#2676C2" stopOpacity={0.7} />
                <stop offset="90%" stopColor="#2676C2" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" />
            <YAxis dataKey={'views'} />
            <Tooltip />
            <Line type="linear" dataKey="views" stroke="#2676c2" />
            <Area
              type="linear"
              dataKey="views"
              fillOpacity={1}
              stroke="#2676c2"
              fill="url(#colorViews)"
            />
          </AreaChart>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              background: "none",
            }}
          >
            <button className="button-remove">Remove</button>
          </div>
        </div>
      </div>
    </>
  );
}
