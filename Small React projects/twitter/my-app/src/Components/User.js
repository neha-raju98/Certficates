import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import {Tooltip} from 'react-tippy';

const styles = {
    user: {
        display: 'flex',
        padding: '10px',
        textAlign: 'left'
    },
    profile: {
        maxHeight: '100%',
        maxWidth: '100%',
        borderRadius: '100%'
    },
    containProfile: {
        width: '50px',
        height: '50px'
    },
    userIDs: {
        padding: '5px 0px 0px 5px'
    }
}
export default class User extends Component {

    states = {

    }
    render() {
        return (
            <div>
                <Paper style={styles.user} elevation={0}>
                    <div>
                        <Tooltip
                            // options
                            title={this.props.description}
                            size={10}
                            position="left"
                            trigger="mouseenter"
                            >
                            {this.props.pic != null ?
                                <div style={styles.containProfile}>
                                    <img style={styles.profile} src={require(`../${this.props.pic}`)} className="prof_img" alt="img"/>
                                </div>
                            : 
                                <div style={styles.containProfile}>
                                    <img style={styles.profile} src={require('../dummy_img.jpg')} className="prof_img" alt="img"/>
                                </div>
                            }
                        </Tooltip>
                    </div>
                    <div style={styles.userIDs}>
                        <div>
                            {this.props.name}
                        </div>
                        <div>
                            {this.props.tag}
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
    
}