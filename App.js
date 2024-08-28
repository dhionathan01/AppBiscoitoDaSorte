import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class App extends Component {
    render() {
        return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('./src/biscoito.png')}></Image>
                <Text style={styles.textoFrase}> "Alguma frase aqui" </Text>
                <TouchableOpacity style={styles.botao}>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTexto}> Quebrar Biscoito</Text>
                    </View>
                </TouchableOpacity>
        </View>  
        );
    }
}
export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 250,
        height: 250
    },
    textoFrase : {
        fontSize: 20,
        color: '#dd7b22',
        margin: 30,
        fontStyle : 'italic'
    },
    botao: {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: '#dd7b22',
        borderRadius: 50
    },
    btnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#dd7b22'
    }
})