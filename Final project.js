// ===========================
// ACTIVE NAVIGATION
// ===========================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});



// ===========================
// DARK MODE
// ===========================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.innerHTML = "☀️";
    } else {
        darkModeBtn.innerHTML = "🌙";
    }

});

// ===========================
// SEARCH BOOKS
// ===========================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    let filter = searchInput.value.toLowerCase();

    let books = document.querySelectorAll(".book-card");

    books.forEach(function(book){

        let title = book.querySelector("h3").textContent.toLowerCase();

        let author = book.querySelector("p").textContent.toLowerCase();

        if(title.includes(filter) || author.includes(filter)){
            book.style.display = "block";
        }
        else{
            book.style.display = "none";
        }

    });

});

// ===========================
// FAVORITE BOOKS
// ===========================

const favButtons = document.querySelectorAll(".book-card button");
const favoriteBooks = document.getElementById("favoriteBooks");
const noFavorites = document.getElementById("noFavorites");

favButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const bookCard = button.closest(".book-card");

        const bookTitle = bookCard.querySelector("h3").textContent;
        const bookAuthor = bookCard.querySelector("p").textContent;

        const existingBook = document.getElementById(
            "favorite-" + bookTitle.replace(/\s+/g, "-")
        );

        // ADD BOOK
        if (button.innerHTML.includes("Add to Favorites")) {

            button.innerHTML = "❤️ Added";
            button.style.background = "crimson";

            // Hide "No favorite books"
            noFavorites.style.display = "none";

            // Create favorite book
            const favoriteItem = document.createElement("div");

            favoriteItem.classList.add("favorite-item");

            favoriteItem.id =
                "favorite-" + bookTitle.replace(/\s+/g, "-");

            favoriteItem.innerHTML = `
                <h3>${bookTitle}</h3>
                <p>${bookAuthor}</p>
                <button class="remove-favorite">
                    Remove ❤️
                </button>
            `;

            favoriteBooks.appendChild(favoriteItem);

            // Remove button
            favoriteItem
                .querySelector(".remove-favorite")
                .addEventListener("click", function() {

                    favoriteItem.remove();

                    button.innerHTML = "Add to Favorites";
                    button.style.background = "#2563eb";

                    if (favoriteBooks.children.length === 0) {
                        noFavorites.style.display = "block";
                    }

                });

        }

        // REMOVE BOOK
        else {

            button.innerHTML = "Add to Favorites";
            button.style.background = "#2563eb";

            if (existingBook) {
                existingBook.remove();
            }

            if (favoriteBooks.children.length === 0) {
                noFavorites.style.display = "block";
            }

        }

    });

});

// ===========================
// WELCOME MESSAGE
// ===========================

window.onload = function(){

    console.log("Welcome to BookNest Library!");

};
// ===========================
// WHY CHOOSE US
// ===========================

const whyCards = document.querySelectorAll(".why-card");

whyCards.forEach(function(card){

    card.addEventListener("click", function(){

        alert("Thank you for exploring Book Heaven! 📚");

    });

});
// ===========================
// TESTIMONIAL SLIDER
// ===========================

const testimonials = [

{
    text: "Book Heaven helped me discover amazing books for my studies. I really enjoy using it.",
    name: "- Sarah"
},

{
    text: "The website is simple, beautiful, and easy to navigate. I found my favorite books quickly.",
    name: "- Ahmed"
},

{
    text: "I love saving my favorite books. Book Heaven makes reading enjoyable.",
    name: "- Maria"
}

];

let index = 0;

const testimonialText = document.getElementById("testimonialText");
const testimonialName = document.getElementById("testimonialName");

function changeTestimonial(){

    testimonialText.innerHTML = testimonials[index].text;
    testimonialName.innerHTML = testimonials[index].name;

    index++;

    if(index === testimonials.length){
        index = 0;
    }

}

changeTestimonial();

setInterval(changeTestimonial,4000);

// ===========================
// FEEDBACK FORM
// ===========================

const feedbackForm = document.getElementById("feedbackForm");
const feedbackMessage = document.getElementById("feedbackMessage");

feedbackForm.addEventListener("submit", function(event){

    event.preventDefault();

    feedbackMessage.innerHTML =
    "✅ Thank you for your feedback! We appreciate your opinion.";

    feedbackForm.reset();

});