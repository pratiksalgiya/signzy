const initialState = {
  showSettings: false,
  bulbOne: false,
  bulbTwo: false,
  device: false,
  showLiveReport:false
}

const roomSettings = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SETTINGS":
      return {
        ...state,
        showSettings: !state.showSettings
      }
    case "SET_BULB_ONE":
      return {
        ...state,
        bulbOne: action.payload
      }
    case "SET_BULB_TWO":

      return {
        ...state,
        bulbTwo: action.payload
      }
    case "SET_DEVICE":

      return {
        ...state,
        device: action.payload
      }
      case "SET_LIVEREPORT":
      return {
        ...state,
        showLiveReport: !state.showLiveReport
      }
    default:
      return state
  }
}

export default roomSettings