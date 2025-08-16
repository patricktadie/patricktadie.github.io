

var siteTemplates = {

    // template parts
    header(){
        return `
            <header>
                <div>
                    <h1><a href="/">Emilys</a></h1>
                    <div>
                        <button>Menu</button>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </header>
        `
    },

    hero(){
        return `
            <section class="hero">
                <div>
                    <div>
                        <h1>At Emilys, we make cloths that suit you</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat, mi et sollicitudin auctor, nisi ante accumsan nibh, eu hendrerit dolor mi ut quam. Sed nunc augue, malesuada ac nisl a, porttitor blandit libero.</p>
                        <button>Our Services</button>
                    </div>
                    <div>
                        <img src="">
                    </div>
                </div>
            </section>
        `
    },

    service(services){
        return `
            <section class="service">
                <div>
                    <h1>Our Services</h1>
                    <p>Phasellus fermentum tellus nec dolor suscipit, vitae blandit tellus finibus. Proin et velit leo. Vestibulum iaculis felis non nisi consequat, vel facilisis lacus ultrices.</p>
                </div>
                <div>
                    <ul>
                        ${
                            services.map(service => `
                                <li>
                                    <h3>${service.title}</h3>
                                    <p>${service.content}</p>
                                </li>
                            `).join(" ")
                        }
                    </ul>
                </div>
            </section>
        `
    },

    testimonial(testimoials){
        return `
            <section class="testimonial"></section>
        `
    },

    contact(){
        return `
            <section class="about">
                <div>
                    <h1>Get In Touch</h1>
                    <div>
                       <textarea placeholder="Message"></textarea>
                       <input type="text" placeholder="Name">
                       <input type="text" placeholder="Email">
                       <input type="text" placeholder="Subject">
                       <button>Send</button>
                       <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                       </ul>
                    </div>
                </div>
            </section>
        `
    },

    about(){
        return `
            <section class="about">
                <div>
                    <div>
                        <img src="">
                        <img src="">
                    </div>
                    <div>
                        <h1>About Our Tailor</h1>
                        <h3>Duis pulvinar fringilla aliquet. Aenean nec lectus mollis, vestibulum ante nec, venenatis nunc. Proin ullamcorper quam ante, eu tempor lectus semper nec</h3>
                        <p>Quisque sed mauris feugiat, porta purus sit amet, suscipit enim. Sed in interdum velit, quis eleifend magna. Quisque hendrerit magna eu gravida tempor.</p>
                        <button>More About Us</button>
                    </div>
                </div>
            </section>
        `
    },

    footer(){
        return `
            <footer></footer>
        `
    },



    // inner root templates
    home(){
        return fetch("/sites/emilys/data.json").then(res => res.json()).then(data => `
            ${this.header()}
            <main>
                ${this.hero()}
                ${this.service(data.services)}
                ${this.about()}
                ${this.testimonial(data.testimonials)}
                ${this.contact()}
            </main>
            ${this.footer()}
        `) 
    },



    // full templates
    homePage(){
        return this.home().then(res => `
            <!DOCTYPE>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="/static/css/util.css">
                    <link rel="stylesheet" href="/static/css/home.css">
                    <title>Emilys</title>
                </head>
                <body>
                    <div id="root">
                        ${res}
                    </div>
                    <script src="/static/js/util.js"></script>
                    <script src="/static/js/home.js"></script>
                </body>
            </html>
        `)
    },



    // render
    renderRoot(path){
        const split = path.split("/")[1] || "home"
        if(split == "home"){
            this.home().then(res => {
                document.querySelector("#root").innerHTML = res
            })
        }
    },

    renderPage(path){
        split = path.split("/")[1]
        if(split == "index.html") return this.homePage()
    }


}


