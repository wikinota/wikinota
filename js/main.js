import { el, mount } from "/js/libs/redom.es.min.js";
import loginCom from "/js/components/login.js";

const hello = el("h1", "Hell WikiNota");
const foo = el("div",loginCom());
mount(document.body, hello);
mount(document.body, foo);
console.info("Hello Worlk!");