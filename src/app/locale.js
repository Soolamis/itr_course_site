import { useState, useEffect, useCallback } from 'react';
import store from '../store/configure';
import { selectors } from '../store/locale/reducer';

export function useLocale() {
    const [ locale, setLocale ] = useState(selectors.locale(store.getState()));
    const handleChange = useCallback(
        () => {
            const newLocale = selectors.locale(store.getState());

            if (locale !== newLocale) {
                setLocale(newLocale)
            }
        },
        [locale],
    )

    useEffect(() => {
        const unsubscribe = store.subscribe(handleChange);
        return () => {
            unsubscribe();
        }
    }, [handleChange]);

    return locale;
}