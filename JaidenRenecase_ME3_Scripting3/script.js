/*(Beyond Fireship, 2022)*/
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });

});


const portfolioElements = document.querySelectorAll('.portfolio');
portfolioElements.forEach((el) => observer.observe(el));

/*(Debular Websites,2023)*/

var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    if(prevScrollpos > currentScrollPos){
        document.getElementById("header").style.top = "0";
    }else {
        document.getElementById("header").style.top = "-200px";       
    }
    prevScrollpos = currentScrollPos;
}