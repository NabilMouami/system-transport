
import {
    COL_DETAILS_REQUEST,
    COL_DETAILS_SUCCESS,
    COL_DETAILS_FAIL,
    RESET_BON,
    USER_LOGOUT,
    ITEM_BOIS_BON
} from "./type";


const detailsAcc = (item) => async (dispatch) => {
  try {
    dispatch({ type: COL_DETAILS_REQUEST, payload: item });
    dispatch({ type: COL_DETAILS_SUCCESS, payload: item });
  } catch (error) {
    dispatch({ type: COL_DETAILS_FAIL, payload: error.message });
  }
};
const ajouteEnBon = (item) => (dispatch) => {
 
    dispatch({ type: ITEM_BOIS_BON, payload: item });
 
};
const logout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT,payload: {} });
};
const resetBon = () => (dispatch) => {
  dispatch({ type: RESET_BON,payload: {} });
};

export { logout,detailsAcc,ajouteEnBon,resetBon };