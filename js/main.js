function showImage() {
    var x = document.getElementById("imagediv");
    x.style.display = "flex";
}

function closeImage() {
    var x = document.getElementById("imagediv");
    x.style.display = "none";
}

const toggleSwitch = document.querySelector(".theme-switch input[type='checkbox']");
const currentTheme = localStorage.getItem("theme");
var mode = document.getElementById("toggle")

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
  
    if (currentTheme === "dark") {
        toggleSwitch.checked = true;
        mode.innerHTML = "light_mode";
    }

    if (currentTheme === "light") {
        toggleSwitch.checked = false;
        mode.innerHTML = "dark_mode";
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        mode.innerHTML = "light_mode";
    }
    else {document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        mode.innerHTML = "dark_mode";
    }    
}

toggleSwitch.addEventListener("change", switchTheme, false);



const getCat = async () => {
  try {
    const response = await fetch('/test2');
    const cats = await response.json();
    // createCatCards(cats);
	console.log("haloooooo");
  } catch (e) {
    console.log(e.message);
  }
};