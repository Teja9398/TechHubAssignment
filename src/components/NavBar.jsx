// import bell from './assets/bell.svg'
import { VscBell ,VscAccount, VscSearch} from "react-icons/vsc";

function NavBar() {

  return (
    <>
    <nav className='bg-slate-700 max-h-20 py-5 flex justify-end'>

      <div className='flex w-[70vw] justify-around p-0'>
        
        <span className="flex items-start">

          <select name="" className='h-12 rounded-l-full px-3 outline-none bg-gray-300 text-xs '>
            <option className="h-12 rounded-l-full px-3 outline-none bg-gray-300 text-sm" value="Patient">Patients</option>
            <option className="h-12 rounded-l-full px-3 outline-none bg-gray-300 text-sm" value="Doctor">HR</option>
            <option className="h-12 rounded-l-full px-3 outline-none bg-gray-300 text-sm" value="Doctor">Labs</option>
            <option className="h-12 rounded-l-full px-3 outline-none bg-gray-300 text-sm" value="Doctor">Pharma</option>
          </select>

          <form action="" className='flex '>
            <input type="text" placeholder="Search" className='h-12  w-64 text-xs px-5 outline-none' />
            <button type="submit" className="text-gray-300 bg-white text-xl rounded-r-full pr-4"><VscSearch/></button>
          </form>

          <input type="button" value="+ Add New" className="bg-green-600 ml-4 h-12  py-[2px] px-4 rounded-full text-xs hover:bg-green-700 transition text-white "/>
        </span>
        
        <span className='ml-auto px-5 pr-8 border-white grid grid-flow-col gap-6 mr-5'>
          <span className='mt-[6px] rounded-full bg-gray-500 hover:bg-gray-600 py-[8px] p-2 '><VscBell className="text-xl text-white  "/></span>
          <img src="../src/assets/DP.jpeg" className="h-10 rounded-full mt-[6px] bg-gray-500 hover:bg-gray-600 p-1 " />
        </span>


      </div>
    </nav>
    </>
  )
}

export default NavBar
