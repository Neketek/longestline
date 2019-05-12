import React from 'react';
import ReactDOM from 'react-dom';
import IndexContainer from 'container/index/index.jsx';
import createStore from 'data/store/create';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

const store = createStore();

const render=()=>{
  return (
    <Provider store={store}>
      <Router>
        <IndexContainer/>
      </Router>
    </Provider>
  );
}

ReactDOM.render(render(), document.getElementById('root'));
