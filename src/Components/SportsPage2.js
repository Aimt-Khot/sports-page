import React ,  { useState, useEffect } from "react";
import {Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './SportsPage2.css';
import axios from "axios";
import ProdImg from '../Images/Image7.jpg'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";



export default function Sportspage2(){

  const [items, setItems] = useState([]);

  useEffect(function () {
    axios
      .get(
        "https://api.buttercms.com/v2/pages/*/home_login/?preview=1&auth_token=22d6121f48b6bd88625f2259902ec6b61bd6e41f"
      )
      .then((response) => {
        setItems(response.data.data.fields.homepage);
      });
  }, []);
  console.log(items);

  const settings = {
    items: 5,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    margin: 30,
  };
  const link = () => {
    window.open("http://stage.forathletes.com/");
  };
  
return (
<div>
   <div className='central-conatiner'>      
        <div className="top-container">
          <div class="top-box top-box-a">
           <h1> TENNIS</h1> 
         </div>
         <div class="top-box top-box-b">
            <h1> SHOP THORNE NUTRITION</h1>
         </div>
         <div class="top-box top-box-c">
            <h1> EXPLORE NUTRITION COMMUNITY</h1>
         </div>
         </div>
         <h2 style={{ fontFamily:"popinns",fontSize:40,  color: "black", textAlign: "center",marginBottom:"20px",marginTop: "10px" }}>
		        <b>New Arrivals</b><hr/>
	      </h2>
        <div className="newarrival-container">
                <div className="item-1">
                 <img src={ProdImg} alt="Theragun-Pro"/>
                  <h2>Theragun Pro<br></br>$449.99</h2>
               </div>
               <div className="item-2">
               <img src={ProdImg} alt="Therabody-PowerDot-2.0"/>
                  <h2>Therabody PowerDot 2.0<br></br>$399.99</h2>
               </div>
               <div className="item-3">
               <img src={ProdImg} alt="Roll-Recovery-R8"/>
                  <h2>Roll Recovery R8<br></br>$129.00</h2>
               </div>
               <div className="item-4">
               <img src={ProdImg} alt="Smart-Tools-SmartCuffs"/>
                  <h2>Smart Tools SmartCuffs<br></br>$299.99</h2>
               </div> 
          </div>
                <div className="item-5">
                 <h1>SURVIVING THE HOLDAY TREATS</h1>
              </div> 
    </div>
<div className="img-container">
   <div className="title">
     <text>Athletes</text>
   </div>
   <div className="card-container">
   <Card >
       <Card.Img variant="top" src={items.athlete_pic}/>
       <Card.ImgOverlay>
         <Card.Title>{items.athlete_name}</Card.Title>
         <Card.Text>
           This is a wider card with supporting text below as a natural lead-in to
           additional content. This content is a little bit longer.
         </Card.Text>
       </Card.ImgOverlay>
     </Card>
     <Card >
       <Card.Img variant="top" src={items.athlete_pic} />
       <Card.ImgOverlay>
         <Card.Title>{items.athlete_name}</Card.Title>
         <Card.Text>
           This is a wider card with supporting text below as a natural lead-in to
           additional content. This content is a little bit longer.
         </Card.Text>
       </Card.ImgOverlay>
     </Card>
     <Card >
       <Card.Img variant="top" src={items.athlete_pic} />
       <Card.ImgOverlay>
         <Card.Title>{items.athlete_name}</Card.Title>
         <Card.Text>
           This is a wider card with supporting text below as a natural lead-in to
           additional content. This content is a little bit longer.
         </Card.Text>
       </Card.ImgOverlay>
     </Card>
   </div>
 </div>
 <div class="brands-container">
      <div className="brands-title">
        <h1>BRANDS THAT WORK WITH US</h1>
      </div>
      <div class="container-slider">
        <OwlCarousel className="owl-carosel" {...settings}>
          <div className="container-a">
            <img src={img1} className="image-1" alt="Fight-Camp" />
          </div>
          <div className="container-a">
            <img src={img2} className="image-2" alt="Keiser" />
          </div>

          <div className="container-a">
            <img src={img3} className="image-3" alt="Therabody" />
          </div>
          <div className="container-a">
            <img src={img4} className="image-4" alt="Rapid-Reboot" />
          </div>
          <div className="container-a">
            <img src={img5} className="image-5" alt="Throne" />
          </div>
        </OwlCarousel>
      </div>
      <div className="brands-button">
      <button type='button'>Shop Brands</button>
      </div>
    </div>
 <div className="community-container">
   <div class="charity">
      <h1>CHARITY</h1>
      <p class="price">lorem Ever need to create some  formatting and layout? Microsoft Office can quickly create this dummy text for you with lorem ipsum Latin or random sentences in English. Here's how to use the sample text generator.</p>
      <button type='button'>Learn More</button>
     </div>
     <div class="community">
       <h1>COMMUNITY</h1>
       <p class="price">loremEver need to create sometting and layout? Microsoft Office can quickly create this dummy text for you with lorem ipsum Latin or random sentences in English. Here's how to use the sample text generator.</p>
       <button type='button'>Learn More</button>
     </div>
</div>
 </div>
)
}