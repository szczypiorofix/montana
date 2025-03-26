import { useCallback, useState } from 'react';

export function useRequest<T,>(url: string, defaultValue: T): [ T, (options: RequestInit) => void, boolean, boolean, boolean, string ] {
    const [response, setResponse] = useState<T>(defaultValue);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);
    const [finished, setFinished] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const execute = useCallback((options: RequestInit) => {
        (async () => {
            setLoading(true);
            try {
                const response: Response = await fetch(url, options);
                if (!response.ok) {
                    const responseJson: string = JSON.stringify(response);
                    console.error('useRequest response error: ', responseJson);
                    setHasError(true);
                    setErrorMessage('useRequest response error: ' + responseJson);
                }
                const responseResult: T = await response.json() as T;
                setResponse(responseResult);
            }catch(err) {
                console.error(err);
                setErrorMessage("useRequest fetch error: " + JSON.stringify(err));
                setHasError(true);
            } finally {
                setLoading(false);
                setFinished(true);
            }
        })();
    }, [url]);
    return [ response, execute, loading, finished, hasError, errorMessage ];
}
