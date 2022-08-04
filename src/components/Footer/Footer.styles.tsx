import { createUseStyles } from 'react-jss'
import { green, text_shadow, white } from '../../config/colours'
import { headingFontFamily } from '../../config/jss-vars'

const styles = {
	footer: {
		background: green,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'baseline',
		justifyContent: 'center',
		flexWrap: 'wrap',
		width: '100%',
		padding: '2em 0',
		fontSize: '0.8em',
		gap: '0.8em',
		color: white,
		'& a': {
			color: white,
		},
	},
	title: {
		color: white,
		fontSize: '3em',
		marginBottom: '0.2em',
		fontFamily: headingFontFamily,
		textTransform: 'uppercase',
		textShadow: `3px 3px 5px ${text_shadow}`,
	},
	linkGroup: {
		display: 'flex',
		fontSize: '0.5em',
		'& a': {
			padding: '0 0.5em',
		},
	},
	text: {
		width: '40em',
	},
}

export default createUseStyles(styles)
