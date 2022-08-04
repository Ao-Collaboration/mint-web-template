import { createUseStyles } from 'react-jss'
import {
	text_shadow,
	about_background,
	about_text,
	faq_background,
	faq_title_text,
} from '../../config/colours'
import { headingFontFamily } from '../../config/jss-vars'

const { PUBLIC_URL } = process.env

const styles = {
	page: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100vw',
		overflowX: 'hidden',
		position: 'relative',
		'& h1': {
			fontFamily: headingFontFamily,
			textTransform: 'uppercase',
			fontSize: '4em',
			textShadow: text_shadow,
			margin: '0',
		},
	},
	section: {
		width: '100%',
		minHeight: '50vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '4em 0em',
		'& h2, h3': {
			fontFamily: headingFontFamily,
			textTransform: 'uppercase',
			fontSize: '2em',
			textShadow: text_shadow,
			margin: '0',
		},
		'& div': {
			maxWidth: '50rem',
		},
	},
	hero: {
		composes: '$section',
		backgroundImage: `url(${PUBLIC_URL}/img/banner.png)`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		textAlign: 'center',
		'& p': {
			maxWidth: '50rem',
			fontSize: '1.3em',
		},
		'& sub': {
			fontSize: '0.5em',
		},
	},
	about: {
		composes: '$section',
		backgroundColor: about_background,
		color: about_text,
	},
	image: {
		display: 'block',
		margin: 'auto',
	},
	faq: {
		composes: '$section',
		backgroundColor: faq_background,
		color: faq_title_text,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	centered: {
		textAlign: 'center',
	},
}

export default createUseStyles(styles)
