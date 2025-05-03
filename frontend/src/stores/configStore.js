import { defineStore } from "pinia";

export const useConfigStore = defineStore("config", {
    state: () => ({
        sysConfig: {
            title: "HeSir的小站",
            headerItems: [
                {
                    name: "首页",
                    link: "/",
                },
                {
                    name: "文章",
                    link: "/article",
                },
                {
                    name: "关于",
                    link: "/about",
                },
            ],
        },
    }),
    actions: {
        setConfig(config) {
            this.config = config;
        },
    },
    getters: {
        getConfig: (state) => {
            return state.config;
        },
    },
});