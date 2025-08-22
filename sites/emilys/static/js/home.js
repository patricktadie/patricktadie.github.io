

if (window.render) await window.render.pageReady()

import { rootResize, navEvent, slideShow } from "./util.js"

rootResize()

navEvent()

slideShow(document.querySelector(".slide-show"))




