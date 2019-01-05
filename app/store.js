import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools,devToolsEnhancer} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import PhotoGalleryReducer from "./PhotoGallery/PhotoGalleryReducer";
import sagas from "./PhotoGallery/PhotoGallerySaga";

const combine = combineReducers({
	PhotoGalleryReducer
});
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const ReduxDevTool = process.env.NODE_ENV === "production" ? devToolsEnhancer(middleware) : composeWithDevTools(middleware);
const cStore = createStore(combine,ReduxDevTool);
sagaMiddleware.run(sagas);
export default cStore;