
const util = {

    rootResize(){

        const root  = document.querySelector("#root")

        root.setAttribute("size", "")

        const resize = new ResizeObserver(entries => {
            
            entries.forEach(entry => {

                if(entry.target == root){

                    if(root.offsetWidth >= 800){

                        if(root.getAttribute("size") != "large") root.setAttribute("size", "large")
                    }
                    else if(root.offsetWidth > 500 && root.offsetWidth < 800 ){

                        if(root.getAttribute("size") != "medium") root.setAttribute("size", "medium")
                    }
                    else{

                        if(root.getAttribute("size") != "small") root.setAttribute("size", "small")   
                    }
                }
            })
        })

        resize.observe(root)
    }
}




