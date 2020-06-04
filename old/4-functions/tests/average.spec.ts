import { average } from './average';

describe('Test Average', () => {
    it('should calc average', () => {
        expect(average(2, '2')).toEqual('Avg is 2');
        expect(average('2', 2, 2)).toEqual('Avg is 2');
        expect(average('6', '2')).toEqual('Avg is 4');
    })
})