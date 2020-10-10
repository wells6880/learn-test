import React, {
    useState, useCallback, useMemo, useEffect, Suspense, lazy
} from 'react';
import {
    Switch, Route, RouteComponentProps,
    useHistory
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Table, Icon } from 'antd';
// import axios from 'axios';
import { get } from '@common/ajax';
import ErrorBoundary from '@component/errorBoundary';
import Loading from '@component/loading';
import Penl from '@component/penl';
// import Dialog from '@component/dialog';
// import { modify, ageAdd, countAdd } from '@store/action';
// import useAction from '@common/useAction';
import * as actions from '@store/action';
import useActions from '@common/useActions';
import { StoreState } from '@store/interface';
import qs from 'qs';

// import R from 'ramda';
import { curry } from 'ramda';
import iconImg from '@assetsImg/icon.png';
import styles from './app.module.less';


// const Penl = lazy(() => import(/* webpackChunkName: "penl" */ '@component/layout/penl'));

interface Arr {
    [key: number]: string | number | Arr;
}
const arr: Arr = [
    1,
    2,
    [1, 2, 3]
];

export enum TASK_TYPE_ENUM {
    TARGET_SET = '目标制定',
    TARGET_APPROVE = '目标审核',
    EVALUATE_SELF = '绩效自评',
    EVALUATE = '绩效考评',
    EVALUATE_COLLABORATIVE = '虚线考评',
    RESULT_REVIEW = '结果审核',
    RESULT_CONFIRM = '员工绩效确认',
    RESULT_INTERVIEW = '绩效面谈',
    APPEAL = '结果申诉'
}

const App = (props: RouteComponentProps) => {
    const [isShowPenl, setIsShowPenl] = useState(false);
    const showPenl = () => {
        setIsShowPenl(!isShowPenl);
    };
    const showLoading = () => {
        Loading.show();
    };

    const getInfo1 = async () => {
        // const res = await axios.get('/api/person');
        // const res1 = await fetch('/api/person');
        // const result = await res1.json();
        // // console.log(res.data.data.name);
        // // console.log(result.data);
        // console.log(res);
        // console.log(res1);
        // try {
        //     const res = await get('/api/person');
        //     console.log('suc', res);
        // } catch (err) {
        //     if (err.code === 401) {
        //         console.log(1);
        //     }
        //     console.log('err', err.code);
        // }
        const res = await get('/api/person');
        // console.log('suc', res);
    };

    const getInfo2 = () => {
        get('/api/person').then((res) => {
            // console.log('suc', res);
        }).catch((err) => {
            // console.log('err', err);
        });
    };

    const {
        modify, ageAdd, countAdd: setCount, test
    } = useActions(actions, []);
    const setName = (val: string) => () => modify(val);
    const setAge = (val: number) => () => ageAdd(val);

    const {
        name, text, age, num, count
    } = useSelector((state: StoreState) => state);

    const history = useHistory();
    const toPenl = () => {
        // props.history.push({
        //     pathname: '/layout/penl',
        //     state: {
        //         id: 2
        //     }
        // });
        // props.history.push({
        //     pathname: '/layout/penl',
        //     search: qs.stringify({
        //         id: 2
        //     })
        // });
        history.push({
            pathname: '/layout/penl',
            search: qs.stringify({
                id: 2
            })
        });
        // history.push({
        //     pathname: '/layout/penl',
        //     state: {
        //         id: 2
        //     }
        // });
    };

    return (
        <>
            <ErrorBoundary>
                <Suspense fallback={<div>loading</div>}>
                    <div>
                        <button onClick={showLoading}>show</button>
                        <button onClick={setName('add')}>setName</button>
                        <button onClick={() => test()}>test</button>
                        <button onClick={setAge(2)}>setAge</button>
                        <button onClick={setCount}>setCount</button>
                        <p>{`name:${name}`}</p>
                        <p>{`age:${age}`}</p>
                        <p>{`text:${text} -- ${num}`}</p>
                        <p className={styles.fontRed}>{`count:${count}`}</p>
                        <p className="font-red">{`count:${count}`}</p>
                        <p className={`font-red ${styles.fontRed}`}>{`count:${count}`}</p>
                        <Button type="primary" className={styles.btn}>btn</Button>
                        <Button type="primary" className={styles.test}>btn</Button>
                        <div>
                            <button onClick={getInfo1}>getInfo1</button>
                            <button onClick={getInfo2}>getInfo2</button>
                        </div>
                        <img src={iconImg} alt="" />
                        <div className={styles.icon} />
                        <a href="/public/office-system2019.pdf">pdf1</a>
                        <a href="../public/office-system2019.pdf">pdf2</a>
                        <Table className={styles.table} />
                        <Button type="primary" className={styles.test} onClick={showPenl}>Penl</Button>
                        {isShowPenl && (
                            <Suspense fallback={<div>loading</div>}>
                                <Penl content="111" />
                            </Suspense>
                        )}
                        <Icon type="number" />
                    </div>
                    <Button type="primary" onClick={toPenl}>
                        routerPenl
                    </Button>
                    <Switch>
                        {/* <Route exact path="/" component={Penl} /> */}
                        <Route exact path="/layout/penl" component={() => <Penl content="2222" />} />
                        <Route exact path="/layout/penl3" component={() => <Penl content="3333" />} />
                        {/* <Route exact path="/layout/penl" render={() => <Penl content="2222" />} /> */}
                    </Switch>
                </Suspense>
            </ErrorBoundary>
        </>
    );
};

export default App;
