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

// Frequently asked questions
var faq = document.getElementsByClassName("faq-btn");
var f;

for(f = 0; f < faq.length; f++) {
    faq[f].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var panel = this.nextElementSibling;
        if(panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}



// search function
const posts = [
    {
        title: "Is VR the future?",
        link: "https://samsonflomo.github.io/blog/posts/tec-1.html",
        img: "https://samsonflomo.github.io/blog/assets/images/featured/featured-1.jpg",
        category: "Technology",
        data: "<span>Dec 5th 2021</span><span class='article-data-spacer'></span><span>8 Min read</span>",
    },
    {
        title: "Development and skills",
        link: "https://samsonflomo.github.io/blog/categories/skills.html",
        img: "https://samsonflomo.github.io/blog/assets/images/featured/featured-1.jpg",
        category: "Development",
        data: "Read some powerful excerps and pickup some skill along the way..."
    },
    {
        title: "God",
        link: "https://samsonflomo.github.io/blog/categories/God.html",
        img: "https://samsonflomo.github.io/blog/assets/images/featured/featured-1.jpg",
        category: "God",
        data: "Learn about the creator your relationship with him.", },
    {
        title: "Nature",
        link: "https://samsonflomo.github.io/blog/categories/nature.html",
        img: "https://samsonflomo.github.io/blog/assets/images/featured/featured-1.jpg",
        category: "Nature",
        data: "View posts about nature....",
    },
    {
        title: "Fitness",
        link: "https://samsonflomo.github.io/blog/categories/fitness.html",
        img: "https://samsonflomo.github.io/blog/assets/images/featured/featured-1.jpg",
        category: "Fitness",
        data: "See and read about posts on fitness.j",
    },
    {
        title: "Inspirational or Motivational Quotes",
        link: "https://samsonflomo.github.io/blog/menu/quotes.html",
        img: "https://samsonflomo.github.io/blog/assets/images/featured/featured-1.jpg",
        category: "Quotes",
        data: "Boast your drive with some inspirational quotes.",
    },
    {
        title: "Buy me a cofee",
        link: "https://samsonflomo.github.io/blog/menu/cofee.html",
        img: "https://samsonflomo.github.io/blog/assets/images/featured/featured-1.jpg",
        category: "Support",
        data: "Please Support my hardwork...",
    },
    {
        title: "Home",
        link: "https://samsonflomo.github.io/blog/index.html",
        img: "https://samsonflomo.github.io/blog/assets/images/featured/featured-1.jpg",
        category: "Home",
        data: "Go back to home page.",
    },
    {
        title: "Nonprofit community",
        link: "https://samsonflomo.github.io/blog/menu/nontprotfit.html",
        img: "https://samsonflomo.github.io/blog/assets/images/featured/featured-1.jpg",
        category: "Nonprofit",
        data: "Learn more about our network and be part of our global team.",

    },
    {

        title: "Contact Information or social media",
        link: "https://samsonflomo.github.io/blog/menu/contact.html",
        img: "https://samsonflomo.github.io/blog/assets/images/featured/featured-1.jpg",
        category: "Contact Information",
        data: "<span>Dec 5th 2021</span><span class='article-data-spacer'></span><span>8 Min read</span>",

    },
       {

        title: "About Samson Flomo; author",
        link: "https://samsonflomo.github.io/blog/menu/about.html",
        img: "https://samsonflomo.github.io/blog/assets/images/featured/featured-1.jpg",
        category: "About Author",
        data: "Get a glipse of who am.",

    },
       {

        title: "NewsLeter",
        link: "https://samsonflomo.github.io/blog/menu/newsletter.html",
        img: "https://samsonflomo.github.io/blog/assets/images/featured/featured-1.jpg",
        category: "menu",
        data: "Subscribe to our newsletter.",

    },
       {

        title: "Contact Information or social media",
        link: "https://samsonflomo.github.io/blog/menu/contact.html",
        img: "https://samsonflomo.github.io/blog/assets/images/featured/featured-1.jpg",
        mpc_link: "../categories/skills.html",
        data: "<span>Dec 5th 2021</span><span class='article-data-spacer'></span><span>8 Min read</span>",

    },
       {

        title: "Contact Information or social media",
        link: "https://samsonflomo.github.io/blog/menu/contact.html",
        img: "https://samsonflomo.github.io/blog/assets/images/featured/featured-1.jpg",
        category: "Contact Information",
        data: "<span>Dec 5th 2021</span><span class='article-data-spacer'></span><span>8 Min read</span>",

    },
];


let  SearchResults = document.getElementsByClassName("search-results-container")[0];
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

    SearchResults.appendChild(card);
        });
})

search.addEventListener('keyup', () => {
    let filter = search.value.toUpperCase();
    let a = SearchResults.getElementsByTagName('a');

    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('result-content')[0];
        let c = b.getElementsByTagName('h6')[0];

        let textValue = c.textContent || c.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = '';
            SearchResults.style.visibility = 'visible';
            SearchResults.style.opacity = 1;
        } else {
            a[i].style.display = 'none';
        }

        if (search.value.length === 0) {
            SearchResults.style.visibility = 'hidden';
            SearchResults.style.opacity = 0;
        }
    }
});


// Email
const form = document.getElementById("contact-form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const phone = document.getElementById("phone");
const message = document.getElementById("message-id");

function sendEmail() {
    Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
    });

            form.submit();
            form.reset();
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the default form submission

        checkInputs();

        if (
            !fullName.classList.contains("error") &&
            !email.classList.contains("error") &&
            !phone.classList.contains("error") &&
            !subject.classList.contains("error") &&
            !message.classList.contains("error")
        ) {
            sendEmail();
        }
    });
});

