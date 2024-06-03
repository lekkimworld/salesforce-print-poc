import { LightningElement, wire, api } from "lwc";
import { getRecord, getFieldValue } from "lightning/uiRecordApi";

import NAME_FIELD from "@salesforce/schema/Account.Name";
import PHONE_FIELD from "@salesforce/schema/Account.Phone";
const fields = [NAME_FIELD, PHONE_FIELD];

const CENTER_X = 300;
const CENTER_Y = 300;
const RADIUS = 250;
const INITIAL_ROTATION = 0.2 * 2 * Math.PI;

export default class TestLWC extends LightningElement {
    @api recordId;

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

    rotation = INITIAL_ROTATION;
    drawDiagram(ctx) {
        this.drawSlice(ctx, 0.5 * Math.PI, "red");
        this.drawSlice(ctx, 0.8 * Math.PI, "blue");
        this.drawSlice(ctx, 2*Math.PI - this.rotation + INITIAL_ROTATION, "green");
    }

    drawSlice(ctx, arc, color) {
        ctx.save();
        ctx.translate(CENTER_X, CENTER_Y);
        ctx.rotate(this.rotation);
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.moveTo(0, 0);
        ctx.lineTo(RADIUS, 0);
        ctx.arc(0, 0, RADIUS, 0, arc);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        this.rotation += arc;
    }
}
