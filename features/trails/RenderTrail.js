import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { baseUrl } from '../../shared/baseUrl';

const RenderTrail = ({ trail }) => {
    if (trail) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={{ uri: baseUrl + trail.image }}>
                </Card.Image>
                <Text style={{ margin: 20 }}>{trail.description}</Text>
            </Card>
        )
    }
    return <View />;
}

export default RenderTrail;