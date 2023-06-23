import { View, Text, StyleSheet } from 'react-native';
import { getCommentsByTrialId } from './commentsSlice';
import { useSelector } from 'react-redux';

const RenderComment = ({ trail }) => {
    const comments = useSelector(state => state.comments.commentsArray);
    console.log(comments)

    if (trail) {
        return (
            <View>
                {comments.map((comment) => {
                    return (
                        <View key={comment.id}>
                            <Text>{comment.text}</Text>
                            <Text>{comment.rating}</Text>
                            <Text>{comment.author}</Text>
                            <Text>{comment.date}</Text>
                        </View>
                    )
                })}
            </View>
        )
    }
}
export default RenderComment;