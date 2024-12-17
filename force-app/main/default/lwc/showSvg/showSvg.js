import { LightningElement, wire } from 'lwc';
import getSvg from "@salesforce/apex/ShowSvgController.getSvg";

export default class ShowSvg extends LightningElement {
    error;
    svg = "foo";

    @wire(getSvg) loadSvg({ error, data }) {
        console.log("Error", error);
        console.log("Data", data);
        if (error) {
            this.error = error;
            this.data = undefined;
        } else if (data) {
            this.error = undefined;
            this.svg = data;
            this.refs.data.innerHTML = this.svg;
        }
    }

    renderedCallback() {
        console.log("renderedCallback");
        
    }
}