<template>
	<div>
		<xheader></xheader>
		<router-view></router-view>
	</div>
</template>

<script>
	import xheader from "./xheader.vue"
	export default {
		data(){
			return {
				
			}
		},
		mounted(){

		},
		components:{
			xheader
		}
	}
</script>

<style>
</style>