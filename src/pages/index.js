import React, { useState } from 'react';
import { connect } from 'dva';

function index(props) {
  const [txt, setTxt] = useState('');
  const searchHandle = () => {
    props.dispatch({
      type: 'music/loadMusic',
      payload: {
        keywords: txt
      }
    });
  };

  const keyUpHandle = e => {
    if (e.keyCode == 13) {
      searchHandle();
    }
  };
  const NoneMusic = () => <h1>暂无歌曲</h1>;
  const MusicList = () => (
    <ul>
      {props.list.map(music => {
        return (
          <li
            onClick={() =>
              props.dispatch({ type: 'music/play', payload: { id: music.id } })
            }
            key={music.id}
          >
            {music.name}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div>
      <input
        type='text'
        onKeyUp={e => keyUpHandle(e)}
        onChange={e => setTxt(e.currentTarget.value)}
      />
      <button onClick={searchHandle}>搜索</button>
      {props.list.length == 0 ? <NoneMusic /> : <MusicList />}
    </div>
  );
}

function mapStateToProps(state) {
  return state.music;
}

export default connect(mapStateToProps)(index);
