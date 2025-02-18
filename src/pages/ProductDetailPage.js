import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Stars from "../components/Stars";

function ProductDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + id)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    setTimeout(() => {
                        navigate('/products/');
                    }, 3000);
                }
            })
            .then(data => {
                setProduct(data);
            });
    }, []);

    return (
        <div className="content">
            <>
                <h1>{product.title}</h1>
                <img width={250} src={product.image} alt={product.title} />
                <p>{product.description}</p>
                <p>Price: {product.price}$</p>
                {product.rating && <Stars rating={product.rating.rate} />}
                <button onClick={() => navigate(-1)}>Назад</button>
            </>
        </div>
    );
}

export default ProductDetailPage;