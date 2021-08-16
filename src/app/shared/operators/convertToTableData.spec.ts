import { convertToTableData } from './convertToTableData';
import {
  mockDataItemForTestingOperator,
  mockDataResultForTestingOperator
} from '../constants/defaultDataForTesting.constants';
import { of } from 'rxjs';

describe('convertToTableData', () => {

  it('convertToTableData should convert data to the fit the agGrid table', () => {
    of(mockDataItemForTestingOperator).pipe(convertToTableData()).subscribe(data => {
      expect(JSON.stringify(data[0]) == JSON.stringify(mockDataResultForTestingOperator[0])).toBe(true);
    })
  })
})
