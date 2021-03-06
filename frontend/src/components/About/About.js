import './About.css';
import Header from '../Header/Header';
import inside3 from '../../images/EdenfieldInside3.jpg';
import localMap from '../../images/localMap.jpg';
import deSoto from '../../images/DesotoMap.jpg';



function About() {
    return (
        <div className='aboutContainer'>
            <div className='page-wrapper'>
                <div className='about-side-bar'>
                    <ul>
                        <li><a href="#intro">Intro</a></li> 
                        <li><a href="#location">Location</a></li>   
                        <li><a href="#History">History</a></li>
                        <li><a href="#Area">The Area</a></li>
                        <li><a href="#History">Things To Do</a></li>
                    </ul> 
                </div>
                <div className='page-container'>
                    <div className='page-header'>
                        <h1 className='pageTitle'>ABOUT US</h1>
                        <h2 id="intro" >Southern Hospitality at its Finest</h2>
                    </div>
                    <div className='page-text'>
                        <p>Thank you for taking a few minutes to look around of our website. We truly hope you enjoy it; if you have time please take a look at some of the historical information, as well as the many pictures we've posted.

    Regardless of whether you're coming for a short visit or longer-term stay, the information under the "Classic South" section provides helpful information on the general geographic area, Emanuel County, and the City of Swainsboro.</p>

   <p>From very first time we walked through the front door, we fell in love with the Edenfield House. The outside of the home is beautiful and we continue to make improvements to the landscaping and gardens every month.

    However, the home's interior is simply breathtaking! We routinely have guests who tell us how nice the pictures on our website are. That is...until they see the home for the first time. I'm then told the home is much more beautiful than anything captured and displayed on line in pictures.</p>

    <p>Much of that is simply due the magnitude and grandeur created by 12 foot ceilings, 10 hand-painted murals, enormous crystal chandeliers, meticulously crafted wood trim, and a structure large enough to gently cradle 9 bedrooms under one roof.

    The city of Swainsboro is small; which adds significantly to the charm of the Edenfield House. It is a wonderful community to live, raise a family, and grow a business. We take great pride in our local heritage, deep-rooted family values, and small-town ideals.

    So please... Come inside, grab a cup of coffee, and stay for a while.</p>
                    </div>
                    <div className='container'>
                        <div className='content'>
                            
                            <div className='image'>
                                <img src={inside3} alt="Carson"></img>
                            </div>
                            <div className="text-box">
                                <h3>Lorem Ipsum</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur in quam non pretium. Aliquam venenatis dolor eget purus pharetra, eu convallis metus commodo. Nam libero lectus, sagittis eu mattis non, lacinia ut velit. Etiam consequat tortor ut diam hendrerit malesuada. Praesent mattis ullamcorper est. Donec eget gravida elit, ac dapibus urna. Aenean iaculis, elit sit amet bibendum fermentum, justo magna ullamcorper enim, id congue mauris elit ac orci. 
                                    Donec gravida porttitor pharetra. Quisque sollicitudin lobortis 
                                    sapien vitae interdum.</p>
                            </div>
                        </div>
                    </div>
                    <div className='page-header'>
                        <h2 id="location" >Location</h2>
                    </div>
                    <div className='page-text'>
                        <p>The Edenfield House is located in the city of Swainsboro nestled deep within beautiful southern Georgia. Swainsboro???with a population of roughly 7,400???is the county seat of Emanuel County.</p>
                        <img src={localMap} alt="localMap"></img>
                        <p>Swainsboro, Georgia offers travelers some very powerful advantages based on our location and proximity to other cities within Georgia, as well as wonderful tourist attractions in neighboring states.</p>
                        <p>So if you live in Alabama, Tennessee, Kentucky, West Virginia, Virginia, or North and South Carolina, we're in the perfect spot to host your overnight stay on your way to Walt Disney World Resort in Orlando, Florida.</p>
                    </div>
        <section>
            <div className='container'>
                <h3 className='section-title' id="History">History</h3>
                <div className='content'>
                    <div className='image'>
                        <img src={deSoto} alt="Carson"></img>
                    </div>
                    <div className="info">
                        <h4 className="info-title">De Soto Expedition</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur in quam non pretium. Aliquam venenatis dolor eget purus pharetra, eu convallis metus commodo. Nam libero lectus, sagittis eu mattis non, lacinia ut velit. Etiam consequat tortor ut diam hendrerit malesuada. Praesent mattis ullamcorper est. Donec eget gravida elit, ac dapibus urna. Aenean iaculis, elit sit amet bibendum fermentum, justo magna ullamcorper enim, id congue mauris elit ac orci. 
                            Donec gravida porttitor pharetra. Quisque sollicitudin lobortis 
                            sapien vitae interdum.</p>
                    </div>
                </div>
            </div>
        </section>
            </div>
            <div className='emptySide'>
            </div>
            
        </div>
        </div>
    )
}

export default About;