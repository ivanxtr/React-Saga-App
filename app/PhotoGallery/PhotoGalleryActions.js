export const mapStateToProps = (state) => {
	return {
		Photos: state.PhotoGalleryReducer
	};
};

export const mapDispatchToProps = (dispatch) => {
	return {
		fetchPhotos: () => dispatch({type: "GET_PHOTOS"})
	};
};
