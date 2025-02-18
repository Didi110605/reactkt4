import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Stars from "../components/Stars";

function ProductListPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="content">
            <ol className="productlist">
                {products.map(elem => 
                    <Link to={'/products/' + elem.id} key={elem.id}>
                        <li className="productitem">
                            <h2>{elem.title}</h2>
                            <img width={150} src={elem.image} alt={elem.title}/>
                            <p>Price: {elem.price}$</p>
                            {elem.rating && <Stars rating={elem.rating.rate} />}
                        </li>
                    </Link>
                )}
            </ol>
        </div>
    );
}

export default ProductListPage;