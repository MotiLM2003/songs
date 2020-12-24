import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions/';
const SongList = (props) => {
  const songList = props.songs.map((song) => (
    <div className='item' key={song.title}>
      <div>{song.title}</div>
      <div className='right floated content'>
        <button
          className='ui button primary'
          onClick={() => props.select(song)}
        >
          Select
        </button>
      </div>
    </div>
  ));
  return <div className='ui divided list'>{songList}</div>;
};

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};
export default connect(mapStateToProps, { select: selectSong })(SongList);
