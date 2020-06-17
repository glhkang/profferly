import React from 'react';
import './main_page.css'; 

class MainPage extends React.Component {

  render() {
    return (
      <div className="mainpage-main">
        <div className="mainpage-index">
          <h1>profferly index page :D</h1>
        </div>
        <div className="mainpage-side">
          <h1>Right</h1>
        </div>
      </div>
    );
  }
}

export default MainPage;