# profferly
profferly is an app where volunteers unite to inspire and help others accomplish their goal.

## Background and Overview

Born out of the coronavirus pandemic, the idea behind profferly started with the recognized need for lending hands. Whether it’s an at-risk person needing a volunteer to grab them groceries during lockdown, or an outreach program needing a group of volunteers to help run their event for the day, profferly is about connecting opportunities with those who can serve to ultimately strengthen the bonds of community.

profferly is primarily built with the MERN stack, a combination of the following four technologies: MongoDB, Express, React, and Node.

## Functionality & MVP
- [ ] User authorization: sign up and log in
- [ ] News feed of all volunteering opportunities and inspirational messages to help keep community morale
- [ ] Posts and Pictures. Users can write a post or upload a picture about their act of service. “Volunteering inspo”
- [ ] Comments. Users can comment on posts and pictures
- [ ] Integrate Google Maps API: users can “pin” locations asking for volunteers. “Pinned locations” can include information describing the opportunity
- [ ] Production README

#### Bonus Features
- [ ] Notifications. Notifies user of responses to their activity
- [ ] Live Chat. Users can discuss their ventures in real time
- [ ] Karma Spotlight. 

## Wireframes
TBA

## Technologies and Technical Challenges

##### Google Maps API
##### Backend: MongoDB/Express
##### Frontend: React/Node.js


#### Google Maps API
Users will have the ability to pin a location needing volunteers. A note may be added to that location that may describe the volunteering opportunity. This may include: title, description, time of event, number of volunteers needed, etc.). User’s may RSVP to a volunteering opportunity on this note.

Technical Challenges:
Adding functionality to Google Maps API where users will be able to write descriptive notes about their volunteering opportunities. Collecting all of the locations from our users’ volunteering opportunities and securely storing that information in our database.  The default setting should be for the map to position itself to the user’s location, but also allow users to search for opportunities elsewhere. The default setting will require that the user allow's for location services to be enabled.

#### Backend: MongoDB/Express

Technical Challenges:
Properly functioning user auth.


#### Frontend: React/Node.js

Technical Challenges:
Allowing seamless user journey through UX/UI design.

## Group Members and Work Breakdown
#### Mari Kasanuki, Catherine Kim, Emina Ramovic, Gloria Kang 

### Day 0
* All members of the team completed the MERN tutorials
* Discussed brand strategy: colors, fonts, logos
* Planned out and set up database
* Wrote proposal Readme and structured the work week

### Day 1
- Build front end user auth and start basic styling for splash
- Build backend user auth
- Discuss UX/UI design and start implementing

### Day 2
- Build newsfeed (user’s show page) and ability to submit a post and or picture
- Set up AWS
- User’s show pages/uploading pics (newsfeed - comments, pics, posts)
- Styling for newsfeed

### Day 3
- Build ability to comment on newsfeed
- Set up Google Maps API
- Complete styling for newsfeed
- Discuss current state of progress

### Day 4
* Google Maps API implementation
* Pinning/RSVP-ing
* Discuss final touches on styling and or ability to implement bonus features

### Day 5
* Complete all styling for presentation
* Production README
