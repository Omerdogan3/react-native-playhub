import dynamicLinks from '@react-native-firebase/dynamic-links';
import {setData, getData} from './helpers';
import {readChapterEvent, highScoreEvent, levelUpEvent, downloadEvent, signInEvent, displayAnomymousStoryEvent,  scanBarcodeEvent} from './api';
import CryptoJS from 'crypto-js';

export function initialize(){
  syncUid()
}

const syncUid = async () => {
  try {
    const link = await dynamicLinks().getInitialLink()    
    console.log("link", link)
    
    if(link && link.url){
      let uid = link.url.split("uid=")[1];
      //uid = CryptoJS.AES.decrypt(uid, "361.Rocks").toString(CryptoJS.enc.Utf8);
      const exUid = await getData("uid");

      // Alert.alert(JSON.stringify(uid))
      setData("uid", uid)

      if(!exUid){
        downloadEvent()
      }
    }
  } catch (e) {
    // saving error
  }
}

export const readChapter = (eventValue) => {
  readChapterEvent(eventValue)
}

export const highScore = (eventValue) => {
  highScoreEvent(eventValue)
}

export const levelUp = (eventValue) => {
  levelUpEvent(eventValue)
}

export const scanBarcode = (eventValue) => {
  scanBarcodeEvent(eventValue)
}

export const signIn = () => {
  signInEvent()
}

export const displayAnonymousStory = (eventValue) => {
  displayAnomymousStoryEvent(eventValue)
}