import React, {
    useState, useEffect, useMemo, memo
} from 'react';
import { Button } from 'antd';
import {
    withRouter, RouteComponentProps, useLocation, useHistory, useRouteMatch, useParams
} from 'react-router-dom';
import qs from 'qs';

interface Props extends RouteComponentProps {
    content: string;
}

const Penl = (props: Props) => {
    const { content } = props;
    const [num, setNum] = useState(0);
    const location = useLocation();
    const history = useHistory();
    const params = useParams();
    console.log(params);
    // console.log(qs.parse(location.search.substr(1)).id);
    // console.log(props.location.state.id);
    // console.log(qs.parse(props.location.search.substr(1)).id);

    return (
        <div>
            {content}
            <Button type="primary" onClick={() => setNum(num + 1)}>{num}</Button>
        </div>
    );
};

export default memo(withRouter(Penl));
