import { ListItemButton, ListItemIcon } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import colorConfigs from '../../configs/colorConfigs';
import { RootState } from '../../redux/store';
import { RouteType } from '../../routes/config';

type Props = {
	item: RouteType;
};

// 48:25
const SidebarItem = ({ item }: Props) => {
	const { appState } = useSelector((state: RootState) => state.appState);

	return item.sidebarProps && item.path ? (
		<ListItemButton
			component={Link}
			to={item.path}
			sx={{
				'&: hover': {
					backgroundColor: colorConfigs.sidebar.hoverBg
				},
				backgroundColor:
					appState === item.state ? colorConfigs.sidebar.active : 'unset',
				paddingY: '0.75rem',
				paddingX: '2rem'
			}}
		>
			<ListItemIcon
				sx={{
					color: colorConfigs.sidebar.iconColor
				}}
			>
				{item.sidebarProps.icon && item.sidebarProps.icon}
			</ListItemIcon>
			{item.sidebarProps.displayText}
		</ListItemButton>
	) : null;
};

export default SidebarItem;
