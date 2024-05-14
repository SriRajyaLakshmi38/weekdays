import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Dialog.module.css";

const Dialog = ({ onReset }) => {
  const {
    jobDetailsFromCompany,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    location,
    minExp,
    maxExp,
    jobRole,
    companyName,
    logoUrl,
  } = useSelector((state) => state.dialogJob);
  const isDialogOpen = useSelector((state) => state.isDialogOpen);
  const dialog = useRef();
  const dispatch = useDispatch();

  const handleReset = () => {
    dialog.current.close();
    dispatch({ type: "dialogReset" });
  };

  if (isDialogOpen) {
    dialog.current.showModal();
  }

  return (
    <dialog
      onClose={handleReset}
      ref={dialog}
      open={isDialogOpen}
      className={styles.dialog}
    >
      {/* company logo and name details div */}
      <div className={styles.compnayDetails}>
        <figure className={styles.logoContainer}>
          <img src={logoUrl} alt={companyName} />
        </figure>
        <p className={styles.companyName}>{companyName}</p>
      </div>

      {/* job details division */}
      <div className={styles.jobDetails}>
        <div className={styles.subInfoContainer}>
          <div className={styles.jobRoleName}>
            {jobRole && <span>{jobRole}</span>}
          </div>

          {(minJdSalary || maxJdSalary) && (
            <div className={styles.infoContainer}>
              <p className={styles.subHeadings}>Salary</p>
              <p>
                {minJdSalary && (
                  <span>
                    {minJdSalary} {salaryCurrencyCode}
                  </span>
                )}
                {maxJdSalary && (
                  <span>
                    &nbsp;- {maxJdSalary}
                    {salaryCurrencyCode}
                  </span>
                )}
              </p>
            </div>
          )}

          {(minExp || maxExp) && (
            <div className={styles.infoContainer}>
              <p className={styles.subHeadings}>Experience</p>
              <p>
                {minExp && <span>{minExp} years </span>}
                {maxExp && <span>- {maxExp} years</span>}
              </p>
            </div>
          )}

          {location && (
            <div className={styles.infoContainer}>
              <p className={styles.subHeadings}>Location</p>
              <p>{location}</p>
            </div>
          )}
        </div>
        <div className={styles.roleInfoContainer}>
          <h1>About the Role</h1>
          <p>{jobDetailsFromCompany}</p>
          <div className={styles.btnContainer}>
            <a href="" className={styles.applyBtn}>
              <button>Easy Apply</button>
            </a>
            <a
              href="https://chromewebstore.google.com/detail/weekday%F0%9F%92%A5get-give-referra/figlaioomchnkcajbbkfdgjgfdkfgmdg"
              className={styles.referalBtn}
            >
              <button>Ask for Referal</button>
            </a>
          </div>
        </div>
      </div>

      {/* <form method="dialog" onSubmit={onReset}>
        <button onClick={handleReset} type="reset">
          Close
        </button>
      </form> */}
    </dialog>
  );
};

export default Dialog;
