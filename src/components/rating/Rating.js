import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import starIcon from "@/assets/starIcon.png";
import "./Rating.scss";

const Rating = () => {
    const ratingData = [
        {
            id: "1",
            cout: 57,
            text: "Has ethical code of conduct and is safe to do bussines with",
        },
        { id: "2", cout: 27, text: "Met In real life/Video call" },
    ];
    return (
        <Container className="ratingContainer rounded">
            <Image
                src={starIcon.src}
                roundedCircle
                alt=""
                className="starImg"
            />
            <h2 className="title">Rating</h2>
            <div className="ratingList">
                {ratingData.map((itm, i) => (
                    <div key={itm.id}>
                        <Row className="my-2">
                            <Col xs={2} md={2} className="count">
                                {itm.cout}
                            </Col>
                            <Col xs={10} md={10} className="text">
                                {itm.text}
                            </Col>
                        </Row>
                        <hr />
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Rating;
