import React from "react";
import { useTranslation } from "react-i18next";
import ProductSimilarEndustriyelMutfak from "../Components/product/ProductSimilarEndustriyelMutfak";
import EndustriyelMutfakYerOcagi from "../Components/product/EndustriyelMutfakYerOcagi";

function EndustriyelMutfakYerOcagiPage() {
  const { t } = useTranslation();
  return (
    <>
      <EndustriyelMutfakYerOcagi />
      <ProductSimilarEndustriyelMutfak />
    </>
  );
}

export default EndustriyelMutfakYerOcagiPage;
