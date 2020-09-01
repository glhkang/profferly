import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import './map.css';
import './info_modal.css';

const InfoModal = ({ handleClose, show }) => {
    const showHideClassName = show ? "info-modal display-block" : "info-modal display-none";
    return (
      <div className={showHideClassName} id="info-modal-div">
        <button className="modal-exit-button" onClick={handleClose}>
            <FontAwesomeIcon className="modal-exit" icon={faTimes} />
        </button>
        <section className="modal-main">
            <span className="modal-event-icon">
                <FontAwesomeIcon className="modal-map-mark" icon={faMapMarkedAlt} />
            </span>
            <h1>Creating An Event</h1>
                <ul>
                    <li>Create an event by clicking on the meeting location of your event on the map.</li>
                    <li>Fill out the form with the title of your event and the description.</li>
                    <li>Consider including contact information and/or the name of the event's Profferly chatroom.</li>
                </ul>

                <span className="info-modal-caution">Never give out your private information on Profferly</span>
        </section>
      </div>
    );
};

export default InfoModal;