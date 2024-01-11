import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/Pagination";
import { RootState, useAppDispatch } from "../store";
import { changePage } from "../features/allJobs/allJobSlice";

const PaginationContainer = () => {
  const { numberOfPages, page } = useSelector(
    (state: RootState) => state.allJob
  );
  const dispatch = useAppDispatch();
  console.log(numberOfPages);
  const pageArray = Array.from({ length: numberOfPages }, (_, item) => {
    return item + 1;
  });
  //   console.log(page);

  const showPage = (pageNum: number) => {
    dispatch(changePage({ page: pageNum }));
  };

  const prev = () => {
    let num: number;
    if (page === 1) {
      num = numberOfPages;
    } else {
      num = page - 1;
    }
    dispatch(changePage({ page: num }));
  };
  const next = () => {
    let num: number;
    if (page === numberOfPages) {
      num = 1;
    } else {
      num = page + 1;
    }
    dispatch(changePage({ page: num }));
  };
  return (
    <Wrapper>
      <button className="prev" onClick={prev}>
        <i className="fa-solid fa-angles-left"></i> Prev
      </button>
      <div>
        {pageArray.map((item) => {
          return (
            <button
              className={` pagBtn ${item === page && "active"}`}
              onClick={() => {
                dispatch(changePage({ page: item }));
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
      <button className="next" onClick={next}>
        Next <i className="fa-solid fa-angles-right"></i>
      </button>
    </Wrapper>
  );
};

export default PaginationContainer;
