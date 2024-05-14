import { Box } from "@mui/material";
import JobCard from "./JobCard.jsx";

import getSampleJdJSON from "../../utils/jdData.js";
export default function Jobs() {
  return (
    <Box className="container">
      {getSampleJdJSON.map((job) => (
        <JobCard key={job.jdUid} {...job} />
      ))}
    </Box>
  );
}
