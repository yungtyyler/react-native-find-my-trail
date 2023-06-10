import RenderTrail from '../features/trails/RenderTrail';

const TrailInfoScreen = ({ route }) => {
    const { trail } = route.params;

    return <RenderTrail trail={trail} />;
}

export default TrailInfoScreen;