import { useTheme } from '@mui/material/styles';

import { ColorModeState } from './context/mode';
import Navbar from './pages/Navbar.js';
import Home from './pages/Home';

export default function App () {
	const theme = useTheme();
	console.log(theme.palette.mode)

	return (
		<>
			<ColorModeState>
				<Navbar />
				<Home />
			</ColorModeState>
		</>
	)
}