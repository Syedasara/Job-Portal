import {
    VIEW_ALL_COMPANIES,
    VIEW_ALL_COMPANIES_FAILURE,
    VIEW_ALL_COMPANIES_SUCCESS,
    VIEW_ALL_STUDENTS,
    VIEW_ALL_STUDENTS_FAILURE,
    VIEW_ALL_STUDENTS_SUCCESS,
    VIEW_ALL_PROJECTS,
    VIEW_ALL_PROJECTS_FAILURE,
    VIEW_ALL_PROJECTS_SUCCESS,
  } from "../constants.js";

  const initialState = {
    allCompanies: {},
    allStudents: {},
    allProjects: {},
    isLoading: false,
    isError: false,
    error: {}
  };

  export default function viewDataReducer(state = initialState, action) {
    switch (action.type) {
      case VIEW_ALL_COMPANIES:
        return {
          ...state,
          isLoading: true,
          error : {}
        }

      case VIEW_ALL_COMPANIES_SUCCESS:
        return {
          ...state,
          allCompanies: action.payload,
          isLoading: false,
          isError: false,
          error : {}
        };

      case VIEW_ALL_COMPANIES_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
          error: action.error
        };

        case VIEW_ALL_STUDENTS:
        return {
          ...state,
          isLoading: true,
          error : {}
        }

      case VIEW_ALL_STUDENTS_SUCCESS:
        return {
          ...state,
          allStudents: action.payload,
          isLoading: false,
          isError: false,
          error : {}
        };

      case VIEW_ALL_STUDENTS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
          error: action.error
        };

        case VIEW_ALL_PROJECTS:
          return {
            ...state,
            isLoading: true,
            error : {}
          }
  
        case VIEW_ALL_PROJECTS_SUCCESS:
          return {
            ...state,
            allProjects: action.payload,
            isLoading: false,
            isError: false,
            error : {}
          };
  
        case VIEW_ALL_PROJECTS_FAILURE:
          return {
            ...state,
            isLoading: false,
            isError: true,
            error: action.error
          };

      default:
        return state;
    }
  }