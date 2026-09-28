const aircraftElements = [];
let previousFormationPosition = [];
const currentFormationPosition = [];

function setAircraftPosition(aircraftIndex, x, y, crossesCenterline) {
    const aircraft = aircraftElements[aircraftIndex];

    // Individual transform properties compose as translate -> rotate -> scale,
    // so the in-transit scale stays centered on the aircraft instead of
    // scaling its position relative to the viewport.
    aircraft.style.translate = `${x-24}px ${y-24}px`;
    aircraft.style.rotate = "45deg";

    if (crossesCenterline) {
        aircraft.classList.remove("in-transit");
        // Force reflow so re-adding the class restarts the scale animation.
        void aircraft.offsetWidth;
        aircraft.classList.add("in-transit");
    }
}

function setAircraftImage(aircraftIndex, url) {
    const aircraft = aircraftElements[aircraftIndex];
    aircraft.style["background-image"] = url;
}

function setAllAircraftImage(url) {
    for(let i=0; i<aircraftElements.length; i++) {
        setAircraftImage(i, url);
    }
}

// Must match the duration of the .aircraft position transition.
const TRANSITION_DURATION_MS = 2000;
const FINGER_FOUR_BACK_OFF_DISTANCE = 2;

let currentFormation;
let pendingTransitionStep;

function isFingerFourSideSwitch(from, to) {
    return (from === FINGER_FOUR_LEFT && to === FINGER_FOUR_RIGHT)
        || (from === FINGER_FOUR_RIGHT && to === FINGER_FOUR_LEFT);
}

function setFormation(formation) {
    clearTimeout(pendingTransitionStep);
    const previousFormation = currentFormation;
    currentFormation = formation;

    if (isFingerFourSideSwitch(previousFormation, formation)) {
        // #3 and #4 back off to clear the lane for #2 to cross sides,
        // then move up into their new slots once #2 is through.
        const backedOff = formation.positions.map((pos, i) => {
            if (i < 2) {
                return pos;
            }
            const [x, y] = previousFormation.positions[i];
            return [x, y + FINGER_FOUR_BACK_OFF_DISTANCE];
        });
        applyFormationPositions(backedOff);
        pendingTransitionStep = setTimeout(() => {
            applyFormationPositions(formation.positions);
        }, TRANSITION_DURATION_MS);
    } else {
        applyFormationPositions(formation.positions);
    }
}

function applyFormationPositions(positions) {
    for(let i=0; i<aircraftElements.length; i++) {
        aircraft = aircraftElements[i];
        let pos;

        if (i<positions.length) {
            aircraft.classList.remove("faded");
            pos = positions[i];
            previousFormationPosition[i] = pos;
        } else {
            aircraft.classList.add("faded");
            if(previousFormationPosition[i]) {
                pos = [previousFormationPosition[i][0] * 1.2, previousFormationPosition[i][1] * 1.2 + 3];
            } else {
                // Eeh?
                pos = [0, 5];
            }
        }
        const previousPos = currentFormationPosition[i];
        const crossesCenterline = previousPos !== undefined && previousPos[0] * pos[0] < 0;
        currentFormationPosition[i] = pos;
        setAircraftPosition(i, 560/2 - 12 + pos[0] * 50, 82 + pos[1] * 50, crossesCenterline);
    }
}

function initFormations(viewport, aircraftTemplate) {
    // Append higher-numbered aircraft first so lower numbers are painted on top.
    for(let i=7; i>=0; i--) {
        let aircraftElement = aircraftTemplate.content.cloneNode(true);
        aircraftElement = viewport.appendChild(aircraftElement.querySelector("div"));
        aircraftElement.querySelector(".number").innerHTML = 1 + i;
        aircraftElements.unshift(aircraftElement);
    }
}