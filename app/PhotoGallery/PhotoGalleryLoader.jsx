import React from "react";
import propTypes from "prop-types";

const PhotoGalleryLoader = (WrappedComponent) => {
	return class PhotoGalleryLoader extends React.Component {
		render(){
			return this.props.photos.data ? <WrappedComponent {...this.props}/> : <div className="lds-facebook"><div></div><div></div><div></div></div>;
		}
	};
};

PhotoGalleryLoader.propTypes = {
	photos: propTypes.shape({
		data: propTypes.array
	})
};

export default PhotoGalleryLoader;