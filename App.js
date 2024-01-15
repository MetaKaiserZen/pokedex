import { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { Navigator } from './src/navigator/Navigator';

const App = () =>
{
    const [loading, setLoading] = useState(false);

    useEffect(() =>
    {
        setTimeout(() =>
        {
            setLoading(true);
        }, 2000);
    }, []);

    return loading ?
    (
        <NavigationContainer>
            <Navigator />
        </NavigationContainer>
    ) : null;
}

export default App;
