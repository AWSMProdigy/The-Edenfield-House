import './Reservation.css';
import React, { useState } from 'react';
import Header from '../Header/Header';
import Revolution from '../../images/Revolution.jpg';
import { resolvePath } from 'react-router-dom';
import Modal from "react-bootstrap/Modal"
import $ from 'jquery';

function Reservation() {
    const rev = {
        name: "Revolution",
        description: "06 – Revolution:  This room honors our forefathers by concept and design; a framed copy of the Declaration of Independence overlooks the amazing king-sized wood-carved canopy bed.  A spacious SECOND floor room, this marvelous room has WIFI, cable, individually controlled heat and air conditioning, and a private bathroom.  The beautiful armoire comes complete with a 37 inch HD TV for any in-room entertainment, leaving the high-quality linens to cradle you throughout the night.  The room overlooks our beautifully landscaped backyard and luscious gardens and comes complete with a huge walk-in closet.",
        src: Revolution,
        rate: "$119.00 / night"
    }

    const [open, setOpen] = useState(false);
    const [room, setRoom] = useState({});

    function handleClick(room) {
        setRoom(room);
        setOpen(true);
    }


    return (
        <div className='reservationContainer'>
            <div className='page-container'>
                <h1 className='pageTitle'>RESERVATIONS</h1>
                <h2>Book one of our great rooms</h2>
                <div className='page-text'>
                    <h3>Amenities:</h3>
                    
                       <li>Private bathrooms</li> 
                       <li>Individual thermostat/Air Conditioning</li> 
                       <li>Wifi</li> 
                       <li>Ample parking</li> 
                       <li>Ample parking</li> 
                    
                    <p>Check-in: 3-9PM</p>
                    <p>Check-Out: By 11 AM</p>
                    <p>Special accomodations can be made if we are notified ahead of time</p>
                </div>
                <div className='rooms'>
                    <div className='room-row'>
                        <div className='room-couple'>
                            <div className='room'>
                            
                                <img src={Revolution} alt='Revolution' onClick={()=> handleClick(rev)}></img>
                                <h4>Revolution</h4>                
                            </div>
                            <div className='room'>
                                <img src={Revolution}></img>
                                <h4>Revolution</h4>
                            </div>
                        </div>
                        <div className='room-couple'>
                            <div className='room'>
                                <img src={Revolution}></img>
                                <h4>Revolution</h4>
                            </div>
                            <div className='room'>
                                <img src={Revolution}></img>
                                <h4>Revolution</h4>
                            </div>
                        </div>
                    </div>
                    <div className='room-row'>
                        <div className='room-couple'>
                            <div className='room'>
                                <img src={Revolution}></img>
                                <h4>Revolution</h4>
                            </div>
                            <div className='room'>
                                <img src={Revolution}></img>
                                <h4>Revolution</h4>
                            </div>
                        </div>
                        <div className='room-couple'>
                            <div className='room'>
                                <img src={Revolution}></img>
                                <h4>Revolution</h4>
                            </div>
                            <div className='room'>
                                <img src={Revolution}></img>
                                <h4>Revolution</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <Modal show={open} onHide={() => setOpen(false)} contentClassName='myModal' centered>
                <Modal.Header closeButton>
                <Modal.Title>{room.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className="modalPic" src={room.src} alt='currentRoom'></img>
                    <hr></hr>
                    <p>{room.description}</p>
                    <hr></hr>
                    <h4>{room.rate}</h4>
                </Modal.Body>
            </Modal>
        </div>
        
    )
}

export default Reservation;