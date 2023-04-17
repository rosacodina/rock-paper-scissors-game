import { html } from "lit";
import {fixture, expect} from "@open-wc/testing";
import "../src/components/home-app.js";
import sinon from "sinon";

describe("home-app", () => {

    it("displays the create player section when page is home", async() => {
        const element = await fixture(
            html`<home-app page="home"></home-app>`
        );
        expect(element.shadowRoot.querySelector("h2").textContent).contain(
            "Create a new player"
        );
    });

    it("dispatches a 'start-game' event when the Join button is clicked", async() => {
        const el = await fixture(html`<home-app></home-app>`);
        const button = el.shadowRoot.querySelector("#button");
        el.input = "Joni";
        const spy = sinon.spy()
        el.addEventListener("start-game", spy);
        await el.updateComplete;
        button.click();
        expect(spy.calledOnce).to.be.true;
    });
});
