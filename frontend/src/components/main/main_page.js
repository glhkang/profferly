import React from 'react';
import MainPageMid from './main_page_mid';
import MainPageBottom from './main_page_bottom';
import './main_page.css'; 

class MainPage extends React.Component {

  render() {
    return (
      <div className="mainpage-main">
          <div className="mainpage-mid">
              <MainPageMid/>
          </div>
          <div className="mainpage-bottom">
            <MainPageBottom />
          </div> 
        </div>
    );
  }
}

export default MainPage;