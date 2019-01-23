import { el, mount } from "redom";
import loginCom from "components/login";

const hello = el("h1", "Hell WikiNota");
const foo = el("div","Loading");
loginCom(foo);
mount(document.body, hello);
mount(document.body, foo);
console.info("Hello Worlk!");