import { defineStore } from "pinia"
export type Tab = {
    tittle: string;
    path: string;
}
export type tabList = {
    tabList: Tab[];
}
export const tabStore = defineStore('tabStore',{
    state: (): tabList => {
        return {
            tabList: []
        }
    },
    getters: {
        getTabs(state) {
            return state.tabList
        }
    },
    actions: {
        addTab(tab:Tab) {
            if(this.$state.tabList.some(item => item.path === tab.path)) return;
            this.$state.tabList.push(tab)
        }
    }
})
