export const setSettings = () => ({
    type: "SET_SETTINGS",
})

export const setBulbOne = (bulbSetting) => ({
    type: "SET_BULB_ONE",
    payload: bulbSetting
})

export const setBulbTwo = (bulbSetting) => ({
    type: "SET_BULB_TWO",
    payload: bulbSetting
})

export const setDevice = (deviceSetting) => ({
    type: "SET_DEVICE",
    payload: deviceSetting
})

export const setLiveReport = () => ({
    type: "SET_LIVEREPORT",
})
