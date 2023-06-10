import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const DirectoryScreen = (props) => {
    
    const renderDirectoryItem = ({ item: trail }) => {
        return (
            <ListItem onPress={() => props.onPress(trail.id)}>
                <Avatar 
                    source={trail.image}
                    rounded
                    size={'medium'} 
                />
                <ListItem.Content>
                    <ListItem.Title>{trail.name}</ListItem.Title>
                    <ListItem.Subtitle>{trail.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>  
        )
    }
    
    return (
        <FlatList 
            data={props.trails}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default DirectoryScreen;