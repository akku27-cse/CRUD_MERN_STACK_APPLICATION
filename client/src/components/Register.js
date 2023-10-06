import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Register() {
  //usestate hoock
  const [inpval,setInp] = useState({
    name: "",
    add: "",
    age: "",
    tag: "",
    phone:"",
    email: "",
    desc:""
  })
  const setdata = (e) => {
    console.log(e.target.value);
    const { name,value} = e.target;
    setInp((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }
  const adddata = async (e) => {
      
    e.preventDefault();

      const { name, age, tag, add, phone, email, desc } = inpval;
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
          tag,
          add,
          phone,
          email,
          desc
        })
      });
      const data = await res.json();
      console.log(data);
      if(res.status == 422 || !data) {
        alert("error");
        console.log("error");
      } else {
        alert("data added");
        console.log("data added")
      }
    }
  
  return (
    <>
      <div className="container">
        <NavLink to="/" className="btn btn-primary">Home</NavLink>
        <form className="mt-5 ">
          <div className="row">
            <div class="mb-3 col-lg-6 col-md-6 col-12 ">
              <label for="UserName" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={inpval.name}
                onChange={setdata}
                class="form-control"
                id="username"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1" class="form-label">
                Address
              </label>
              <input
                type="text"
                name="add"
                value={inpval.add}
                onChange={setdata}
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1" class="form-label">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={inpval.age}
                onChange={setdata}
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1" class="form-label">
                Tag
              </label>
              <input
                type="text"
                name="tag"
                value={inpval.tag}
                onChange={setdata}
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1" class="form-label">
                Mobile
              </label>
              <input
                value={inpval.phone}
                onChange={setdata}
                type="number"
                name="phone"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1" class="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={inpval.email}
                onChange={setdata}
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 col-lg-12 col-md-12 col-12">
              <label for="exampleInputPassword1" class="form-label">
                Description
              </label>
              <textarea
                name="desc"
                value={inpval.desc}
                onChange={setdata}
                className="form-control"
                id=""
                cols="30"
                rows="10"
              />
            </div>

            <button type="submit" onClick={adddata} class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register