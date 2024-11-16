import React from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView} from 'react-native';

import TopBar from '../../components/home/TopBar';
import Search from '../../components/home/search';
import Background from '../../components/home/Background';
import Bookings from '../../components/home/bookings/index';

import * as RootNavigation from '../../navigation/RootNavigation';
import LoginScreen from '../LoginScreen';
import SignupScreen from '../SignupScreen';


const {height} = Dimensions.get('screen');
const bookings = [
    {
        title: "Grand Luxury",
        image: require("../../../assets/home/bookings/booking-1.png"),
        tag: "Featured",
        members: 500,
        rating: 3,
    },
    {
        title:"Otman Hall",
        image: require("../../../assets/home/bookings/booking-2.png"),
        tag: "New",
        members: 200,
        rating: 4,
    },
    {
        title: "Grand Luxury",
        image: require("../../../assets/home/bookings/booking-1.png"),
        tag: "Featured",
        members: 500,
        rating: 3,
    },
    {
        title:"Otman Hall",
        image: require("../../../assets/home/bookings/booking-2.png"),
        tag: "New",
        members: 200,
        rating: 4,
    },
];

const bookingTabs = [
    { key: 'home', title: 'Home' },
    { key: 'for_tenants', title: 'For Tenants' },
    { key: 'for_owners', title: 'For Owners' },
    { key: 'Register', title: 'Register' },
];

function Root() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Drawer.Navigator>
    );
  }

export default function Home() {

    return <SafeAreaView>
        <View style={styles.homeHeader}>
            <Background image={require('../../../assets/background/17.jpg')} />
            <View style={styles.headerWrapper}>
                <TopBar 
                    menuIcon="bars"
                    profileImage={require('../../../assets/home/avatar.png')}
                    profileAction={()=>RootNavigation.pop()}
                />
                <Search
                    title="Where would you like to stay?"
                    inputPlaceholder="Search your location"
                />
            </View>
        </View>
        {/* <Bookings data={bookings} tabs={bookingTabs} /> */}
    </SafeAreaView>;
}

const styles = StyleSheet.create({
    homeHeader: {
        height: height/2,
    },
    headerWrapper: {
        zIndex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
});