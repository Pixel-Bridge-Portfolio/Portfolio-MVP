const filters =[
    'all','backend','frontend','design','branding','social','ai','product'
];

export default function FilterBar({active,setActive}){
    return(
        <div className="flex flex-wrap gap-3 mb-12 items-center justify-center">
            {filters.map((item)=>(
                <button key={item} onClick={()=> setActive(item)}
                className={`px-5 py-2 border capitalize transition-all duration-30 rounded-full 
                    ${ active ===item
                        ?' text-yellow-300 bg-black': 'bg-white text-black' }`} >
                    {item}
                </button>
            ))}
        </div>
    )
}