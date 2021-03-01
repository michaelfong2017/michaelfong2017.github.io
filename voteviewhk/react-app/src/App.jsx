import React, { lazy, Suspense } from "react"
import {
  RecoilRoot,
} from "recoil"

import {
  Container,
  Col,
  Row,
  Spinner,
} from "react-bootstrap"

import "styles/app.scss"

const Navbar = lazy(() => import("components/Navbar"))
const Scatterplot = lazy(() => import("components/Scatterplot"))
const MemberCards = lazy(() => import("components/MemberCards"))

const App = () => {
  return (
    <RecoilRoot>
      <MyApp />
    </RecoilRoot>
  );
}

const MyApp = () => {
  return (
    <div>

      <Suspense fallback={
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      }>
        <Navbar />
      </Suspense>

      <Container fluid style={{ padding: "30px" }}>
        <Row style={{ flexDirection: "column" }} noGutters>

          <Suspense fallback={
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>

          }>
            <Scatterplot/>
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
