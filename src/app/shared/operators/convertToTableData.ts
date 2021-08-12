import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

export function convertToTableData() {
  return pipe(
    map(data => data['items']
      .map(item => {
        return {
          filterField: '',
          image: item.snippet.thumbnails.default,
          publishedAt: item.snippet.publishedAt,
          title: item,
          description: item.snippet.description
        }
      })
    )
  )
}
