import React, { Component } from "react";
import { Grid, Segment, Divider, Container } from "semantic-ui-react";

import Filters from "./Filters";
import AptNav from "./AptNav";
import AptShow from "./AptShow";
import BrShow from "./BrShow";
import AppBlurb from "./AppBlurb";

const apartmentsURL = "http://localhost:3000/api/v1/apartments";

class InnerAppContainer extends Component {
  constructor() {
    super();
    this.state = {
      apartments: [],
      bedrooms: [],
      rent: 2500,
      months: 3,
      petFriendly: true,
      currentApartment: null,
      currentBedroom: null
    };
  }

  fetchApartments = () => {
    return fetch(apartmentsURL).then(res => res.json());
  };

  setRentFilter = (event, rent) => {
    this.setState({
      rent: rent
    });
  };

  setMonthsFilter = (event, months) => {
    this.setState({ months: months });
  };

  setPetFilter = (event, bool) => {
    this.setState({ petFriendly: bool });
  };

  componentDidMount = () => {
    this.fetchApartments().then(res =>
      this.setState({ apartments: res.data, bedrooms: res.included })
    );
  };

  selectApartment = apt => {
    this.setState({ currentApartment: apt });
  };

  selectBedroom = br => {
    this.setState({ currentBedroom: br });
  };

  render() {
    return (
      <Container>
        <Divider hidden />
        <Grid stackable columns={2} divided>
          <Grid.Row stretched>
            <Grid.Column width={4}>
              <Segment>
                <AppBlurb />
                <Divider />
                <Filters
                  rent={this.setRentFilter}
                  months={this.setMonthsFilter}
                  pet={this.setPetFilter}
                />
              </Segment>
              <Segment>
                <AptNav selectApartment={this.selectApartment} />
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment>
                <AptShow currentApt={this.state.currentApartment} />
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment>
                <BrShow currentBr={this.state.currentBedroom} />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default InnerAppContainer;
