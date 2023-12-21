import React from "react";
import { useTranslation } from "react-i18next";
import ProductSimilarEndustriyelMutfak from "../Components/product/ProductSimilarEndustriyelMutfak";
import EndustriyelMutfakKuzineFirin from "../Components/product/EndustriyelMutfakKuzineFirin";

function EndustriyelMutfakKuzineFirinPage() {
  const { t } = useTranslation();
  return (
    <>
      <EndustriyelMutfakKuzineFirin />
      <ProductSimilarEndustriyelMutfak />
    </>
  );
}

export default EndustriyelMutfakKuzineFirinPage;
