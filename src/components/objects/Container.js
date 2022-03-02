import styled from 'vue3-styled-components';

const containerProps = { 
  maxWidth: String 
};

const Container = styled('div', containerProps)`
	max-width: ${props => props.maxWidth};
	margin: 0 auto;
	position: relative;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;
	
	background-color: #CCC;
	height: 600px;
`;

export default Container;