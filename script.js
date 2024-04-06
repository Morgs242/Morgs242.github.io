 // Alert Function
 window.onload = function() {
    if (window.location.pathname.includes('index.html')) {
      alert("Welcome! Thanks for visiting!");
    }
  };

// event handler function
function changeColor() {
    let button = document.getElementById("submitButton");
    button.style.backgroundColor = "blue";
}

// 2 color scheme code
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const darkModeButton = document.querySelector("#dark-mode-button");
    const colorfulSchemeButton = document.querySelector("#colorful-scheme-button");
  
    darkModeButton.addEventListener("click", function() {
      toggleColorScheme('dark-mode');
    });
  
    colorfulSchemeButton.addEventListener("click", function() {
      toggleColorScheme('colorful-scheme');
    });
  
    function toggleColorScheme(mode) {
      const body = document.body;
      const isDarkMode = body.classList.contains('dark-mode');
      const isColorfulScheme = body.classList.contains('colorful-scheme');
  
      if (mode === 'dark-mode' && !isDarkMode) {
        body.classList.add('dark-mode');
        body.classList.remove('colorful-scheme');
      } else if (mode === 'colorful-scheme' && !isColorfulScheme) {
        body.classList.add('colorful-scheme');
        body.classList.remove('dark-mode');
      } else {
        // Toggle back to original mode
        body.classList.remove('dark-mode');
        body.classList.remove('colorful-scheme');
      }
    }
  });
  
  
  
  
  
  