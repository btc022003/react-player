import React from 'react';
import { connect } from 'dva';

function index(props) {
  console.log(props);
  return (
    <div>
      <h1>我是一个播放器</h1>
      <div className='main'>{props.children}</div>
      <audio autoPlay controls src={props.current.url} />
    </div>
  );
}

function mapStateToProps(state) {
  return state.music;
}

export default connect(mapStateToProps)(index);
