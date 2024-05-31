import { handleBackspace, handleQuote, handleTab } from "../helpers/formaFunction";

import { IHandleKeyProps } from "../type";
import { ITextAreaFormatterProps } from '../type';



/**
 * Форматирует содержимое текстового поля в зависимости от нажатой клавиши.
 * @param {ITextAreaFormatterProps} props - Объект с параметрами.
 */

export const textAreaFormatter = ({
    event,
    textAreaRef,
    setJsonString,
    insertedTabs,
}: ITextAreaFormatterProps) => {

    const textarea = textAreaRef.current?.resizableTextArea.textArea;
    if (!textarea) return;

    const { selectionStart, selectionEnd } = textarea;
    const value = textarea.value;

    const handleKeyProps: IHandleKeyProps = {
        event,
        textarea,
        value,
        selectionStart,
        selectionEnd,
        setJsonString,
        insertedTabs,
    };

    // Исходя от типаа нажатой клавиши вызываем функцию
    switch (event.key) {
        case 'Tab':
            handleTab(handleKeyProps);
            break;
        case 'Backspace':
            handleBackspace(handleKeyProps);
            break;
        case '"':
            handleQuote(handleKeyProps);
            break;
        default:
            break;
    }

    event.stopPropagation();
};
