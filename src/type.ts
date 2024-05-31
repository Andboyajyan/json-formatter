import { MutableRefObject } from "react";

export interface IjsonFormatterParams {
    jsonString: string;
    setJsonString: (value: string) => void;
}

export interface ITextAreaFormatterProps {
    event: React.KeyboardEvent<HTMLTextAreaElement>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    textAreaRef: React.MutableRefObject<any>;
    setJsonString: (value: string) => void;
    insertedTabs: React.MutableRefObject<Set<number>>;
}

export interface IUseLocalStorageProps {
    key: string;
    initialValue: string;
}


export interface IuseJsonSaveProps {
    jsonString: string;
    isValid: boolean;
}

export interface IInsertTabProps {
    value: string;
    selectionStart: number;
    selectionEnd: number;
    setJsonString: (value: string) => void;
    textarea: HTMLTextAreaElement;
}

export type InsertedTabsRef = React.MutableRefObject<Set<number>>;

export interface ITextAreaFormatterProps {
    event: React.KeyboardEvent<HTMLTextAreaElement>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    textAreaRef: MutableRefObject<any>;
    setJsonString: (value: string) => void;
    insertedTabs: MutableRefObject<Set<number>>;
}

export interface IHandleKeyProps {
    event: React.KeyboardEvent<HTMLTextAreaElement>;
    textarea: HTMLTextAreaElement;
    value: string;
    selectionStart: number;
    selectionEnd: number;
    setJsonString: (value: string) => void;
    insertedTabs: MutableRefObject<Set<number>>;
}