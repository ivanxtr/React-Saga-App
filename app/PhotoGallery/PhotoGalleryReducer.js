export default function PhotoGalleryReducer(state=[],action ) {

	switch (action.type) {
	case "FETCH_PHOTOS_FULFILLED":
		return {
			...state,
			data: action.payload,
			completed: true
		};

	case "FETCH_PHOTOS_REJECTED":
		return {
			error: action.payload,
			completed: false
		};
	}
	return state;
}