export interface ISearchPagination {
  filmsPerPage: number;
  totalFilmsNumber: number;
  currentPage: number;
  changePage: Function;
}
