import $ from 'jquery';

import partsData from './assets/json/parts.json'

export default class BBApi {
    constructor() {
        this.parts = {
            list: (partConst) => {
                return partsData;
                // return $.ajax(
                //     {
                //         type: "GET",
                //         dataType: "json",
                //         async: false,
                //         url: partsData,
                //         success: (data) => {
                //             console.log("success!", data);
                //         },
                //         error: (error) => {
                //             console.log("faaail", error);
                //         }
                //     }
                // );
            }
        }
    }
}