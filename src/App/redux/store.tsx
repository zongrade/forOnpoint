import { createStore } from 'redux'

export interface defState {
  mobile: boolean
  size?: DeviceSize
}
interface action {
  type: string
  payload?: defState
}
enum DeviceSize {
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small',
}
const defaultState: defState = {
  mobile: false,
  //size: DeviceSize,
}
const FirstVisit = 'FirstVisit'
enum Device {
  Mobile = 'Mobile',
  Desktop = 'Desktop',
}
const reducer = (state = defaultState, action: action) => {
  switch (action.type) {
    case FirstVisit:
      return { ...state, ...action.payload }
    case Device.Desktop:
      return { ...state, mobile: false }
    case Device.Mobile:
      return { ...state, mobile: true }
    default:
      return state
  }
}
export function checkVisit() {}
export function checkDevice() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return ChangeDevice(true)
  } else {
    return ChangeDevice(false)
  }
}
function ChangeDevice(isMobile: boolean): action {
  return {
    type: isMobile ? Device.Mobile : Device.Desktop,
  }
}
export const store = createStore(reducer)
