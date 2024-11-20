import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import { routes } from './routes';

function App() {
	return (
		<BrowserRouter
			future={{
				v7_startTransition: true,
				v7_relativeSplatPath: true
			}}
		>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					{routes}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
