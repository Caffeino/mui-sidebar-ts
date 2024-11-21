import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import EmojiFoodBeverageOutlinedIcon from '@mui/icons-material/EmojiFoodBeverageOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import TakeoutDiningOutlinedIcon from '@mui/icons-material/TakeoutDiningOutlined';
import ContactPage from '../pages/contact/ContactPage';
import ChickenPage from '../pages/dish/ChickenPage';
import DishIndex from '../pages/dish/DishIndex';
import DishPageLayout from '../pages/dish/DishPageLayout';
import DrinkIndex from '../pages/drink/DrinkIndex';
import DrinkPageLayout from '../pages/drink/DrinkPageLayout';
import SodaPage from '../pages/drink/SodaPage';
import HomePage from '../pages/home/HomePage';
import OfferPage from '../pages/offer/OfferPage';
import OrderPage from '../pages/order/OrderPage';
import { RouteType } from './config';

const appRoutes: RouteType[] = [
	{
		index: true,
		element: <HomePage />,
		state: 'home'
	},
	{
		path: '/offers',
		element: <OfferPage />,
		state: 'offers',
		sidebarProps: {
			displayText: 'Offers',
			icon: <DiscountOutlinedIcon />
		}
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
		path: '/drinks',
		element: <DrinkPageLayout />,
		state: 'drinks',
		sidebarProps: {
			displayText: 'Drinks',
			icon: <EmojiFoodBeverageOutlinedIcon />
		},
		child: [
			{
				index: true,
				element: <DrinkIndex />,
				state: 'drinks.index'
			},
			{
				path: '/drinks/sodas',
				element: <SodaPage />,
				state: 'drinks.soda',
				sidebarProps: {
					displayText: 'Soda'
				}
			}
		]
	},
	{
		path: '/orders',
		element: <OrderPage />,
		state: 'orders',
		sidebarProps: {
			displayText: 'Orders',
			icon: <TakeoutDiningOutlinedIcon />
		}
	},
	{
		path: '/contact',
		element: <ContactPage />,
		state: 'contact',
		sidebarProps: {
			displayText: 'Contact',
			icon: <PermPhoneMsgOutlinedIcon />
		}
	}
];

export default appRoutes;
