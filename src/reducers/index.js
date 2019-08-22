import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No scrubs', duration: '4.05' },
    { title: 'Macarena', duration: '3.56' },
    { title: 'King and Queens', duration: '6.15' },
    { title: 'Bed of Roses', duration: '4.56' },
  ];
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer,
});
