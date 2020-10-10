export interface Action<T> {
    type: string;
    payload?: T;
}

export type ActionFn<T = undefined> = (payload?: T) => Action<T>;

export interface StoreState{
    name: string;
    text: string;
    age: number;
    num: number;
    count: number;
}
