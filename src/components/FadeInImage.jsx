import { useState } from 'react';

import { ActivityIndicator, Animated, View } from 'react-native'; 

import useAnimation from '../hooks/useAnimation';

const FadeInImage = ({ uri, style = {} }) =>
{
    const [loading, setLoading] = useState(true);

    const { opacity, fadeIn } = useAnimation();

    const finishLoading = () =>
    {
        setLoading(false);

        fadeIn();
    }

    const onError = () =>
    {
        setLoading(false);
    }

    return (
        <View
            style={
            {
                justifyContent: 'center',
                alignItems: 'center',
                ...style
            }}
        >

            {
                loading &&
                    <ActivityIndicator
                        style={{ position: 'absolute' }}
                        size={25}
                        color="gray"
                    />
            }

            <Animated.Image
                source={{ uri }}
                onError={onError}
                onLoad={finishLoading}
                style={
                {
                    ...style,
                    opacity
                }}
            />
        </View>
    );
}

export default FadeInImage;
