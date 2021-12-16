import dynamicLinks from '@react-native-firebase/dynamic-links';
import {setData, getData} from './helpers';
import {readChapterEvent, highScoreEvent, downloadEvent} from './api';

export function initialize(){
  syncUid()
}

const syncUid = async () => {
  try {
    const link = await dynamicLinks().getInitialLink()    
    if(link && link.url){
      const uid = link.url.split("uid=")[1];
      const exUid = await getData("uid");
      setData("uid", uid)

      if(!exUid){
        // download event
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