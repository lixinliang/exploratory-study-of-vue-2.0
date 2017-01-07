<script>
export default {};
</script>

<template>
	<div class="tabbar">
		<router-link class="tabbar-item" to="/foo">foo</router-link>
        <router-link class="tabbar-item" to="/bar">bar</router-link>
	</div>
</template>

<style lang="scss">
	@import "../sass/variable.scss";
	.tabbar {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 44px;
        font-size: 0;
        position: fixed;
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #999;
            transform: scaleY(.5);
        }
	}
    .tabbar-item {
        width: 50%;
        height: 100%;
        display: inline-block;
        font-size: 20px;
        line-height: 44px;
        text-align: center;
        position: relative;
        &:first-child {
            &::before {
                content: "";
                position: absolute;
                right: 0;
                top: 50%;
                width: 1px;
                height: 60%;
                background-color: #999;
                transform: scaleX(.5) translateY(-50%);
            }
        }
        &.router-link-active {
            color: $current-link-color;
        }
    }
</style>
