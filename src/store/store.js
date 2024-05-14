import { createStore } from "redux";
import getSampleJdJSON from "../utils/jdData";

const batchSize = 12;

const dataSlice = (
  state = {
    itemsToShow: [],
    startIndex: 0,
    page: 1,
    filters: {
      minExp: [],
      companyName: [],
      location: [],
      remote: [],
      jobRole: [],
      minJdSalary: [],
    },
    filteredJobs: [],
    filtersApplied: false,
    dialogJob: {},
    isDialogOpen: false,
  },
  action
) => {
  if (action.type === "loadJobs") {
    const newIndex = state.startIndex + batchSize;
    return {
      ...state,
      itemsToShow: [
        ...state.itemsToShow,
        ...getSampleJdJSON.slice(state.startIndex, newIndex),
      ],
      startIndex: newIndex,
    };
  }
  if (action.type === "setPage") {
    return {
      ...state,
      page: state.page + 1,
    };
  }
  if (action.type === "handleFilterChange") {
    if (action.identifier == "minJdSalary" || action.identifier == "remote") {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.identifier]: action.selectedValue.value,
        },
      };
    } else {
      const temp = [];
      for (let i = 0; i < action.selectedValue.length; i++) {
        temp.push(action.selectedValue[i].value);
      }
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.identifier]: [...temp],
        },
      };
    }
  }
  if (action.type === "filtersApply") {
    const normalizeName = (name) => name.toLowerCase().replace(/\s/g, "");
    let filteredResults = [];
    const minExp = state.filters.minExp;
    const companyName = state.filters.companyName;
    const location = state.filters.location;
    const jobRole = state.filters.jobRole;
    const minJdSalary = state.filters.minJdSalary;
    const remote = state.filters.remote;
    // applying minimum experience filter
    filteredResults =
      minExp.length !== 0
        ? state.itemsToShow.filter((item) => minExp.includes(item.minExp))
        : [...state.itemsToShow];

    // applying company name filter

    filteredResults =
      companyName.length !== 0
        ? filteredResults.filter((item) => {
            const normalizedCompanyNames = companyName.map((name) =>
              normalizeName(name)
            );
            const itemCompanyName = normalizeName(item.companyName);

            return normalizedCompanyNames.includes(itemCompanyName);
          })
        : [...filteredResults];

    // location
    filteredResults =
      location.length !== 0
        ? filteredResults.filter((item) => location.includes(item.location))
        : [...filteredResults];

    // applying jobrole filters
    filteredResults =
      jobRole.length !== 0
        ? filteredResults.filter((item) => {
            const normalizedJobNames = jobRole.map((name) =>
              normalizeName(name)
            );
            const itemJobName = normalizeName(item.jobRole);

            return normalizedJobNames.includes(itemJobName);
          })
        : [...filteredResults];

    // applying minJdSalary filters
    filteredResults =
      minJdSalary > 0
        ? filteredResults.filter((item) => {
            return item.minJdSalary > minJdSalary;
          })
        : [...filteredResults];

    // applying remote/onsite filters

    filteredResults =
      remote.length !== 0
        ? remote == "remote"
          ? filteredResults.filter((item) => remote.includes(item.location))
          : remote == "onsite" &&
            filteredResults.filter((item) => !remote.includes(item.location))
        : [...filteredResults];

    return {
      ...state,
      filteredJobs: [...filteredResults],
      filtersApplied: true,
    };
  }

  if (action.type === "setDialog") {
    const currentDialog = state.itemsToShow.find(
      (item) => action.uid === item.jdUid
    );
    return {
      ...state,
      dialogJob: { ...currentDialog },
      isDialogOpen: true,
    };
  }
  if (action.type === "dialogReset") {
    return {
      ...state,
      dialogJob: {},
      isDialogOpen: false,
    };
  }

  return state;
};

const store = createStore(dataSlice);

export default store;
