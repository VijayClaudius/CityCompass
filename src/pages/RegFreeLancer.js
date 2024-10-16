// import { useState } from "react";
// import React from "react";
// import axios from "axios";

// const RegFreeLancer = ()=> {

//     const [freeLancer, setFreelancer] = useState(
//             {
//                 "free_lan_no":0,
//                 "fPerson":"",
//                 "contactno":"",
//                 "mailid":"",
//                 "password":"",
//                 "fwork":"",
//                 "w_price":0.0
//             }
//         );
// // /*
// */
/*       const FreelancerFormSubmit = (e) =>{
            e.preventDefault();
            console.log(freeLancer);
            fetch("http://localhost:9090/CityCompanions/freelancer", {
            method: "POST",
            mode : "no-cors",
            headers: {
                "access-control-allow-origin" : "*",
                "Accept": "application/json",                
                "Content-type": "application/json;charset=utf-8"
            },
            // Adding body or contents to send
            body: JSON.stringify(freeLancer),
            //body: freeLancer,
        })
        //.then(response => {
            //return response.json()
        //})
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            alert("Freelancer is Added....");
        })
        .catch(error=>{
            alert(error.message);
        })
    };
*/
// const FreelancerFormSubmit = (e) =>{
//     axios.post('http://localhost:9090/CityCompanions/freelancer', freeLancer).then(response=>{
//         console.log(response.data);
//         console.log(response.status);
//         console.log(response.statusText);
//         alert("Added Info...");
//         //navigate('/viewall');
//     })
// };
//     return (
//         <div className="row">
//             <div className="col-md-1"></div>
//             <div className="col-md-10">
//             <br /><br />
//                 <div className="card">
//                     <div className="card-header">
//                         <h4>Freelancer Register</h4>
//                     </div>
//                     <div className="card-body">
//                         <form onSubmit={FreelancerFormSubmit}>
//                         <div className="row">
//                             <div className="col-md-4">
//                                 <label>Name of the Person</label>
//                                 <input type="text"  name="fPerson" className="form-control"
//                                 onChange={(e)=>{setFreelancer({...freeLancer,fPerson:e.target.value})}} />
//                             </div>
//                             <div className="col-md-4">
//                                 <label>Contact Number</label>
//                                 <input type="text"  name="contactno" className="form-control"
//                                 onChange={(e)=>{setFreelancer({...freeLancer,contactno:e.target.value})}} />
//                             </div>
//                             <div className="col-md-4">
//                                 <label>Mail ID</label>
//                                 <input type="email"  name="mailid" className="form-control"
//                                 onChange={(e)=>{setFreelancer({...freeLancer,mailid:e.target.value})}} />
//                             </div>
//                         </div>
//                         <br />
//                         <div className="row">
//                             <div className="col-md-4">
//                                 <label>Password</label>
//                                 <input type="text"  name="password" className="form-control"
//                                 onChange={(e)=>{setFreelancer({...freeLancer,password:e.target.value})}} />
//                             </div>
//                             <div className="col-md-4">
//                                 <label>Freelance Work</label>
//                                 <select name="fwork" className="form-control"
//                                 onChange={(e)=>{setFreelancer({...freeLancer,fwork:e.target.value})}}>
//                                     <option value="-1">Select .....</option>
//                                     <option value="Electrician">Electrician</option>
//                                     <option value="AC">AC Repair</option>
//                                     <option value="Washing">Washing Machine Repair</option>
//                                     <option value="Plumber">Plumber</option>
//                                 </select>
//                             </div>
//                             <div className="col-md-4">
//                                 <label>Work Price per Hour </label>
//                                 <input type="text"  name="w_price" className="form-control"
//                                 onChange={(e)=>{setFreelancer({...freeLancer,w_price:parseFloat(e.target.value)})}} />
//                             </div>
//                         </div>
//                         <br />
//                         <div className="row">
//                             <div className="col-md-12" >
//                                 <input type="submit"  value="Register"  className="btn btn-success" />
//                             </div>
//                         </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-md-1"></div>
//         </div>
//     );
// }
// export default RegFreeLancer;

// src/pages/RegFreeLancer.js
import { useState } from "react";
import React from "react";
import axios from "axios";
import "./RegFreeLancer.css"; // Import the custom CSS file

const RegFreeLancer = () => {
  const [freeLancer, setFreelancer] = useState({
    free_lan_no: 0,
    fPerson: "",
    contactno: "",
    mailid: "",
    password: "",
    fwork: "",
    w_price: 0.0,
  });

  const FreelancerFormSubmit = (e) => {
    e.preventDefault(); // prevent form submission default behavior
    axios
      .post("http://localhost:9090/CityCompanions/freelancer", freeLancer)
      .then((response) => {
        console.log(response.data);
        alert("Freelancer Registered Successfully!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h4>Freelancer Registration</h4>
        </div>
        <div className="form-body">
          <form onSubmit={FreelancerFormSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name of the Person</label>
                <input
                  type="text"
                  name="fPerson"
                  className="form-input"
                  onChange={(e) =>
                    setFreelancer({ ...freeLancer, fPerson: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="text"
                  name="contactno"
                  className="form-input"
                  onChange={(e) =>
                    setFreelancer({ ...freeLancer, contactno: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Mail ID</label>
                <input
                  type="email"
                  name="mailid"
                  className="form-input"
                  onChange={(e) =>
                    setFreelancer({ ...freeLancer, mailid: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-input"
                  onChange={(e) =>
                    setFreelancer({ ...freeLancer, password: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Freelance Work</label>
                <select
                  name="fwork"
                  className="form-input"
                  onChange={(e) =>
                    setFreelancer({ ...freeLancer, fwork: e.target.value })
                  }
                >
                  <option value="-1">Select .....</option>
                  <option value="Electrician">Electrician</option>
                  <option value="AC">AC Repair</option>
                  <option value="Washing">Washing Machine Repair</option>
                  <option value="Plumber">Plumber</option>
                </select>
              </div>
              <div className="form-group">
                <label>Work Price per Hour</label>
                <input
                  type="number"
                  name="w_price"
                  className="form-input"
                  onChange={(e) =>
                    setFreelancer({
                      ...freeLancer,
                      w_price: parseFloat(e.target.value),
                    })
                  }
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-submit">
                <input type="submit" value="Register" className="btn-submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegFreeLancer;
