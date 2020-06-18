import React from 'react';

class MainPageMid extends React.Component {
  render() {
    return (
      <div className="mid-container">
        <div className="mid-header">
          <h3>Featured Opportunities</h3>
        </div>

        <div className="mid-body">
          <div className="mid-body-col">
            <div className="mid-icon-1" />

            <p>
              I just moved to the area and was itching for some volunteering
              work. I got involved with GrowNYC, an organization that helps to
              feed New Yorkers, and met so many people from my new neighborhood!
              I immediately felt welcomed into my new community and I love how I
              working towards a cause helped to bring us together. I'm proud to
              say that I'm officially a part of the fresh produce movement.
              Thanks, profferly!
            </p>
          </div>
          <div className="mid-body-col">
            <div className="mid-icon-2" />
            <p>
              Hey! Oldie but goodie here. Was advised by my doctor to avoid
              large crowds until a vaccine for coronavirus has been approved and
              I'm out of food. Can someone please help me get groceries?
            </p>
          </div>
          <div className="mid-body-col">
            <div className="mid-icon-1" />
            <p>
              I had so much fun today volunteering for Sea Turtle Conservation
              today! I love animals and I thank profferly for connecting me with
              so many amazing volunteering opporunties near me! I get to
              continue my life mission of helping one animal at a time, for a
              better world 🌎
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPageMid;
