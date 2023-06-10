import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderTrail = ({ trail }) => {
    if (trail) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={trail.image}>
                    <View style={{ justifyContent:'center', flex:1 }}>
                        <Text style={{ color: 'white', textAlign:'center', fontSize: 20 }}>
                            {trail.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{trail.description}</Text>
            </Card>
        )
    }
    return <View />;
}

export default RenderTrail;