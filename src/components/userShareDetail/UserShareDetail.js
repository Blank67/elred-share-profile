import { Card, Image, Modal } from "react-bootstrap";
import React, { useEffect } from "react";
import group01 from "@/assets/group-01.png";
import group02 from "@/assets/group-02.png";
import group03 from "@/assets/group-03.png";
import "./UserShareDetail.scss";

const UserShareDetail = ({ show, handleClose, userData, metaData }) => {
    const handleShare = async () => {
        if (navigator.share) {
            console.log("SHARE START!");
            const url = `${window.location.origin}/shareCard?userCode=${metaData.userCode}`;
            await navigator.share({
                title: metaData.cardTitle,
                text: metaData.description,
                url,
            });
            console.log("SHARE END!");
        }
    };
    return (
        <Modal show={show} onHide={handleClose} keyboard={false} centered>
            <Modal.Body>
                <Card className="userCardFull">
                    <Card.Header onClick={handleShare}>Share</Card.Header>
                    <Card.Body>
                        <div
                            className="userCardContainer"
                            style={{
                                backgroundImage:
                                    userData?.profileDesignInfo
                                        ?.profileBannerImageURL,
                            }}
                        >
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
                            </div>
                            <div className="designation">
                                <span>{userData?.title[0]?.value ?? ""}</span>
                            </div>
                            <div>
                                <span>
                                    {userData?.address?.fullAddress ?? ""}
                                </span>
                            </div>
                            <div className="share-image">
                                <div className="group1">
                                    <div>
                                        <Image src={group01.src} alt="" />
                                    </div>
                                    <div>
                                        <Image src={group02.src} alt="" />
                                    </div>
                                </div>
                                <div className="group2">
                                    <Image src={group03.src} alt="" />
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Modal.Body>
        </Modal>
    );
};

export default UserShareDetail;
