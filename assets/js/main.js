// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error('Something went wrong, make sure that ${selector} exists or is typed correctly');
};

//Nav styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement('.header');
    if(this.scrollY >= 15) {
        headerElement.classList.add('activated');
    }else{
        headerElement.classList.remove('activated');
    };
};

window.addEventListener('scroll', scrollHeader)

// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    mobleMenu = selectElement('#menu');
    mobleMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu)
// Open/Close search form popup
const formOpenButton = selectElement('#search-icon')
const formCloseBtn = selectElement('#form-close-btn')
const searchFormContainer = selectElement('#search-form-container')

formOpenButton.addEventListener('click', () => {
    searchFormContainer.classList.add('activated');
});

formCloseBtn.addEventListener('click', () => {
    searchFormContainer.classList.remove('activated');
});
// -- Close the search form popup on ESC keypress
window.addEventListener('keyup', event => {
    if(event.key === 'Escape') searchFormContainer.classList.remove('activated');
});


// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if(currentTheme){
    bodyElement.classList.add('light-theme')
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');

    if(bodyElement.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    }else{
        localStorage.removeItem('currentTheme');
    };
});

// Swiper
const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        700: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
});

   // Quote js
    const quote = document.getElementById("quote");
    const author_q = document.getElementById("author");
    const quoteDetails = document.getElementById("quoteDetails");
    const quoteDate = document.getElementById("quoteDate");
    const quoteAuthor = document.getElementById("quoteAuthor");
    const api_url = "https://api.quotable.io/random";

    // Your own quotes
    const customQuotes = [
        {
            content: "Your custom quote 1",
            author: "Author 1",
            dateModified: "December 15, 2023"
        },
        {
            content: "Your custom quote 2",
            author: "Author 2",
            dateModified: "December 16, 2023"
        },
        // Add more custom quotes as needed
    ];

    function getRandomQuote() {
        // Randomly choose between quotable.io API and custom quotes
        const randomChoice = Math.random() < 0.5 ? getQuotableIOQuote() : getCustomQuote();
        return randomChoice;
    }

    function getQuotableIOQuote() {
        // Call quotable.io API to get a random quote
        // This function should return a Promise
        return fetch(api_url)
            .then(response => response.json());
    }

    function getCustomQuote() {
        // Randomly choose a custom quote
        return customQuotes[Math.floor(Math.random() * customQuotes.length)];
    }

    function updateQuote({ content, author, dateModified }) {
        quote.innerHTML = `<span><i class="ri-double-quotes-l"></i></span>
                            ${content}
                            <span><i class="ri-double-quotes-r"></i></span>`;
        quoteDate.innerHTML = dateModified;
        quoteAuthor.innerHTML = author;
        author_q.innerHTML = author;
    }

    async function getQuote(url) {
        try {
            const quoteData = await getRandomQuote();
            updateQuote(quoteData);
        } catch (error) {
            console.error("Error fetching quote:", error);
        }
    }

    function toggleDetails() {
        // Toggle the display of the detailed content
        quoteDetails.style.display = quoteDetails.style.display === "none" ? "block" : "none";
    }

    // Initial call to get a quote
    getQuote(api_url);


