



// template parts
function header(){
    return `
        <div class="header">
            <div>
                <a href="/home"></a>
                <div>
                    <button><i class="fa-solid fa-xmark"></i></button>
                    <div class="nav">
                        <a class="nav-item" href="/home">Home</a>
                        <a class="nav-item" href="/properties">Properties</a>
                        <a class="nav-item" href="/agent">Agents</a>
                        <a class="nav-item" href="/blog">Blog</a>
                        <a class="nav-item" href="/contact">Contact</a>
                    </div>
                </div>
                <button><i class="fa-solid fa-bars"></i></button>
            </div>
        </div>
    `
}

function transparent(){
    return `
        <div class="transparent"></div>    
    `
}


function search(search){
    return `
        <div class="search">
            <div>
                <input placeholder="search..." type="text">
                <div class="select">
                    <span class="placeholder"></span>
                    <i class="fa-solid fa-chevron-down"></i>
                    <div class="list">
                        ${search.rent.map(item => `
                            <span>${item}</span>    
                        `).join(" ")}  
                    </div>
                </div>
                <div class="select">
                    <span class="placeholder"></span>
                    <i class="fa-solid fa-chevron-down"></i>
                    <div class="list">
                        ${search.bed.map(item => `
                            <span>${item}</span>    
                        `).join(" ")}  
                    </div>
                </div>
                <div class="select">
                    <span class="placeholder"></span>
                    <i class="fa-solid fa-chevron-down"></i>
                    <div class="list">
                        ${search.bath.map(item => `
                            <span>${item}</span>    
                        `).join(" ")}  
                    </div>
                </div>
                <button>Search</button>
            </div>
        </div>
    `
}


function hero(){
    return `
        <div class="hero">
            <img src="https://i.ibb.co/WvJsmfnQ/ronnie-george-9g-Gv-NWBe-Oq4-unsplash.jpg">
            <div>
                <span>Estate Hub</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo ligula ac pretium scelerisque. Donec suscipit nibh vel mi porttitor ullamcorper.</span>
                <a class="nav-item" href="/properties">View Properties</a>
            </div>
        </div>
    `
}


function property(properties){
    return `
        <div class="property">
            <span>Properties for sale</span>
            <div class="slide-show">
                ${
                   properties.map(property => `
                        <div class="slide">
                            <div>
                                <img src="${property.img}">
                            </div>
                            <div>
                                <span>${property.price}</span>
                                <span>${property.type}</span>
                                <span>${property.description}</span>
                            </div>
                        </div>
                    `).join(" ") 
                }
                <button class="prev"></button>
                <button class="next"></button>
            </div>
        </div>
    `
}


function agent(agents){
    return `
        <div class="agent">
            <span>Our Agents</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            <div class="slide-show">
                 ${
                   agents.map(agent => `
                        <div class="slide">
                            <div>
                                <img src="${agent.img}">
                            </div>
                            <div>
                                <span>${agent.name}</span>
                                <span>Real Estate Agent</span>
                            </div>
                        </div>
                    `).join(" ") 
                }
                <button class="prev"></button>
                <button class="next"></button>
            </div>
        </div>
    `
}


function blog(posts){
    return `
        <div class="blog">
            <span>Recent Posts</span>
            <div>
                ${
                    posts.map(post => `
                        <div class="post">
                            <div>
                                <img src="${post.img}">
                                <div>
                                    <span>${post.date.split(" ")[0]}</span>
                                    <span>${post.date.split(" ")[1]}</span>
                                </div>
                            </div>
                            <span>${post.title}</span>
                            <span>${post.preview}</span>
                        </div>
                    `).join(" ")
                }
            </div>
        </div>
    `
}

function contact(){
    return `
        <div class="contact">
            <span>Contact Us</span>
            <div>
                <img src="https://i.ibb.co/Xk7DQnzj/jason-dent-w3e-Fhq-Xjk-ZE-unsplash.jpg">
                <div></div>
                <div>
                    <i class="fa-solid fa-location-dot"></i>
                    <span>Rutherford, Camer</span>
                </div>
                <div>
                    <i class="fa-solid fa-envelope"></i>
                    <span>Estatehub@info.cmr</span>
                </div>
                <div>
                    <i class="fa-solid fa-phone"></i>
                    <span>+237-444-545-54545</span>
                </div>
            </div>
        </div>
    `
}


function footer(){
    return `
        <div class="footer">
            <div>
                <span>Navigation</span>
                <div>
                    <a class="nav-item" href="/home">Home</a>
                    <a class="nav-item" href="/properties">Properties</a>
                    <a class="nav-item" href="/agent">Agents</a>
                    <a class="nav-item" href="/blog">Blog</a>
                    <a class="nav-item" href="/contact">Contact</a>
                </div>
            </div>
            <div>
                <span>Support</span>
                <div>
                    <a href="">Commercial</a>
                    <a href="">Construction</a>
                    <a href="">Real Estate</a>
                </div>
            </div>
            <div>
                <span>Service</span>
                <div>
                    <a href="">Commercial</a>
                    <a href="">Construction</a>
                    <a href="">Real Estate</a>
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
            ${search(data.search)}
            ${hero()}
            ${property(data.properties)}
            ${agent(data.agents)}
            ${blog(data.posts)}
            ${contact()}
            ${transparent()}
        </div>
        ${footer()}
    `
}



// full page templates
function homePage(data){
    return `
        <!DOCTYPE>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="description" content="real estate, home, house for sale">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css">
                <link rel="stylesheet" href="static/css/home.css">
                <title>Estate Hub</title>
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


// export templates
export const rootTemplates = {
    "index.html":home
}

export const pageTemplates = {
    "index.html":homePage
}



