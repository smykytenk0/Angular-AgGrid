export const columnDefsWithSelection = [
  {
    headerName: '',
    field: 'filterField',
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
    pinned: 'left',
  },
  {headerName: '', field: 'image', cellRenderer: 'tableImageComponent',},
  {headerName: 'Publish on', field: 'publishedAt'},
  {headerName: 'Video Title', field: 'title', cellRenderer: 'tableTitleComponent'},
  {headerName: 'Description', field: 'description'},
];

export const columnDefsWithoutSelection = [
  {headerName: '', field: 'image', cellRenderer: 'tableImageComponent',},
  {headerName: 'Publish on', field: 'publishedAt'},
  {headerName: 'Video Title', field: 'title', cellRenderer: 'tableTitleComponent'},
  {headerName: 'Description', field: 'description'},
];
