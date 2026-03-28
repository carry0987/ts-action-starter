import { describe, expect, it } from 'vitest';
import { greet } from '../src/utils.js';

describe('greet', () => {
    it('returns greeting message', () => {
        expect(greet('World')).toBe('Hello, World!');
    });

    it('handles empty string', () => {
        expect(greet('')).toBe('Hello, !');
    });
});
