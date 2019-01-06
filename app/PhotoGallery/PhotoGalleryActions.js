export const mapStateToProps = (state) => {
	return {
		photos: state.PhotoGalleryReducer
	};
};

export const mapDispatchToProps = (dispatch) => {
	return {
		fetchPhotos: () => dispatch({type: "GET_PHOTOS"})
	};
};
