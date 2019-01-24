export default class HeaderCom extends HTMLElement {

    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });

        // We define some inline styles using a template string
        const styles = `
            header {
                top: 0;
                position: sticky;
                font-family: fa;
                width: 100%;
                height: 35px;
                background: #03c0ff;
                color: #000;
                padding:0 5px;
            }
            span {
                height: 100%;
                text-align: center;
                line-height: 35px;
                font-size: 20px;
            }
        `;

        // We provide the shadow root with some HTML
        shadowRoot.innerHTML = `
            <style>${styles}</style>
            <header><span>🔍</span></header>
        `;
    }
}