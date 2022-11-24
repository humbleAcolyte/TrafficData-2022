import React, { Component } from 'react';
import AvrgSpeedChart from './components/AvrgSpeedChart/AvrgSpeedChart';
import './styles/theme.scss';
import './styles/widgets.scss';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div className='page'>
        <AvrgSpeedChart />
      </div>
    );
  }
}
