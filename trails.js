
export function makeTrail(name, km) {
    return {
        id: String(Date.now()) + Math.random().toString(16).slice(2, 8),
        name: name.trim(),
        km: Number(km),
        closed: false
    };
}

export function isValidTrail(name, km) {
    const distance = Number(km);

    return name.trim().length > 0 &&
           Number.isFinite(distance) &&
           distance > 0;
}

export function addTrail(trails, trail) {
    return [...trails, trail];
}

export function removeTrail(trails, id) {
    return trails.filter(trail => trail.id !== id);
}

export function toggleTrail(trails, id) {
    return trails.map(trail =>
        trail.id === id
            ? { ...trail, closed: !trail.closed }
            : trail
    );
}

export function findAction(target) {
    const button = target.closest("button[data-action]");

    if (!button) {
        return null;
    }

    const row = button.closest("li.trail[data-id]");

    if (!row) {
        return null;
    }

    return {
        action: button.dataset.action,
        id: row.dataset.id
    };
}
