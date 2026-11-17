// In this file each component is a function that returns a string of HTML.
// Our Shared Data
// A const (constant) holding text will want to reuse everywhere.

const siteName = "Bright Bean Coffee";
// An ARRAY of object: one per nav item.
const navLinks = [
  { text: "Home", href: "index.html", page: "home" },
  { text: "About", href: "about.html", page: "about" },
  { text: "Contact", href: "contact.html", page: "contact" },
];
// our 1st component ... Metadata
// Small helper: makes text safe to sit inside an HTML attribute
function escapeAttributes(text) {
    return String(text).replace(/&/g, "&amp;").replace(/"/g,"&quot");
}
// title, description and robots are parameters, so every page can send in its own values.
function createMetadata(title, description, robots = "index, nofollow") {
    // every page title end with the site name for example "About | Bright Bean Coffee"
    const fullTitle = `${title} | ${siteName}`;
    return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="${escapeAttributes(robots)}">
    <meta name="description" content="${escapeAttributes(description)}">
    <title>${escapeAttributes(fullTitle)}</title>
    `;
}
// Header Component
function createHeader(currentPage) {
    // Map turns every link object into a string of HTML.
    // join glues the strings toghether with nothing between them
    // skip join and use get unwanted commas between the links.
    const links = navLinks
        .map((item) => {
            // the ternary operator from part 1: if this link is the current page
            // add aria-current="page" otherwise nothing
            const current = links.page === currentPage ? 'aria-current="page"' : "";
            return `<li><a href="${links.href}" ${current}>${links.label}</a></li>`
        })
        .join("");
        return `
            <a class="logo" href="index.html">${siteName}</a>
            <nav>
                <menu>
                    ${links}
                </menu>
            </nav>
        `;
}
// Footer Component
function createFooter(name, year = new Date().getFullYear()){
    return `
        <p>&copy; ${year} ${name}. All right (singular) reserved."</p>
        <p>New Brunswick</p>
    `;
}
// Call to Action Component
function createCallToAction(content){
    // this function takes one parameter and object holding all the content
    // Each page can send in different content, but the layout will stay the same
    return `
    <h2>${content.heading}
    <p>${content.text}</p>
    <a class="button" href="${content.link}">${content.buttonText}</a>
    `;
}

// Card Component
function createCard(title,text){
    return`
    <article class="card">
        <h3>${title}</h3>
        <p>${text}</p>
    </article>

    `;
}

// HTML to page helper
// this function finds the element that matches the selector and fills it with HTML
function renderer(selector,html){
    const element = document.querySelector(selector);
    // if the page doesn't have that placeholder querySelector gives a null
    if(element === null){
        console.log(selector + "has blown up and needs to be replaced."
        );
        return;
    };
    element.innerHTML = html;
}

// like renderer(), but for the head. "Afterbegin" means at the very start of the head .. we are doing this so the meta data sits above css and js
function renderHead(html){
    document.head.insertAdjacentHTML("afterbegin",html);
}