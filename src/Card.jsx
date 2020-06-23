import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './css/Card.css';

export default class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};	
		this.openModal = this.openModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
	}

	openModal() {
		this.setState({ showModal: true });
	}

	hideModal() {
		this.setState({ showModal: false });
	}

	render() {
		return (
			<React.Fragment>
				<Modal show={this.state.showModal} onHide={this.hideModal}>
					<Modal.Header bsPrefix="post-form-modal-header modal-header" closeButton>Create Post</Modal.Header>
					<Modal.Body>
						<div>
							yo what's good 
						</div>
					</Modal.Body>
				</Modal>

				<div className="grid-item">
					<div className="card" onClick={this.openModal}>
						<div className="img">
							<img src={`public/${this.props.imageUrl}`} />
						</div>
						Proof of Fermat's Last Theorem
					</div>
				</div>
			</React.Fragment>
		);
	}
}