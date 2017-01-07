<script>
export default {
	data () {
		return {
			title : 'bar',
		};
	},
	computed : {
		counter () {
			return this.$store.state.bar_page_counter;
		},
	},
	beforeCreate () {
        this.$store.state.bar_page_counter++;
    },
};
</script>

<template>
	<div class="bar">
		<div class="title">{{ title }}</div>
		<div class="counter">{{ counter }}</div>
	</div>
</template>

<style lang="scss">
	@import "../sass/variable.scss";
	.bar {
		color: $text-color;
	}
</style>
