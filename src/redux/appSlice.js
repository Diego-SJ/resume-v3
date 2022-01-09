import axios from 'axios';
import emailjs from 'emailjs-com';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } from 'src/constants/secrets';
import { MEDIUM_API } from 'src/constants/apis';
import { LAN_EN, LAN_ES } from 'src/constants/strings';
import { createSlice } from '@reduxjs/toolkit';
import { RESPONSE } from 'src/constants/http';

const initialState = {
  showMenu: false,
  language: LAN_EN,
  histories: [],
  fetching: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setFetching: (state, action) => {
      state.fetching = action.payload;
    },
    changeMenuVisibility: (state) => {
      state.showMenu = !state.showMenu;
    },
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
    setHistories: (state, action) => {
      state.histories = action.payload;
    },
  },
});

export const { setFetching, changeLanguage, changeMenuVisibility, setHistories } = appSlice.actions;
export default appSlice.reducer;

export const switchLanguageAction = () => (dispatch, getState) => {
  let currentLanguage = getState().app.language;
  currentLanguage = currentLanguage === LAN_EN ? LAN_ES : LAN_EN;
  dispatch(changeLanguage(currentLanguage));
};

export const handleMenuVisibility =
  (show = null) =>
  (dispatch, getState) => {
    const { showMenu } = getState().app;
    let payload = show !== null ? show : !showMenu;
    dispatch(changeMenuVisibility(payload));
  };

export const fetchMediumHistories = () => async (dispatch) => {
  try {
    dispatch(setFetching(true));
    const result = (await axios.get(MEDIUM_API)).data;
    const histories = result.items.map((history) => ({
      title: history.title,
      date: history.pubDate,
      link: history.link,
      thumbnail: history.thumbnail,
      content: history.content,
      tags: history.categories,
    }));

    dispatch(setHistories(histories));
    dispatch(setFetching(false));
  } catch (error) {
    dispatch(setFetching(false));
  }
};

export const sendUserForm = async (dataForm) => {
  try {
    const result = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, dataForm, EMAILJS_USER_ID);

    if (result.text === RESPONSE.OK) return RESPONSE.SUCCESS;
    else return RESPONSE.WARNING;
  } catch (error) {
    return RESPONSE.ERROR;
  }
};
