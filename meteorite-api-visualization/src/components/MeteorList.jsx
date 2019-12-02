import React, { Component } from 'react';
import { getMeteors } from '../utils';
import SkyMap from './SkyMap';
import Search from './Search';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity: 1;
  }
`;

const onHover = styled.div`
  :hover {
    color: red;
  }
`;

class MeteorList extends Component {
  state = {
    isLoading: true,
    meteorites: [],
    searchTerm: ''
  };
  componentDidMount() {
    getMeteors().then(data => {
      this.setState({
        meteorites: data,
        isLoading: false
      });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      getMeteors(this.state.searchTerm).then(data => {
        this.setState({
          meteorites: data,
          isLoading: false,
          searchTerm: this.state.searchTerm
        });
      });
    }
  }
  search = input => {
    this.setState({ searchTerm: input });
  };
  render() {
    return (
      <>
        <div>
          {!this.state.isLoading && (
            <SkyMap className="scatter" data={this.state.meteorites} />
          )}
          <Search search={this.search} />
          {this.state.meteorites.map(meteorite => {
            return (
              <div
                className="meteor-card"
                key={meteorite.id}
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2>{meteorite.name}</h2>
                <p>{new Date(meteorite.year).getFullYear()}</p>
                <p>
                  <strong>Mass:</strong> {meteorite.mass}
                </p>
                <p>
                  <strong>Classification:</strong> {meteorite.recclass}
                </p>
                <hr />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default MeteorList;
