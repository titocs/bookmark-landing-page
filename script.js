/* mobile menus */
const hamburger = document.querySelector("#hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeButton = document.querySelector("#close__button");

/* list bookmark desc */
const bookmarkDesc = document.querySelectorAll("ul > li");
const image = document.querySelector(".image-features-wrapper > img");
const titleBookmark = document.querySelector(".bookmark-description > h1");
const descBookmark = document.querySelector(".bookmark-description > p");

/* FAQ */
const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".accordion > p");
const arrow = document.querySelectorAll(".question > svg");
const fillArrow = document.querySelectorAll(".question > svg > path");

/* ERROR */
const contactButton = document.querySelector(".contact-button");
const error = document.querySelector(".error-message");
const input = document.querySelector('input[type="text"]');

/* Media query */
const mediaQuery = window.matchMedia('(min-width: 992px)');

/* Bookmark list */
function myFunction(x) {
    if(x.matches){
        for(let i=0; i<bookmarkDesc.length; i++){
            bookmarkDesc[i].addEventListener("click", function(){
                image.setAttribute("src", "images/illustration-features-tab-" + (i+1) + ".svg");
                if(i === 0){
                    titleBookmark.textContent = "Bookmark in one click";
                    descBookmark.textContent = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
                }
                else if(i === 1){
                    titleBookmark.textContent = "Intelligent search";
                    descBookmark.textContent = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
                }
                else{
                    titleBookmark.textContent = "Share your bookmarks";
                    descBookmark.textContent = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
                }
                bookmarkDesc.forEach(function(bookmark){
                    if(bookmark.classList.contains("borderSliderBottom")){
                        bookmark.classList.remove("borderSliderBottom");
                    }
                })
                bookmarkDesc[i].classList.add("borderSliderBottom");
            })
        }
    }
    else {
        var styleAfter = document.createElement("style");
        styleAfter.innerHTML = `
        ul > li::after {
            content: "";
            text-align: center;
            position: absolute;
            width: 8em;
            height: 4px;
            background-color: var(--Soft-Red);
            top: 88%;
            left: 50%;
            margin-left: -5px;
            transform: translateY(35%) translateX(-47%);
        }
        `;
        
        for(let i=0; i<bookmarkDesc.length; i++){
            bookmarkDesc[i].addEventListener("click", function(){
                bookmarkDesc[i].appendChild(styleAfter);
            })
        }
    }
}
myFunction(mediaQuery);
mediaQuery.addListener(myFunction);

/* display and close mobile menus */
hamburger.addEventListener("click", function(){
    mobileMenu.classList.remove("displayNone");
})

closeButton.addEventListener("click", function(){
   mobileMenu.classList.add("displayNone");
})

/* Event for FAQ */
for(let i=0; i<question.length; i++){
    question[i].addEventListener("click", function(){
        answer[i].classList.toggle("displayNone");
        question[i].classList.toggle("borderBottom");
        arrow[i].classList.toggle("transformRotate");
        fillArrow[i].classList.toggle("fillArrow");
    })
}

/* Event for error message */
function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return inputText.match(mailformat) ? true : false;
}

contactButton.addEventListener("click", function(){
    if(!ValidateEmail(input.value)){ // wrong email
        error.classList.remove("displayNone");
        input.style.backgroundSize = "20px";
    }
    else{
        error.classList.add("displayNone");
        input.style.backgroundSize = "0px";
    }
})
