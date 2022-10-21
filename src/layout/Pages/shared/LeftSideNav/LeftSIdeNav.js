import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSIdeNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h6>all category : {categories.length}</h6>
            {categories.map(category => <p key={category.id}>
                <Link to={`category/${category.id}`}>{category.name}</Link>
            </p>)}
        </div>
    );
};

export default LeftSIdeNav;