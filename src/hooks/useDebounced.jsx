import { useState, useEffect } from 'react';

const useDebounced = (input) =>
{
    const [debounced, setDebounced] = useState(input);

    useEffect(() =>
    {
        const timeout = setTimeout(() =>
        {
            setDebounced(input);
        }, 500);

        return () => clearTimeout(timeout);
    }, [input]);

    return debounced;
}

export default useDebounced;
