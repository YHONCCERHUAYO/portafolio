import React, { useEffect } from 'react';
import './Home.css';
import '../Components/Navbar';
import Navbar from '../Components/Navbar';
import Body from '../Components/Body';
function Home() {

  useEffect(() => {
    const background = document.querySelector('.background');

    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF3', '#FFF333'];

    for (let i = 0; i < 10; i++) { // Cambiado a 10 burbujas
      const circle = document.createElement('div');
      circle.classList.add('circle');
      circle.style.width = `${Math.random() * 30 + 20}px`;
      circle.style.height = `${Math.random() * 30 + 20}px`;
      circle.style.top = `${Math.random() * 400}vh`;
      circle.style.left = `${Math.random() * 100}vw`;
      circle.style.animationDuration = `${Math.random() * 15 + 5}s`;
      circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      background.appendChild(circle);
    }
  }, []);

  return (
    <div className="background">
      <div className="content relative z-10">

        <Navbar/>
        <Body/>

      </div>
    </div>
  );
}

export default Home;