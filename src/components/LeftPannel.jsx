import React from 'react'
import Lbutton from './Lbutton'
import {VscAccount,VscFilter} from "react-icons/vsc";
import { BsCashStack, BsDatabase, BsEyedropper, BsNewspaper, BsReceipt,BsShop } from "react-icons/bs";



function leftPannel() {
  return (
    <div className='flex flex-col h-auto  w-40 max-w-40 bg-slate-100'>
        <label className = "text-xs font-bold text-slate-500 ml-1">Dashboards</label>
      <div>
        <Lbutton name = "Patients" icon = {<VscAccount />} />
        <Lbutton name = "HR" icon = {<BsDatabase />} />
        <Lbutton name = "Labs" icon = {<VscFilter />} />
        <Lbutton className="drop-shadow-lg shadow-black " name = "Pharma" icon = {<BsShop/>} />
      </div>
        <label className = "text-xs font-bold text-slate-500 ml-1">Processes</label>
        <Lbutton name = "Registration" icon = {<BsNewspaper />} />
        <Lbutton name = "Consultation" icon = {<BsReceipt />} />
        <Lbutton name = "Tests&Reports" icon = {<BsEyedropper />} />
        <Lbutton name = "Billing" icon = {<BsCashStack />} />
    </div>
  )
}

export default leftPannel;
