'use client'

import style from './Medico.module.css'

export default function Home({ children }) {

    return (
        <div className="pt-12">
<nav 
className="fixed top-0 w-full bg-gray-200 border-gray-800 z-10"
// className="bg-white border-gray-200 
// dark:bg-gray-900"
>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center">
      <img src="/logo-dark.svg" className="h-8 mr-3" alt="Flowbite Logo" />
      <span 
className="self-center text-blue-600 text-2xl font-semibold whitespace-nowrap
    //   className="self-center text-2xl font-semibold whitespace-nowrap 
    //   dark:text-white"
      >Precio Justo</span>
  </a>
  <div className="flex items-center md:order-2">
  <button type="button" className="flex mr-3 text-sm bg-blue-600 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-7 h-7 rounded-full" src="/notification.svg" alt="user photo" />
      </button>
      <button type="button" className="flex mr-3 text-sm bg-blue-600 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="/user.svg" alt="user photo" />
    </button>




      

 
  </div>

  </div>
</nav>

          <main classNameName={style.main}>
                {children}
            </main>
</div>
    )
} 





// <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
// <div className="px-4 py-3">
//   <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
//   <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
// </div>
// <ul className="py-2" aria-labelledby="user-menu-button">
//   <li>
//     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
//   </li>
//   <li>
//     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
//   </li>
//   <li>
//     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
//   </li>
//   <li>
//     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
//   </li>
// </ul>
// </div>

// <div classNameName={style.container}>




{/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
  <li>
    <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
  </li>
  <li>
    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
  </li>
  <li>
    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
  </li>
  <li>
    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
  </li>
  <li>
    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
  </li>
</ul>
</div> */}








            
        //     <header classNameName={style.header}>
        //         <img src="/logo-white.svg" alt="" />
        //         <ul>
        //             <li> <img src="/notification.svg" alt="" /> </li>
        //             <li> <img src="/user.svg" alt="" /> </li>
        //         </ul>
        //     </header>
        //     <main classNameName={style.main}>
        //         {children}
        //     </main>
       
        // </div>