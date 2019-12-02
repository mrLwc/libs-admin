import helloWorld from './src/hello-world.vue';

helloWorld.install = function(Vue){
    Vue.component(helloWorld.name, helloWorld)
}

export default helloWorld;