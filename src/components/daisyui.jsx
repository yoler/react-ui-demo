
import { HamburgerIcon, StarIcon, SunIcon } from '@chakra-ui/icons'

function DaisyUIDemo({setUI}) {
    return (
        <div>
           <div className='h-14 shadow-md flex items-center px-4' >
                <HamburgerIcon w={6} h={6}/>
                <div className='ml-4'>我的收藏 </div>
                <div className='flex-1 mx-8'>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="请输入搜索内容" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
                <div>
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                    </div>
                </div>
            </div>
            <div className='flex'>
            <div className='w-80 py-3'>
                    <div className='flex items-center cursor-pointer px-6 py-3 hover:bg-slate-200 rounded-r-full'> 
                        <StarIcon />
                        <div className='ml-2'>我的收藏</div>
                    </div>
                    <div className='flex items-center cursor-pointer px-6 py-3 hover:bg-slate-200 rounded-r-full'> 
                        <SunIcon />
                        <div className='ml-2'>发现</div>
                    </div>
                    <ul className="menu bg-base-200 w-56 rounded-box ml-4">
                        <li><a>Item 1</a></li>
                        <li>
                            <details open>
                            <summary>Parent</summary>
                            <ul>
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                                <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                                </li>
                            </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                        </ul>

                </div>
                <div className='flex-1 px-8 py-4'>
            <div className='flex justify-between'> 
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a>Home</a></li> 
                    <li><a>Documents</a></li> 
                    <li>Add Document</li>
                </ul>
                </div>
                        <div>
                            <details className="dropdown">
                                <summary className="m-1 btn">UI切换</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li onClick={() => setUI('chakra')}><a>chakra</a></li>
                                    <li onClick={() => setUI('next')}><a>next</a></li>
                                    <li onClick={() => setUI('mantine')}><a>mantine</a></li>
                                    <li onClick={() => setUI('daisy')}><a>daisy</a></li>
                                    <li onClick={() => setUI('shadcn')}><a>shadcn</a></li>
                                </ul>
                                </details>
                        </div>
                        
                    </div>
                    <div className='mt-4 flex'> 
                    <div className='w-64 h-96 mr-8'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
                            </div>
                            <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_1').showModal()}>Buy Now</button>
    </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
            </div>
            <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
            
        </div>
    )
  }
  
  export default DaisyUIDemo