/* global define, it, describe, expect */
import React from "react";
import {configure, mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import store from "../store";
import {Provider} from "react-redux";
import PhotoGalleryComponent from "../PhotoGallery/PhotoGalleryComponent";
import PhotoGalleryLoader from "../PhotoGallery/PhotoGalleryLoader";
import PhotoGalleryItems from "../PhotoGallery/PhotoGalleryItems";
import data from "../__mocks__/PhotoItemsMock.json";
import PhotoGalleryReducer,{state} from "../PhotoGallery/PhotoGalleryReducer";

configure({adapter: new Adapter()});

describe("<PhotoGalleryComponent/>", () => {
	const wrapper = mount(<Provider store={store} photos={data}><PhotoGalleryComponent/></Provider>);
	it("it is not empty", () => {
		expect(wrapper.exists()).toBe(true);
	});
	it("should have photos props",() => {
		expect(wrapper.instance().props.photos).not.toBeNull();
	});
	it("should contains modal class", () => {
		expect(wrapper.exists(".modal")).toBe(true);
	});
	it("should contains <PhotoGalleryLoader/>", () => {
		expect(wrapper.exists("PhotoGalleryLoader")).toBe(true);
	});
});

describe("<PhotoGalleryItems/>", () => {
	const items = mount(<PhotoGalleryItems photos={data}/>);
	it("should contains card class", () => {
		expect(items.exists(".card")).toBe(true);
	});
});

describe("<PhotoGalleryLoader/>", () => {
	const loader = shallow(<PhotoGalleryLoader/>);
	it("it should render",() => {
		expect(loader.exists()).toBe(true);
	});
});

describe("PhotoGalleryReducer", () => {
	it("should return the initial state", () => {
		expect(PhotoGalleryReducer(undefined,{})).toEqual([]);
	});
	it("should handle FETCH_PHOTOS_FULFILLED",() => {
		const fetch_photos_mocks = {
			type: "FETCH_PHOTOS_FULFILLED",
			payload: data
		};
		expect(PhotoGalleryReducer(undefined,fetch_photos_mocks)).toEqual(
			{
				completed: true,
				data: {
					data: [
						{
							"albumId": 1,
							"id": 1,
							"title": "accusamus beatae ad facilis cum similique qui sunt",
							"url": "https://via.placeholder.com/600/92c952",
							"thumbnailUrl": "https://via.placeholder.com/150/92c952"
						}
					]
				}
			}
		);
	});

	it("should handle FETCH_PHOTOS_REJECTED", () => {
		const fetch_error_mock = {
			type: "FETCH_PHOTOS_REJECTED",
			payload: "error"
		};
		expect(PhotoGalleryReducer({},fetch_error_mock)).toEqual({
			"completed": false,
			"error": "error"
		});
	});
});