import {Link} from "react-router-dom"


const Navbar = () => {
    return (
        <nav className="p-5 bg-[#f1f1f1]">
            <div className="container mx-auto">
                <Link to="/">
                    <h1 className="text-6xl font-light">💪🏻workouts</h1>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar