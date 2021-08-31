// silde show function
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// calculate night stay in hotel
function nightStay(check_in, check_out) {
  var date1 = new Date(check_in.value)
  var date2 = new Date(check_out.value)
  var Difference_In_Time = date2.getTime() - date1.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  document.getElementById("nights").innerHTML= Math.abs(Difference_In_Days)
  return Difference_In_Days
}
// add child age function
function age() {
  for(let i=0; i<document.getElementsByClassName("age").length; i++ ){
    document.getElementsByClassName("age")[i].classList.add("hidden")
  }
  for (let i = 0; i < parseInt(document.getElementById("Children").value); i++) {
    document.getElementsByClassName("age")[i].classList.remove("hidden")
  }
}
// total calculator in hotel
function total(n,coupon) {
    sum= (parseInt(document.getElementById("adult").value)+parseInt(document.getElementById("Children").value))*n*(nightStay(document.getElementById('check_in') , document.getElementById('check_out')))
    switch (coupon) {
      case "QUIZ2":
        document.getElementById("total").innerHTML = parseInt((sum/100)*98)
        break;
      case "QUIZ4":
        document.getElementById("total").innerHTML = parseInt((sum/100)*96)
        break;
      case "QUIZ6":
        document.getElementById("total").innerHTML = parseInt((sum/100)*94)
        break;
      case "QUIZ8":
        document.getElementById("total").innerHTML = parseInt((sum/100)*92)
        break;
      case "QUIZ10":
        document.getElementById("total").innerHTML = parseInt((sum/100)*90)
        break;  
      default:
        document.getElementById("total").innerHTML = sum
        break;
    } 
}
// check out function
function reservation() {
  prompt("What's your name:")
  prompt("What's your E-mail:")
  alert("Hello we will send you an email very soon")
}
// Quiz function
function start() {
  document.getElementsByClassName("question")[0].classList.remove("hidden")
  document.getElementsByClassName("start")[0].classList.add("hidden")
}
function True(i) {
  audio = new Audio('../Sounds/true.mp3');
  audio.play(); 
  document.getElementsByClassName("question")[i].classList.add("hidden")
  document.getElementsByClassName("result")[i].classList.remove("hidden")
  document.getElementsByClassName("TF")[i].classList.replace("red", "green")
  document.getElementsByClassName("TF")[i].innerHTML="True"
  document.getElementsByClassName("score")[i].innerHTML= document.getElementsByClassName("green").length
}

