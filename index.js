const fullname = "Beyan Errahim";
const age = 23;

var btn = document.getElementById("btn");
var linkedin = document.getElementById("linkedinUrl");
var github = document.getElementById("githubUrl");

function adVeAgeGetir() {
    document.getElementById("nameSurname").innerHTML = fullname;
    document.getElementById("age").innerHTML = age;
    btn.style.display = "none";
}
 btn.addEventListener("click", adVeAgeGetir);
 
linkedin.setAttribute("href" ,"https://www.linkedin.com/in/beyan-errahim-0aa223215/");
github.setAttribute("href" ,"https://github.com/beyanerrahim");


