

export const SETVOLUME = "SETVOLUME";

export const Set_Volume = (volume) => {
    return {
        type: SETVOLUME,
        payload: volume
    }
}