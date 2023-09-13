import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable(props) {
    // product table có nhiệm vụ render ra dữ liệu nên truyền product list qua props,
    // product list đc truyền từ trên filterableProductTable xuống
    const { productList } = props;
    // tương tự productLists = props.productList

    const lastCategory = null;
    // const rows = []; // đại diện có các row <ProductCategoryRow /> hoặc <ProductRow />

    const rows = productList.map((productItem) => {
        if (productItem.category !== lastCategory) {
            lastCategory = productItem.category;
            return (
                <>
                    <ProductCategoryRow />
                    <ProductRow />
                </>
            );
        }
        return <ProductRow />;
    });

    // productList.map((productItem) => {
    //     if (productItem.category !== lastCategory) {
    //         rows.push(<ProductCategoryRow />);
    //         rows.push(<ProductRow />);
    //     } else {
    //         rows.push(<ProductRow />);
    //     }
    //     lastCategory = productItem.category;
    // });
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}

export default ProductTable;
