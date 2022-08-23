import {call, put, takeEvery} from 'redux-saga/effects';
import {getCatsSuccess} from './catSlice';

function* workGetCats() {
    const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
    const catsFormatted = yield cats.json();
    //const shortenedList = catsFormatted; //.slice(0,10)
    yield put(getCatsSuccess(catsFormatted));
}

function* catSaga() {
    yield takeEvery('cats/getCatsFetch', workGetCats);
}

export default catSaga;