import React, {useState} from "react";

const ViewFreeLancer = ()=>{
    const [freeLancer, setFreelancer] = useState(
        [
            {
                "fPerson":"Pavan Kumar", 
                "contactno":"909091234",
                "mailid":"pavan@gmail.com",
                "password":"p2123",
                "fwork":"Plumber",
                "w_price":1200.00
            },
            {
                "fPerson":"Kiran Kumar", 
                "contactno":"909093412",
                "mailid":"kiran@gmail.com",
                "password":"k@123",
                "fwork":"Electrican",
                "w_price":1000.00
            },
            {
                "fPerson":"Mahesh Kumar", 
                "contactno":"909051234",
                "mailid":"mahesh@gmail.com",
                "password":"m@123",
                "fwork":"AC Technician",
                "w_price":1500.00
            }
        ]
        );

    return(
        <div>
            <br /><br />
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="card">
                        <div className="card-header">
                            <h5>Registered Freelancer Information</h5>
                        </div>                        
                        <div className="card-body">
                        {freeLancer.length > 0 && (
                            <table className="table table-success table-striped">
                                <tr>
                                    <th>Name of Person</th>
                                    <th>Contact Number</th>
                                    <th>Mail ID</th>
                                    <th>Password</th>
                                    <th>Nature of Work</th>
                                    <th>Price per hour</th>
                                </tr>
                                {freeLancer.map(fl => (
                                <tr>
                                    <td>{fl.fPerson}</td>
                                    <td>{fl.contactno}</td>
                                    <td>{fl.mailid}</td>
                                    <td>{fl.password}</td>
                                    <td>{fl.fwork}</td>
                                    <td>{fl.w_price}</td>
                                </tr>    
                                ))}
                            </table>
                        )}
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    );
}

export default ViewFreeLancer;