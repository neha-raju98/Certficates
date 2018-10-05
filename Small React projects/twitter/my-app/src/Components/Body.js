import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import User from './User.js';
import Time from './Time.js';
import ReactTextCollapse from 'react-text-collapse';

const styles = {
    body: {
      margin: '10px auto',
      width: '40%'
    },
    paper: {
        display: 'flex',
        textAlign: 'right',
        margin: 'auto',
    },
    message: {
        width: '80%',
        margin: 'auto',
        padding: '10px',
        textAlign: 'center'
    },
    image: {
        maxHeight: '100%',
        maxWidth: '100%',
        borderRadius: '2%',
        padding: '5px 0px 0px 0px'
    }
}


export default class Body extends Component {
    state = {

    };


    render() {
        return (
            <div style={styles.body}>
                <Paper elevation={2}>
                    <div style={styles.paper}>
                        <User
                            name={this.props.details.name}
                            tag={this.props.details.tag}
                            description={this.props.details.Description}
                            pic={this.props.details.Profile}
                        />
                        <Time time={this.props.details.time}/>
                    </div>
                    <div style={styles.message}>
                        <div>
                            {this.props.details.message}
                            {this.props.details.image != null ?
                                <div>
                                    <img style={styles.image} src={require(`../${this.props.details.image}`)} alt="img"/>
                                </div>
                            : null}
                        </div>
                    </div>
                    
                </Paper>
            </div>
        );
    }
}