import React from 'react';
import ReactDOM from 'react-dom';
import IndexContainer from 'container/index/index.jsx';
import createStore from 'data/store/create';
import {Provider} from 'react-redux';

const store = createStore();

const render=()=>{
  return (
    <Provider store={store}>
      <IndexContainer/>
    </Provider>
  );
}

ReactDOM.render(render(), document.getElementById('root'));
