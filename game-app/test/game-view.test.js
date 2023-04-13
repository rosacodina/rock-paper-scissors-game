import { html } from "lit";
import {fixture, expect, assert} from "@open-wc/testing";
import Sinon from "sinon";
import "../src/components/views/game-view.js";

describe("game-view", () => {
    it("should update the player score correctly", async() => {
        const el = await fixture(html`<game-view player-name="TestPlayer"></game-view>`);
        
        el.getWinner("paper", "rock");
        expect(el.playerScore).to.equal(1);
                                                                                       
        el. getWinner("scissors", "paper");
        expect(el.playerScore).to.equal(1);

        el.getWinner("rock", "scissors");
        expect(el.playerScore).to.equal(-1);

        el.getWinner("rock"|| "scissors" || "paper", "rock"|| "scissors" || "paper");
        expect(el.playerScore).to.equal(0);

    });

    it("should display the winner correctly", async () => {
        const el = await fixture(html`<game-view player-name="TestPlayer"></game-view>`);
        
        el.getWinner("paper", "rock");
        expect(el.resultMessage).to.equal("player wins");
        expect(el.playerScore).to.equal(1);

        el.getWinner("scissors", "paper");
        expect(el.resultMessage).to.equal("Bot wins");
        expect(el.playerScore).to.equal(-1);

        el.getWinner("rock", "scissors");
        expect(el.resultMessage).to.equal("There is a tie in the game");
        expect(el.playerScore).to.equal(0);

        el.getWinner("rock"|| "scissors" || "paper", "rock"|| "scissors" || "paper");
        expect(el.resultMessage).to.equal("There is a tie in the game");
        expect(el.playerScore).to.equal(0);

    });

    it("should navigate to home page when exit icon is clicked", async() => {
        const el = await fixture(html`<game-view></game-view>`);
        const exitIcon = el.shadowRoot.querySelector(".exit-icon");
        const goHomeSpy = sinon.spy(el, "goHome");
        exitIcon.click();
        expect(goHomeSpy.calledOnce).to.be.true;
    });

});
