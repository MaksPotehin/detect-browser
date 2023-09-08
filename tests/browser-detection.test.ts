import { browserDetection } from '../src';

describe('Browser Detection', () => {
    it('should detect a valid browser', () => {
        const browser = browserDetection();
        const expectedBrowsers = ['Opera', 'Chrome', 'Safari', 'Firefox', 'IE', 'Unknown'];

        expect(expectedBrowsers).toContain(browser);
    });
});
