import './PlacementMatch.css';
import * as React from 'react';

class PlacementMatch extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {
      sliderValue : 1
    };
  }

  render() {
    return (
      <div className="PlacementMatch">

        <h1>Buy Placement Match</h1>
        <img id="Unranked" src="Images/Division/Unranked.png" className="img-responsive" />

        <div className="col-md-6">
          <div className="col-md-6">
            <h3><strong className="text-center">Last Season League</strong></h3>
            <div id="order-starting">

            </div>
            {/* @Html.TextBoxFor(i => i.Order.WinsCount, new { id = "winsCount", @type = "number", style = "display: none;" }) */}

            <br />
            <div>
              {/* @Html.DropDownListFor(x => x.Order.LastSeasonLeague, Model.LastSeasonLeagueControlDataSource, new { @class = "form-control", style = "margin-top:10px;", id = "LastSeasonLeague", })
                                @Html.ValidationMessageFor(x => x.Order.LastSeasonLeague) */}
            </div>
          </div>

          <div className="col-md-6 number-of-wins-header">

            <h3>
              <strong>Number Of Wins</strong>
            </h3>

            <br />
            <div>
              <p className="number-of-wins">
                <span >1</span>
              </p>
            </div>
            <br />

            <div className="well">
              <input id="ex6" type="text" data-slider-min="1" data-slider-max="10" data-slider-step="1" data-slider-value="1" />
           

            </div>
          </div>

        </div>

        <div className="col-md-6">
          {/* @Html.Partial("~/Views/Shared/_PaymentCard.cshtml", Model.PaymentCard) */}
        </div>


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
