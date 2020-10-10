import { ActionFn } from './interface';
import {
    MODIFY,
    TEXT,
    AGE_ADD,
    COUNT_ADD,
    TEST
} from './contant';

export const modify: ActionFn<string> = (payload) => ({
    type: MODIFY,
    payload
});

export const setText: ActionFn<string> = (payload) => ({
    type: TEXT,
    payload
});

export const ageAdd: ActionFn<string | number> = (payload) => ({
    type: AGE_ADD,
    payload
});

export const countAdd: ActionFn = (payload) => ({
    type: COUNT_ADD,
    payload
});

export const test: ActionFn = (payload) => ({
    type: TEST,
    payload
});
