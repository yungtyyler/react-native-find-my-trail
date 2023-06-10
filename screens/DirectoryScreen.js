import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { useState } from 'react';
import { TRAILS } from '../shared/trails';

const DirectoryScreen = ({ navigation }) => {
    const [ trails, setTrails ] = useState(TRAILS);
    
    const renderDirectoryItem = ({ item: trail }) => {
        return (
            <ListItem onPress={() => navigation.navigate('TrailInfo', {trail})}>
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
            data={trails}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default DirectoryScreen;