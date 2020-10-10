import initState from './state';
import {
    MODIFY,
    TEXT,
    AGE_ADD,
    COUNT_ADD
} from './contant';

const reducer = (state = initState, action: any) => {
    switch (action.type) {
        case MODIFY:
            return { ...state, name: state.name + action.payload };
        case TEXT:
            return { ...state, text: `${action.type}_${action.payload}`, num: state.num + 1 };
        case AGE_ADD:
            return { ...state, age: state.age + action.payload };
        case COUNT_ADD:
            return { ...state, count: state.count + 1 };
        default:
            return state;
    }
};

export default reducer;
