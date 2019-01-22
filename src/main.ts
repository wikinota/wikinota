import { el, mount } from '/node_modules/redom/dist/redom.es.js';

console.log("Hello World!");

const hello = el('h1', 'Hello RE:DOM!');

mount(document.body, hello);