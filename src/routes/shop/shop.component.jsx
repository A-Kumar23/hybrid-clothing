import React, { Fragment, useContext } from "react";
import './shop.style.scss'
import ProductCard from "../../components/product-card/product-card.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";

import { CategoriesContext } from "../../contexts/categories.context";

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <div className="shop-container">

            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title]
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    )

                })
            }
        </div>
    )
}


export default Shop;