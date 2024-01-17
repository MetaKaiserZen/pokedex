import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';

const Loading = () =>
{
    return (
        <View
            style={styles.container}
        >
            <ActivityIndicator
                size={50}
                color="gray"
            />
            <Text>Cargando...</Text>
        </View>
    );
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Loading;
