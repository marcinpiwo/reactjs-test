import './BuyBoost.css';
import * as React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import WinsBoost from './winsBoost/WinsBoost';
import PlacementMatch from './placementMatch/PlacementMatch';

class BuyBoost extends React.Component {
  render() {
    return (
      <div className="main-container container">
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Placement Match">
            <PlacementMatch />
          </Tab>
          <Tab eventKey={2} title="Wins Boost">
            <WinsBoost />
          </Tab>
        </Tabs>

      </div>
    );
  }
}

export default BuyBoost;

