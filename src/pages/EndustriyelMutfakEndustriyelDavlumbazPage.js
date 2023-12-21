import React from "react";
import { useTranslation } from "react-i18next";
import ProductSimilarEndustriyelMutfak from "../Components/product/ProductSimilarEndustriyelMutfak";
import EndustriyelMutfakEndustriyelDavlumbaz from "../Components/product/EndustriyelMutfakEndustriyelDavlumbaz";

function EndustriyelMutfakEndustriyelDavlumbazPage() {
  const { t } = useTranslation();
  return (
    <>
      <EndustriyelMutfakEndustriyelDavlumbaz />
      <ProductSimilarEndustriyelMutfak />
    </>
  );
}

export default EndustriyelMutfakEndustriyelDavlumbazPage;
