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
  } from "../constants";

  class ViewDataActions {
      
    static viewAllCompanies(data) {
        return {
            type: VIEW_ALL_COMPANIES,
            payload: data
        };
    }
    
    static viewAllCompaniesSuccess(data) {
        return {
            type: VIEW_ALL_COMPANIES_SUCCESS,
            payload: data
        };
    }

    static viewAllCompaniesFailure(error) {
        return {
            type: VIEW_ALL_COMPANIES_FAILURE,
            error: error
        };
    }

    static viewAllStudents(data) {
        return {
            type: VIEW_ALL_STUDENTS,
            payload: data
        };
    }
    
    static viewAllStudentsSuccess(data) {
        return {
            type: VIEW_ALL_STUDENTS_SUCCESS,
            payload: data
        };
    }

    static viewAllStudentsFailure(error) {
        return {
            type: VIEW_ALL_STUDENTS_FAILURE,
            error: error
        };
    }

    static viewAllProjects(data) {
        return {
            type: VIEW_ALL_PROJECTS,
            payload: data
        };
    }
    
    static viewAllProjectsSuccess(data) {
        return {
            type: VIEW_ALL_PROJECTS_SUCCESS,
            payload: data
        };
    }

    static viewAllProjectsFailure(error) {
        return {
            type: VIEW_ALL_PROJECTS_FAILURE,
            error: error
        };
    }
  }

  export default ViewDataActions