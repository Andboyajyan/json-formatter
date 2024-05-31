import { useState } from 'react';

import { IUseLocalStorageProps } from '../type';

/**
 * Хук для управления и синхорнизации localeStorage
 * @param {IUseLocalStorageProps} props
 * @returns {[string, (value: string) => void]}
 */
export const useLocalStorage = ({
    key,
    initialValue,
}: IUseLocalStorageProps): [string, (value: string) => void] => {
    // Проверка начального значения
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    // Функция для обнавления состояния и localeStorage
    const setValue = (value: string) => {
        try {
            setStoredValue(value);
            // Обнавление localeSotrage
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
};
