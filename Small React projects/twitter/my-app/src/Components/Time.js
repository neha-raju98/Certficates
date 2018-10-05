import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import 'react-tippy/dist/tippy.css';
import {Tooltip} from 'react-tippy';
import time from '../time.png';

  
const styles = {
    icon: {
        float: 'right',
        textAlign: 'right',
        margin: '0px 10px 0px auto'
    }
};
//Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
export default class Timer extends Component {
    states = {

    };
    render() {
        return (
            <div style={styles.icon}>
                <Tooltip
                    title={this.props.time}
                    position="right"
                    trigger="mouseenter"
                    >
                    <p>
                        <img src={time} className="Time-icon" alt="time" />
                    </p>
                </Tooltip>
            </div>
        );
    }
}