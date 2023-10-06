import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
    const [newsCategory, setNewsCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setNewsCategories(data))
    }, [])
    return (
        <div className=" space-y-4">
            <h1 className=" text-2xl font-bold">All Categories</h1>
            {
                newsCategory.map(category => <Link className="block ml-4 text-lg font-semibold " key={category.id} to={`/category/${category.id}`} >{category.name}</Link>)
            }
        </div>
    );
};

export default LeftNav;