import React from 'react';

import TitleBar from './../ui/TitleBar';
import Signup from './../ui/Signup';
import dashboard from './../ui/Dashboard';
import PrivateHeader from './PrivateHeader';




export default class App extends React.Component {

  renderApp() {
// Add javascript functions here
  }
  render() {
    let titlevar = 'Short Lnk App';
    let subTitleVar = 'Created by:  Ralph Kuerbis';


    return (
      <div>
        {this.renderApp()}
        <TitleBar title={titlevar} subtitle={subTitleVar}>

          <PrivateHeader title="Your Links"/>
        </TitleBar>

        <div>
          <dashboard/>

        </div>
        <div>
          <Signup/>
        </div>
      </div>
    );
  }
};

App.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
};
