import React, { Component } from 'react';
import Modal from 'react-modal';

class MyModal extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            showModal: false,
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.closeCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal(){
        this.setState({showModal: true});
    }

    handleCloseModal(){
        this.props.clearModal();
        this.setState({showModal: false});
    }

    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    /*componentWillReceiveProps(nextProps) {
        if(nextProps !== null){
            this.setState({ showModal: true});
        }
    }*/
    
    static getDerivedStateFromProps(props,state){
        if(props.team !== null){
            return {
                showModal: true
            }
        }
        return null
    }

    render() { 

        console.log(this.state.showModal);
        
        return ( 
            <>
                <Modal
                    isOpen={this.state.showModal}
                    ariaHideApp={false}
                >
                    <button onClick={this.handleCloseModal}>
                        Close Modal
                    </button>
                </Modal>
            </>
         );
    }
}
 
export default MyModal;