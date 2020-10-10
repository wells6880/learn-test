import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { ActionFn } from '@store/interface';

// export function useAction(action: ActionFn<undefined>) {
//     const dispatch = useDispatch();

//     return useCallback(() => {
//         dispatch(action());
//     }, [dispatch]);
// }

// export function useActionPayload(action: ActionFn<any>) {
//     const dispatch = useDispatch();

//     return useCallback((val) => () => {
//         dispatch(action(val));
//     }, [dispatch]);
// }

// export default {
//     useAction,
//     useActionPayload
// };

export default function useAction(action: ActionFn<any>) {
    const dispatch = useDispatch();

    return useCallback((...args) => {
        dispatch(action(...args));
    }, [dispatch]);
}
