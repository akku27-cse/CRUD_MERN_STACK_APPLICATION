import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom";
import Register from "./Register";

function Home() {
  const [getUserdata, setUsredata] = useState([]);
  console.log(getUserdata);
const getdata = async (e) => {
  //e.preventDefault();


  const res = await fetch("/getdata", {
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
    getdata()
  }, []);


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
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <NavLink to="/register" className="btn btn-primary">
            Add data
          </NavLink>
        </div>
        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">Id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>

              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              getUserdata.map((element, id) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{id + 1}</th>

                      <td>{element.name}</td>
                      <td>{element.email}</td>
                      <td>{element.phone}</td>
                      <td className="d-flex justify-content-between">
                        <NavLink to={`view/${element._id}`}>
                          <button className="btn btn-success">
                            <RemoveRedEyeIcon />
                          </button>
                        </NavLink>
<NavLink to={`edit/${element._id}`}>
                        <button className="btn btn-primary">
                          <EditIcon />
                        </button>
                        </NavLink>
                        
                        <button onClick={()=>deleteuser(element._id)} className="btn btn-danger">
                          <DeleteIcon />
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
