import React from "react";
import { Card, Container, Image } from "react-bootstrap";
import "./UserCard.scss";
import group01 from "@/assets/links-small.png";
import group03 from "@/assets/contact-small.png";

const UserCard = ({ userData, isCard = false }) => {
    return (
        <Container>
            <Card
                className="userCard"
                style={{ width: "7rem", height: "7rem" }}
            >
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
                        <div>
                            <span>{userData?.title[0]?.value ?? ""}</span>
                        </div>
                        <div>
                            <span>{userData?.address?.fullAddress ?? ""}</span>
                        </div>
                        <div className="share-image">
                            <div>
                                <Image src={group01.src} alt="" />
                            </div>
                            <div>
                                <Image src={group03.src} alt="" />
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default UserCard;
