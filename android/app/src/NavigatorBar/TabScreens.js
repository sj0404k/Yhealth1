import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import CalendarComponent from '../mycalendar/CalendarComponent';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const StyledText = styled.Text`
    font-size: 30px;
`;

export const Exercise = () => {
    return (
        <Container>
            <StyledText>Exercise</StyledText>
        </Container>
    );
};

export const Calendar = () => {
    return (
        <View><CalendarComponent /></View>
    );
};

export const Home = () => {
    return (
        <Container>
            <StyledText>Home</StyledText>
        </Container>
    );
};

export const User = () => {
    return (
        <Container>
            <StyledText>User</StyledText>
        </Container>
    );
};