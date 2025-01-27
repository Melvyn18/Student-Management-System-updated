import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import loginReducer from '../src/slices/loginSlice.js';
import userReducer from '../src/slices/userSlice.js';
import popupReducer from '../src/slices/popupSlice.js';
import deletedStudentReducer from './slices/deletedStudentSlice.js';
import deletedCourseReducer from './slices/deletedCourseSlice.js';
import deletedRegistrationReducer from './slices/deletedRegistrationSlice.js';
import deletedMarkReducer from './slices/deletedMarkSlice.js';
// import { CookiesProvider } from 'react-cookie';
// import { useCookies } from "react-cookie";

const store = configureStore({
  reducer: {
    isLoggedIn: loginReducer,
    username: userReducer,
    popup: popupReducer,
    deletedStudent: deletedStudentReducer,
    deletedCourse: deletedCourseReducer,
    deletedRegistration: deletedRegistrationReducer,
    deletedMark: deletedMarkReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <Provider store={store}>
        <App/>
      </Provider>    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
