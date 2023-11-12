import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const App: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>exerciseCLI Native</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 30,
    },
});

export default App;
