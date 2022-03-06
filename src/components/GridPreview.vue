<template>
  <Container :max-width="maxWidth">
		<Row
			:total-columns="totalColumns"
			:gap="gap"
			class="gap"
		>
			<div
				v-for="col in Array(totalColumns)" v-bind:key="col"
				class="col-1 col--bgcolor"
			/>
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
			maxWidth: '1280px',
			totalColumns: 8,
			gap: '10px'
		}
	}
}
</script>
