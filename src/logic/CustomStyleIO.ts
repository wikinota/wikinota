export const cStyle = new Proxy(({} as CustomStyle), {
    get(target, name: string) {
        const styleIO = new CustomStyleIO;
        if (styleIO.customTemplate === undefined || (styleIO as any).customTemplate[name] === undefined) {
            return "";
        }
        return (styleIO as any).customTemplate[name];
    }
})

/**
 * sets the custom styles - needs to be executed at the beginning of the global code execution
 * 
 * ATTENTION FOR THE NEXT DEV - THIS FUNCTION CAN BE MISSUSED FOR XSS ATACKS IF NOT USED PROPERLY
 */
export default class CustomStyleIO {
    customTemplate: CustomStyle = undefined;
    constructor() {
        let customTemplateFromStore = localStorage.getItem('customTemplate');
        if (customTemplateFromStore == undefined || customTemplateFromStore == "") {
            console.debug("No CustomTemplate was set.");
            return;
        }

        customTemplateFromStore = this.preventXSS(customTemplateFromStore);
        try {
            this.customTemplate = JSON.parse(customTemplateFromStore);
        }
        catch (e) {
            console.error("Custom Template was not valid JSON!");
            return;
        }

        if (!(
            (this.customTemplate as any).isSet == true ||
            (this.customTemplate as any).isSet == false
        )) {
            console.error("Custom Template was not valid!", this.customTemplate);
            return;
        }
        if ((this.customTemplate as any).isSet == false) {
            console.debug("Custom Template was valid but the isSet property is on false.");
            return;
        }
    }
    /**
     * sets the custom template to the local storage
     * and will reload the page!
     * 
     * this template will be opened by nex reload
     * @param  {string} template
     */
    setCustomTemplate(template: string) {
        localStorage.setItem('customTemplate', this.preventXSS(template));
        location.reload();
    }

    /**
     * prevents XSS by deleting all < and >
     * 
     * @param  {string} template
     */
    preventXSS(template: string) {
        template = template.split('<').join("/*ERROR -< is not allowed in custom Templates!-*/");
        template = template.split('>').join("/*ERROR -> is not allowed in custom Templates!-*/");
        return template;
    }
}