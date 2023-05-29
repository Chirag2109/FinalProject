window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) 
  {
    navbar.classList.add("sticky")
    document.getElementById("navbar").style.zIndex=1;
  }
  else 
  {
    navbar.classList.remove("sticky");
    document.getElementById("navbar").style.zIndex=0;
  }
}

window.onbeforeunload = function() 
{
  var text = "";
  return text;
}

function vf()
{
  var w=document.forms["form"]["Username"].value;
  var x=document.forms["form"]["Email-id"].value;
  if(w=="" || x=="")
  {
    document.getElementById("name").style.borderColor="Red";
    document.getElementById("id").style.borderColor="Red";
    alert("Required fields are not filled!!");
    return false;
  }
}