import React from "react";
import "./main_page.css";

class MainPage extends React.Component {
  render() {
    return (
      <div className="mainpage-main">
        <div className="mainpage-mid">
          <div
            className="profferly-title"
            data-aos="zoom-out"
            data-aos-duration="1400"
          >
            PROFFERLY
          </div>
          <section className="mid-body">
            <div className="mid-body-row row1" data-aos="fade-right">
              <img
                className="mid-icon"
                src="/assets/icons/chat_bubble.svg"
                alt="chat bubble icon"
              />
              <p>
                I just moved to the area and was itching for some volunteering
                work. I got involved with GrowNYC, an organization that helps to
                feed New Yorkers, and met so many people from my new
                neighborhood! I immediately felt welcomed into my new community
                and I love how I working towards a cause helped to bring us
                together. I'm proud to say that I'm officially a part of the
                fresh produce movement. Thanks, profferly!
              </p>
            </div>
            <div className="mid-body-row row2" data-aos="fade-left">
              <img
                className="mid-icon"
                src="/assets/icons/location.svg"
                alt="location icon"
              />
              <p>
                Hey! Was advised by my doctor to avoid large crowds until a
                vaccine for coronavirus has been approved and I'm out of food.
                Can someone please help me get groceries?
              </p>
            </div>
            <div className="mid-body-row row3" data-aos="fade-right">
              <img
                className="mid-icon"
                src="/assets/icons/world.svg"
                alt="world icon"
              />
              <p>
                I had so much fun today volunteering for Sea Turtle Conservation
                today! I love animals and I thank profferly for connecting me
                with so many amazing volunteering opporunties near me! I get to
                continue my life mission of helping one animal at a time, for a
                better world{" "}
                <span role="img" aria-labelledby="img">
                  🌎
                </span>
              </p>
            </div>
          </section>
        </div>
        <div className="bottom-container">
          <img
            src="/assets/images/profferly_logo_white_small.png"
            alt="profferly logo"
          />
          <h5>Where volunteers unite and inspire to lend a hand.</h5>
          <p>
            Born out of the coronavirus pandemic, the idea behind Profferly
            started with the recognized need for help around the community.
            Whether you are looking for help or a volunteering opportunity,
            Profferly is about connecting volunteers to serve and, ultimately,
            strengthen the bonds of community.
          </p>
        </div>
      </div>
    );
  }
}

export default MainPage;
