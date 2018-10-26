import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';

const Loading = (props) => {
    const { width, height } = props;

    return <div className="Loading"
        style={{ width, height }}/>;
}

Loading.PropTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
};

export default Loading;