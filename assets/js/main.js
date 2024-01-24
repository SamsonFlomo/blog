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
        link: "https://samsonflomo.pages.dev/posts/tec-1.html",
        img: "https://samsonflomo.pages.dev/assets/images/featured/featured-1.jpg",
        category: "Technology",
        data: "<span>Dec 5th 2021</span><span class='article-data-spacer'></span><span>8 Min read</span>",
    },
    {
        title: "Development and skills",
        link: "https://samsonflomo.pages.dev/categories/skills.html",
        img: "https://samsonflomo.pages.dev/assets/images/skills.jpeg",
        category: "Development",
        data: "Read some powerful excerps and pickup some skills along the way..."
    },
    {
        title: "God",
        link: "https://samsonflomo.pages.dev/categories/God.html",
        img: "https://samsonflomo.pages.dev/assets/images/God.jpeg",
        category: "God",
        data: "Learn about the creator your relationship with him.", },
    {
        title: "Nature",
        link: "https://samsonflomo.pages.dev/categories/nature.html",
        img: "https://samsonflomo.pages.dev/assets/images/nature.jpeg",
        category: "Nature",
        data: "View posts about nature....",
    },
    {
        title: "Fitness",
        link: "https://samsonflomo.pages.dev/categories/fitness.html",
        img: "https://samsonflomo.pages.dev/assets/images/fitness.jpeg",
        category: "Fitness",
        data: "See and read about posts on fitness.",
    },
    {
        title: "Inspirational or Motivational Quotes",
        link: "https://samsonflomo.pages.dev/menu/quotes.html",
        img: "https://samsonflomo.pages.dev/assets/images/quote.png",
        category: "Quotes",
        data: "Boast your drive with some inspirational quotes.",
    },
        {
        title: "Home",
        link: "https://samsonflomo.pages.dev/index.html",
        img: "https://samsonflomo.pages.dev/assets/images/home.jpeg",
        category: "Home",
        data: "Go back to home page.",
    },
    {
        title: "Nonprofit community",
        link: "https://samsonflomo.pages.dev/menu/nontprotfit.html",
        img: "https://samsonflomo.pages.dev/assets/images/nonpofit_logo.jpg",
        category: "Nonprofit",
        data: "Read about our nonprofit and support or join our global team.",

    },
    {

        title: "About Author || Samson Flomo",
        link: "https://samsonflomo.pages.dev/menu/about.html",
        img: "https://samsonflomo.pages.dev/assets/images/author.jpg",
        category: "About Author",
        data: "Get a glimpse of who am.",

    },
       {

        title: "NewsLeter || Subscribe",
        link: "https://samsonflomo.pages.dev/menu/newsletter.html",
        img: "https://samsonflomo.pages.dev/assets/images/newsletter.jpeg",
        category: "menu",
        data: "Subscribe for newsletters.",

    },
       {

        title: "Contact Information or social media",
        link: "https://samsonflomo.pages.dev/menu/contact.html",
        img: "https://samsonflomo.pages.dev/assets/images/contact.jpeg",
        category: "Contact Information",
        data: "You can message me here....",

    },
       {

        title: "Frequently Asked Questions",
        link: "https://samsonflomo.pages.dev/categories/faq.html",
        img: "https://samsonflomo.pages.dev/assets/images/faq.jpeg",
        data: "Do you have a question in mind?"

    },
       {

        title: "Elements and Categories",
        link: "https://samsonflomo.pages.dev/categories/elements.html",
        img: "https://samsonflomo.pages.dev/assets/images/elemtents.jpeg",
        data: "Dimensions of my blog contents...",

    },
       {

        title: "Buy Me a Cofee || Support",
        link: "https://samsonflomo.pages.dev/menu/cofee.html",
        img: "https://samsonflomo.pages.dev/assets/images/cofee.png",
        data: "Please support the maintainence of my to help...",

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
            <p style='color: var(--light-color-alt)'>
            ${data}
            </p>
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
            content: "The best place to train your self-discipline is when you're angry. Because when you're angry, you experience feelings you can't control.",
            author: "Samson Flomo",
            dateModified: "January 20, 2024"
        },
        {
            content: "Desiring is not the problem, Doing the work is not the problem,  The skill is definitely not the problem, but Consistency is the problem for many of us.",
            author: "Samson Flomo",
            dateModified: "January 20, 2024"
        },
        {
            content: "Sometimes you gatto stop accepting how weak you're and embrace how strong you can become.",
            author: "Samson Flomo",
            dateModified: "January 21, 2024"
        },
        {
            content: "Your time is the prize for success and it's not just your time, but how you spend your time.",
            author: "Samson Flomo",
            dateModified: "January 17, 2024"
        },
        {
            content: "Stop accepting a trashed life, refuse it with your actions!",
            author: "Samson Flomo",
            dateModified: "January 17, 2024"
        },
        {
            content: "When you're uncommon, get ready for the common people to envy you, to be perplexed when they see you, to discuss you.",
            author: "Samson Flomo",
            dateModified: "January 17, 2024"
        },
        {
            content: "When you're just starting it feels like you're doing nothing. But remember, only few have the courage to start and only 1% make it to the finish line",
            author: "Samson Flomo",
            dateModified: "January 17, 2024"
        },
        {
            content: "If you can't change the world, you can change your world and the world will follow.",
            author: "Samson Flomo",
            dateModified: "January 17, 2024"
        },
        {
            content: "You are more than enough.",
            author: "Samson Flomo",
            dateModified: "January 17, 2024"
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
