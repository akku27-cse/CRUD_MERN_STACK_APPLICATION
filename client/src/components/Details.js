import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkIcon from "@mui/icons-material/Work";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import { NavLink, useParams } from "react-router-dom";

function Details() {
   const [getUserdata, setUsredata] = useState([]);
   console.log(getUserdata);

  const { id } = useParams("");
  console.log(id);

  const getdata = async (e) => {
    //e.preventDefault();

    const res = await fetch(`/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (res.status == 422 || !data) {
      alert("error");
      console.log("error");
    } else {
      //alert("data added");
      setUsredata(data);
      console.log("data added");
    }
  };
  

  useEffect(() => {
    getdata();
  })

  //delete user
  const deleteuser = async (id) => {
    const res2 = await fetch(`/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log("error");
    } else {
      console.log("user deleted");
      //setDLTdata(deletedata);
      getdata();
    }
  };
  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome to Santu</h1>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className="add_btn">
            <NavLink to={`/view/${getUserdata._id}`}>
              <button className="btn btn-primary mx-2">
                <EditIcon />
              </button>
            </NavLink>

            <button
              onClick={() => deleteuser(getUserdata._id)}
              className="btn btn-danger"
            >
              <DeleteIcon />
            </button>
          </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img
                src="https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png"
                style={{ width: 50 }}
                alt="profile"
              />
              <h3 className="mt-3">
                Name:<span>{getUserdata.name} </span>
              </h3>
              <h3 className="mt-3">
                Age:<span>{getUserdata.age}</span>
              </h3>
              <p>
                <ContactMailIcon />
                Email:<span>{getUserdata.email}</span>
              </p>
              <p>
                <WorkIcon />
                Occuption:<span>{getUserdata.tag}</span>
              </p>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12">
              <p className="mt-4">
                <AddIcCallIcon /> Mobile:<span>{getUserdata.phone}</span>
              </p>
              <p className="mt-3">
                <PersonPinCircleIcon />
                Location:<span>{getUserdata.add}</span>
              </p>
              <p className="mt-3">
                Description:
                <span>{getUserdata.desc} </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Details;
