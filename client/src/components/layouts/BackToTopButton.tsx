
import React, { useEffect } from 'react'





function BackToTopButton() {
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      const myBackToTopButton = document.getElementById('myBackToTopButton')!;
  
      if(window.pageYOffset > 300) {
        myBackToTopButton.style.display = "flex";
      } else {
        myBackToTopButton.style.display = "none";
      }
  
    })
  })

  return (
    <>    

      <a href="#myNavbar" id="myBackToTopButton">
        <i className="fa fa-arrow-up"></i>
      </a>


    </>
  )
}

export default BackToTopButton
