import useStyles from './Accordion.styles'

interface Props {
	title: string
	expandedText: string
}

const Accordion: React.FC<Props> = ({ title, expandedText }) => {
	const classes = useStyles()

	return (
		<div className={classes.accordion}>
			<input type="checkbox" defaultChecked className={classes.check} />
			<h3>{title}</h3>
			<p className={classes.description}>{expandedText}</p>
		</div>
	)
}

export default Accordion
