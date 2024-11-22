import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import {
	Collapse,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import colorConfigs from '../../configs/colorConfigs';
import { RootState } from '../../redux/store';
import { RouteType } from '../../routes/config';
import SidebarItem from './SidebarItem';

type Props = {
	item: RouteType;
};

const SidebarItemCollapse = ({ item }: Props) => {
	const [open, setOpen] = useState(false);
	const { appState } = useSelector((state: RootState) => state.appState);

	useEffect(() => {
		if (!appState.includes(item.state)) return;

		setOpen(true);
	}, [appState, item]);

	return item.sidebarProps ? (
		<>
			<ListItemButton
				onClick={() => setOpen(!open)}
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
				<ListItemText
					disableTypography
					primary={<Typography>{item.sidebarProps.displayText}</Typography>}
				/>
				{open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
			</ListItemButton>
			<Collapse in={open} timeout='auto'>
				<List>
					{item.child?.map((route, index) =>
						route.sidebarProps ? (
							route.child ? (
								<SidebarItemCollapse key={index} item={route} />
							) : (
								<SidebarItem key={index} item={route} />
							)
						) : null
					)}
				</List>
			</Collapse>
		</>
	) : null;
};

export default SidebarItemCollapse;
