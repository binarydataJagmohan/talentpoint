import React, {useState, useEffect} from 'react'; 
import { useRouter } from "next/router";
import FrontendFirstLoadingPopup from "../components/Frontend/FirstLoadingPopup"

export default function FirstLoadingPopup() {
  return (
    <>
      <FrontendFirstLoadingPopup/>
    </>
  )
}
