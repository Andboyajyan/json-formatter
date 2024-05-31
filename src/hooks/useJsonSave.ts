import { useCallback } from 'react';
import jsPDF from 'jspdf';

import { validateJson } from '../utils/jsonValidator';

interface IuseJsonSaveProps {
    jsonString: string;
    isValid: boolean;
}

/**
 * Пользовательский хук для сохранения JSON данных в PDF файл.
 * @param {IuseJsonSaveProps} props - JSON строка и флаг валидности.
 * @returns {{ handleSave: () => void }} - Функция для сохранения JSON данных.
 */
export const useJsonSave = ({ jsonString, isValid }: IuseJsonSaveProps) => {
    // Функция для сохранения JSON данных, использующая useCallback для мемоизации
    const handleSave = useCallback(() => {
        // Проверяем валидность JSON перед сохранением
        if (isValid) {
            // Валидируем и парсим JSON строку
            const { parsedJson } = validateJson(jsonString);
            console.log('Parsed JSON Object:', parsedJson);

            // Создаем новый PDF документ
            const doc = new jsPDF();
            // Добавляем JSON строку в документ
            doc.text(jsonString, 10, 10);
            // Сохраняем PDF документ
            doc.save('json_data.pdf');
        }
    }, [jsonString, isValid]);

    // Возвращаем функцию для сохранения JSON данных
    return { handleSave };
};
