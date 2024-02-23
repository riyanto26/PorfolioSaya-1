document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.getElementById("typing-text");
    const spans = typingText.querySelectorAll("span");

    spans.forEach((span, index) => {
      span.style.animationDelay = `${index * 0.1}s`;
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("toggleBtn");
    const modeIcon = document.getElementById("modeIcon");
    const body = document.body;
  
    const darkModeEnabled = localStorage.getItem("darkModeEnabled");
  
    if (darkModeEnabled === "true") {
      enableDarkMode();
    }
  
    toggleBtn.addEventListener("click", function() {
      if (body.classList.contains("dark-mode")) {
        enableLightMode();
      } else {
        enableDarkMode();
      }
    });
  

    function enableDarkMode() {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
      modeIcon.className = "bx bx-moon";

      body.style.fontFamily = "'Times New Roman', serif";

      localStorage.setItem("darkModeEnabled", "true");
    }
  
    function enableLightMode() {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
      modeIcon.className = "bx bx-sun"; 

      body.style.fontFamily = "'Arial', sans-serif";

      localStorage.setItem("darkModeEnabled", "false");
    }
  });
  