import { columnDefsWithoutSelection } from './columnDefs.constants';

export const contextMenuItemsForDefaultParams = {
  column: {
    colId: 'test'
  },
  defaultItems: ['test']
}

export const contextMenuItemsForNonDefaultParams = {
  column: {
    colId: 'title'
  },
  defaultItems: ['test']
}

export const mockRootState = {
  store: {
    isSelection: false,
    columnsDefs: columnDefsWithoutSelection
  }
}

export const mockInitialState = {
  isSelection: false,
  columnsDefs: columnDefsWithoutSelection
}

export const mockGridParams = {
  value: {
    url: 'test',
    id: {
      videoId: 'test'
    },
    snippet: {
      title: 'test'
    }
  }
}

export const mockDataItemForTestingOperator = {
  items: [
    {
      snippet: {
        publishedAt: 'test',
        description: 'test',
        thumbnails: {
          default: 'test'
        },
      }
    }
  ]
}


export const mockDataResultForTestingOperator = [
  {
    filterField: '',
    image: 'test',
    publishedAt: 'test',
    title: mockDataItemForTestingOperator.items[0],
    description: 'test'
  }
]
