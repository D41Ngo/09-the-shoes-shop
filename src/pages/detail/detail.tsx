import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getProductById } from "src/services";
import { IIFE } from "src/utils";
import { IDetailAPI } from "./type";
import { ListCard } from "src/components/list-card";
import { convert } from "../home/convert";

function Detail() {
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
      <img
        style={{
          width: 500,
          height: 500,
        }}
        src={detail?.image}
      />
      {/* Card */}
      {/* Relate Product */}
      {detail?.relatedProducts?.length && (
        <ListCard data={convert(detail.relatedProducts)} />
      )}
    </div>
  );
}

export default Detail;
