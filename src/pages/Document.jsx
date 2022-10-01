import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Newnav from "../components/NewNav/Newnav";
import AddIcon from "@mui/icons-material/Add";
import DocCard from "../components/docCard/docCard";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

const Document = () => {
  const style = {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [data, setData] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [modal, setModal] = useState();

  const modalSubmitHandler = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target).entries());
    console.log(formData);
    setModal(formData);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return navigate("/");
    }
    const token = localStorage.getItem("token");
    axios
      .get(`http://10.1.105.126:8080/api/v1/doc/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (modal) {
      axios
        .post(
          `http://10.1.105.126:8080/api/v1/doc/create`,
          JSON.stringify(modal),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          navigate(`/editor/?docId=${res.data.data.docId}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [modal]);

  return (
    <div>
      <Newnav isDoc={true} />
      <div className="content-wrapper w-[95%] m-auto cursor-pointer">
        <div class="  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-4 mt-8">
          <div>
            <div
              class="p-6  mt-3 max-w-sm bg-white rounded-xl border border-gray-200 shadow-md m-auto"
              onClick={handleOpen}
            >
              <div class="flex justify-between mb-8">
                <div class="text-[#BD3738]">
                  <AddIcon />
                </div>
                <div class="text-gray-400">
                  <span class="material-symbols-outlined">more_vert</span>
                </div>
              </div>
              <a href="#">
                <h5 class="mb-2 text-md font-semibold tracking-tight text-gray-700 ">
                  Add New Files
                </h5>
              </a>
              <p class=" text-xs text-gray-400 dark:text-gray-400"></p>
            </div>
          </div>
          {data && data.map((d) => <DocCard key={`${d._id}`} d={d} />)}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="absolute">
          <form onSubmit={modalSubmitHandler}>
            <label for="docName" className="text-3xl">
              {" "}
              Create
            </label>
            <input
              type="text"
              id="docName"
              name="title"
              className="w-full border mt-12 h-10 px-3 rounded"
              placeholder="Enter Document Name"
            />
            <button
              type="submit"
              className="bg-[#BD3738] rounded-lg p-2 text-white px-6 mt-16"
            >
              Create
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Document;
