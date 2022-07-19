import { Link } from 'react-router-dom'
import { HomeRoute, MintRoute } from '../../pages/routes'
import ConnectButton from '../Button/ConnectButton'
import Logo from '../Logo/NFTLogo'
import useStyles from './Header.styles'

const Header: React.FC = () => {
	const classes = useStyles()

	return (
		<header className={classes.header}>
			<Link to={HomeRoute.path}>
				<Logo />
			</Link>
			<nav className={classes.nav}>
				<Link
					to={{ pathname: HomeRoute.path, hash: '#about' }}
					className={classes.link}
				>
					About
				</Link>
				<Link
					to={{ pathname: HomeRoute.path, hash: '#faq' }}
					className={classes.link}
				>
					FAQ
				</Link>
				<Link to={MintRoute.path} className={classes.link}>
					Mint
				</Link>
			</nav>
			<div className={classes.rightContent}>
				<ConnectButton />
			</div>
		</header>
	)
}

export default Header
