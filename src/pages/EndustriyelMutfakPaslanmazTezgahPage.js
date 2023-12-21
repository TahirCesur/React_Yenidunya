import React from "react";
import { useTranslation } from "react-i18next";
import ProductSimilarEndustriyelMutfak from "../Components/product/ProductSimilarEndustriyelMutfak";
import EndustriyelMutfakPaslanmazTezgah from "../Components/product/EndustriyelMutfakPaslanmazTezgah";

function EndustriyelMutfakPaslanmazTezgahPage() {
  const { t } = useTranslation();
  return (
    <>
      <EndustriyelMutfakPaslanmazTezgah />
      <ProductSimilarEndustriyelMutfak />
    </>
  );
}

export default EndustriyelMutfakPaslanmazTezgahPage;
