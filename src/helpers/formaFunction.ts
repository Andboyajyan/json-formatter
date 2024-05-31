import { IHandleKeyProps } from '../type';

const handleTab = ({
    event,
    textarea,
    value,
    selectionStart,
    selectionEnd,
    setJsonString,
}: IHandleKeyProps) => {
    event.preventDefault();
    // Вставляем четыре пробела на текущую позицию курсора
    const newValue = value.substring(0, selectionStart) + '    ' + value.substring(selectionEnd);
    // Обновляем JSON-строку новым значением
    setJsonString(newValue);
    // Перемещаем курсор на правильную позицию после пробелов
    updateTextarea(textarea, newValue, selectionStart + 4);
};

const handleBackspace = ({
    event,
    textarea,
    value,
    selectionStart,
    selectionEnd,
    setJsonString,
    insertedTabs,
}: IHandleKeyProps) => {
    const tabSize = 4;
    const startPos = selectionStart - tabSize;

    // Если курсор на позиции вставленного таба, удаляем его
    if (selectionStart === selectionEnd && insertedTabs.current.has(startPos)) {
        event.preventDefault();
        const newValue = value.substring(0, startPos) + value.substring(selectionEnd);
        setJsonString(newValue);
        updateTextarea(textarea, newValue, startPos);
        insertedTabs.current.delete(startPos);
    }
    // Если перед курсором есть таб, удаляем его
    else if (value.substring(selectionStart - tabSize, selectionStart) === '    ') {
        event.preventDefault();
        const newValue = value.substring(0, selectionStart - tabSize) + value.substring(selectionEnd);
        setJsonString(newValue);
        updateTextarea(textarea, newValue, selectionStart - tabSize);
    }
    // Если перед курсором один пробел, удаляем его
    else if (event.code === 'Backspace' && value.substring(selectionStart - 1, selectionStart) === ' ') {
        event.preventDefault();
        const newValue = value.substring(0, selectionStart - 1) + value.substring(selectionEnd);
        setJsonString(newValue);
        updateTextarea(textarea, newValue, selectionStart - 1);
    }
    // Если выделено только пробелы в начале строки, удаляем один пробел
    else if (selectionStart === selectionEnd && value.substring(0, selectionStart).match(/^ {1,4}$/)) {
        event.preventDefault();
        const newValue = value.substring(0, selectionStart - 1) + value.substring(selectionEnd);
        setJsonString(newValue);
        updateTextarea(textarea, newValue, selectionStart - 1);
    }
};

const handleQuote = ({
    event,
    textarea,
    value,
    selectionStart,
    selectionEnd,
    setJsonString,
}: IHandleKeyProps) => {
    event.preventDefault();
    // Вставляем двойные кавычки вокруг выделенного текста/на текущую позицию курсора
    const newValue = value.substring(0, selectionStart) + '"' + value.substring(selectionStart, selectionEnd) + '"' + value.substring(selectionEnd);
    // Обновляем JSON-строку новым значением
    setJsonString(newValue);
    // Перемещаем курсор на правильную позицию после вставки кавычек
    updateTextarea(textarea, newValue, selectionStart + 1);
};

const updateTextarea = (textarea: HTMLTextAreaElement, newValue: string, newSelectionStart: number) => {
    requestAnimationFrame(() => {
        textarea.value = newValue;
        textarea.setSelectionRange(newSelectionStart, newSelectionStart);
    });
};

export { handleTab, handleBackspace, handleQuote };
