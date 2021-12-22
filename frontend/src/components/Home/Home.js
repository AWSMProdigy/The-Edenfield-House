import './Home.css';
import Carson from '../../images/Carson.JPG';
import CarsonMountain from '../../images/CarsonMountain.JPG';
import CarsonRiver from '../../images/CarsonRiver.JPG';
import house from '../../images/EdenfieldFront.JPG'
import 'bootstrap/dist/css/bootstrap.min.css';
import EdenfieldInside1 from '../../images/EdenfieldInside1.jpg';
import EdenfieldInside2 from '../../images/EdenfieldInside2.jpg';
import EdenfieldBed from '../../images/EdenfieldBed.jpg';
import ScriptTag from 'react-script-tag';
import Header from '../Header/Header';







function Home() {
    return (
        <>
        <div className='hContainer'>
            <Header/>
        </div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active position-relative"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src={house} alt="First slide"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Welcome to the beautiful Edenfield House!</h3>
                        {/* <a href="/movies/Dune"><button class="btn custom-color text-black">Get Tickets for <i>Dune</i></button></a> */}
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={EdenfieldInside1} alt="Second slide"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Enjoy the breathtaking interior</h3>
                        {/* <a href="/movies/Eternals"><button class="btn custom-color text-black">Get Tickets for <i>Eternals</i></button></a> */}
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={EdenfieldInside2} alt="Third slide"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h3>10 hand-painted murals</h3>
                        {/* <a href="/movies/No Time To Die"><button class="btn custom-color text-black">Get Tickets for <i>No Time To Die</i></button></a> */}
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={EdenfieldBed} alt="Fourth slide"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Rest in unparalleled comfort</h3>
                        {/* <a href="/movies/No Time To Die"><button class="btn custom-color text-black">Get Tickets for <i>No Time To Die</i></button></a> */}
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
    </div>
        <section>
            <div className='container'>
                <div className='content'>
                    
                    <div className='image'>
                        <img src={Carson} alt="Carson"></img>
                    </div>
                    <div className="text-box">
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur in quam non pretium. Aliquam venenatis dolor eget purus pharetra, eu convallis metus commodo. Nam libero lectus, sagittis eu mattis non, lacinia ut velit. Etiam consequat tortor ut diam hendrerit malesuada. Praesent mattis ullamcorper est. Donec eget gravida elit, ac dapibus urna. Aenean iaculis, elit sit amet bibendum fermentum, justo magna ullamcorper enim, id congue mauris elit ac orci. 
                            Donec gravida porttitor pharetra. Quisque sollicitudin lobortis 
                            sapien vitae interdum.</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='container'>
                <h3 className='section-title'>Lorem Ipsum</h3>
                <div className='content'>
                    <div className='image'>
                        <img src={CarsonMountain} alt="Carson"></img>
                    </div>
                    <div className="info">
                        <h4 className="info-title">Lorem Ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur in quam non pretium. Aliquam venenatis dolor eget purus pharetra, eu convallis metus commodo. Nam libero lectus, sagittis eu mattis non, lacinia ut velit. Etiam consequat tortor ut diam hendrerit malesuada. Praesent mattis ullamcorper est. Donec eget gravida elit, ac dapibus urna. Aenean iaculis, elit sit amet bibendum fermentum, justo magna ullamcorper enim, id congue mauris elit ac orci. 
                            Donec gravida porttitor pharetra. Quisque sollicitudin lobortis 
                            sapien vitae interdum.</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='container'>
                <h3 className='section-title'>Lorem Ipsum</h3>
                <div class="content">
                    <div class="media-info">
                        <li><a href="/">kekw</a></li>
                    </div>
                    <div className='image'>
                        <img src={CarsonRiver} alt="CarsonRiver"></img>
                    </div>
                </div>
            </div>
        </section>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>

        <ScriptTag src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></ScriptTag>
        <ScriptTag src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></ScriptTag>
        <ScriptTag src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></ScriptTag>
        </>
    )
}

export default Home;