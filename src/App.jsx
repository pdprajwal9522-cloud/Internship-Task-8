
import './App.css'
import hall from "./assets/hall.png";
import catereres from "./assets/caterers.png"
import bangle from "./assets/bangle.png"
import AC from "./assets/AC service.jpg"
import car from"./assets/car service.jpg"
import bike from"./assets/bike.jpg"
import beauty from"./assets/beauty.jpg"
import spa from"./assets/spa.jpg"
import saloon from"./assets/saloon.jpg"
import movie from"./assets/movies.jpg"
import grocrey from"./assets/grocery.jpg"
import electrician from"./assets/electrician.jpg"
function App() {
  

  return (
    <>
      <div className="container">
        <div className="main-layout">
        <div className="main-top">
        <div className="left-1-div">
          <div className="nav-left"><h3>Wedding Requisites</h3></div>
        <div className="images">
          <div className="top">
          <img src = {hall} alt="hall"/>
          <p>Banquet Halls</p>
</div>
<div className="top">
  <img src ={bangle} alt = "bangle"/>
          <p>Bridal Requisite</p>
</div>
<div className="top">
      <img src= {catereres} alt= "catereres"/>
<p>Caterers</p>
          </div>
</div>
</div>


         <div className="right-1-div">
          <div className="nav-right"><h3>Repairs & services</h3></div>
<div className="image-1">
            <div className="images">
          <div className="top">
          <img src = {AC} alt="AC service"/>
          <p>AC Service</p>
</div>
<div className="top">
         <img src= {car} alt= "Car Service"/>
<p>Car Service</p>
</div>
<div className="top">
 <img src ={bike} alt = "bike"/>
          <p>Bike Service</p>
</div>
          </div>

</div>
</div>
</div>


<div className="main-bottom">
        <div className="left-2-div">
          <div className="nav-left-bottom"><h3>Beauty & spa</h3></div>
        
          
            <div className="image-1">
            <div className="images">
          <div className="top">
          <img src = {beauty} alt="beauty"/>
          <p>Beauty Parlour</p>
</div>
<div className="top">
         <img src= {spa} alt= "Car Service"/>
<p>Spa & Massage</p>
</div>
<div className="top">
<img src ={saloon} alt = ""/>
          <p>Salons</p>
</div>
          </div>
          </div>
          </div>



<div className="right-2-div">
          <div className="nav-right-bottom"><h3>Daily Needs</h3></div>
        <div className="image-1">
            <div className="image-1">
            <div className="images">
          <div className="top">
          <img src = {movie} alt="movies"/>
          <p>Movies</p>
</div>
<div className="top">
         <img src= {grocrey} alt= "grocery"/>
<p>Grocery</p>
</div>
<div className="top">
<img src ={electrician} alt = "electrician"/>
          <p>Electricians</p>
</div>
          </div>
          </div>
</div>
</div>
</div>
</div>
      </div>
    </>
  )
}

export default App
