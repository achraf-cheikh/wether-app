import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const CurrentWether = ({ data }) => {
  return (
    <div
      style={{
        marginLeft: "500px",
        marginTop: "50px",
      }}
    >
      <Card style={{ width: "20rem", backgroundColor: "#282c34" }}>
        <Card.Img
          style={{ width: "150px", height: "auto", marginLeft: "80px" }}
          variant="top"
          src={`wether-icons/${data.weather[0].icon}.png`}
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "20px", color: "#ffffff" }}>
            {data.city}
          </Card.Title>
          <Card.Text style={{ fontSize: "50px", color: "#ffffff" }}>
            {Math.round(data.main.temp)}°C
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{data.main.humidity} %</ListGroup.Item>
          <ListGroup.Item>{data.wind.speed} m/s </ListGroup.Item>
          <ListGroup.Item>{data.main.pressure} HPa</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default CurrentWether;
