import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setPageSettings } from "./store/slices/settingsSlice";

import SettingsService from "./services/SettingsService";
import {Helmet} from 'react-helmet'
import PageNotFound from "./pages/NotFoundPage/PageNotFound";
import OverlayLoaderLoad from "./components/OverlayLoader/OverlayLoaderLoad";
import { toast } from "react-toastify";


import Router from "./routes/Router";
import PrivateRoute from "./utils/PrivateRoute";

import OverlayLoader from "./components/OverlayLoader/OverlayLoader";
import { ScrollToTop } from "./components";



import "./App.css";

function App() {
  const settings = useSelector((state: any) => state.settings.setting);
  const dispatch = useDispatch();

  const handleSetPageSettings = async() => {
  const response =     await SettingsService.getById(1)
  .then((res)=> dispatch(setPageSettings(res.data.data)))
  .catch((err) => toast.warn(err.response.data.message))
   
  };

  useEffect(() => {

    handleSetPageSettings() 
   
  }, [])
  


  if (!settings) return <div>Şeyhmus will be modify here .. :)</div>;


  if(!settings) return <OverlayLoaderLoad/>
  return (
    <>
     <Helmet>
      <title>{settings.title}</title>
      <link rel="icon" href={ settings.tabLogo}  />
      <link rel="icon" href={ settings.tabLogo}  />
    </Helmet> 

      <main>
        <ScrollToTop />
        <OverlayLoader />
        <Router />
      </main>
    </>
  );
}

export default App;
