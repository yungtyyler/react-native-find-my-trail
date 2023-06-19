import { View, Text, Image, Button, StyleSheet, Modal } from 'react-native';
import jumbotron from '../assets/images/jumbotron/jumbotronImage1.jpg';
import { useState } from 'react';

const HomeScreen = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <View>
            <View style={styles.homeContainer}>
                <Image
                    source={jumbotron}
                    style={styles.jumbotron}
                />
                <Text style={styles.jumbotronText}>Find My Trail</Text>
                <Text 
                    style={{ fontSize: 20, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: 10, color: '#f9f9f9', top: 180 }}
                        
                >Discover Your Path</Text>
            </View>
            <View
                style={{ backgroundColor: '#008024', height: 50, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30 }}
            >
                <Text style={{ color: '#fff', fontSize: 18 }}>Sign Up for our Newsletter!</Text>
                <Button
                    title="Sign Up"
                    color="#595959"
                    onPress={() => setShowModal(!showModal)}
                />
            </View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={showModal}
                onRequestClose={() => setShowModal(!showModal)}
            >
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>
                        Sign up for our newsletter and we'll send you information about our latest features and updates.
                    </Text>
                    <Text style={styles.modalText}>
                        Email: 
                    </Text>
                    <Button
                        onPress={() => setShowModal(!showModal)}
                        title="Close"
                        color="red"
                    />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008024'
    },
    homeContainer: {
        width: "100%",
        alignItems: 'center',
        position: 'relative'
    },
    jumbotron: {
        width: 450,
        height: 250,
        opacity: 0.5,
    },
    jumbotronText: {
        fontSize: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 20,
        color: 'white',
        position: 'absolute',
        top: 65
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10,
        padding: 10
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#008024',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20,
        padding: 10,
        borderRadius: 10
    }
})

export default HomeScreen