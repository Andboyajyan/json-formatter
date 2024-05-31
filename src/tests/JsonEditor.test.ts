// src/tests/jsonValidator.test.js
import { validateJson } from "../utils/jsonValidator";

import { INVALID_DATA, VALID_DATA } from "./contants";



describe('validateJson', () => {
    it('returns valid for correct JSON', () => {
        const jsonString = JSON.stringify(VALID_DATA);
        const result = validateJson(jsonString);
        expect(result.valid).toBe(true);
        expect(result.parsedJson).toEqual(VALID_DATA);
    });

    it('returns invalid for incorrect JSON', () => {
        const result = validateJson(INVALID_DATA);
        expect(result.valid).toBe(false);
        expect(result.error).toBeDefined();
    });
});