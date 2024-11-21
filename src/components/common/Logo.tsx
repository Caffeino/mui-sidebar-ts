import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import { Typography } from '@mui/material';

const Logo = () => (
	<>
		<SoupKitchenIcon
			sx={{
				color: '#ff7777'
			}}
			fontSize='large'
		/>
		<Typography
			variant='h5'
			noWrap
			component='a'
			href='/'
			sx={{
				fontFamily: 'Shojumaru, system-ui',
				fontWeight: 400,
				letterSpacing: '.1rem',
				color: '#5f6868',
				textDecoration: 'none'
			}}
		>
			Fu-Hao
		</Typography>
	</>
);

export default Logo;
