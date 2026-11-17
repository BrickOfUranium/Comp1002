// Runs on every page. It uses the components from the components.js
// Now we ask what page we're on?
const page = document.body.dataset.page;
// We have our location, we need meta data
const pageMeta = {
    home: {
        title: "Home", 
        description: "This is dingleburry"
    },
    about: {
        title: "About", 
        description: "This is burjjury"
    },
    contact: {
        title: "Contact", 
        description: "This is mingigum"
    }
};
// the CTA content
const ctaContent = {
    home: {
        heading: "Deme",
        text: "Fors",
        buttonText: "Gara",
        link: "index.html"
    },
    about: {
        heading: "Deme",
        text: "Fors",
        buttonText: "Gara",
        link: "index.html"
    },
    contact: {
        heading: "Deme",
        text: "Fors",
        buttonText: "Gara",
        link: "index.html"
    }
}
const favorites = [
{title: "Glass Table Break SFX", text: "Our table! It's broken"},
{title: "Glass Table Break SFX", text: "Our table! It's broken"},
{title: "Glass Table Break SFX", text: "Our table! It's broken"},
{title: "Glass Table Break SFX", text: "Our table! It's broken"},
];

//
// Now the hard part
//
// metadata goes in the <head>
const meta = pageMeta[page];
renderHead(createMetadata(meta.title, meta.description, meta.robots));
// Filling in the pages
renderer("#site-header",createHeader(page));
renderer("#site-footer",createFooter(siteName));
renderer("#cta", createCallToAction(ctaContent[page]));

// turn every object in the array into a card
const cardHTML = favorites
.map((item) =>  createCard(item.title, item.text))
.join("");

// rendering time
render("#cards", cardsHtml);