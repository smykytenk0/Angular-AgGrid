export interface IColumnDef {
  headerName: string,
  field: string,
  headerCheckboxSelection?: boolean,
  headerCheckboxSelectionFilteredOnly?: boolean,
  checkboxSelection?: boolean,
  pinned?: string,
  cellRenderer?: string
}
