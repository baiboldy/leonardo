import React from 'react';
import Header from './components/Header'
import Content from './components/Content'
import classNames from 'classnames'
import Base from './components/Base'
import { connect } from 'react-redux';

function App() {
  const component = () => {
    return <Content/>
  }
  return (
    <div className={classNames('App')}>
      <div className={classNames('container')}>
      <Header />
      <Base
        component={component()}
      />
      </div>
    </div>
  );
}

export default connect(
  state => ({

  }),
  dispatch => ({
    
  })
)(App);
