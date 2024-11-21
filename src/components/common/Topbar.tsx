import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import colorConfigs from '../../configs/colorConfigs';
import sizeConfigs from '../../configs/sizeConfigs';

const Topbar = () => {
	return (
		<AppBar
			position='fixed'
			sx={{
				width: `calc(100% - ${sizeConfigs.sidebar.with})`,
				ml: sizeConfigs.sidebar.with,
				boxShadow: 'unset',
				borderBottom: colorConfigs.topbar.borderB
			}}
		>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography variant='h6'>
						Express food ready for delivery...
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Topbar;
