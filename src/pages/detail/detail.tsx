import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListCard } from "src/components/list-card";
import { getProductById } from "src/services";
import { IIFE } from "src/utils";
import { convert } from "../home/convert";
import { IDetailAPI } from "./type";
// Lấy dữ liệu từ trên store
import { useDispatch } from "react-redux";
import { addToCart } from "src/redux/cartSlice";
function Detail() {
  const dispatch = useDispatch();

  const params = useParams<{ idDetail: string }>();

  const [detail, setDetail] = useState<IDetailAPI>();
  /**
   * Call api khi vào trang detail với id gì gì đó
   */

  useEffect(() => {
    IIFE(async () => {
      if (params.idDetail) {
        const resp = await getProductById(params.idDetail);
        setDetail(resp);
      }
    });
  }, [params.idDetail]);

  return (
    <div>
      <div>
        <img
          style={{
            width: 500,
            height: 500,
          }}
          src={detail?.image}
        />
        <button
          onClick={() => {
            const action = addToCart(detail);
            dispatch(action);
          }}
        >
          Add to cart
        </button>
      </div>
      {/* Card */}
      {/* Relate Product */}
      {detail?.relatedProducts?.length && (
        <ListCard products={convert(detail.relatedProducts)} />
      )}
    </div>
  );
}

export default Detail;
