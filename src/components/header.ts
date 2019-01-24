export default class HeaderCom extends HTMLElement {

    constructor() {
        super();
        const shadowRoot= this.attachShadow({mode: 'open'});
 
        // We define some inline styles using a template string
        const styles=`
            header {
                position: relative;
                font-family: sans-serif;
                widhth: 100%;
                height: 100px;
                border: 1px solid black;
            }
        `;
 
        // We provide the shadow root with some HTML
        shadowRoot.innerHTML = `
            <style>${styles}</style>
            <header>HELLO HEADER</header>
        `;
    }
}