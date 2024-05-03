import React from 'react'
import { BsArrow90DegRight,BsArrowDown } from 'react-icons/bs'

function Consultants() {
  return (
    <div className="flex flex-col justify-between bg-white w-[85vw] px-12 py-6 mt-8 rounded-md">

      <div className='flex justify-between'>
        <label className='text-gray-700 font-semibold text-lg'>Consultants</label>
        <span className='flex w-20 space-x-4'>
            <i className='p-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full text-xl'><BsArrow90DegRight/> </i>
            <i className='p-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full text-xl'><BsArrowDown/> </i>
        </span>
      </div>

        <table className='border-2 border-[gray-200] text-gray-600 mt-4'>
            <tr className='border-2 border-gray-200 '>
                <th className='p-2 border-2'>Name</th>
                <th className='p-2 border-2'>PATIENT COUNT</th>
                <th className='p-2 border-2'>LABS</th>
                <th className='p-2 border-2'>DIET PLANS</th>
            </tr>
            
            <tr className='border-2 border-gray-200 '>
                <td className='p-2 border-2 text-center'>John Smith</td>
                <td className='p-2 border-2 text-center'>12</td>
                <td className='p-2 border-2 text-center'>3</td>
                <td className='p-2 border-2 text-center'>6</td>
            </tr>
            <tr className='border-2 border-gray-200 '>
                <td className='p-2 border-2 text-center'>Jane Doe</td>
                <td className='p-2 border-2 text-center'>8</td>
                <td className='p-2 border-2 text-center'>2</td>
                <td className='p-2 border-2 text-center'>4</td>
            </tr>
            <tr className='border-2 border-gray-200 '>
                <td className='p-2 border-2 text-center'>Mark Johnson</td>
                <td className='p-2 border-2 text-center'>6</td>
                <td className='p-2 border-2 text-center'>1</td>
                <td className='p-2 border-2 text-center'>2</td>
            </tr>
            <tr className='border-2 border-gray-200 '>
                <td className='p-2 border-2 text-center'>Mary Lee</td>
                <td className='p-2 border-2 text-center'>10</td>
                <td className='p-2 border-2 text-center'>10</td>
                <td className='p-2 border-2 text-center'>8</td>
            </tr>
            <tr className='border-2 border-gray-200 '>
                <td className='p-2 border-2 text-center'>David Chen</td>
                <td className='p-2 border-2 text-center'>14</td>
                <td className='p-2 border-2 text-center'>5</td>
                <td className='p-2 border-2 text-center'>9</td>
            </tr>
            <tr className='border-2 border-gray-200 '>
                <td className='p-2 border-2 text-center'>Emily Wang</td>
                <td className='p-2 border-2 text-center'>5</td>
                <td className='p-2 border-2 text-center'>2</td>
                <td className='p-2 border-2 text-center'>3</td>
            </tr>
        </table>

    </div>
  )
}

export default Consultants
