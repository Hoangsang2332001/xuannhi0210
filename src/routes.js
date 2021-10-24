import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import Login from './components/Login';
import NotFound from './components/NotFound';
const routes = [
    {
        path: '/Home',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/About',
        exact: false,
        main: () => <About />
    },
    {
        path: '/Contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/Products',
        exact: false,
        main: ({match,location})=> <Products match={match} location={location}/>
    },
    {
        path: '/Login',
        exact: true,
        main: ({location}) => <Login location={location}/>
    },
    {
        path: '',
        exact: true,
        main: () => <NotFound />
    }
]

export default routes;