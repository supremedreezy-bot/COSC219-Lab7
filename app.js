
import { saveTrails, loadTrails, clearTrails } from "./storage.js";

import { renderTrails, summaryText } from "./render.js";

import {
    makeTrail,
    isValidTrail,
    addTrail,
    removeTrail,
    toggleTrail,
    findAction
} from "./trails.js";

const form = document.querySelector("#add-form");
const nameInput = document.querySelector("#name");
const kmInput = document.querySelector("#km");
const error = document.querySelector("#error");
const summary = document.querySelector("#summary");
const list = document.querySelector("#trail-list");
const clearButton = document.querySelector("#clear");

let trails = loadTrails();

function update() {
    renderTrails(trails, list);
    summary.textContent = summaryText(trails);
    saveTrails(trails);
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const km = kmInput.value;

    if (!isValidTrail(name, km)) {
        error.textContent = "Give the trail a name and a distance above zero.";
        nameInput.focus();
        return;
    }

    error.textContent = "";

    const newTrail = makeTrail(name, km);
    trails = addTrail(trails, newTrail);

    form.reset();
    update();
});

list.addEventListener("click", function(event) {
    error.textContent = "";

    const result = findAction(event.target);

    if (!result) {
        return;
    }

    if (result.action === "toggle") {
        trails = toggleTrail(trails, result.id);
    }

    if (result.action === "delete") {
        trails = removeTrail(trails, result.id);
    }

    update();
});

clearButton.addEventListener("click", function() {
    trails = [];
    clearTrails();
    update();
});

update();
