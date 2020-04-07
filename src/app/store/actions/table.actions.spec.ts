import * as fromAddRow from './table.actions';

describe('TableActions', () => {
    it('should return an action', () => {
        expect(fromAddRow.addRow({ row: [0] }).type).toBe('[Table] AddRow');
    });
});
