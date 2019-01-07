import React from "react";
import propTypes from "prop-types";
import PhotoGalleryLoader from "./PhotoGalleryLoader";

class PhotoGalleryItems extends React.Component {

	render(){
		let mappingData;
		if(this.props.photos && this.props.photos.data !== undefined){
			return mappingData = this.props.photos.data.map((data,index) => 
				<div onClick={() => this.props.onUserClick(data.id)} key={index} className="pt-3 d-flex justify-content-around align-items-start" data-toggle="modal" data-target=".bd-example-modal-lg">
					<div className="card shadow-sm bg-white p-1 m-1" style={{"width":"18rem"}}>
						<img className="card-img-top" src={data.thumbnailUrl} alt="Card image cap"/>
						<div className="card-footer fit-text">
							<small className="text-muted">{data.title}</small>
						</div>
					</div>	
				</div>
			);	
		} 
		
		return (
			mappingData	
		);
	}
}

PhotoGalleryItems.propTypes = {
	fetchPhotos: propTypes.func,
	onUserClick: propTypes.func,
	photos: propTypes.oneOfType([
		propTypes.object,
		propTypes.array
	]) 
};

export default PhotoGalleryLoader(PhotoGalleryItems);