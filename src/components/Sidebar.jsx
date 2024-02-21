// Sidebar.js
import React, { useState } from "react";
import "./sidebar.css"; // Import CSS file for styling
import vector from "../Vector.svg";
import SearchIcon from "@mui/icons-material/Search";
import { Modal, Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Addadmin from "./Addadmin";
import Filter from "./Filter";
import Linechartarea from "./Linechartarea";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 580,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
  outline: "none",
  border: "none",
};
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
  borderRadius: 8,
  outline: "none",
  border: "none",
};
const Sidebar = () => {
  const [activeOption, setActiveOption] = useState("");
  const [model, setModel] = useState(0);
  const [model2, setModel2] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const [adminButton, setAdminButton] = useState(0);
  const [trainerButton, setTrainerButton] = useState(0);
  const [employerButton, setEmployerButton] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([
    {
      slNo: 1,
      name: "John",
      status: "Active",
      conversion: "messages",
      profile: "Admin",
    },
    {
      slNo: 2,
      name: "Jane",
      status: "Inactive",
      conversion: "messages",
      profile: "Trainer",
    },
    {
      slNo: 4,
      name: "Doe",
      status: "Active",
      conversion: "messeges",
      profile: "Employer",
    },
    {
      slNo: 5,
      name: "Doe",
      status: "Active",
      conversion: "messeges",
      profile: "Employer",
    },
    {
      slNo: 6,
      name: "Doe",
      status: "Active",
      conversion: "messeges",
      profile: "Employer",
    },
    {
      slNo: 7,
      name: "Doe",
      status: "Active",
      conversion: "messeges",
      profile: "Employer",
    },
    {
      slNo: 2,
      name: "Jane",
      status: "Inactive",
      conversion: "messages",
      profile: "Trainer",
    },
    {
      slNo: 4,
      name: "Doe",
      status: "Active",
      conversion: "messeges",
      profile: "Employer",
    },
    {
      slNo: 5,
      name: "Doe",
      status: "Active",
      conversion: "messeges",
      profile: "Employer",
    },
    {
      slNo: 6,
      name: "Doe",
      status: "Active",
      conversion: "messeges",
      profile: "Employer",
    },
    {
      slNo: 7,
      name: "Doe",
      status: "Active",
      conversion: "messeges",
      profile: "Employer",
    },
    {
      slNo: 2,
      name: "Jane",
      status: "Inactive",
      conversion: "messages",
      profile: "Trainer",
    },
    {
      slNo: 4,
      name: "Doe",
      status: "Active",
      conversion: "messeges",
      profile: "Employer",
    },
    {
      slNo: 5,
      name: "Doe",
      status: "Active",
      conversion: "messeges",
      profile: "Employer",
    },
    {
      slNo: 6,
      name: "Doe",
      status: "Active",
      conversion: "messeges",
      profile: "Employer",
    },
    {
      slNo: 7,
      name: "Doe",
      status: "Active",
      conversion: "messeges",
      profile: "Employer",
    },
    {
      slNo: 2,
      name: "Jane",
      status: "Inactive",
      conversion: "messages",
      profile: "Trainer",
    },
    {
      slNo: 4,
      name: "Doe",
      status: "Active",
      conversion: "messeges",
      profile: "Employer",
    },
    {
      slNo: 5,
      name: "Doe",
      status: "Active",
      conversion: "messeges",
      profile: "Employer",
    },
    {
      slNo: 6,
      name: "Doe",
      status: "Active",
      conversion: "messeges",
      profile: "Employer",
    },
    {
      slNo: 7,
      name: "Doe",
      status: "Active",
      conversion: "messeges",
      profile: "Employer",
    },
  ]);

  const rowsPerPage = 4; // Number of rows per page

  // Calculate pagination range
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Handle page change
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  // Filter table data based on current page
  const paginatedData = tableData.slice(startIndex, endIndex);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [openFilter, setOpenFilter] = React.useState(false);
  const handleOpenFilter = () => setOpenFilter(true);
  const handleCloseFilter = () => setOpenFilter(false);

  const showAdditionalButtons = (buttonId) => {
    setActiveButton(buttonId);
    setAdminButton(1);
    setEmployerButton(1);
    setTrainerButton(1);
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
    setModel(1);
    setModel2(2);
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <ul>
          <li
            id="button1"
            className={activeOption === "sidebar-content1" ? "active" : ""}
            onClick={() => handleOptionClick("sidebar-content1")}
          >
            <p>Dashboard</p>
          </li>
          <li
            id="button2"
            className={activeOption === "user-management" ? "active" : ""}
            onClick={() => handleOptionClick(" user Management")}
            style={{
              color: activeOption === "User Management" ? "#2676c2" : "", // Change text color
              backgroundColor:
                activeOption === "User Management"
                  ? "rgb(38, 118, 194, 0.1)"
                  : "", // Change background color
              border:
                activeOption === "User Management" ? "1px solid #2676c2" : "", // Change border color
            }}
          >
            <p>User Management</p>
          </li>
          <li>
            <p>Role-Based Access Control</p>
          </li>
          <li>
            <p>Trainer Management</p>
          </li>
          <li>
            <p>Employer Management</p>
          </li>
          <li>
            <p>Messages</p>
          </li>
          <li>
            <p>Settings</p>
          </li>
        </ul>
      </div>

      <div className="sidebar-content">
        <div className="breadcrumbs">
          <span style={{ color: "#555555", fontSize: "14px", fontWeight: 400 }}>
            Dashboard
          </span>
          <span className="breadcrumbs2">{" > User Management"}</span>
        </div>
        {model === 1 && (
          <div className="sidebar-content1">
            {activeOption === "sidebar-content1" && (
              <div>
                <Linechartarea />
              </div>
            )}
          </div>
        )}
        {model2 === 2 && (
          <div className="user-management">
            {activeOption === " user Management" && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "1138px",
                  height: "60px",
                  alignItems: "center",
                }}
              >
                <div style={{ marginLeft: "80px" }}>
                  <div className="usermanagement-top-buttons">
                    <button
                      className={
                        activeButton === "usermanagement-top-button1"
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        showAdditionalButtons("usermanagement-top-button1")
                      }
                    >
                      Admin
                    </button>
                    <button
                      className={
                        activeButton === "usermanagement-top-button2"
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        showAdditionalButtons("usermanagement-top-button2")
                      }
                    >
                      Trainers
                    </button>
                    <button
                      className={
                        activeButton === "usermanagement-top-button3"
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        showAdditionalButtons("usermanagement-top-button3")
                      }
                    >
                      Employers
                    </button>
                  </div>
                  <div className="searchbar1">
                    <div style={{ position: "relative", width: "fit-content" }}>
                      <input type="text" placeholder="Search what you want" />
                      <SearchIcon
                        sx={{
                          color: "#888888",
                          fontSize: "24px",
                          position: "relative",
                          right: "40px",
                          top: "7px",
                        }}
                      />
                    </div>{" "}
                    <div>
                      <button
                        onClick={handleOpenFilter}
                        style={{
                          background: "none",
                          outline: "none",
                          border: "none",
                          display: "inline-flex",
                          gap: "10px",
                          alignItems: "center",
                          color: "#4C4C4C",
                          fontFamily: "Poppins",
                          position: "relative",
                          right: "95px",
                        }}
                      >
                        {" "}
                        Filter{" "}
                        <img src={vector} alt="" height={15} width={15} />
                      </button>
                      <Modal open={openFilter} onClose={handleCloseFilter}>
                        <Box sx={style1}>
                          <Filter handleCloseFilter={handleCloseFilter} />
                        </Box>
                      </Modal>
                    </div>
                  </div>
                  <div className="table-details">
                    <table className="custom-table">
                      <thead>
                        <tr>
                          <th>sl.no</th>
                          <th>name</th>
                          <th>status</th>
                          <th>conversion</th>
                          <th>profile</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedData.map((row, index) => (
                          <tr key={index}>
                            <td style={{ color: "#888888" }}>{row.slNo}</td>
                            <td style={{ color: "#2676c2" }}>{row.name}</td>
                            <td
                              className={
                                row.status === "Active"
                                  ? "active1"
                                  : "inactive1"
                              }
                            >
                              {row.status}
                            </td>
                            <td style={{ color: "#888888" }}>
                              {row.conversion}
                            </td>
                            <td style={{ color: "#888888" }}>{row.profile}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <Stack
                    sx={{
                      position: "absolute",
                      bottom: "10px",
                      display: "inline-flex",
                      justifyContent: "space-between",
                      width: "940px",
                    }}
                    direction={"row"}
                  >
                    <div>Total Participants {"- 20"}</div>
                    <Pagination
                      count={Math.ceil(tableData.length / rowsPerPage)}
                      page={currentPage}
                      onChange={handlePageChange}
                      renderItem={(item) => (
                        <PaginationItem
                          slots={{
                            previous: ArrowBackIcon,
                            next: ArrowForwardIcon,
                          }}
                          {...item}
                        />
                      )}
                    />
                  </Stack>
                </div>

                <div className="usermanagement-top-clicking-buttons">
                  {adminButton === 1 && (
                    <div>
                      {activeButton === "usermanagement-top-button1" && (
                        <div>
                          <button onClick={handleOpen}>Add Admin +</button>
                          <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={style}>
                              <Addadmin handleClose={handleClose} />
                            </Box>
                          </Modal>
                        </div>
                      )}
                    </div>
                  )}

                  {trainerButton === 1 && (
                    <div>
                      {activeButton === "usermanagement-top-button2" && (
                        <div>
                          <button onClick={handleOpen1}>
                            Create Trainer +
                          </button>
                          <Modal
                            open={open1}
                            onClose={handleClose1}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={style}>
                              <Addadmin />
                            </Box>
                          </Modal>
                        </div>
                      )}
                    </div>
                  )}

                  {employerButton === 1 && (
                    <div>
                      {activeButton === "usermanagement-top-button3" && (
                        <div>
                          <button onClick={handleOpen2}>
                            Create employer +
                          </button>
                          <Modal
                            open={open2}
                            onClose={handleClose2}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={style}>
                              <Addadmin />
                            </Box>
                          </Modal>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
