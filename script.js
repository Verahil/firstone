function getDeviceType() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
   
    if (isMobile) {
      return "mobile";
    } else {
      return "desktop";
    }
  }
   
console.log(getDeviceType()); // проверка на мобилу

const deviceType = getDeviceType();

//Выполняет когда всё загрузилось
document.addEventListener('DOMContentLoaded', function() {
 if (deviceType === "mobile") {
    const navbar = document.querySelector(".navbar");
    const logo = document.querySelector(".logo a");
    const navLinks = document.querySelector(".nav-links");
    //Всё прячу, вертикалю навбар
    const navbarStyles = {
        height: "100vh",
        width: "40px",
        flexDirection: "column",
    }
    const logoStyles = {    
        display: "none",
        flexDirection: "column",
    }
    const navLinksStyles = {
        display: "none",
        flexDirection: "column",
    }
    Object.assign(navbar.style, navbarStyles);
    Object.assign(logo.style, logoStyles);
    Object.assign(navLinks.style, navLinksStyles);
    //Создаю бургер
    const hamburger = document.createElement("button");
    hamburger.innerHTML = "☰";
    const hamburgerStyles = {
        backgroundColor: "black",
        color: "white",
        alignSelf: "flex-start",
        padding: "10px",
        border: "none",
        cursor: "pointer",
        position: "absolute",
    }
    Object.assign(hamburger.style, hamburgerStyles);
    navbar.appendChild(hamburger);
    //Добавляю обработчик событий на бургер
    hamburger.addEventListener("click", () => {
        if (navLinks.style.display === "none") {
            navLinks.style.display = "flex";
            logo.style.display = "flex";
            navbar.style.width = "fit-content";
            hamburger.innerHTML = "✕";
        } else {
            navLinks.style.display = "none";
            logo.style.display = "none";
            navbar.style.width = "40px";
            hamburger.innerHTML = "☰"; 
        }
    });
 }
});
