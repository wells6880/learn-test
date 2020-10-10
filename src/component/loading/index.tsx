import React from 'react';
import ReactDOM from 'react-dom';
import { Spin, Icon } from 'antd';
import './index.less';

class Loading {
    div: null | HTMLElement = null;

    show() {
        this.div = document.createElement('div');
        document.body.appendChild(this.div);

        const reactLoading = (
            <div className="loading">
                <Spin tip="Loading..." indicator={<Icon type="loading" style={{ fontSize: 24 }} />} />
            </div>
        );
        ReactDOM.render(reactLoading, this.div);
    }

    close() {
        if (this.div && this.div.parentNode) {
            this.div.parentNode.removeChild(this.div);
        }
    }
}

export default new Loading();
