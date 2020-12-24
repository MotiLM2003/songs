import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  return (
    <React.Fragment>
      {selectedSong ? (
        <div>
          <h3>Details for:</h3>
          <p>Title: {selectedSong.title}</p>
          <p>Duration: {selectedSong.duration}</p>
        </div>
      ) : (
        <p>Please select a song :)</p>
      )}
    </React.Fragment>
  );
};

const stateToProps = (state) => {
  return {
    selectedSong: state.selectedSong,
  };
};

export default connect(stateToProps)(SongDetail);
