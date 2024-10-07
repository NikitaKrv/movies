import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header.tsx'
import Filters from '../../components/Filters/Filters.tsx'
import styles from './Layout.module.scss'

const Layout = () => {
	return (
		<div className={ styles.layout }>
			<Header />
			<Filters />
			<Outlet />
		</div>
	)
}

export default Layout