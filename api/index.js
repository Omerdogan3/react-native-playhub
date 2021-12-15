// General api to access data
import ApiConstants from './ApiConstants';
import axios from 'axios';
import {getBundleId} from 'react-native-device-info';
import {getData} from '../helpers';

const {BASE_URL, USER_EVENT} = ApiConstants;

export async function readChapterEvent(eventValue){
	userEvent("READ_CHAPTER", eventValue);
}

export async function downloadEvent(){
	userEvent("DOWNLOAD", 0);
}

export async function highScoreEvent(eventValue){
	userEvent("DOWNLOAD", eventValue);
}

export async function levelUpEvent(eventValue){
	userEvent("LEVEL_UP", eventValue);
}

async function userEvent(eventName, eventValue){
	const uid = await getData("uid")
	if(uid){
		axios.post(BASE_URL + "/" + USER_EVENT, {
			eventName: eventName,
			eventValue: eventValue,
			appId: getBundleId()
		}, {headers: {'Authorization': uid}})
		.catch((err)=> {
			console.log(err)
		})
		.then((response) => {
			console.log(response.data);
		});
	}

}