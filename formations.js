

const FINGER_FOUR_LEFT = {
    id: "FINGER_FOUR_LEFT",
    name: "Finger four left",
    positions: [
        [0, 0],
        [1, 1],
        [-1, 1],
        [-2, 2],
    ]
}

const FINGER_FOUR_RIGHT = {
    id: "FINGER_FOUR_RIGHT",
    name: "Finger four right",
    positions: [
        [0, 0],
        [-1, 1],
        [1, 1],
        [2, 2],
    ]
}

const TWO_SHIP_ECHELON_LEFT = {
    id: "TWO_SHIP_ECHELON_LEFT",
    name: "Two-ship echelon left",
    positions: [
        [0, 0],
        [-1, 1],
    ]
}

const TWO_SHIP_ECHELON_RIGHT = {
    id: "TWO_SHIP_ECHELON_RIGHT",
    name: "Two-ship echelon right",
    positions: [
        [0, 0],
        [1, 1],
    ]
}

const FOUR_SHIP_ECHELON_RIGHT = {
    id: "FOUR_SHIP_ECHELON_RIGHT",
    name: "Four-ship echelon right",
    positions: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
    ]
}

const FOUR_SHIP_ECHELON_LEFT = {
    id: "FOUR_SHIP_ECHELON_LEFT",
    name: "Four-ship echelon left",
    positions: [
        [0, 0],
        [-1, 1],
        [-2, 2],
        [-3, 3],
    ]
}

const FIGHTING_WING = {
    id: "FIGHTING_WING",
    name: "Fighting wing",
    positions: [
        [-2, 0],
        [2, 3],
    ]
}

const TRAIL = {
    id: "TRAIL",
    name: "Trail",
    positions: [
        [0, 0],
        [0, 2.667],
        [0, 2*2.667],
        [0, 8],
    ]
}

const TRAILING_FIGHTING_WINGS = {
    id: "TRAILING_FIGHTING_WINGS",
    name: "Trailing fighting wings",
    positions: [
        [-2, 0],
        [2, 3],
        [-2, 5],
        [2, 8],
    ]
}

const COMBAT_SPREAD = {
    id: "COMBAT_SPREAD",
    name: "Combat spread",
    positions: [
        [-2, 0],
        [2, 0],
    ]
}

const FORMATIONS_BY_ID = {
    FINGER_FOUR_LEFT,
    FINGER_FOUR_RIGHT,
    TWO_SHIP_ECHELON_LEFT,
    TWO_SHIP_ECHELON_RIGHT,
    FOUR_SHIP_ECHELON_RIGHT,
    FOUR_SHIP_ECHELON_LEFT,
    FIGHTING_WING,
    TRAIL,
    TRAILING_FIGHTING_WINGS,
    COMBAT_SPREAD,
}