import './Reservation.css';
import Header from '../Header/Header';


function Reservation() {
    return (
        <div className='reservationContainer'>
            <div className='pageHContainer'>
                <Header/>
            </div>
            <div className='page-container'>
                <h1 className='pageTitle'>RESERVATIONS</h1>
                <h2>Book one of our great rooms</h2>
            </div>
        </div>
    )
}

export default Reservation;