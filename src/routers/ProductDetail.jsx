import { useOutletContext, Navigate, useParams } from "react-router-dom";
import { getProductDetail } from "../api";
import { useEffect, useState } from "react";
import styles from "./ProductDetail.module.css";

export default function ProductDetail() {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { authenticate } = useOutletContext();
  const { id } = useParams();

  useEffect(() => {
    const getDetailData = async () => {
      const data = await getProductDetail(id);
      setProduct(data);
      setIsLoading(false); // ✅ 로딩 끝 표시
    };
    getDetailData();
  }, []);

  if (!authenticate) {
    return <Navigate to="/login" replace />;
  }

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {product.detailImg.map((Img) => (
          <img src={Img} />
        ))}
      </div>
      <div className={styles.info}>
        <h2>{product.title}</h2>
        <p className={styles.price}>{product.price} KRW</p>
        <div className={styles.size}>
          <h4>사이즈 선택</h4>
          <div>
            {product.size.map((size) => (
              <p>{size}</p>
            ))}
          </div>
        </div>
        <div className={styles.btns}>
          <button>장바구니</button>
          <button>바로구매</button>
        </div>
      </div>
    </div>
  );
}
