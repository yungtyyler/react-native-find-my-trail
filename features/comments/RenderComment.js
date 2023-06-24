import { View, Text, StyleSheet } from 'react-native';
import { getCommentsByTrialId } from './commentsSlice';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import { Rating } from 'react-native-elements';

const RenderComment = ({ trail }) => {
    const comments = useSelector(getCommentsByTrialId(trail.id));

    if (comments.isLoading) {
        return <Loading />
    }

    if (comments.errMess) {
        return (
            <View>
                <Text>{comments.errMess}</Text>
            </View>
        )
    }

    return (
        <View>
            {comments.map((comment) => {
                return (
                    <View key={comment.id}>
                        <Rating 
                            style={{ paddingTop: 5 }}
                            type='star'
                            startingValue={comment.rating}
                            ratingCount={5}
                            imageSize={20}
                            readonly
                        />
                        <Text style={{ textAlign: 'center', fontSize: 18, paddingTop: 10, fontStyle: 'italic' }}>{comment.text}</Text>
                        <View style={{ paddingVertical: 10, paddingHorizontal: 15 }}>
                            <Text>{comment.author}</Text>
                            <Text>{comment.date}</Text>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}
export default RenderComment;