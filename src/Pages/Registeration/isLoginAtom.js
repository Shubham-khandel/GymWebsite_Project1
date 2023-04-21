import {atom} from 'recoil';

export const checkLogin = atom({
  key: 'checkLogin',
  default: false
})

export const onLoginName = atom({
  key: 'username',
  default: 'Join us'
})