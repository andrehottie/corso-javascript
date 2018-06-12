/**
 * It should print menu .Header-nav-el elements inside #menu
 *
 * <li class="Header-nav-el">
 *     <a href="#menu1">Menu 1</a>
 * </li>
 * 
 * @param menu
 * 
 * @return {undefined}
 */
function printMenu(menu) {
    var menuEl = document.getElementById('menuEL');
    menuEl.innerHTML="";

    var dataLength = menu.data.length;

    for (var i = 0; i < dataLength; i++) {
        var li = document.createElement("li");
        li.classList.add("Header-nav-el");

        var a = document.createElement("a");
        a.setAttribute("href", menu.data[i].href);
        a.textContent = menu.data[i].label;

        li.appendChild(a);

        menuEl.appendChild(li);
    }
}

/**
 * It should print inside #personalEl
 * 
 * <div class="PersonalInfos-image">
 *     <img src="https://www.placecage.com/500/500" alt="">
 * </div>
 * <div class="PersonalInfos-content">
 *     <h1>Name Surname</h1>
 *     <h2>Job position</h2>
 *     <ul class="PersonalInfos-skills">
 *         <li>#skill</li>
 *         <li>#skill</li>
 *         <li>#skill</li>
 *         <li>#... n</li>
 *     </ul>
 * </div>
 * 
 * @return {undefined}
 */
function printPersonalInfos(personal) {

    //CREAZIONE ELEMENTI
    var personalEl = document.getElementById('personalEl');
    personalEl.innerHTML="";
    var divimg = document.createElement("div"); // creo div img
    var divcon = document.createElement("div"); // creo div info
    var img = document.createElement("img"); // creo img
    var ul = document.createElement("ul"); // creo ul
    var h1 = document.createElement("h1"); // creo h1
    var h2 = document.createElement("h2"); // creo h2

    // CARATTERIZZAZIONE ELEMENTI
    divimg.classList.add("PersonalInfos-image"); // caratterizzo divimg
    divcon.classList.add("PersonalInfos-content"); // caratterizzo divinf
    h1.textContent = personal.data.firstname + " " + personal.data.surname; // caratterizzo h1
    h2.textContent = personal.data.position; // caratterizzo h2
    img.setAttribute("src", personal.data.img); // setto img
    ul.classList.add("PersonalInfos-skills"); // caratterizzo ul

    // INSERIMENTO ELEMENTI
    document.querySelector("#personalEl").appendChild(divimg);  // inserisco divimg nel body
    document.querySelector("#personalEl").appendChild(divcon); //inserisco divcon nel body

    document.querySelector(".PersonalInfos-image").appendChild(img);  // inserisco img in divimg

    document.querySelector(".PersonalInfos-content").appendChild(h1); // inserisco h1 nel divcon
    document.querySelector(".PersonalInfos-content").appendChild(h2); // inserisco h2 nel divcon
    document.querySelector(".PersonalInfos-content").appendChild(ul); // inserisco ul nel divcon

    personal.data.skills.forEach(e => {   // creo, caratterizzo, e inserisco dentro ul, tutti gli elementi  li "skills"
        var li = document.createElement("li");
        li.textContent = e;
        document.querySelector(".PersonalInfos-skills").appendChild(li);
        
    });
}

/**
 * It should print inside #workEl
 *
 * <h3 class="WorkExperience-title">Work Experience</h3>
 * <div class="WorkExperience-content">
 *     <div class="WorkExperience-row">
 *         <h4>Job Title</h4>
 *         <p>...</p>
 *     </div>
 * </div>
 * 
 * @return {undefined}
 */

function printWorkExperience(work) {
    //CREAZIONE ELEMETI
    var workEl = document.getElementById('workEl');
    workEl.innerHTML="";
    var h3 = document.createElement("h3");
    var divcon = document.createElement("div");
    var divrow = document.createElement("div");


    h3.classList.add("WorkExperience-title");
    h3.textContent = work.section.title;
    divcon.classList.add("WorkExperience-content");
    divrow.classList.add("WorkExperience-row");


    document.querySelector("#workEl").appendChild(h3);
    document.querySelector("#workEl").appendChild(divcon);
    document.querySelector(".WorkExperience-content").appendChild(divrow);

    work.data.forEach(e => {
        var h4 = document.createElement("h4");
        var p = document.createElement("p");

        h4.textContent = e.title;
        p.textContent = e.description;

        document.querySelector(".WorkExperience-row").appendChild(h4);
        document.querySelector(".WorkExperience-row").appendChild(p);

                
    });

    // var el = document.querySelector("button");

    // el.addEventListener("click", function(e){
    //     console.log(e.target);
    //     console.log(e.type);

    //     e.preventDefault();
    // });


    // -------------------------------------------    esercizio work experience

    // implementation here

var workselect = document.querySelector("#work-select");
    
var form = document.querySelector("form");
var in1 = document.querySelector("#title");
var in2 = document.querySelector("#description");

form.addEventListener("submit", function(e){
    var selectel = document.createElement("option");
    e.preventDefault();

    var nuovoobj = {
        title: in1.value,
        description: in2.value
    }
    
    var push = api.en.works.data.push(nuovoobj);
    selectel.value = ((push)-1);
    selectel.textContent = "Work: " + (nuovoobj.title);
    workselect.appendChild(selectel); 
    

});

for (let index = 0; index < work.data.length; index++) {
    var selectel = document.createElement("option");
    selectel.value = (index);
    selectel.textContent = "Work: " + (work.data[index].title);
    workselect.appendChild(selectel); 
    
    
}


workselect.addEventListener("change", function(e){

    var indice = e.target.value;

    var h4 = document.querySelector(".WorkExperience-row h4");
    var p = document.querySelector(".WorkExperience-row p");

    h4.innerHTML = work.data[indice].title;
    p.innerHTML = work.data[indice].description;


});




}



// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVV DON'T TOUCH THIS VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

function render(locale) {
    if ({}.hasOwnProperty.call(api, locale)) {
        if ({}.hasOwnProperty.call(api[locale], 'menu')) {
            printMenu(api[locale].menu);
        }

        if ({}.hasOwnProperty.call(api[locale], 'personal')) {
            printPersonalInfos(api[locale].personal);
        }

        if ({}.hasOwnProperty.call(api[locale], 'works')) {
            printWorkExperience(api[locale].works);
        }
    } else {
        alert('Please fill api data with the ' + locale.toUpperCase() + ' object');
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    var lang = document.querySelector('#language-choice');

    render(lang.value);

    lang.addEventListener('change', function(e) {
        var value = e.target.value;
        render(value);
    })
});  
