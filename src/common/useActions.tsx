import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { ActionFn } from '@store/interface';

interface ActionsObj<T = ActionFn<any>> {
    [key: string]: T;
}
type ActionsArr = ActionFn<any>[]
type ActionsParam = ActionsArr | ActionsObj;
type ActionsResFn = (params?: any) => void;
type ActionsResArr = ActionsResFn[];
type ActionsResObj = ActionsObj<ActionsResFn>;
type ActionsRes = ActionsResArr | ActionsResObj;

function useActions(actions: ActionsArr, deps: any[]): ActionsResArr;
function useActions(actions: ActionsObj, deps: any[]): ActionsResObj;
function useActions(actions: ActionsParam, deps: any[] = []): ActionsRes {
    const dispatch = useDispatch();
    return useMemo(() => (
        actions instanceof Array
            ? actions.map((a) => bindActionCreators(a, dispatch))
            : bindActionCreators(actions, dispatch)
    ), deps ? [dispatch, ...deps] : [dispatch]);
}

export default useActions;
