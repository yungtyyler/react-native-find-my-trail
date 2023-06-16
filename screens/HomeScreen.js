import { View, Text, Image, Button, StyleSheet } from 'react-native';
import jumbotron from '../assets/images/jumbotron/jumbotronImage1.jpg';

const HomeScreen = () => {
    return (
        <View>
            <View style={styles.homeContainer}>
                <Image
                    source={jumbotron}
                    style={styles.jumbotron}
                />
                <Text style={styles.jumbotronText}>Find My Trail</Text>
                <Text 
                    style={{ fontSize: 20, position: 'absolute', transform: [{ translateY: 75 }], backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: 10, color: '#f9f9f9' }}
                        
                >Discover Your Path</Text>
            </View>
            <View
                style={{ backgroundColor: '#008024', height: 50 }}
            >
                <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>Sign Up for our Newsletter</Text>
                <Button
                    title="Sign Up"
                    color="#fff"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008024',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        width: 450,
    },
    jumbotron: {
        width: 450,
        height: 250,
        opacity: 0.5,
        position: 'relative'
    },
    jumbotronText: {
        position: 'absolute',
        fontSize: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 20,
        color: 'white'
    }
})

export default HomeScreen