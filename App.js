import { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { Tabs } from './src/navigator/Tabs';

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
            <Tabs />
        </NavigationContainer>
    ) : null;
}

export default App;
