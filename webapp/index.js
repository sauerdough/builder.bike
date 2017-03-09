import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppState from './stores/AppState';
import App from './components/App';

import BBApi from './api';

import PartStore from './stores/PartStore';

import './assets/less/main.less';

// jquery Library
import './assets/libs/jquery/jquery-3.1.1.min.js';

const api = new BBApi();

const appState = new AppState();
const partStore = new PartStore(api);

render(
    <AppContainer>
        <App appState={appState} partStore={partStore} />
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;

        render(
            <AppContainer>
                <NextApp appState={appState} />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
