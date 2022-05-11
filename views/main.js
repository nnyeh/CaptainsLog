function showImage() {
    var x = document.getElementById("imagediv");
    x.style.display = "flex";
}

function closeImage() {
    var x = document.getElementById("imagediv");
    x.style.display = "none";
	document.getElementById("bigimage").src = ""
}

const toggleSwitch = document.querySelector(".theme-switch input[type='checkbox']");
const currentTheme = localStorage.getItem("theme");
var mode = document.getElementById("toggle")
mode.innerHTML = "dark_mode";

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

const getPost = async () => {
  try {
    const response = await fetch('/allposts');
    const posts = await response.json();
    createPostCards(posts);
  } catch (e) {
    console.log(e.message);
  }
};
getPost();


const ul = document.querySelector('#gallery');

function bigImage(post) {
	const idiv = document.getElementById('imagediv');
	idiv.style.display="flex";
	const an = document.getElementById('accountname');
	an.innerHTML="posted by " + post.name;
	const i = document.getElementById('bigimage');
	i.src = post.filename;
	i.alt=post.name
	const bt = document.getElementById('bottomtext');
	bt.innerHTML=post.ship + "<br>" + post.text;
	console.log(post.filename);
	}


const createPostCards = (posts) => {
	// clear ul
	// ul.innerHTML = '';
	posts.forEach((post) => {
    // create ul with DOM methods
	const b = document.createElement("button");
	b.classList.add('imagebutton');
	b.id=post.post_id;
	b.onclick="showImage()";
	const i = document.createElement("img");
	i.classList.add('collage');
	i.src = post.filename;
	i.onclick = function(){bigImage(post)};
	
	
	b.appendChild(i);
	ul.appendChild(b);
	
    });
}

const getStatus = async () => {
  try {
    const response = await fetch('/getuserinfo');
    const status = await response.json();
	checkStatus(status);
  } catch (e) {
    console.log(e.message);
  }
};
getStatus();

const checkStatus = (status) => {
	console.log(status);
		if(status.user=="undefined"){
			console.log("testi");
			return;
		}
		else{
			const l = document.getElementById('login');
			l.innerHTML="hello " + status.user.toLowerCase();
			l.href="/"+status.user;
			console.log("kirjauduttu sisään");
			const r = document.getElementById('register');
			r.innerHTML="logout";
			r.href="/logout"
			
		}
};





/* const d1 = document.createElement("div");
	d1.id="imagediv";
	d1.style.display="none";
	
	const d2 = document.createElement("div");
	d2.id="top";
	const a = document.createElement("a");
	a.id="accountname";
	a.innerHTML = post.name;
	// a.createTextNode=post.name;
	const b1 = document.createElement("button");
	b1.id="close";
	b1.onclick="closeImage();";
	
	const s = document.createElement("span");
	s.id="closeicon"
	s.classList.add('material-icons');
	s.innerHTML="close";
	
	const d3 = document.createElement("div");
	d3.id="midimage";
	
	const ib = document.createElement("img");
	ib.id = "bigimage";
	ib.src = post.filename;
	ib.alt = post.name;
	
	const d4 = document.createElement("div");
	d4.id="bottom";
	
	const p = document.createElement("p");
	p.id="bottomtext";
	p.innerHTML = post.ship;
	
	d1.appendChild(d2);
	d2.appendChild(a);
	d2.appendChild(b1);
	d2.appendChild(s);
	d3.appendChild(ib);
	ul.appendChild(d1);
	ul.appendChild(d3);
	ul.appendChild(d4);
	*/