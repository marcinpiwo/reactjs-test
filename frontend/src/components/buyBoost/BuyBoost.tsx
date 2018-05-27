import * as React from 'react';
import { Tabs, Tab } from 'react-bootstrap';


class BuyBoost extends React.Component {
  render() {
    return (
      <div className="container">
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Placement Match">
            Placement Match
          </Tab>
          <Tab eventKey={2} title="Wins Boost">
            Wins Boost
          </Tab>
        </Tabs>

      </div>
    );
  }
}

export default BuyBoost;

