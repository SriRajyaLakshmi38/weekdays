import styles from "./Jobs.module.css";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";

export default function JobCard({
  jdUid,
  logoUrl,
  companyName,
  jobRole,
  location,
  jobDetailsFromCompany,
  minExp,
}) {
  const dispatch = useDispatch();

  const handleBtnClick = (uid) => {
    dispatch({ type: "setDialog", uid: uid });
  };
  return (
    <>
      <div className={styles.jobcard}>
        <div className={styles.companyDetails}>
          {logoUrl && (
            <figure className={styles.logoContainer}>
              <img src={logoUrl} alt={companyName} />
            </figure>
          )}

          <div className={styles.details}>
            {companyName && <p className={styles.companyName}>{companyName}</p>}

            {jobRole && <p className={styles.jobRole}>{jobRole}</p>}

            {location && <p className={styles.location}>{location}</p>}
          </div>
        </div>
        {minExp && (
          <div className={styles.experience}>
            minimum experience: <span>{minExp} Years</span>
          </div>
        )}

        {jobDetailsFromCompany && (
          <Box sx={{ p: 2 }} className={styles.description}>
            {jobDetailsFromCompany}
          </Box>
        )}
        <Button
          variant="contained"
          sx={{ mt: 2, mx: "auto" }}
          className={styles.viewBtn}
          onClick={() => {
            handleBtnClick(jdUid);
          }}
        >
          View Job
        </Button>
      </div>
    </>
  );
}
