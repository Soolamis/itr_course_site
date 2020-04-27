export function isAuthenticated(state) {
    return state.user.isAuthenticated;
}

export function name(state) {
    return state.user.name;
}

export function id(state) {
    return state.user.id;
}