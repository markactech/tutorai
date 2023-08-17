 import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Contactus() {
  return (
    <div id="contact">
        <h3 className="text-center">For Contact</h3>
      <div className="container   justify-content-center p-3">
        <div className="row  ">
            <div className="col-md-12">
            <div className="row mb-3 ">
          <div className="col-md-3">
            <Form.Label>Email</Form.Label>
          </div>
          <div className="col-md-9">
            <Form.Control type="email"   placeholder="Enter your Email" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-3">
            <Form.Label>Name</Form.Label>
          </div>
          <div className="col-md-9">
            <Form.Control type="text"    placeholder="Enter your name" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-3">
            <Form.Label>Phone</Form.Label>
          </div>
          <div className="col-md-9">
            <Form.Control type="number"   placeholder="Enter Your Phone" />
          </div>
        </div>
        
     
        <div className="row mb-3">
          <div className="col-md-3">
            <Form.Label>Message</Form.Label>
          </div>
          <div className="col-md-9">
            <Form.Control as="textarea"  rows={3} />{" "}
          </div>
        </div>
        <div className="row">
            <div className="col-md-3">
              
            </div>
            <div className="col-md-9">
            <Button>Submit</Button>
            </div>
        </div>
            </div>
        </div>
      
      
      </div>
    </div>
  );
}

export default Contactus;
