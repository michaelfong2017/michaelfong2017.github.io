import React, { useState } from "react";
import {
  Card,
  CardColumns,
} from "react-bootstrap"
import styled from "styled-components"
import memberData from "./MemberData"

const MyMemberCards = () => {

  const MyCardColumns = styled(CardColumns)`
    // @media (min-width: 576px) {
      column-count: 3
    // }
  `;
  const MyCard = styled(Card)`
    && {
      display: inline-flex;
      flex-direction: row;
      width: 300px;
      height: 100px;
    }
  `;
  const MyCardImg = styled(Card.Img)`
    && {
      width: auto;
      height: 100%;
    }
  `;
  const MyCardBody = styled(Card.Body)`
    padding: 0.5rem;
    > .card-title {
      font-size: 14px;
    }
    // > .card-subtitle {
    //   font-size: 12px;
    // }
    > .card-text {
      font-size: 12px;
    }
  `;

  const renderCard = (card, index) => {
    return (
      <MyCard key={index}>
        <MyCardImg variant="top" src={card.image} />
        <MyCardBody>
          <Card.Title>{card.title}</Card.Title>
          {/* <Card.Subtitle>{card.subtitle}</Card.Subtitle> */}
          <Card.Text>
            {card.summary}
          </Card.Text>
        </MyCardBody>
      </MyCard>
    );
  };

  return (
    <MyCardColumns>
      {memberData.map(renderCard)}
    </MyCardColumns>

  );
};

export default MyMemberCards;