// search function
const posts = [
    {
        title: "Is VR the future?",
        link: "./posts/tec-1.html",
        img: "./assets/images/featured/featured-1.jpg",
        category: "Technology",
        data: "<span>Dec 5th 2021</span><span class='article-data-spacer'></span><span>8 Min read</span>",
    },
    {
        title: "Development and skills",
        link: "./categories/skills.html",
        img: "./assets/images/featured/featured-1.jpg",
        category: "Development",
        data: "Read some powerful excerps and pickup some skill along the way..."
    },
    {
        title: "God",
        link: "./categories/God.html",
        img: "./assets/images/featured/featured-1.jpg",
        category: "God",
        data: "Learn about the creator your relationship with him.", },
    {
        title: "Nature",
        link: "./categories/nature.html",
        img: "./assets/images/featured/featured-1.jpg",
        category: "Nature",
        data: "View posts about nature....",
    },
    {
        title: "Fitness",
        link: "./categories/fitness.html",
        img: "./assets/images/featured/featured-1.jpg",
        category: "Fitness",
        data: "See and read about posts on fitness.j",
    },
    {
        title: "Inspirational or Motivational Quotes",
        link: "./menu/quotes.html",
        img: "./assets/images/featured/featured-1.jpg",
        category: "Quotes",
        data: "Boast your drive with some inspirational quotes.",
    },
    {
        title: "Buy me a cofee",
        link: "./menu/cofee.html",
        img: "./assets/images/featured/featured-1.jpg",
        category: "Support",
        data: "Please Support my hardwork...",
    },
    {
        title: "Home",
        link: "index.html",
        img: "./assets/images/featured/featured-1.jpg",
        category: "Home",
        data: "Go back to home page.",
    },
    {
        title: "Nonprofit community",
        link: "./menu/nontprotfit.html",
        img: "./assets/images/featured/featured-1.jpg",
        category: "Nonprofit",
        data: "Learn more about our network and be part of our global team.",

    },
    {

        title: "Contact Information or social media",
        link: "./menu/contact.html",
        img: "./assets/images/featured/featured-1.jpg",
        category: "Contact Information",
        data: "<span>Dec 5th 2021</span><span class='article-data-spacer'></span><span>8 Min read</span>",

    },
       {

        title: "About Samson Flomo; author",
        link: "./menu/about.html",
        img: "./assets/images/featured/featured-1.jpg",
        category: "About Author",
        data: "Get a glipse of who am.",

    },
       {

        title: "NewsLeter",
        link: "./menu/newsletter.html",
        img: "./assets/images/featured/featured-1.jpg",
        category: "menu",
        data: "Subscribe to our newsletter.",

    },
       {

        title: "Contact Information or social media",

        link: "./menu/contact.html",
        img: "./assets/images/featured/featured-1.jpg",
        category: "Contact Information",
        data: "<span>Dec 5th 2021</span><span class='article-data-spacer'></span><span>8 Min read</span>",

    },
       {

        title: "Contact Information or social media",

        link: "./menu/contact.html",
        img: "./assets/images/featured/featured-1.jpg",
        category: "Contact Information",
        data: "<span>Dec 5th 2021</span><span class='article-data-spacer'></span><span>8 Min read</span>",

    },
];

let searchResultsContainer = document.getElementsByClassName("search-results-container")[0];
let search = document.getElementById('searchInput')

window.addEventListener('load', () => {
    posts.forEach(element => {
        const {title, link, img, category, data} = element;

        let card = document.createElement('a');
        card.href = link
        card.innerHTML = `<img src="${img}">
            <div class="result-content">
            <h6>${title}</h6>
            <p>${data}</p>
            </div>`;

    searchResultsContainer.appendChild(card);
    });
})

search.addEventListener('keyup', () => {
    let filter = search.value.toUpperCase();
    let a = searchResultsContainer.getElementsByTagName('a');

    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('result-content')[0];
        let c = b.getElementsByTagName('h6')[0];

        let textValue = c.textContent || c.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = '';
            searchResultsContainer.style.visibility = 'visible';
            searchResultsContainer.style.opacity = 1;
        } else {
            a[i].style.display = 'none';
        }

        if (search.value.length === 0) {
            searchResultsContainer.style.visibility = 'hidden';
            searchResultsContainer.style.opacity = 0;
        }
    }
});


// Email
const form = document.getElementById("contact-form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

    console.log(fullName);


function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br>Email Address: ${email.value}
    <br>Phone Number: ${phone.value}<br>${message.value}`;

 Email.send({
    Host : "smtp.elasticemail.com",
    Username : "flomosamson125@gmail.com",
    Password : "BC065BF2A9FAC754887278D0B5BBC8A88C1B",
    To : 'flomosamson125@gmail.com',
    From : "flomosamson125@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
 }).then(

  message => {
      if(message == "OK"){
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
           });
      };
  }

);

};

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for(const item of items) {
        if(item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");

        }

        item.addEventListener("keyup", () => {
            if(item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }

};


document.addEventListener("DOMContentLoaded", function() {

    form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();

    if(!fullName.classList.contains("error") &&
       !email.classList.contains("error") &&
        !phone.classList.contains("error") &&
        !subject.classList.contains("error") &&
        !message.classList.contains("error")) {

        sendEmail();

        form.reset();
        return false;
    }
});

});


