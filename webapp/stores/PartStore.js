import { observable } from 'mobx';

export default class PartStore {
    @observable partList = [];

    constructor(api) {
        this.api = api;
        this.loadParts();
    }

    loadParts() {
        console.log("loadParts");
        this.partList = this.api.parts.list(null);
    }
}