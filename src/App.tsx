import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import { themeConfigs } from './configs/themeConfigs';
import { routes } from './routes';

function App() {
	// 40:40
	return (
		<ThemeProvider theme={themeConfigs}>
			<CssBaseline enableColorScheme />
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
		</ThemeProvider>
	);
}

export default App;
