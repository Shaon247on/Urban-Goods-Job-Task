import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useProvider from '../Hooks/useProvider';
import logo1 from '../assets/Urban-Dark.png';
import logo2 from '../assets/Urban-Light.png';
import useAuth from '../Hooks/useAuth';

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    const { theme, setTheme } = useProvider()
    const { logOut, user } = useAuth()
    const navLinks =
        <>
            <NavLink to='/' style={({ isActive }) => ({
                padding: '4px 10px',
                borderRadius: '5px',
                backgroundColor: isActive ? '#F5AB41' : 'transparent',
                fontWeight: isActive ? '700' : '400',
            })}><li className='text-sm md:text-base'>Home</li></NavLink>
            <NavLink to='/products' style={({ isActive }) => ({
                padding: '4px 10px',
                borderRadius: '5px',
                backgroundColor: isActive ? '#F5AB41' : 'transparent',
                fontWeight: isActive ? '700' : '400',
            })}><li className='text-sm md:text-base'>Products</li></NavLink>
        </>



    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log('user log out', result)
            })
            .catch(error => {
                console.error(error);
            })

    }
    const handleBlur = () => {
        setToggle(false)
        // console.log(toggle);
    }
    const handleFocus = () => {
        setToggle(true)
        // console.log(toggle);
    }

    const handleToggle = (e) => {
        // console.log(e.target.value);
        if (e.target.checked) {
            setTheme('black')
        } else {
            setTheme('cupcake')
        }
    }

    return (
        <React.Fragment>
            <div className='bg-[#f1e9e2] dark:bg-black py-1'>
                <h1 className='text-center text-sm'>Free Express Shipping on all orders with all duties included</h1>
            </div>
            <div className="navbar bg-base-100 px-1 md:px-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu z-30 menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                            {navLinks}
                            <div className="flex-none gap-2 relative inline-block md:hidden">

                                {/*------------------- Search Section -------------------*/}

                                {/* <div className="form-control">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        onBlur={handleBlur}
                                        onFocus={handleFocus}
                                        className=" w-full px-3 py-2 placeholder-[#F5AB41] focus:placeholder-transparent border-b-[#F5AB41] border-b focus:border-b-[#F5AB41] duration-150  focus:border-b-4 hover:border-b-[#F5AB41] hover:border-b-4 outline-none bg-transparent"
                                        onChange={(e) => handleSearch(e.target.value)}
                                    />
                                    <div className={`${toggle === false ? "hidden" : "block"} absolute bg-gray-200 w-48 px-5 py-2 rounded-lg z-30 top-10 md:top-16 left-0 md:left-20`}>
                                        {
                                            filteredWidgets.length > 0 ?
                                                filteredWidgets.map((category, index) => (
                                                    <div key={index}>
                                                        {category.Widgets.map(widget => (
                                                            <div key={widget.id}>
                                                                <h4>{widget.name}</h4>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))
                                                :
                                                <p>No widgets found</p>
                                        }
                                    </div>
                                </div> */}


                            </div>
                        </ul>
                    </div>
                    <div className='flex items-center gap-3 justify-center'>
                        <img src={`${theme === "black" ? logo1 : logo2}`} alt="" className='rounded-full w-12 md:w-16 h-12 md:h-16' />
                        <div>
                            <p className='font-bold text-lg md:text-xl -mb-1'><samp className='text-[#F5AB41] text-xl md:text-2xl'>URB</samp>AN</p>
                            <p className='font-bold text-lg md:text-xl -mt-1'>G<span className='text-[#F5AB41] text-lg md:text-xl'>OO</span>DS</p>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="gap-2 relative mr-0 md:mr-7 flex justify-center">
                        {/* ---------------- Mode changing button ---------------- */}

                        <label className="swap swap-rotate">

                            <input type="checkbox" className="theme-controller" onChange={handleToggle} />

                            {/* ----------------- sun icon ----------------------*/}
                            <svg
                                className="swap-off h-10 w-9 md:w-10 fill-current text-[#F5AB41]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* ----------------- moon icon -----------------*/}
                            <svg
                                className="swap-on h-10 w-9 md:w-10 fill-current text-[#F5AB41]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>

                        {/* ----------------- Search Input section-----------------  */}

                        {/* <div className="form-control hidden md:block">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                                className=" w-full px-3 py-2 placeholder-[#F5AB41] focus:placeholder-transparent border-b-[#F5AB41] border-b focus:border-b-[#F5AB41] duration-150  focus:border-b-4 hover:border-b-[#F5AB41] hover:border-b-4 outline-none bg-transparent"
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                            <div className={`${toggle === false ? "hidden" : "block"} absolute bg-gray-200 w-48 px-5 py-2 rounded-lg top-16 z-30 -left-20 md:left-0`}>
                                {
                                    filteredWidgets.length > 0 ?
                                        filteredWidgets.map((category, index) => (
                                            <div key={index}>
                                                {category.Widgets.map(widget => (
                                                    <div key={widget.id}>
                                                        <h4>{widget.name}</h4>
                                                    </div>
                                                ))}
                                            </div>
                                        ))
                                        :
                                        <p>No widgets found</p>
                                }
                            </div>
                        </div> */}
                    </div>

                    {/*----------------- Login Button ----------------- */}

                    {
                        user ? <>
                            <div className="animate__animated animate__backInRight animate__slow-[200ms]">
                                {

                                    user ?


                                        <>
                                            <div className="tooltip tooltip-top mr-4 relative z-30" data-tip={user?.displayName}>
                                                <img src={user.photoURL} alt="" className="avatar object-cover w-[38px] md:w-[44px] h-[38px] md:h-[44px] rounded-full" />
                                            </div>
                                        </> :
                                        <><samp></samp></>
                                }
                            </div>
                            <div className="animate__animated animate__fadeIn animate__slow-[300ms]">
                                {
                                    user ? <>
                                        <Link to='/login'><button onClick={handleSignOut} className="bg-[#419577] px-4 py-2 font-semibold text-lg flex items-center gap-2 justify-center rounded-lg">Sign Out</button></Link>

                                    </> :
                                        <span></span>

                                }
                            </div>
                        </> :
                            <Link to='/login'><button className="bg-[#419577] px-4 py-2 font-semibold text-lg flex items-center gap-2 justify-center rounded-lg">Login</button></Link>

                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default NavBar;