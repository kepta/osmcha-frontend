import {call, put, select} from 'redux-saga/effects';
import {fetchChangesetsPageAsync} from './changesets_page_actions';
import {networkFetchChangesets} from '../network/changesets_page';
const iterator = fetchChangesetsPageAsync({pageIndex: 2});

it('follows correct async flow ', () => {
  iterator.next();
  iterator.next();
  expect(iterator.next().value).toEqual(call(networkFetchChangesets, 2));
});
