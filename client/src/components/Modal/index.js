import React , { Component } from 'react';

// Component styles
import "./styles.css";

// Material components
import Typography from '@material-ui/core/Typography';

import AddJob from '../AddJob';

//redux Imports
import { connect } from 'react-redux';
import { modalClose } from '../../redux/Modal/modal.action';


class Modal extends Component {n
    

     closeModal = (e) => {

        this.props.modalClose(false)

     }

     render() {
     
        const divStyle = { 
            display: this.props.displayModal ? 'block' : 'none'
        };
     
        return (
            <div 
                className="modal"
                onClick={ this.closeModal }
                style={divStyle} >
                <div 
                    className="modal-content"
                    onClick={ e => e.stopPropagation() } >
                        <Typography variant="h2" gutterBottom>Post a Job</Typography>
                    <span 
                        className="close"
                        onClick={ this.closeModal }>&times;
                    </span>
                    <AddJob />
                </div>
            </div>
            );

     }
}

const mapStateToProps = state => ({
    displayModal : state.modal.isOpen
});

const mapDispatchToProps = dispatch => ({
    modalClose: flag => dispatch(modalClose(flag))
});
  

export default connect(mapStateToProps, mapDispatchToProps)(Modal);