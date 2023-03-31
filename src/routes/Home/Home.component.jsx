import React from "react";
import Directory from '../../components/directory/directory.component'
import Category from "../../helper/categories";
const Home = () => {
    return (
        <>
            <Directory categories = {Category}/>
        </>
    )
}

export default Home;