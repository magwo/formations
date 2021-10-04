const aircraftElements = [];
let previousFormationPosition = [];

function setAircraftPosition(aircraftIndex, x, y) {
    const aircraft = aircraftElements[aircraftIndex];
    aircraft.style.transform = `translate(${x}px, ${y}px) rotate(45deg)`;
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
                pos = [previousFormationPosition[i][0], previousFormationPosition[i][1] * 3 + 1];
            } else {
                // Eeh?
                pos = [0, 0];
            }
        }
        setAircraftPosition(i, 220 + pos[0] * 60, 50 + pos[1] * 60);
    }
}

function initFormations(viewport, aircraftTemplate) {

    for(let i=0; i<8; i++) {
        let aircraftElement = aircraftTemplate.content.cloneNode(true);
        aircraftElement = viewport.appendChild(aircraftElement.querySelector("div"));
        aircraftElement.querySelector(".number").innerHTML = 1 + i;
        aircraftElements.push(aircraftElement);
        // setAircraftPosition(i, 100 + i * 80, 100 + i * 80);
    }

    setFormation(FINGER_FOUR_RIGHT);
}