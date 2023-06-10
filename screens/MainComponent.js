import { useState } from 'react';
import { View } from 'react-native';
import { TRAILS } from '../shared/trails';
import DirectoryScreen from './DirectoryScreen';
import TrailInfoScreen from './TrailInfoScreen';

const Main = () => {
    const [ trails, setTrails ] = useState(TRAILS);
    const [ selectedTraidId, setSelectedTrailId ] = useState();

    return (
        <View style={{ flex:1 }}>
            <DirectoryScreen trails={trails} onPress={(trailId) => setSelectedTrailId(trailId)} />
            <TrailInfoScreen trail={trails.filter(trail => trail.id === selectedTraidId)[0]} />
        </View>
    )
}

export default Main;