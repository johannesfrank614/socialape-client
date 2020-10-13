import React, { Component } from "react";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

/* 
class MyButton extends React.Component {
    constructor() {
        super();
        this.wrapper = React.createRef();  
    }
    
    render() {
        return(
            <Tooltip title={this.props.tip} className={this.props.tipClassName} placement="top">
            <IconButton onClick={this.props.onClick} className={this.props.btnClassName}>
                <div ref={this.wrapper}>{this.props.children}</div>
            </IconButton>
            </Tooltip>
        ) 

    }
}

export default MyButton
*/
/*
import React from 'react'

import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
*/
export default ({ children, onClick, tip, btnClassName, tipClassName }) => (
    <Tooltip title={tip} className={tipClassName} placement="top">
        <IconButton onClick= {onClick} className={btnClassName}>
            {children}
        </IconButton>
    </Tooltip>
)
