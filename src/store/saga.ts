import {
    call, put, takeLatest
} from 'redux-saga/effects';
import { MODIFY, AGE_ADD } from './contant';
import {
    setText
} from './action';

const apiFetchInfo = (params: any) => (
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(params);
        }, 2000);
    })
);

function* fetchInfo(action: any) {
    yield console.log('sage1');
    const info = yield call(apiFetchInfo, action.payload);
    yield put(setText(info));
}

function* mySaga() {
    yield takeLatest(MODIFY, fetchInfo);
    yield takeLatest(AGE_ADD, fetchInfo);
}

export default mySaga;
