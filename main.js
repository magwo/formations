const aircraftElements = [];
let previousFormationPosition = [];

function setAircraftPosition(aircraftIndex, x, y) {
    const aircraft = aircraftElements[aircraftIndex];
    aircraft.style.transform = `translate(${x-24}px, ${y-24}px) rotate(45deg)`;
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

function setFormation(formation) {
    for(let i=0; i<aircraftElements.length; i++) {
        aircraft = aircraftElements[i];
        let pos;

        if (i<formation.positions.length) {
            aircraft.classList.remove("faded");
            pos = formation.positions[i];
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
        setAircraftPosition(i, 560/2 - 12 + pos[0] * 50, 82 + pos[1] * 50);
    }
}

function initFormations(viewport, aircraftTemplate) {
    for(let i=0; i<8; i++) {
        let aircraftElement = aircraftTemplate.content.cloneNode(true);
        aircraftElement = viewport.appendChild(aircraftElement.querySelector("div"));
        aircraftElement.querySelector(".number").innerHTML = 1 + i;
        aircraftElements.push(aircraftElement);
    }
    setFormation(FINGER_FOUR_RIGHT);
}