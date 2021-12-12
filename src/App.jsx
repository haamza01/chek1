import Header from "./header.jsx";
import About from "./about.jsx";
import Projects from "./project.jsx";
import Contact from "./contact.jsx";
import Footer from "./footer.jsx";
import './App.css'
import img2 from './images/proj1.jpg'
import img3 from './images/proj2.jpg'
import img4 from './images/proj3.jpg'
import img5 from './images/proj4.jpg'

import img1 from "./images/John-Doe.jpg"

function App() {
  
  const name = "Hamza"
  const foot = "GMC TUNIS"

  const arr=[{title:"project 1" , img :img2},
    {title:"project 2" , img :img3},
    {title:"project 3" , img :img4},
    {title:"project 4" , img :img5}]


  
  
  
  
  return (<div>
    <Header  name ={name} />
    <About name ={name}>
      
    <img className="avatar" src={img1} alt="jhon-doe" />

       </About>
    <Projects arr={arr}/>
    <Contact/>
    <Footer  foot ={foot}/>
    </div>

    
  );
}

export default App;
