import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Card, Tile, Overlay, Input } from 'react-native-elements';
import Icon from 'react-native-elements';
import jumbotron from '../assets/images/jumbotron/jumbotronImage1.jpg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/Loading';

const FeaturedTrail = (props) => {
    const { trail } = props;

    if (props.isLoading) {
        return (
            <Loading />
        )
    }

    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        )
    }

    if (trail && trail.featured) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Title style={{ fontSize: 16, textDecorationLine: 'underline' }}>{trail.name}</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: baseUrl + trail.image }} />
                <Text style={{ margin: 10 }}>
                    {trail.description}
                </Text>
            </Card>
        )
    }
    return <View />
}

const HomeScreen = () => {
    const trails = useSelector(state => state.trails);
    const [ showModal, setShowModal ] = useState(false);

    const featTrails = trails.trailsArray.filter(trail => trail.featured);

    return (
        <ScrollView>
            <View style={styles.homeContainer}>
                <Tile 
                    imageSrc={jumbotron}
                    title="Find My Trail"
                    featured
                    caption="Discover Your Path"
                    titleStyle={styles.jumbotronText}
                    captionStyle={{ 
                        fontSize: 20, 
                        backgroundColor: 'rgba(0, 0, 0, 0.9)', 
                        padding: 10, 
                        color: '#f9f9f9',
                        borderRadius: 5
                    }}
                    activeOpacity={1}
                />
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
            <View style={{ alignItems: 'center', flex: 1 }}>
                <Text style={{ fontSize: 24, marginTop: 10 }}>Featured Trails</Text>
                {featTrails.map(trail => (
                    <FeaturedTrail 
                        key={trail.id}
                        trail={trail}
                        isLoading={trails.isLoading}
                        errMess={trails.errMess}
                    />
                ))}
            </View>
            <Overlay
                onBackdropPress={() => setShowModal(!showModal)}
                isVisible={showModal}
                overlayStyle={{ backgroundColor: '#fff', borderRadius: 5, marginHorizontal: 20 }}
                backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
            >
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>
                        Sign up for our newsletter and we'll send you information about our latest features and updates.
                    </Text>
                    <Input
                        placeholder='Email Address'
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Button
                            onPress={() => setShowModal(!showModal)}
                            title="Close"
                            color="gray"
                        />
                        <Button
                            onPress={() => setShowModal(!showModal)}
                            title="Submit"
                            color="green"
                        />
                    </View>
                </View>
            </Overlay>
        </ScrollView>
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
    },
    jumbotron: {
        width: 450,
        height: 250,
        opacity: 0.5,
    },
    jumbotronText: {
        fontSize: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        padding: 20,
        color: 'white',
        borderRadius: 8
    },
    modal: {
        justifyContent: 'center',
        margin: 20,
        padding: 10
    },
    modalText: {
        fontSize: 12,
        margin: 10,
        padding: 10
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        marginBottom: 20,
        padding: 10,
        borderRadius: 10
    }
})

export default HomeScreen