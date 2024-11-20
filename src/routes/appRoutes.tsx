import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import ChickenPage from '../pages/dish/ChickenPage';
import DishIndex from '../pages/dish/DishIndex';
import DishPageLayout from '../pages/dish/DishPageLayout';
import HomePage from '../pages/home/HomePage';
import OfferPage from '../pages/offer/OfferPage';
import { RouteType } from './config';

const appRoutes: RouteType[] = [
	{
		index: true,
		element: <HomePage />,
		state: 'home'
	},
	{
		path: '/dishes',
		element: <DishPageLayout />,
		state: 'dishes',
		sidebarProps: {
			displayText: 'Dishes',
			icon: <RamenDiningOutlinedIcon />
		},
		child: [
			{
				index: true,
				element: <DishIndex />,
				state: 'dishes.index'
			},
			{
				path: '/dishes/chicken',
				element: <ChickenPage />,
				state: 'dishes.chicken',
				sidebarProps: {
					displayText: 'Chicken'
				}
			}
		]
	},
	{
		path: '/offers',
		element: <OfferPage />,
		state: 'offers'
	}
];

export default appRoutes;
