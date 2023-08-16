export default class itemStoreInterface{
    constructor(){
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