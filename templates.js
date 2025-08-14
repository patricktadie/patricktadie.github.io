


const templates = {
    
    
    // template parts
    header(){
        return `
            <header><h1><a href="/">Free Html Templates</a></h1></header>
        `
    },
      
    footer(){
        return `
            <footer><h5><a href="/">Devspot</a></h5></footer>
        `
    },
    
    siteView(slug){
        return `
            <section class="site-view">
                <iframe src="/sites/${slug}"></iframe>
            </section>
        `
    },
    
    contolPanel(slug){
        return `
            <section class="control-panel">
                <div>
                    <h2>${slug}</h2>
                    <div>
                        <button class="control desktop">Desktop</button>
                        <button class="control mobile">Mobile</button>
                        <button class="download" slug="${slug}">Download</button>
                        <button class="live" slug="${slug}">Live</button>
                    </div>
                </div>
            </section>
        `
    },
    
    templateList(list){
        return `
            <section class="template-list">
                <h2>Our Recent Templates</h2>
                <ul>
                    ${list.map(item => `
                        <li>
                            <div>
                                <a href="/preview/${item.slug}"></a>
                                <img src="${item.img}">
                            </div>
                            <h3><a href="/preview/${item.slug}">${item.slug}</a></h3>
                        </li>
                    `).join(" ")}
                </ul>
            </section>
        `
    },
    
    templateDescription(list){
        return `
            <section class="template-description">
                <h2>Why Our HTML Templates Stands Out</h2>
                <ul>
                    ${list.map(item => `
                        <li>
                            <h3>${item.title}</h3>
                            <p>${item.content}</p>
                        </li>
                    `).join(" ")}
                </ul>
            </section>
        `
    },
    
    
    
    // root templates
    home(data){
        return `
            ${this.header()}
            <main>
                ${this.templateDescription(data.templateDescription)}
                ${this.templateList(data.templateList)}
            </main>
            ${this.footer()}    
        `
    },
    
    preview(slug){
        return `
            ${this.header()}
            <main>
                ${this.contolPanel(slug)}
                ${this.siteView()}
            </main>
            ${this.footer()}
        `
    },
    
    
    
    // rendered html
    html(path){
        const pathPart1 = path.split("/")[1] || "home"
        const pathPart2 = path.split("/")[2]
        if(pathPart1 == "home") return fetch("/data.json").then(res => res.json()).then(data => this.home(data))
        else return new Promise((resolve, reject) => {
            resolve(this.preview(pathPart2))
        })
    },



    // update static files
    static(path){
        const pathPart1 = path.split("/")[1] || "home"
        if(pathPart1 == "home") return {
            script:"/static/js/home.js",
            style:"/static/css/home.css"
        }
        else return{
            script:"/static/js/preview.js",
            style:"/static/css/preview.css"
        }
    } 

}




 









