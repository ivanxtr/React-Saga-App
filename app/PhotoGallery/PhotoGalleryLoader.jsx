import React from "react";
import propTypes from "prop-types";

const PhotoGalleryLoader = (WrappedComponent) => {
	return class PhotoGalleryLoader extends React.Component {
		render(){
			const {photos} = this.props;
			return photos.data ? <WrappedComponent {...this.props}/> : <img src="https://i.redd.it/ounq1mw5kdxy.gif"/>;
		}
	};
};

PhotoGalleryLoader.propTypes = {
	photos: propTypes.oneOfType([
		propTypes.object,
		propTypes.array
	])
};


export default PhotoGalleryLoader;