


// template parts
function header(){
    return `
        <div class="header">
            <div>
                <a href="index.html">Emilys</a>
                <div>
                    <button>Menu</button>
                    <div>
                        <a href="index.html">Home</a>
                        <a href="about.html">About</a>
                        <a href="contact.html">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    `
}

function hero(page){
    return `
        <div class="hero">
            <div>
                <div>
                    ${
                        page == "home" ? `
                            <span>At Emilys, we make cloths that suit you</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat, mi et sollicitudin auctor, nisi ante accumsan nibh, eu hendrerit dolor mi ut quam. Sed nunc augue, malesuada ac nisl a, porttitor blandit libero.</span>
                            <a href="#service">Our Services</a>
                        `
                        : page == "about" ? `<span>About</span>` : `<span>Contact</span>`
                    }
                </div>
                <div>
                    <img src="">
                </div>
            </div>
        </div>
    `
}

function service(services){
    return `
        <div id="service" class="service">
            <div>
                <span>Our Services</span>
                <span>Phasellus fermentum tellus nec dolor suscipit, vitae blandit tellus finibus. Proin et velit leo. Vestibulum iaculis felis non nisi consequat, vel facilisis lacus ultrices.</span>
            </div>
            <div>
                <div>
                    ${
                        services.map(service => `
                            <div>
                                <span>${service.title}</span>
                                <span>${service.content}</span>
                            </div>
                        `).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function testimonial(testimonials){
    return `
        <div class="testimonial"></div>
    `
}

function contactSection(){
    return `
        <div class="contact">
            <div>
                <span>Get In Touch</span>
                <div>
                    <textarea placeholder="Message"></textarea>
                    <input type="text" placeholder="Name">
                    <input type="text" placeholder="Email">
                    <input type="text" placeholder="Subject">
                    <button>Send</button>
                    <div>
                        <span>Mountain Road, Soul City</span>
                        <span>+123-323-2342</span>
                        <span>info@emilys.com</span>
                    </div>
                </div>
            </div>
        </div>
    `
}

function aboutSection(){
    return `
        <div class="about">
            <div>
                <div>
                    <img src="">
                    <img src="">
                </div>
                <div>
                    <span>About Our Tailor</span>
                    <span>Duis pulvinar fringilla aliquet. Aenean nec lectus mollis, vestibulum ante nec, venenatis nunc. Proin ullamcorper quam ante, eu tempor lectus semper nec</span>
                    <span>Quisque sed mauris feugiat, porta purus sit amet, suscipit enim. Sed in interdum velit, quis eleifend magna. Quisque hendrerit magna eu gravida tempor.</span>
                    <a href="#">More About Us</a>
                </div>
            </div>
        </div>
    `
}

function footer(){
    return `
        <div class="footer">
            <img src="">
            <div></div>
            <div>
                <div>
                    <span>Media</span>
                    <div>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                    </div>
                </div>
                <div>
                    <span>Link</span>
                    <div>
                        <a href="index.html">Home</a>
                        <a href="about.html">About</a>
                        <a href="contact.html">Contact</a>
                    </ul>
                </div>
            </div>
        </div>
    `
}



// inner root templates
function home(data){
    return `
        ${header()}
        <div class="main">
            ${hero("home")}
            ${service(data.services)}
            ${testimonial(data.testimonials)}
        </div>
        ${footer()}
    `
}

function about(){
    return `
        ${header()}
        <div class="main">
            ${hero("about")}
            ${aboutSection()}
        </div>
        ${footer()}
    `
}

function contact(){
    return `
        ${header()}
        <div class="main">
            ${hero("contact")}
            ${contactSection()}
        </div>
        ${footer()}
    `
}



// full templates
function homePage(data){
    return `
        <!DOCTYPE>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="static/css/home.css">
                <title>Home</title>
            </head>
            <body>
                <div id="root">
                    ${home(data)}
                </div>
                <script type="module" src="static/js/home.js"></script>
            </body>
        </html>
    `
}

function aboutPage(){
    return `
        <!DOCTYPE>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="static/css/about.css">
                <title>About</title>
            </head>
            <body>
                <div id="root">
                    ${about()}
                </div>
                <script type="module" src="static/js/about.js"></script>
            </body>
        </html>
    `
}

function contactPage(){
    return `
        <!DOCTYPE>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="static/css/contact.css">
                <title>Contact</title>
            </head>
            <body>
                <div id="root">
                    ${contact()}
                </div>
                <script type="module" src="static/js/contact.js"></script>
            </body>
        </html>
    `
}


// export templates
export const rootTemplates = {
    "index.html":home,
    "about.html":about,
    "contact.html":contact
}

export const pageTemplates = {
    "index.html":homePage,
    "about.html":aboutPage,
    "contact.html":contactPage
}


