import { Box } from "@mui/material";
import JobCard from "./JobCard.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Jobs() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.itemsToShow);
  const page = useSelector((state) => state.page);
  const filteredJobs = useSelector((state) => state.filteredJobs);
  const filtersApplied = useSelector((state) => state.filtersApplied);

  useEffect(() => {
    dispatch({ type: "loadJobs" });
    dispatch({ type: "filtersApply" });
  }, [page]);
  return (
    <Box className="container">
      {filtersApplied ? (
        filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.jdUid} {...job} />)
        ) : (
          <h1 className="notFoundText">
            No result for the applied filters. Please change your filters.
          </h1>
        )
      ) : (
        jobs.map((job) => <JobCard key={job.jdUid} {...job} />)
      )}
    </Box>
  );
}
