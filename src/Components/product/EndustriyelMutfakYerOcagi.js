/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

function EndustriyelMutfakYerOcagi() {
  const { t } = useTranslation();

  return (
    <>
      <SRLWrapper>
        <section className="page-header">
          <div
            className="cta-two__bg"
            style={{
              backgroundImage: "url(assets/images/shapes/footer-bg-1.webp)",
            }}
          ></div>

          <div className="container">
            <ul className="page-header__breadcrumb list-unstyled">
              <li>
                <a href="index.html">{t("Anasayfa")}</a>
              </li>
              <li>
                <span>{t("ÜRÜNLERİMİZ")}</span>
              </li>
            </ul>
            <h2 className="page-header__title">
              {t("YER OCAĞI")}
            </h2>
          </div>
        </section>
        <section className="product">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-xl-6 wow fadeInLeft"
                data-wow-delay="200ms"
              >
                <div className="product-details__img">
                  <img
                    src="assets/images/endustriyelmutfak/yer-ocagi.webp"
                    alt="YER OCAĞI"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/endustriyelmutfak/yer-ocagi.webp"
                    ></a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-xl-6 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="product-details__content">
                  <div className="product-details__top">
                    <h3 className="product-details__title">
                      {t("YER OCAĞI")}
                      <span className="product-details__price"></span>
                    </h3>
                  </div>
                  <div className="product-details__review">
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <div className="product-details__divider"></div>
                  <div className="product-details__excerpt">
                    <p className="list-unstyled product-details__description__lists">
                      <ul className="list-unstyled product-details__description__lists">
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Genel Özellikler")} :
                        </li>
                        {t("Paslanmaz çelik gövdelidir...")}
                        <br />
                        {t("Sanayi tip dökümlüdür...")}
                        <br />
                        {t("Ocak brülörleri çift yanışlıdır...")}
                        <br />
                        {t(
                          "Emniyet ventilli valflidir..."
                        )}
                        <br />
                        {t("LPG veya doğalgaza uyumludur...")}

                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Teknik Özellikler")} :
                        </li>
                        {t("Tip: Gazlı")}
                        <br />
                        {t("En (mm): 600")}
                        <br />
                        {t("Boy (mm): 600")}
                        <br />
                        {t("Yükseklik (mm): 500")}
                        <br />
                        {t("Net Ağırlık (Kg): 28")}
                        <br />
                        {t("Hacim (m3): 0,1800")}
                        <br />
                        {t("Gaz Gücü: LPG (Kw) 14")}
                        <br />
                        {t("Doğal Gaz Nominal Basıncı: 20")}
                        <br />
                        {t("LPG Gaz Nominal Basıncı: 50")}
                        <br />
                        {t("Gaz Tüketimi LPG (Kg/H): 1,1000")}
                        <br />
                        {t("Gaz Tüketimi LPG (m3/H): 1,4800")}
                        <br />
                        {t("Doğal Gaz Gücü (Kw): 14")}

                      </ul>
                    </p>
                  </div>

                  <div className="product-details__socials">
                    <h4 className="product-details__socials__title">
                      {t("ARKADAŞLARINLA PAYLAŞ")}
                    </h4>
                    <a href="https://twitter.com/X">
                      <span className="fab fa-twitter"></span>
                    </a>
                    <a href="https://www.facebook.com/">
                      <span className="fab fa-facebook"></span>
                    </a>
                    <a href="https://www.pinterest.com/">
                      <span className="fab fa-pinterest-p"></span>
                    </a>
                    <a href="https://www.instagram.com/">
                      <span className="fab fa-instagram"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SRLWrapper>
    </>
  );
}

export default EndustriyelMutfakYerOcagi;
