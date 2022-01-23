import { PhotographIcon, PlayIcon, CalendarIcon, DocumentTextIcon } from '@heroicons/react/solid'
const HeaderOption = () => {
  return ( 
    <div className='flex mt-6 mb-4 px-3 justify-between'>
      {/* Icone Header Option */}
      <div className='flex items-center'>
      <PhotographIcon  className='w-6 mr-2 text-cyan-600'/>
      <p className='text-gray-400 font-semibold'>Foto</p>
      </div>
      <div className='flex items-center'>
      <PlayIcon className='w-6 mr-2 text-lime-500'/>
      <p className='text-gray-400 font-semibold '>Video</p>
      </div>
      <div className='flex items-center'>
      <CalendarIcon className='w-6 mr-2 text-orange-500'/>
      <p className='text-gray-400 font-semibold'>Evento</p>
      </div>
      <div className='flex items-center'>
      <DocumentTextIcon className='w-6 mr-2 text-red-300'/>
      <p className='text-gray-400 font-semibold'>Scrivi un articolo</p>
      </div>
    </div>
   );
}
 
export default HeaderOption;