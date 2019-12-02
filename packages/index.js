import HelloWorld from "./HelloWorld";

const components = [HelloWorld];

const install = function(Vue) {
    if (install.installed) return;
    components.forEach(component => {
        Vue.component(component.name, component)
    });
}
// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    HelloWorld
};