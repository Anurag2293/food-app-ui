import { ColorModeContext, ColorModeState } from './context/mode/ColorModeState';
import Navbar from './components/Navbar';
import { Typography } from '@mui/material';

export default function App () {
	return (
		<>
			<ColorModeState>
				<Navbar />
				<Typography>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates eum repellendus eligendi ut magni fuga. Consequatur nulla, mollitia deserunt quaerat vel sit quia earum quam quidem omnis aperiam exercitationem.
				</Typography>
			</ColorModeState>
		</>
	)
}