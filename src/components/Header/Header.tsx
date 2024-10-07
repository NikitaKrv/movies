import { NavLink } from 'react-router-dom'
import { links } from '../../data/links.ts'
import logo from '../../assets/logo.svg'
import Search from '../Search/Search.tsx'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={ styles.header }>
			<NavLink to="/" className={ styles.logo }>
				<img src={ logo } alt="logo" />
				<span>Movies</span>
			</NavLink>
			<nav className={ styles.nav }>
				{
					links.map(link =>
						<NavLink
							key={ link.path }
							to={ link.path }
							className={ ({isActive}) => isActive ? styles.active : '' }
						>{ link.title }</NavLink>)
				}
			</nav>
			<Search />
		</header>
	)
}

export default Header