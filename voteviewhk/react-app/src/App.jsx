import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil"

import {
  Container,
  Col,
  Row,
  Spinner,
} from "react-bootstrap"

import "styles/app.scss";
import * as d3 from "d3";

const Navbar = lazy(() => import("components/Navbar"));
const MemberCards = lazy(() => import("components/MemberCards"));

const Scatterplot = lazy(() => import("components/Scatterplot"));

const App = (props) => {
  const [selectedLegislator, setSelectedLegislator] = useState(null);

  //function that will hook into the state to change it
  function updateLegislator(legislator) {
    setSelectedLegislator(legislator);
  }

  return (
    <div>
      <Suspense fallback={
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>

      }>
        <Navbar />
      </Suspense>

      <Container fluid style={{padding: "30px"}}>
        <Row style={{ flexDirection: "column" }} noGutters>

          <Suspense fallback={
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>

          }>
            <Scatterplot onChangeLegislator={updateLegislator} />
          </Suspense>
          {/* <p>{data && selectedLegislator && data[selectedLegislator] ? "Legislator " + data[selectedLegislator]['name_ch'] : data ? "No legislator selected" : "Loading..."}</p> */}


          <Suspense fallback={
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          }>
            <MemberCards />
          </Suspense>
        </Row>

      </Container>


    </div>
  );
};

export default App;
