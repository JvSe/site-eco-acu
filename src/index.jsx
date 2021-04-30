import React from 'react';
import ReactDOM from 'react-dom';

import Main from './pages/main';
import About from './pages/About';
import Where from './pages/Where';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import NavBar from './components/NavBar';

/**
 * yellow color initial gradient: #D8A72C;
 * yellow color end gradient: #f4e6c2;
 * 
* blue color initial gradient: #2d3a6a;
 * blue color end gradient: #3b57c2;
 */

import './styles/global.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './configReducers/configStore';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={true} persistor={persistor}>
            <NavBar 
                linksNav={
                    [
                        {
                            component: Home,
                            nome: 'Inicio',
                            id: 'home'
                        },
                        {
                            component: About,
                            nome: 'Sobre nós',
                            id: 'about'
                        },
                        {
                            component: Portfolio,
                            nome: 'Portfolio',
                            id: 'portfolio'
                        },
                        {
                            component: Where,
                            nome:'Onde estamos',
                            id: 'where'
                        },
                        {
                            component: Contact,
                            nome:'Contato',
                            id: 'contact'
                        }
                        
                    ]
                }
                
            />
            <Main />
        </PersistGate>
    </Provider>
        
    ,
  document.getElementById('root')
);
