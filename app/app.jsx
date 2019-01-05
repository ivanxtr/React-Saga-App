import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import store from "./store";
import PhotoGallery from "./PhotoGallery/PhotoGalleryComponent";
const app = document.getElementById("app");

ReactDom.render(
	<Provider store={store}>
		<PhotoGallery/>
	</Provider>
	,app);