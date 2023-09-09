/* eslint-disable import/no-anonymous-default-export */
import {makeAutoObservable} from 'mobx';

class TabsInfo{
    constructor(){
        this._tabsNames = {
            events: "План мероприятий",
            grands: "Гранты", 
            championship: "Чемпионат", 
            winners: "ЛМР", 
            study: "Аспирантура/Докторантура", 
            projectGroups: "Проектные группы", 
            scienificManagement: "Научное руководство"
        };
        
        this._adminTabsNames = {
            users: "Пользователи"
        };
        this._defaultState = this._tabsNames.events;
        this._currentState = this._defaultState;

        makeAutoObservable(this);
    }

    get tabsNames(){
        return this._tabsNames;
    }

    get adminTabsNames(){
        return this._adminTabsNames;
    }

    get defaultState(){
        return this._defaultState;
    }

    get currentState(){
        return this._currentState;
    }

    set currentState(value){
        const tabsHasValue = Object.values(this._tabsNames).includes(value);
        const adminsHasValue = Object.values(this._adminTabsNames).includes(value);
        if(tabsHasValue || adminsHasValue){
            this._currentState = value;
        }
        this._currentState = this.defaultState;
    }
}

export default TabsInfo;