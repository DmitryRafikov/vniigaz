import itemStoreInterface from "./itemInterface";
export default class grandStore extends itemStoreInterface{
    constructor(){
        super();
        this.fieldsList = {};
        this.item = null;
    };
    get fields(){
        return this.fieldsList;
    }
    get items(){
        return this.item;
    }
    setItems(items){
        this.item = items;
    }
}