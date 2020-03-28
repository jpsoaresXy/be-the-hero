const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
    it('should generate an uniqie Id', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    })
})