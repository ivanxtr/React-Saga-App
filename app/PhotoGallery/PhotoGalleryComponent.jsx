import React from "react";
import {connect} from "react-redux";
import {mapDispatchToProps,mapStateToProps} from "./PhotoGalleryActions";
import propTypes from "prop-types";

class PhotoGalleryComponent extends React.Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.fetchPhotos();
	}

	render(){
		return(
			<div>
				Aqui
			</div>
		);
	}

}

PhotoGalleryComponent.propTypes = {
	fetchPhotos: propTypes.func
};

const ConnectToStore = connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoGalleryComponent);

export default ConnectToStore;