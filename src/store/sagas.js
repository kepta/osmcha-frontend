import {watchFetchChangesetsPage} from './changesets_page_actions';
import {watchFetchChangeset} from './changeset_actions';

export default function* rootSaga() {
  yield [watchFetchChangesetsPage(), watchFetchChangeset()];
}
