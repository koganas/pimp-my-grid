<template>
  <Container max-width="1280px">
		<Row
			:total-columns="totalColumns"
			:gap="gap"
			class="gap"
		>
			<div
				v-for="col in Array(totalColumns)" v-bind:key="col"
				class="col-1 col--bgcolor"
			></div>
		</Row>
	</Container>
</template>

<script>
import Container from '@/components/objects/Container'
import Row from '@/components/objects/Row'

export default {
  name: 'GridPreview',
	components: {
		Container,
		Row
	},
  props: {
    msg: String
  },
	data() {
		return {
			totalColumns: 8,
			gap: "10px"
		}
	}
}
</script>
