
let con = setInterval(() => {
    landingPage.style.backgroundImage ='url("../images/' + imgArray[Math.floor(Math.random() * imgArray.length)] +'")'}, 5000);
  
  let mySpan = document.querySelectorAll(".random-bakcground span").forEach((element) => {
      
      element.addEventListener("click", (e) => 
    
    {
        if (e.target.classList == "no") {
          clearInterval(con);
          e.target.parentElement.querySelectorAll(".random-bakcground span").forEach((ele) => {
            
            ele.classList.remove("active");
            
          });
          e.target.classList.add("active");
          localStorage.setItem("toggling", false);
        } else {
          
          con = setInterval(() => {
            landingPage.style.backgroundImage =
              'url("../images/' +
              imgArray[Math.floor(Math.random() * imgArray.length)] +
              '")';
          }, 5000);
          e.target.parentElement
            .querySelectorAll(".random-bakcground span")
            .forEach((ele) => {
              ele.classList.remove("active");
            });
          e.target.classList.add("active");
          localStorage.setItem("toggling", true);
        }
      });
    });
  

    