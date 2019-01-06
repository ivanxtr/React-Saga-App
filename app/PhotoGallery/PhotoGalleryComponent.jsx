import React from "react";
import {connect} from "react-redux";
import {mapDispatchToProps,mapStateToProps} from "./PhotoGalleryActions";
import PhotoGalleryItems from "./PhotoGalleryItems";
import propTypes from "prop-types";

class PhotoGalleryComponent extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			modalImage: "",
			modalTitle: ""
		},
		this.modalChange = this.modalChange.bind(this);
	}

	componentDidMount(){
		this.props.fetchPhotos();
	}

	modalChange(id){
		const {photos} = this.props;
		this.setState({
			modalImage: photos.data[id - 1].url,
			modalTitle: photos.data[id - 1].title 
		});
	}

	render(){
		return(
			<div className="container-fluid pt-3 d-flex justify-content-center align-items-center flex-wrap h-100">
				<PhotoGalleryItems photos={this.props.photos} onUserClick={this.modalChange}/>	
				<div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">{this.state.modalTitle}</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body d-flex justify-content-center align-items-center">
								<img src={this.state.modalImage}/>
							</div>
						</div>
					</div>
				</div>	
			</div>
		);
	}

}

PhotoGalleryComponent.propTypes = {
	fetchPhotos: propTypes.func,
	photos: propTypes.object
};

const ConnectToStore = connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoGalleryComponent);

export default ConnectToStore;