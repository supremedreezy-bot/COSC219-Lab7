
const KEY = "cosc219.trails";

export function saveTrails(trails) {
    localStorage.setItem(KEY, JSON.stringify(trails));
}

export function loadTrails() {
    try {
        const raw = localStorage.getItem(KEY);

        if (raw === null) {
            return [];
        }

        const data = JSON.parse(raw);

        if (!Array.isArray(data)) {
            return [];
        }

        return data;
    } catch (error) {
        return [];
    }
}

export function clearTrails() {
    localStorage.removeItem(KEY);
}
