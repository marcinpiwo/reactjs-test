import * as React from 'react';

class PlacementMatch extends React.Component {
  render() {
    return (
      <div className="PlacementMatch">

        <h1>PlacementMatch Page</h1>
        <img id="Unranked" src="Images/Division/Unranked.png" className="img-responsive" />


        <div id="orders-container">

          <img id="Unranked" src="Images/Division/Unranked.png" className="img-responsive hidden" />

          <img id="Bronze" src="Images/Division/Bronze_V.png" className="img-responsive hidden" />

          <img id="Silver" src="Images/Division/Silver_V.png" className="img-responsive hidden" />

          <img id="Gold" src="Images/Division/Gold_V.png" className="img-responsive hidden" />

          <img id="Platinum" src="Images/Division/Platinum_V.png" className="img-responsive hidden" />

          <img id="Diamond" src="Images/Division/Diamond_V.png" className="img-responsive hidden" />

        </div>
      </div>
    );
  }
}

export default PlacementMatch;
