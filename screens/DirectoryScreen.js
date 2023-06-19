import { FlatList, Text } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "../components/Loading";

const DirectoryScreen = ({ navigation }) => {
    const trails = useSelector(state => state.trails);
    
    const renderDirectoryItem = ({ item: trail }) => {
        return (
            <ListItem onPress={() => navigation.navigate('TrailInfo', {trail})}>
                <Avatar 
                    source={{ uri: baseUrl + trail.image }}
                    rounded
                    size={'large'} 
                />
                <ListItem.Content>
                    <ListItem.Title>{trail.name}</ListItem.Title>
                    <ListItem.Subtitle>{trail.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }
    
    if (trails.isLoading) {
        return <Loading />
    }

    if (trails.errMess) {
        return (
            <View>
                <Text>{trails.errMess}</Text>
            </View>
        )
    }

    return (
        <FlatList 
            data={trails.trailsArray}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default DirectoryScreen;