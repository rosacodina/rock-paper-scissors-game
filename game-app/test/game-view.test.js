import { html } from "lit";
import {fixture, expect, assert, fixtureCleanup, aTimeout} from "@open-wc/testing";
import sinon from "sinon";
import "../src/components/views/game-view.js";

describe("game-view", () => {
    it("should update the player score correctly", async() => {
        const element = await fixture(html`<game-view playerName="TestPlayer"></game-view>`);

        element.getWinner("paper", "rock");
        expect(element.playerScore).to.equal(1);
                                                                                       
        element. getWinner("scissors", "paper");
        expect(element.playerScore).to.equal(2);

        element.getWinner("rock", "scissors");
        expect(element.playerScore).to.equal(3);

        element.getWinner("rock", "rock");
        expect(element.playerScore).to.equal(3);

        element.getWinner("scissors", "scissors");
        expect(element.playerScore).to.equal(3);

        element.getWinner("paper", "paper");
        expect(element.playerScore).to.equal(3);
    });

    it("should display the winner correctly", async() => {   
      const element = await fixture(html`<game-view playerName="TestPlayer"></game-view>`);
     
        element.getWinner("paper", "rock");
        expect(element.resultMessage).to.equal("TestPlayer player wins");
        expect(element.playerScore).to.equal(1);

        element.getWinner("paper", "scissors");
        expect(element.resultMessage).to.equal("Bot wins");
        expect(element.playerScore).to.equal(0);

        element.getWinner("rock", "scissors");
        expect(element.resultMessage).to.equal("TestPlayer player wins");
        expect(element.playerScore).to.equal(1);

        element.getWinner("rock", "rock");
        expect(element.resultMessage).to.equal("There is a tie in the game");
        expect(element.playerScore).to.equal(1);

        element.getWinner("scissors", "scissors");
        expect(element.resultMessage).to.equal("There is a tie in the game");
        expect(element.playerScore).to.equal(1);

        element.getWinner("paper", "paper");
        expect(element.resultMessage).to.equal("There is a tie in the game");
        expect(element.playerScore).to.equal(1);
    });
});
