import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { globalStyles } from '@/styles/globalStyles';
import TabBarIcon from '@/components/common/TabBarIcon';

export default function TabsLayout() {
	return (
		<SafeAreaView
			edges={['top']}
			style={globalStyles.safeArea}>
			<Tabs
				screenOptions={{
					headerShown: false,
					tabBarActiveTintColor: '#1A1A1A',
					tabBarInactiveTintColor: 'gray',
					tabBarStyle: {
						borderTopRightRadius: 20,
						borderTopLeftRadius: 20,
						height: 70,
						paddingTop: 10,
					},
					tabBarLabelStyle: {
						fontSize: 16,
					},
				}}>
				<Tabs.Screen
					name='index'
					options={{
						title: 'Home',
						tabBarIcon: (props) => {
							return (
								<TabBarIcon
									{...props}
									name='home-outline'
								/>
							);
						},
					}}
				/>
				<Tabs.Screen
					name='search'
					options={{
						tabBarLabel: 'Search',
						tabBarIcon: (props) => {
							return (
								<TabBarIcon
									{...props}
									name='search-outline'
								/>
							);
						},
					}}
				/>
				<Tabs.Screen
					name='cart'
					options={{
						tabBarLabel: 'Cart',
						tabBarIcon: (props) => {
							return (
								<TabBarIcon
									{...props}
									name='cart-outline'
								/>
							);
						},
					}}
				/>
				<Tabs.Screen
					name='account'
					options={{
						title: 'Account',
						tabBarIcon: (props) => {
							return (
								<TabBarIcon
									{...props}
									name='person-circle-outline'
								/>
							);
						},
					}}
				/>
			</Tabs>
		</SafeAreaView>
	);
}
