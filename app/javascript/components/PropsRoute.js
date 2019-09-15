import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const renderMergedProps = (component, ...rest) => {
    console.log(rest);
    // console.log(...rest);
    // console.log(component);
    const finalProps = Object.assign({}, ...rest);
    console.log(finalProps);
    return React.createElement(component, finalProps);
}

const PropsRoute = ({ component, ...rest }) => {
    console.log({...rest});
    console.log(rest);
    return (
        <Route {...rest} render={routeProps => renderMergedProps(component, routeProps, rest)} />
    )
}


PropsRoute.propTypes = {
    component: PropTypes.func.isRequired
}

export default PropsRoute