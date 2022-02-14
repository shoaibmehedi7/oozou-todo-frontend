import { toast } from "react-toastify";
import { authAxios } from "../../../utils/axiosWrapper";
import {apiEndPoint} from "../../../constants/endpoints";
import {
  addSubtaskError,
  addSubtaskRequest,
  addSubtaskSuccess,
  getAllSubtaskError,
  getAllSubtaskRequest,
  getAllSubtaskSuccess,
  updateSubtaskError,
  updateSubtaskRequest,
  updateSubtaskSuccess,
} from "../action/subtaskActions";

export function getAllSubtask(id) {
  return (dispatch) => {
    dispatch(getAllSubtaskRequest());
    authAxios
      .post(apiEndPoint.GET_SUBTASK_BY_TODO, {id: id})
      .then((response) => {
        dispatch(getAllSubtaskSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(getAllSubtaskError(error.message));
        toast.error(error.message);
      });
  };
}

export function createSubtask(data) {
  return (dispatch) => {
    dispatch(addSubtaskRequest());
    authAxios
      .post(apiEndPoint.CREATE_SUBTASK, data)
      .then((response) => {
        dispatch(addSubtaskSuccess(response.data.data));
        // toast.success("Successfully added");
      })
      .catch((error) => {
        dispatch(addSubtaskError(error.message));
        toast.error(error.message);
      });
  };
}

export function updateSubtask(data) {
  return (dispatch) => {
    dispatch(updateSubtaskRequest());
    authAxios
      .post(apiEndPoint.UPDATE_SUBTASK, data)
      .then((response) => {
        // toast.success("Updated successfully");
        dispatch(updateSubtaskSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(updateSubtaskError(error.message));
        toast.error(error.message);
      });
  };
}
