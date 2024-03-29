import React,{useState} from 'react'
import Navbar from './Navbar';
import Slider from './Slider';
import WhatsNew from './WhatsNew';
import Form from './Form';
import Footer from './Footer';
import { data } from '../eventsData'
import { Link } from 'react-router-dom';
import { gallery } from '../gallery'
import '../App.scss'
import '../responsive.scss'
import Lightbox from './Lightbox';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };
  
  const linkStyle = {
    position: window.innerWidth > 768 ? 'absolute' : 'absolute',
    display: window.innerWidth > 768 ? 'flex' : 'none',
    top: window.innerWidth > 1000 ? '40px' : window.innerWidth > 768 ? '15px' : '0',
    right: '0',
    marginRight: "5px"
  };
  const btnStyle = {
    display: window.innerWidth < 768 ? 'flex' : 'none',
    margin: "0 auto"
  };
  // function openLightbox() {
  //   isOpen(true)
  // }
  return (

    <React.Fragment>


      <Navbar />
      {/* <div>Home Component</div> */}
      <section className="banner">
        <div className="slider">

          <Slider />
        </div>
      </section>
      <div className="section4 display_flex_col" style={{ color: "white" }}>
        <marquee behavior="" direction="" className="display_flex w-100" onMouseOver={(e)=>e.currentTarget.stop()}
                onMouseOut={(e)=>e.currentTarget.stop()}>
          <p style={{ display: "inline-block"}}>Make your career
            <Link to={'/contact'}> <button className="font700" id="takeQuiz">Admissions Open 2024</button></Link></p>

        </marquee>
      </div>
      <div className="homepage display_flex_col section" style={{ position: "relative" }}>
        <h2 className="heading">Events</h2>
        <Link
          to={`holidays/india/lakshdweep`} className='btn' style={linkStyle}>All Events</Link>
        <div className="container display_flex">

          <div className="events-container display_flex ">
            {data.slice(1, 3).map((item, index) => (
              <div
                key={index}
                // Update the path accordingly
                className="events-div"
              >
                <Link to={`/eventShow/${item.id}`}>

                  <img
                    src={`/images/sneha.jpg`}
                    alt={`School Image ${index + 1}`}
                  />
                  <div className="innerDiv">
                    <strong>{item.heading}</strong>
                    <p>{item.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <Link
            to={`/events`} className='btn' style={btnStyle}>See All Events</Link>
          <WhatsNew />
        </div>
      </div>
      <div className="container display_flex_col section">

        <h2 className="heading">Look at our remarkable memories</h2>
        <div className="gallery-container display_flex ">

        {gallery.map((image, index) => (
        <img
          key={index}
          src={image.imgSrc}
          alt={`Image ${index + 1}`}
          className="gallery-image"
          onClick={() => openLightbox(image.imgSrc)} // Open lightbox on image click
        />
      ))}

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          imageSrc={selectedImage} // Pass selectedImage to Lightbox component
          isOpen={isOpen} // Pass isOpen state to Lightbox component
          onClose={closeLightbox} // Pass closeLightbox function to handle close event
        />
      )}
        </div>
      </div>
      <div className="display_flex_col aboutAuthor container section">
        <h2 className='heading'>From the principle</h2>
        <div className="display_flex">
          <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat est doloribus non totam temporibus quaerat quisquam, et amet repellendus voluptatem corrupti, porro consequatur minus eligendi repudiandae aliquid sit earum optio quia magnam! Deleniti, tempore.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugiat eius iure, quasi sapiente architecto deleniti harum temporibus dolore odit impedit dolorem beatae! <br /><br /> <p><span style={{ background: "black", width: "30px", height: "2px", display: "inline-block", verticalAlign: "middle" }}></span>&nbsp;The Little Kidz School</p></div>

        </div>

      </div>
      <Form />
      <Footer />
    </React.Fragment>
  )
};

export default Home