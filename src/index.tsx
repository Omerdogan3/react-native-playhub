import dynamicLinks from '@react-native-firebase/dynamic-links';
import {setData, getData} from '../helpers';

import {readChapterEvent, downloadEvent} from '../api';

export function initialize(){
  syncUid()
  // getData("uid").then((uid)=> {
  //   console.log("uid", uid)
  // })
  readChapterEvent(10)
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


export const readChapter = (eventValue: number) => {
  readChapterEvent(eventValue)
}