// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CalendarComponent from './mycalendar/CalendarComponent';
import YHealthTopBar from './NavigatorBar/topbar';
import TabNavigation from './NavigatorBar/bottombar';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    return (
        <NavigationContainer>
            <View style={styles.appContainer}>
                {/* <View style={{ alignItems: 'stretch', padding: 10 }}>
                <YHealthTopBar />
            </View>
            <CalendarComponent /> */}
                <TabNavigation />
            </View>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        justifyContent: 'flex-startflex-start',
        alignItems: 'stretch',
    },
});

export default App;
