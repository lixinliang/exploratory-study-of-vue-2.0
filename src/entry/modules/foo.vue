<script>
export default {
	data () {
		return {
			title : 'foo',
		};
	},
	computed : {
		counter () {
			return this.$store.state.foo_page_counter;
		},
	},
	beforeCreate () {
        this.$store.state.foo_page_counter++;
    },
};
</script>

<template>
	<div class="foo">
		<div class="title">{{ title }}</div>
		<div class="counter">{{ counter }}</div>
	</div>
</template>

<style lang="scss">
	@import "../sass/variable.scss";
	.foo {
		color: $text-color;
	}
</style>
