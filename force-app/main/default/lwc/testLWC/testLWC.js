import { LightningElement, wire, api } from "lwc";
import { getRecord, getFieldValue } from "lightning/uiRecordApi";

import NAME_FIELD from "@salesforce/schema/Account.Name";
import PHONE_FIELD from "@salesforce/schema/Account.Phone";
const fields = [NAME_FIELD, PHONE_FIELD];

export default class TestLWC extends LightningElement {
    @api recordId;
    lines;

    connectedCallback() {
        /*
    const data = [];
    for (let i=0; i<Math.floor(Math.random() * 200) + 20; i++) data.push(`Line ${i}`);
    this.lines = data.join("\n");
    */
    }

    @wire(getRecord, { recordId: "$recordId", fields })
    account;

    get name() {
        return getFieldValue(this.account.data, NAME_FIELD);
    }
    get phone() {
        return getFieldValue(this.account.data, PHONE_FIELD);
    }

    renderedCallback() {
        const canvas = this.refs.myCanvas;
        const ctx = canvas.getContext("2d");
        this.drawDiagram(ctx);
    }
    centerX;
    centerY;
    radius;

    drawDiagram(ctx) {
        // define center and radius
        const centerX = 300;
        const centerY = 300;
        const radius = 250;

        // define the initial rotation for the pie chart (makes it look nicer)
        const initialRotation = 0.2 * 2 * Math.PI;
        let rotation = initialRotation;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotation);
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.moveTo(0, 0);
        ctx.lineTo(radius, 0);
        ctx.arc(0, 0, radius, 0, 0.5 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        rotation += 0.5 * Math.PI;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotation);
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.moveTo(0, 0);
        ctx.lineTo(radius, 0);
        ctx.arc(0, 0, radius, 0, 0.8 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        rotation += 0.8 * Math.PI;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotation);
        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.moveTo(0, 0);
        ctx.lineTo(radius, 0);
        ctx.arc(0, 0, radius, 0, 2 * Math.PI - rotation + initialRotation);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
}
