import './Photos.css';
import Header from '../Header/Header';


function Photos() {
    return (
        <div className='photosContainer'>
            <div className='pageHContainer'>
                <Header/>
            </div>
            <div className='page-container'>
                <h1 className='pageTitle'>PHOTOS</h1>
                <h2>Southern Hospitality at its Finest</h2>
            </div>
        </div>
    )
}

export default Photos;