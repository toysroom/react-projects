const BottomIcon = ({icon,title}) => {
  return ( 
    <div className="flex  items-center hover:bg-gray-100 py-4 px-5 rounded-md cursor-pointer">
      {icon}
      <p className="text-sm font-semibold text-gray-400">{title}</p>
    </div>
   );
}
 
export default BottomIcon;