import ReactPaginate from "react-paginate";

import classes from './pagination.module.css';

interface Props {
  pageCount: number;
  onPageChange: (e: any) => void;
}

const Pagination = ({ pageCount, onPageChange }: Props) => {
  return (
      <ReactPaginate
        containerClassName={classes.container}
        pageClassName={classes.page}
        activeClassName={classes.active}
        pageLinkClassName={classes.pageLink}
        previousLabel={pageCount > 0 && <div className={classes.changePage}>ᐸ</div>}
        nextLabel={pageCount > 0 && <div className={classes.changePage}>ᐳ</div>}
        pageCount={pageCount}
        onPageChange={onPageChange}
        disableInitialCallback
      />
  );
};

export { Pagination };