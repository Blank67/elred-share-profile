"use client";

import React, { useEffect, useState } from "react";
import "./UserDetails.scss";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import axios from "axios";
import UserCard from "../userCard/UserCard";
import verifiedIcon from "@/assets/verified.svg";
import titleIcon from "@/assets/title.svg";
import locationIcon from "@/assets/location.png";

const UserDetails = ({ userData, setUserData }) => {
    useEffect(() => {
        const getUserData = async (userCode) => {
            const response = await axios.post(
                `https://dev.elred.io/noSessionProfileDetails?userCode=${userCode}`
            );
            if (response.status === 200) {
                localStorage.setItem(
                    "data",
                    JSON.stringify(response.data.result[0])
                );
                setUserData(response.data.result[0]);
            }
        };
        const query = new URLSearchParams(window.location.search);
        const value = query.get("userCode");
        if (value) getUserData(value);
    }, [setUserData]);
    return (
        <section className="userDetailsSection">
            <Container className="mb-4">
                <Image
                    alt=""
                    src={userData?.dpURL}
                    roundedCircle
                    className="profileImage"
                />
                <div className="userName">
                    <span>
                        {userData?.firstname ?? ""}&nbsp;
                        {userData?.lastname ?? ""}
                    </span>
                    <Image src={verifiedIcon.src} alt="" />
                </div>
                <div className="title">
                    <Image src={titleIcon.src} alt="" />
                    <span>{userData?.title[0]?.value ?? ""}</span>
                </div>
                <div className="location">
                    <Image src={locationIcon.src} alt="" />
                    <span>{userData?.address?.fullAddress ?? ""}</span>
                </div>
            </Container>
            <UserCard userData={userData} isCard={false} />
        </section>
    );
};

export default UserDetails;
