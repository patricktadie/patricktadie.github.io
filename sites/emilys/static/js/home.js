

if (window.pageReady) await window.pageReady

import { rootResize, navEvent, slideShow } from "./util.js"

rootResize()

navEvent()

slideShow(document.querySelector(".slide-show"))




