export const validateJson = (jsonString: string) => {
    if (!jsonString.length) {
        return { valid: true, parsedJson: "{}" }
    }
    try {
        const parsedJson = JSON.parse(jsonString);
        return { valid: true, parsedJson };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e:any) {
        return { valid: false, error: e.message };
    }
};

