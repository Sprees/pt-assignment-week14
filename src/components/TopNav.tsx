import { BoxIcon, HomeIcon } from '../icons'

function TopNav() {
    return (
        <div className='h-20 flex items-center bg-gray-100'>
            <div className='relative ml-5'>
                <div>
                    <HomeIcon className='size-18' fill='#343C54' />
                </div>
                <div className='absolute top-7.5 left-13.5'>
                    <BoxIcon className='size-10' fill='#343C54' />
                </div>
            </div>
            <h1 className='ml-6 font-bold text-3xl text-[#343C54]'>Minnick Moving</h1>
        </div>
    ) 
}

export default TopNav