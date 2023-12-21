/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

function EndustriyelMutfakKuzineFirin() {
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
              {t("KUZİNE FIRIN")}
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
                    src="assets/images/endustriyelmutfak/kuzine-firin.webp"
                    alt="KUZİNE FIRIN"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/endustriyelmutfak/kuzine-firin.webp"
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
                      {t("KUZİNE FIRIN")}
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
                        {t("Üst ocaklar 2,4 veya 6 brülörlüdür. Fırın bölümü opsiyonel olarak elektrikli statik fırın veya gazlı statik fırın olarak tercih edilebilir.")}
                        <br />
                        {t("Gazlı fırınlarda piezo çakmaklı ateşleme mevcuttur.")}
                        <br />
                        {t("Gazlı açık ocaklar ve gazlı fırınlarda emniyet tertibatlı gaz muslukları ve alev denetleme için termokupul kullanılmaktadır.")}
                        <br />
                        {t(
                          "Tüm kuzine ve set üstü ocaklarda pres baskı yöntemi ile özel kalıplar kullanılarak üretilmiş 2 mm kalınlığında monoblok üst tablalar mevcuttur. Üst tabladaki yuvarlatılmış köşeler dayanıklılığı arttırmakta ve temizlik kolaylığı sağlamaktadır."
                        )}
                        <br />
                        {t("Özel tasarlanmış pirinç malzemeden brülörler, yüksek güç, yüksek yanma verimi ve düşük gaz emisyon değerlerine sahiptir.")}
                        <br />
                        {t("Brülörlerdeki pilot alev sistemi sayesinde cihazları hızlı ve kolay kullanma imkanı sağlanmıştır.")}
                        <br />
                        {t("Termostatik gaz valfi ile gazlı fırının iç sıcaklığı 100-300 °C arasında, elektrikli fırınlarda ise termostat ile elektrikli fırının iç sıcaklığı 50-300 °C arasında kontrol edilebilmektedir.")}
                        <br />
                        {t(
                          "Fırın içi AISI 430 paslanmaz çelikten üretilmiştir. Fırın içinde çıkarılabilir krom kaplı kızaklar 3 farklı fırın raf seviyesinde pişirmeye olanak sağlamaktadır."
                        )}
                        <br />
                        {t("Paslanmaz çelik mikro delikli fırın brülörü maksimum verim sağlamakta ve fırın sıcaklığını hızlı bir şekilde arttırmaktadır.")}
      

                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Teknik Özellikler")} :
                        </li>
                        {t("Tip: Gazlı")}
                        <br />
                        {t("En (mm): 800")}
                        <br />
                        {t("Boy (mm): 900")}
                        <br />
                        {t("Yükseklik (mm): 850")}
                        <br />
                        {t("Gaz Gücü: LPG (Kw) 40")}
                        <br />
                        {t("Gaz Tipi: Doğal Gaz")}
                        <br />
                        {t("Gaz Tipi: LPG")}
                        <br />
                        {t("Gaz Tüketimi LPG (Kg/H): 3,1200")}
                        <br />
                        {t("Gaz Tüketimi LPG (m3/H): 4,2400")}
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

export default EndustriyelMutfakKuzineFirin;
