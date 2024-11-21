import { ListItemButton, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import colorConfigs from '../../configs/colorConfigs';
import { RouteType } from '../../routes/config';

type Props = {
	item: RouteType;
};

const SidebarItem = ({ item }: Props) =>
	item.sidebarProps && item.path ? (
		<ListItemButton
			component={Link}
			to={item.path}
			sx={{
				'&: hover': {
					backgroundColor: colorConfigs.sidebar.hoverBg
				},
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

export default SidebarItem;
