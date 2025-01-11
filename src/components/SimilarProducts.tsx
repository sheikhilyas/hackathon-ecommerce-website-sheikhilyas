"use client";
import Image from "next/image";

export default function SimilarProducts() {
    const products = [
        {
            name: "Fresh Lime",
            price: "$38.00",
            oldPrice: "$45.00",
            image: "/image49.png",
        },
        {
            name: "Chocolate Muffin",
            price: "$28.00",
            oldPrice: null,
            image: "/image48.png",
        },
        {
            name: "Burger",
            price: "$21.00",
            oldPrice: null,
            image: "/image50.png",
        },
        {
            name: "Fresh Lime",
            price: "$38.00",
            oldPrice: "$45.00",
            image: "/image49.png",
        },
    ];

    return (
        <div className="similar-products">
            <h2 className="title">Similar Products</h2>
            <div className="products-grid">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="product-image"
                        />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">
                            <span className="current-price">{product.price}</span>
                            {product.oldPrice && (
                                <span className="old-price">{product.oldPrice}</span>
                            )}
                        </p>
                    </div>
                ))}
            </div>
            <div className="navigation">
                <button className="nav-btn">&#8592;</button>
                <button className="nav-btn">&#8594;</button>
            </div>
            <style jsx>{`
        .similar-products {
          text-align: center;
          padding: 20px;
        }
        .title {
          font-size: 24px;
          margin-bottom: 20px;
          text-transform: uppercase;
          color: #000;
        }
        .products-grid {
          display: flex;
          gap: 20px;
          justify-content: center;
        }
        .product-card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          width: 300px;
          text-align: left;
        }
        .product-image {
          width: 100%;
          object-fit: cover;
        }
        .product-name {
          font-size: 18px;
          margin: 10px;
        }
        .product-price {
          font-size: 16px;
          margin: 10px;
        }
        .current-price {
          color: orange;
          font-weight: bold;
        }
        .old-price {
          color: gray;
          text-decoration: line-through;
          margin-left: 10px;
        }
        .navigation {
          margin-top: 20px;
        }
        .nav-btn {
          background: orange;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 18px;
          cursor: pointer;
          border-radius: 4px;
        }
        .nav-btn:hover {
          background: #e69500;
        }
      `}</style>
        </div>
    );
}
