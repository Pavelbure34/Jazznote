import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/*
    icon.js : icon component based on React-Fontawesome

    Parameter:
        icon = icon to display
        size = size of the icon
        color = color of the icon
*/

const Icon = (props)=>{
    const {icon, size, color} = props;
    return <FontAwesomeIcon icon={icon} size={size} color={color}/>;
};

export {Icon};
