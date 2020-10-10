import { all, take } from 'redux-saga/effects';
import saga from './saga';
import { TEST } from './contant';

function* mySaga() {
    while (true) {
        const action = yield take(TEST);
        yield console.log('sage2', action);
    }
}

function* rootSaga() {
    yield all([saga(), mySaga()]);
}

export default rootSaga;
