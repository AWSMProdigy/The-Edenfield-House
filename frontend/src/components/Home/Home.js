import './Home.css';
import Header from '../../images/header.png';
import Carson from '../../images/Carson.JPG';
import CarsonMountain from '../../images/CarsonMountain.JPG';
import CarsonRiver from '../../images/CarsonRiver.JPG';

function Home() {
    return (
        <>
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
        </>
    )
}

export default Home;