import React from "react";
import Header from "../components/Nav";
import FooterDiv from "../components/Footer";
import ProfileDiv from "../components/AdminDiv";

function PatientList() {
    return (
        <div>
        <Header />
        <ProfileDiv />
        <br></br>
        <br></br>
        <br></br>
        <FooterDiv/>
        </div>
    )
}

export default PatientList;