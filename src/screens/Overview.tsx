import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";

import { Charts } from "../components/Charts";
import { Cards } from "../components/Cards";

import { Container, Row, Col } from "react-bootstrap";

import "../styles/overview.scss";

export function Overview() {
  return (
    <div className="home">
      <Sidebar />
      <Container className="home-container">
        <Navbar />

        <Container>
          <Row>
            <Col sm>
              <Cards title="Unresolved" description="60" />
            </Col>
            <Col sm>
              <Cards title="Overdue" description="16" />
            </Col>
            <Col sm>
              <Cards title="Open" description="43" />
            </Col>
            <Col sm>
              <Cards title="On hold" description="64" />
            </Col>
          </Row>
        </Container>

        <Container >
          <Row>
            <Col sm xs={12} md={8}>
              <Charts />
            </Col>
            <Col sm xs={6} md={4}>
              <div className="content-charts">
                <div className="chart-information-item">
                  <span className="item-title">Resolved</span>
                  <span className="item-subtitle">449</span>
                </div>

                <div className="chart-information-item">
                  <span className="item-title">Received</span>
                  <span className="item-subtitle">426</span>
                </div>

                <div className="chart-information-item">
                  <span className="item-title">
                    Average first response time
                  </span>
                  <span className="item-subtitle">33m</span>
                </div>

                <div className="chart-information-item">
                  <span className="item-title">Average response time</span>
                  <span className="item-subtitle">3h 8m</span>
                </div>

                <div className="chart-information-item">
                  <span className="item-title">Resolution within SLA</span>
                  <span className="item-subtitle">94%</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className=""></div>
      </Container>
    </div>
  );
}
