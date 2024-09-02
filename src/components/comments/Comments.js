import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Comments.scss";
import com01 from "@/assets/comment-01.png";
import com02 from "@/assets/comment-02.png";

const Comments = () => {
    return (
        <Container className="commentsContainer rounded">
            <div className="d-flex justify-content-between heading">
                <h2>Comments</h2>
                <h2>See All</h2>
            </div>
            <Row>
                <Col xs={1}>
                    <Image src={com01.src} alt="" />
                </Col>
                <Col>
                    <p>
                        Gwen Stacy{" "}
                        <span className="faded-text">
                            {" "}
                            See you in the next event
                        </span>{" "}
                        @roger vaccaro
                    </p>
                    <div className="timings">
                        <span>1s</span>
                        <span>241 likes</span>
                        <span>Reply</span>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={1}>
                    <Image src={com02.src} alt="" />
                </Col>
                <Col>
                    <p>
                        Gwen Stacy{" "}
                        <span className="faded-text">
                            {" "}
                            Never judge a book by its cover
                        </span>
                    </p>
                    <div className="timings">
                        <span>1s</span>
                        <span>241 likes</span>
                        <span>Reply</span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Comments;
