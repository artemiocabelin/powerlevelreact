export const SET_POWER = 'set_power';

export function setPowerLevel(power) {
    return {
        type: SET_POWER,
        payload: power
    };
}