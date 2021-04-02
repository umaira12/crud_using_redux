import {
  getCategoryService,
  createCategoryService,
  deleteCategoryService,
  updateCategoryService,
} from "../../../services/category.service";
import {
  GET_CATEGORY,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  SHOW_LOADER,
  HIDE_LOADER,
  UPDATE_CATEGORY,
} from "../types";
export const getCategory = () => async (dispatch) => {
  try {
    dispatch({
      type: SHOW_LOADER,
    });
    const response = await getCategoryService();
    dispatch({
      type: GET_CATEGORY,
      payload: response.data,
    });
    dispatch({
      type: HIDE_LOADER,
    });
  } catch (error) {}
};



export const craeteCategory = (data, history) => async (dispatch) => {
  try {
    const response = await createCategoryService(data);
    dispatch({
      type: CREATE_CATEGORY,
      payload: response.data,
    });
    history.push("/posts");
  } catch (error) {}
};



export const updateCategory = (history, data, id) => async (dispatch) => {
  try {
    const response = await updateCategoryService(data, id);
    dispatch({
      type: UPDATE_CATEGORY,
      payload: response.data,
    });
    history.push("/posts");
  } catch (error) {}
};



export const deleteCategory = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SHOW_LOADER,
    });
    const response = await deleteCategoryService(id);
    dispatch({
      type: DELETE_CATEGORY,
      payload: id,
    });
    dispatch({
      type: HIDE_LOADER,
    });
  } catch (error) {}
};
