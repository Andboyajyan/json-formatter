import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Button, Input } from 'antd';

import { validateJson } from '../../utils/jsonValidator';
import { jsonFormatter } from '../../utils/jsonFormatter';
import { textAreaFormatter } from '../../utils/textAreaFormatter';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useJsonSave } from '../../hooks/useJsonSave';

import { InsertedTabsRef } from '../../type';

import './JsonEditor.css';

export const JsonEditor = () => {
    const [jsonString, setJsonString] = useLocalStorage({ key: 'jsonString', initialValue: '' });
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const textAreaRef = useRef(null);
    const insertedTabs: InsertedTabsRef = useRef(new Set());

    useEffect(() => {
        const { valid, error } = validateJson(jsonString);
        setIsValid(valid);
        if (!valid) setErrorMessage(error);
    }, [jsonString]);

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setJsonString(event.target.value);
        },
        [setJsonString],
    );

    const { handleSave } = useJsonSave({ jsonString, isValid });

    const handleFormatJSON = () => {
        jsonFormatter({ jsonString, setJsonString });
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        textAreaFormatter({ event, textAreaRef, setJsonString, insertedTabs });
    };

    return (
        <div className="json-editor-container">
            <div className="json-editor">
                <Input.TextArea
                    ref={textAreaRef}
                    value={jsonString}
                    style={{ borderColor: isValid ? "initial" : "#f56565" }}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter JSON here..."
                    autoSize={{ minRows: 10 }}
                    className="json-editor-textarea no-background"
                />
                <p className="error-message" style={{ opacity: isValid ? '0' : '1' }}>
                    Error: {errorMessage}
                </p>
                <div className="buttons-container">
                    <Button onClick={handleFormatJSON} type="primary" className="beautify-button">
                        Beautify
                    </Button>
                    <Button onClick={handleSave} disabled={!isValid} className="save-button">
                        Save JSON as File
                    </Button>
                </div>
            </div>
        </div>
    );
};
