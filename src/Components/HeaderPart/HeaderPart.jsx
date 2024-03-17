import './Header.css'
const HeaderPart = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">

                    <a className="btn btn-ghost text-xl">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-2">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="data:image/png;base64,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" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderPart;