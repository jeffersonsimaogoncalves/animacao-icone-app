import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import LottieView from 'lottie-react-native';

export default function App() {
    let animation = React.createRef();

    function startAnimation() {
        animation.current.play();
    }

    return (
        <View style={ styles.container }>
            <TouchableOpacity onPress={ startAnimation }>
                <Feather name="play" size={ 60 } color="red" />
            </TouchableOpacity>
            <LottieView source={ require('./assets/check.json') } loop={ false }
                        style={ { width: 200, height: 200 } } ref={ animation } />
            <Button title="Start Animação" onPress={ startAnimation } />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
