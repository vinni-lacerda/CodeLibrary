import { Search } from 'lucide-react';
type FilterProps = {
    title: string,
    placeholder?: string
}
const Filter = ({ title, placeholder } : FilterProps) =>{
    return (
        <div className="flex flex-col items-center mt-10">
            <p className="font-bold text-[#00A2F7] text-xl">{title}</p>
            <p className="text-xs text-[#09A3FB]">Conteúdo exclusivo todos os dias</p>

            <div className="flex gap-2 items-center mt-2">
            <input
             type="text"
             placeholder={placeholder}
             className="border-[#F2F2F2] rounded-md text-sm w-[600px] h-[35px] px-2" 
             name="search" />
            <img src="./btn-buscar" alt="" />
            
            <div className='h-[35px] w-[30px] flex justify-center items-center rounded-sm bg-[#E1F4FF] cursor-pointer'>
                <Search size={16} className='text-[#00A2F7]'/>
            </div>
            
            </div>
        </div>
    )
}

export default Filter;