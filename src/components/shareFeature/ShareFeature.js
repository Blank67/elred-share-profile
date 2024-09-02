import React from "react";
import { Container, Image } from "react-bootstrap";
import shareIcon from "@/assets/shareIcon.png";
import "./ShareFeature.scss";

const ShareFeature = ({ toggleModal }) => {
    return (
        <Container className="shareIconContainer rounded">
            <Image
                src={shareIcon.src}
                alt=""
                onClick={() => {
                    toggleModal();
                }}
            />
        </Container>
    );
};

export default ShareFeature;
