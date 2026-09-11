import Logo from "../assets/logo-text.png"
const Nav = () => {
    return (
        <nav className="bg-gray-50">
           <div className="flex justify-between container mx-auto">
            <img src={Logo} alt="" />
            <ul className="flex gap-3 items-center cursor-pointer">
                <li className="text-[#db2777] font-bold">Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="flex justify-between gap-2 items-center">
            <button className="cursor-pointer">Sign In</button>
            <button className="text-white bg-[#db2777] rounded-2xl px-2 py-1 cursor-pointer">Sign Up</button>
            </div>
           </div>
        </nav>
    );
}

export default Nav