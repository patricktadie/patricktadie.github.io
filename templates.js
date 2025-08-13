


const templates = {
    
    
    // template parts
    header(){
        return `
            <header><h1>Free Html Templates</h1></header>
        `
    },
      
    footer(){
        return `
            <footer></footer>
        `
    },
    
    siteView(){
        return `
            <section class="site-view"></section>
        `
    },
    
    
    contolPanel(){
        return `
            <section class="control-panel"></section>
        `
    },
    
    templateList(data){
        return `
            <section class="template-list">
                <h1>Our recent templates</h1>
                <ul></ul>
            </section>
        `
    },
    
    templateDescription(){
        return `
            <section class="template-description">
                <h1>Why Our HTML Template Stands Out</h1>
                <ul>
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
    render(path){
        const pathPart1 = path.split("/")[1] || "home"
        const pathPart2 = path.split("/")[2]
        if(pathPart1 == "home") return fetch("/data.json").then(res => res.json()).then(data => this.home(data))
        else return new Promise((resolve, reject) => {
            resolve(this.preview(pathPart2))
        })
    },



    //static files
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




 









