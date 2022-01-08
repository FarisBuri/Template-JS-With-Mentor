// Local Storge
let mainColor = localStorage.getItem("color");
if (mainColor != null) {
  document.documentElement.style.setProperty("--main-color", mainColor);
  // make remove all active after and put it in local storage
  document.querySelectorAll(".color-list li").forEach((element) => {
    element.classList.remove("active");
    // .classList.add("active")
    // add actvie class on element with data-color === local storage
    if (element.dataset.color === mainColor) {
      element.classList.add("active");
    }
  });
}
// Toggle Spin on icon
let icon = document.querySelector("i"),
  iconP = document.querySelector(".toggle-settings");
settingsBox = document.querySelector(".settings-box");
iconP.onclick = (_) => {
  icon.classList.toggle("fa-spin");
  settingsBox.classList.toggle("open");
};
// Switch Color
// const colorLi = document.querySelectorAll(".color-list li");
// colorLi.forEach(li => {
//     li.addEventListener("click",e => {
//         document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
//     })
// });
const colorList = document.querySelectorAll(".color-list li");
for (let i = 0; i < colorList.length; i++) {
  colorList[i].addEventListener("click", function (e) {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // set To local Storage
    localStorage.setItem("color", e.target.dataset.color);
    // remove from all childrend active
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  });
}
// Change Background Image
let landingPage = document.querySelector(".landing-page");
// array of images
let imgArray = [
  "download.jpg",
  "images (1).jpg",
  "images.jpg",
  "pexels-photo-531880.jpeg",
];

// Change Background-Image

let backgroundOption = false,
  backgroundInterval,
  mySpan = document.querySelectorAll(".random-background span");
// Save In Local Storage

let background_local = localStorage.getItem("background-option");

if (background_local !== null) {
  document.querySelectorAll(".random-background span").forEach((element) => {
    element.classList.remove("active");
  });
  if (background_local == "no") {
    backgroundOption = false;
    document.querySelector(".random-background .no").classList.add("active");
    //
  } else {
    backgroundOption = true;

    document.querySelector(".random-background .yes").classList.add("active");
  }
}

mySpan.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    if (e.target.dataset.background == "no") {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      e.target.parentElement
        .querySelectorAll(".random-background span")
        .forEach((element) => {
          element.classList.remove("active");
        });
      e.target.classList.add("active");
      localStorage.setItem("background-option", e.target.dataset.background);
    } else {
      backgroundOption = true;
      randomizeImg();
      e.target.parentElement
        .querySelectorAll(".random-background span")
        .forEach((element) => {
          element.classList.remove("active");
        });
      e.target.classList.add("active");
      localStorage.setItem("background-option", e.target.dataset.background);
    }
  });
});
function randomizeImg() {
  if (backgroundOption == true) {
    backgroundInterval = setInterval(() => {
      landingPage.style.backgroundImage =
        'url("../images/' +
        imgArray[Math.floor(Math.random() * imgArray.length)] +
        '")';
    }, 5000);
  } else {
    clearInterval(backgroundInterval);
  }
}

randomizeImg();

// End Change Background -image
// Progress Sklls

let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  // get offset of top mean the elmenet how much get down like you make postion: relaitve and top: 120px so it will return 120px
  let skillsOffSetTop = ourSkills.offsetTop;

  // offset Height will return the height of the element width padding and margin
  let skillsOuterHeight = ourSkills.offsetHeight;

  // windwo height mean when you make resize to the window will return how much size of your window like you make zoom out and in
  let windowHeight = this.innerHeight;

  // the currenly scroll now
  let windowScrollTop = this.pageYOffset;

  if (
    windowScrollTop >
    skillsOffSetTop + skillsOuterHeight - windowHeight - 100
  ) {
    document
      .querySelectorAll(".skill-box .skill-progress span")
      .forEach((element) => {
        element.style.width = element.dataset.prog;
      });
  } else if (windowScrollTop < skillsOffSetTop - windowHeight) {
    document
      .querySelectorAll(".skill-box .skill-progress span")
      .forEach((element) => {
        element.style.width = "0";
      });
  }
};

// Popup With Image

let ourGallary = document.querySelectorAll(".gallary-images img");

ourGallary.forEach((img) => {
  img.addEventListener("click", (e) => {
    // make overlay when you make click in image
    let overlay = document.createElement("div");
    overlay.classList.add("popup-overlay");
    document.body.appendChild(overlay);

    // create the popup box

    let popupBox = document.createElement("div");

    popupBox.className = "popup-box";

    // creat the popup image

    let popupImage = document.createElement("img");
    popupImage.className = "popup-image";
    popupImage.src = img.src;

    // append img inside the div

    popupBox.appendChild(popupImage);

    document.body.appendChild(popupBox);

    if (img.alt !== null) {
      let imgHeading = document.createElement("h3");

      let imgTxt = document.createTextNode(img.alt);

      imgHeading.appendChild(imgTxt);

      popupBox.insertBefore(imgHeading, popupBox.firstElementChild);
    }

    // Create Close Button

    let CloseButton = document.createElement("span");

    CloseButton.textContent = "X";

    CloseButton.className = "close-button";

    popupBox.insertBefore(CloseButton, popupBox.firstElementChild);

    document.addEventListener("click", (e) => {
      if (e.target.className == "close-button") {
        e.target.parentElement.remove();
        document.querySelector(".popup-overlay").remove();
      }
    });
  });
});

// Bullets

let allBullets = document
  .querySelectorAll(".nav-bullets .bullet")
  .forEach((bullet) => {
    bullet.addEventListener("click", (e) => {
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

// bullets local storge

let localBullet = localStorage.getItem("changeBullet");

if (localBullet != null) {
  if (localBullet == "no") {
    document.querySelector(".nav-bullets").style.display = "none";
    document
      .querySelector(".toggle-bullets .active")
      .classList.remove("active");
    document.querySelector(".toggle-bullets .no").classList.add("active");
  }
}

// Bullets Enalbe / Disable

let bullets = document.querySelector(".nav-bullets"),
  toglleBullet = document.querySelectorAll(".toggle-bullets span");

// // first step \
// toglleBullet.forEach(bullet => {
//   bullet.addEventListener("click", e => {
//     document.querySelectorAll(".toggle-bullets span").forEach(rm => {
//       rm.classList.remove("active")
//     });
//     e.target.classList.add("active");
//   })
// })

// second step

toglleBullet.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    if (e.target.dataset.bullet == "no") {
      bullets.style.display = "none";
    } else {
      bullets.style.display = "block";
    }
    e.target.parentElement
      .querySelectorAll(".toggle-bullets .active")
      .forEach((element) => {
        element.classList.remove("active");
      });
    e.target.classList.add("active");

    localStorage.setItem("changeBullet", e.target.dataset.bullet);
  });
});

// rest button

let rest = document.querySelector(".settings-box .settings-container button");

rest.onclick = (_) => {
  // localStorage.removeItem("color_option");
  localStorage.clear();
  window.location.reload();
};
