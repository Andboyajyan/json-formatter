import { IjsonFormatterParams } from '../type';

/**
 * Функция для форматирования JSON строки в более читаемый вид.
 * @param {IjsonFormatterParams} params - Параметры, содержащие JSON строку и функцию для обновления строки.
 */
export const jsonFormatter = ({ jsonString, setJsonString }: IjsonFormatterParams) => {
    try {
        // Парсим JSON строку и форматируем её с отступами
        const beautifiedJson = JSON.stringify(JSON.parse(jsonString), null, 4);
        // Обновляем JSON строку
        setJsonString(beautifiedJson);
    } catch (error) {
        // Логируем ошибку, если произошла ошибка при парсинге или форматировании
        console.error('Error beautifying JSON:', error);
    }
};
