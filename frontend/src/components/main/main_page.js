import React from 'react';
import MainPageMid from './main_page_mid';
import MainPageBottom from './main_page_bottom';
import './main_page.css'; 

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <div className="mainpage-main">
          {/* <div className="mainpage-side">
            <h1>Right</h1>
          </div> */}
        </div>
          <div className="mainpage-header">
            <h1>profferly</h1>
          </div>
          <div className="mainpage-mid">
            <MainPageMid />
          </div>
          <div className="mainpage-bottom">
            <MainPageBottom />
          </div>
          {/* <div className="mainpage-border" /> */}
        </div>
    );
  }
}

export default MainPage;