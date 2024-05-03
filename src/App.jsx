
import NavBar from './components/NavBar.jsx'
import LeftPannel from './components/LeftPannel.jsx'
import Palette from './components/Palette.jsx'
import './App.css'
import { BsBarChartSteps, BsPeople, BsPeopleFill,BsCash, BsPersonVcardFill } from 'react-icons/bs'
import Consultants from './components/Consultants.jsx'

function App() {

  return (
    <>
    <NavBar/> 
    <div className='flex'>
    <LeftPannel/>  
      <div className='flex flex-col items-center justify-start mx-auto'>

        <div className='w-[85vw] ml bg-white h-12  mx-8 my-4  mb-2 rounded-md py-2'>
          <span className='flex justify-between  text-green-700 border-b-2 border-green-700 w-[120px] pb-[12px] ml-2'><BsPeople className='text-2xl font-light'/>Consultants</span>
        </div>
        
         
        <div className=' flex w-[85vw] ml bg-white h-12  mx-8 my-1 rounded-md py-2'>
          <span className='bg-green-700 h-12   text-white rounded-l-md py-2 px-3 mt-[-8px] z-1'>Filters </span>
          <div className="h-4 w-4 rotate-45 bg-green-700 my-auto -ml-2 -z-0"></div>
          <select className="border-2  ml-8 text-gray-600 font-medium text-sm rounded-full px-4 h-[38px] outline-none "name="Select Range" id="">
            <option >Select Range</option>
            <option >1-25</option>
            <option >26-50</option>
            <option >50-100</option>
            <option >100+</option>
          </select>
          <span className="h-12 w-[250px] ml-10 flex justify-between items-center ">
            <input className='w-5 h-5 accent-green-700' type="radio" name="type" id="Summary" />
            <label className='text-gray-600 font-normal' htmlFor="Summary">Summary</label>
            <input className='w-5 h-5 accent-green-700' type="radio" name="type" id = "branchwise"/>
            <label className='text-gray-600 font-normal' htmlFor="branchwise">BranchWise</label>
          </span>
        </div>

        <div className='mt-2 w-[85vw] flex justify-between'>
        <Palette code ="#e3d6be" icon={<BsPeopleFill/>} title="Consultant Count" numerator="90" denominator ="900"/>      
        <Palette code ="#cacfe5" icon = {<BsBarChartSteps/>} title="Consultations " numerator="11" denominator ="25"/>      
        <Palette code ="#ade2c1" icon={<BsCash/>}title="Labs" numerator="25" denominator ="560"/>      
        <Palette code ="#ddd1e6" icon={<BsPersonVcardFill/>}title="Diet Plans" numerator="25" denominator ="250"/>      
        </div>
        
        <Consultants/>
      </div>
    </div> 
    </>
  )
}

export default App

