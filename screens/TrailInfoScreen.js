import RenderTrail from '../features/trails/RenderTrail';
import { Text, StyleSheet, View} from 'react-native';
import RenderComment from '../features/comments/RenderComment';

const TrailInfoScreen = ({ route }) => {
    const { trail } = route.params;

    return (
        <View>
            <Text style={styles.header}>
                {trail.name} Info Screen
            </Text>
            <RenderTrail trail={trail} />
            <View>
                <Text style={styles.header}>
                    Reviews/Comments
                </Text>
                <RenderComment trail={trail} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: 'green'
    }
})

export default TrailInfoScreen;