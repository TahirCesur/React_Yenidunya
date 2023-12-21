/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

function EndustriyelMutfakPaslanmazTezgah() {
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
            <h2 className="page-header__title">{t("PASLANMAZ TEZGAH")}</h2>
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
                    src="assets/images/endustriyelmutfak/paslanmaz-tezgah.webp"
                    alt="PASLANMAZ TEZGAH"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/endustriyelmutfak/paslanmaz-tezgah.webp"
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
                      {t("PASLANMAZ TEZGAH")}
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
                        {t(
                          "Paslanmaz çalışma tezgahları işyerlerinizin modern ve hijnenik olması bakımından büyük önem taşımaktadırlar."
                        )}
                        <br />
                        {t(
                          "Paslanmaz çelikten üretilen ürünlerin temizliği gayet kolaydır."
                        )}
                        <br />
                        {t(
                          "Endüstriyel mutfak tezgahları uzun ömürlü ve dayanıklıdır."
                        )}
                        <br />
                        {t(
                          "Mutfaklarda kullanılmak üzere çalışma tezgahı, taban raflı tezgah , ara raflı tezgah ,dolaplı çalışma tezgahı, hazırlık tezgahı, bulaşıkhane tezgahları, yıkama tezgahları, evyeli tezgahlar, sıcak servis tezgahları, benmari, istif rafı, taşıma arabası ve davlumbaz gibi birçok ürünü istediğniz ölçüde ve ebatta imal etmekteyiz."
                        )}
                        <br />
                        {t("Paslanmaz tezgah imalatımız tamamen kendi üretimimiz olup, öncelikli 304 kalite paslanmaz çelikten veya müşterilerimizin isteği üzerine 430 kalite paslanmaz çelikten yapılmaktadır.")}
                        <br />
                        {t("Endüstriyel mutfakta kullanılmak üzere üretilen tezgahlarımızın standart sac kalınlıkları, üst tabla 1.20mm, alt tabla 1.00mm ve yanlar 0.80mm kalınlığında paslanmazdan üretilmektedir.")}
                        <br />
                        {t("İsteğiniz üzere özel ölçülü tezgahlar, tasarım ve projeler hazırlanmakta ve üretilmektedir.")}
                        
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

export default EndustriyelMutfakPaslanmazTezgah;
