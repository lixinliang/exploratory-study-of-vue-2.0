<script>
import tabbar from './tabbar.vue';

export default {
    components : {
        tabbar,
    },
    beforeCreate () {
        console.log('beforeCreate');
    },
    created () {
        console.log('created');
    },
    beforeMount () {
        console.log('beforeMount');
    },
    mounted () {
        console.log('mounted');
    },
    beforeUpdate () {
        console.log('beforeUpdate');
    },
    updated () {
        console.log('updated');
    },
    activated () {
        console.log('activated');
    },
    deactivated () {
        console.log('deactivated');
    },
    beforeDestroy () {
        console.log('beforeDestroy');
    },
    destroyed () {
        console.log('destroyed');
    },
}
</script>

<template>
	<div class="app">
        <router-view></router-view>
		<tabbar></tabbar>
	</div>
</template>

<style lang="scss">
	@import "../sass/variable.scss";
</style>
