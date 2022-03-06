import styled, { css } from 'vue3-styled-components';

const columnsProps = {
	totalColumns: Number,
	gap: String,
};

function createColumns(columnRatio, totalColumns, gap) {
	let styles = '';

	for (let i = 0; i <= totalColumns; i += 1) {
		const columnWidth = gap ?
			'calc(' + (columnRatio * i) + '% - ' + gap + ')' :
			(columnRatio * i) + '%';

		styles += `
      .col-${i} {
        flex-basis: ${columnWidth};
        width: ${columnWidth};
      }
      .col-offset-${i} {
        margin-left: ${columnWidth};
      }
     `
	}

	return css`${styles}`;
}

const Row = styled('div', columnsProps)`
	display: flex;
	flex-direction: row;
	flex-flow: row;
	flex-wrap: wrap;
	justify-content: stretch;

	width: 100%;
	flex-basis: 100%;

	width: calc( 100% + ${props => props.gap} );
	flex-basis: calc( 100% + ${props => props.gap} );
	margin: 0 calc( -1 * (${props => props.gap} / 2) );

	&.justify {
		justify-content: space-between;
	}

	&.gap {
		//column-gap: ${props => props.gap};

		& > * {
			margin: 0 calc( ${props => props.gap} / 2 );
		}
	}

	.col--bgcolor {
		height: 600px;
		background-color: #f7f7f7;
	}

	${
		props =>  createColumns(
			(100 / props.totalColumns).toFixed(4),
      props.totalColumns,
			props.gap
    )
  };

	
`;

export default Row;