import { useEffect, useState } from 'react';

import
{
    View,
    TextInput,
    StyleSheet
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import useDebounced from '../hooks/useDebounced';

const SearchInput = ({ onDebounce, style }) =>
{
    const [value, setValue] = useState('');

    const debounced = useDebounced(value);

    useEffect(() =>
    {
        onDebounce(debounced);
    }, [debounced]);

    return (
        <View style={{ ...styles.container, ...style }}>
            <View style={styles.background}>
                <TextInput
                    placeholder="Buscar Pokémon"
                    value={value}
                    onChangeText={setValue}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />

                <Ionicons
                    name="search-outline"
                    color="gray"
                    size={30}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
{
    background:
    {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 25,
        justifyContent: 'justify',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset:
        {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    input:
    {
        flex: 1,
        fontSize: 18
    }
});

export default SearchInput;
