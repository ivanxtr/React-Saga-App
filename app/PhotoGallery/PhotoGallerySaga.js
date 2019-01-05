import {call, put, takeLatest, all} from "redux-saga/effects";
import Axios from "axios";

function* fetchPhotos(){
	try {
		const fetchResult = yield call(function(){
			return new Promise((resolve, reject) => {
				Axios.get("https://jsonplaceholder.typicode.com/photos")
					.then((response) => {
						resolve(response.data);
					})
					.catch((err) =>  {
						reject(err);
					});
			});
		});
		yield put({type:"FETCH_PHOTOS_FULFILLED", payload: fetchResult});
	} catch(err) {
		yield put({type:"FETCH_PHOTOS_REJECTED", payload: err});
	}
} 

function* actionWatcher() {
	yield takeLatest("GET_PHOTOS", fetchPhotos);
}

export default function* rootSaga() {
	yield all([
		actionWatcher()
	]);
}