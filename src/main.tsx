import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import Layout from './layout/Layout/Layout.tsx'
import MoviesPage from './pages/MoviesPage/MoviesPage.tsx'
import SeriesPage from './pages/SeriesPage/SeriesPage.tsx'
import ShowPage from './pages/ShowPage/ShowPage.tsx'
import InfoPage from './pages/InfoPage/InfoPage.tsx'
import 'normalize.css'
import './index.scss'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <MoviesPage />
			},
			{
				path: '/series',
				element: <SeriesPage />
			},
			{
				path: '/show',
				element: <ShowPage />
			},
		]
	},
	{
		path: 'info/:id',
		element: <InfoPage />
	}
])

createRoot(document.getElementById('root')!).render(
	<Provider store={ store }>
		<RouterProvider router={ router } />
	</Provider>
)
