"use client";

import Comments from "@/components/comments/Comments";
import Header from "@/components/header/Header";
import Rating from "@/components/rating/Rating";
import ShareFeature from "@/components/shareFeature/ShareFeature";
import UserDetails from "@/components/userDetails/UserDetails";
import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import UserShareDetail from "@/components/userShareDetail/UserShareDetail";

export default function ShareProfile() {
    const [show, setShow] = useState(false);
    const [userData, setUserData] = useState(null);
    const [metaData, setMetaData] = useState({
        userCode: "",
        cardImageURL: "",
        profileTitle: "",
        cardTitle: "",
        description: "",
    });
    const toggleModal = () => {
        setShow((prev) => !prev);
    };
    useEffect(() => {
        const fetchMetaData = async (userCode) => {
            const response = await axios.post(
                `https://dev.elred.io/noSessionPreviewCardScreenshot?userCode=${userCode}`
            );
            console.log(response);
            if (response.data) {
                setMetaData(response.data.result[0]);
            }
        };
        const query = new URLSearchParams(window.location.search);
        const value = query.get("userCode");
        if (value) fetchMetaData(value);
    }, []);
    return (
        <>
            <Head>
                <title>Profile Data</title>
                <meta property="og:title" content={metaData.cardTitle} />
                <meta property="og:image" content={metaData.cardImageURL} />
                <meta property="og:url" content={"test.elred.io"} />
                <meta
                    property="og:description"
                    content={metaData.description}
                />
            </Head>
            <Header />
            <UserDetails userData={userData} setUserData={setUserData} />
            <ShareFeature toggleModal={toggleModal} />
            <Rating />
            <Comments />
            <UserShareDetail
                show={show}
                handleClose={toggleModal}
                userData={userData}
                metaData={metaData}
            />
        </>
    );
}