function False(i) {
  audio = new Audio('../Sounds/false.mp3');
  audio.play();
  document.getElementsByClassName("question")[i].classList.add("hidden")
  document.getElementsByClassName("result")[i].classList.remove("hidden")
  document.getElementsByClassName("TF")[i].innerHTML="False"
  document.getElementsByClassName("score")[i].innerHTML= document.getElementsByClassName("green").length
}
function next(i) {
  document.getElementsByClassName("result")[i].classList.add("hidden")
  document.getElementsByClassName("question")[i+1].classList.remove("hidden")
}
function coupon() {
  switch (document.getElementsByClassName("green").length) {
    case 2:
      audio= new Audio('../Sounds/clap.mp3')
      audio.play()
      document.getElementById("congrats").innerHTML="Congratulations"
      document.getElementById("win").innerHTML="You won 2% discount coupon &#128513"
      document.getElementById("coupon").innerHTML="QUIZ2"
      document.getElementById("copy").classList.remove("hidden")
      break;
    case 3:
      audio= new Audio('../Sounds/clap.mp3')
      audio.play()
      document.getElementById("congrats").innerHTML="Congratulations"
      document.getElementById("win").innerHTML="You won 2% discount coupon &#128513"
      document.getElementById("coupon").innerHTML="QUIZ2"
      document.getElementById("copy").classList.remove("hidden")
      break;
    case 4:
      audio= new Audio('../Sounds/clap.mp3')
      audio.play()
      document.getElementById("congrats").innerHTML="Congratulations"
    document.getElementById("win").innerHTML="You won 4% discount coupon &#128513"
    document.getElementById("coupon").innerHTML="QUIZ4"
    document.getElementById("copy").classList.remove("hidden")
    break;
    case 5:
      audio= new Audio('../Sounds/clap.mp3')
      audio.play()
      document.getElementById("congrats").innerHTML="Congratulations"
    document.getElementById("win").innerHTML="You won 4% discount coupon &#128513"
    document.getElementById("coupon").innerHTML="QUIZ4"
    document.getElementById("copy").classList.remove("hidden")
    break;
    case 6:
      audio= new Audio('../Sounds/clap.mp3')
      audio.play()
      document.getElementById("congrats").innerHTML="Congratulations"
    document.getElementById("win").innerHTML="You won 6% discount coupon &#128513"
    document.getElementById("coupon").innerHTML="QUIZ6"
    document.getElementById("copy").classList.remove("hidden")
    break;
    case 7:
      audio= new Audio('../Sounds/clap.mp3')
      audio.play()
      document.getElementById("congrats").innerHTML="Congratulations"
    document.getElementById("win").innerHTML="You won 6% discount coupon &#128513"
    document.getElementById("coupon").innerHTML="QUIZ6"
    document.getElementById("copy").classList.remove("hidden")
    case 8:
      audio= new Audio('../Sounds/clap.mp3')
      audio.play()
      document.getElementById("congrats").innerHTML="Congratulations"
    document.getElementById("win").innerHTML="You won 8% discount coupon &#128513"
    document.getElementById("coupon").innerHTML="QUIZ8"
    document.getElementById("copy").classList.remove("hidden")
    break;
    case 9:
      audio= new Audio('../Sounds/clap.mp3')
      audio.play()
      document.getElementById("congrats").innerHTML="Congratulations"
    document.getElementById("win").innerHTML="You won 8% discount coupon &#128513"
    document.getElementById("coupon").innerHTML="QUIZ8"
    document.getElementById("copy").classList.remove("hidden")
    break;
    case 10:
      audio= new Audio('../Sounds/clap.mp3')
      audio.play()
      document.getElementById("congrats").innerHTML="Congratulations"
    document.getElementById("win").innerHTML="You won 10% discount coupon &#128513"
    document.getElementById("coupon").innerHTML="QUIZ10"
    document.getElementById("copy").classList.remove("hidden")
  
  }
}
// copy to clipboard function
function copy() {
  switch (document.getElementById("coupon").innerHTML) {
    case "QUIZ2":
      navigator.clipboard.writeText("QUIZ2")
      break;
    case "QUIZ4":
      navigator.clipboard.writeText("QUIZ4")
    break;
    case "QUIZ6":
      navigator.clipboard.writeText("QUIZ6")
    break;
    case "QUIZ8":
      navigator.clipboard.writeText("QUIZ8")
    break;
    case "QUIZ10":
      navigator.clipboard.writeText("QUIZ10")
    break;
  
  }
  alert("Coupon code is copied to clip board")
}
// switch tabs
function login() {
  document.getElementsByClassName("tab")[0].classList.add("active")
  document.getElementsByClassName("tab")[1].classList.remove("active")
  document.getElementById("login").classList.remove("hidden")
  document.getElementById("signup").classList.add("hidden")
  console.log("ok")
}
function signup() {
  document.getElementsByClassName("tab")[1].classList.add("active")
  document.getElementsByClassName("tab")[0].classList.remove("active")
  document.getElementById("login").classList.add("hidden")
  console.log("ok")
  document.getElementById("signup").classList.remove("hidden")
}

// calculate trip cost 
function Total(i,coupon) {
  sum=i*(parseInt(document.getElementById("people").value))
  if (document.getElementsByClassName("check")[0].checked==true) {
    sum+=170*(parseInt(document.getElementById("people").value))
  }
  if (document.getElementsByClassName("check")[1].checked==true) {
    document.getElementById("car_number").classList.remove("hidden")
    sum+=1000*(parseInt(document.getElementById("car").value))
  }else{
    document.getElementById("car_number").classList.add("hidden")
    document.getElementById("car").value="1"
  }
  switch (coupon) {
    case "QUIZ2":
      document.getElementById("total").innerHTML = parseInt((sum/100)*98)
      break;
    case "QUIZ4":
      document.getElementById("total").innerHTML = parseInt((sum/100)*96)
      break;
    case "QUIZ6":
      document.getElementById("total").innerHTML = parseInt((sum/100)*94)
      break;
    case "QUIZ8":
      document.getElementById("total").innerHTML = parseInt((sum/100)*92)
      break;
    case "QUIZ10":
      document.getElementById("total").innerHTML = parseInt((sum/100)*90)
      break;  
    default:
      document.getElementById("total").innerHTML = sum
      break;
  }
}

// go home
function home() {
  location.replace('../Home.html')
}
