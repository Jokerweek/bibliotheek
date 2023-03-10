import {atom} from "recoil"

const tagSelect = atom({
  key: 'tagSelect',
  default: "",
})

const formatSelect = atom({
  key: 'formatSelect',
  default: "",
})

export { tagSelect, formatSelect }