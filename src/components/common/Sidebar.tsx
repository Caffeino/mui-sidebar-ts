import { Drawer, List, Stack, Toolbar } from '@mui/material';
import colorConfigs from '../../configs/colorConfigs';
import sizeConfigs from '../../configs/sizeConfigs';
import appRoutes from '../../routes/appRoutes';
import Logo from './Logo';
import SidebarItem from './SidebarItem';
import SidebarItemCollapse from './SidebarItemCollapse';

const Sidebar = () => {
	return (
		<Drawer
			variant='permanent'
			sx={{
				width: sizeConfigs.sidebar.with,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: sizeConfigs.sidebar.with,
					boxSizing: 'border-box',
					borderRight: '0px',
					backgroundColor: colorConfigs.sidebar.bg,
					color: colorConfigs.sidebar.color
				}
			}}
		>
			<List disablePadding>
				<Toolbar>
					<Stack sx={{ width: '100%' }} direction='row' justifyContent='center'>
						<Logo />
					</Stack>
				</Toolbar>
				{appRoutes.map((route, index) =>
					route.sidebarProps ? (
						route.child ? (
							<SidebarItemCollapse key={index} item={route} />
						) : (
							<SidebarItem key={index} item={route} />
						)
					) : null
				)}
			</List>
		</Drawer>
	);
};

export default Sidebar;
