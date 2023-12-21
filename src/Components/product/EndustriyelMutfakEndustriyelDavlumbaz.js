/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

function EndustriyelMutfakEndustriyelDavlumbaz() {
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
            <h2 className="page-header__title">{t("ENDÜSTRİYEL DAVLUMBAZ")}</h2>
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
                    src="assets/images/endustriyelmutfak/endustriyel-davlumbaz.webp"
                    alt="ENDÜSTRİYEL DAVLUMBAZ"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/endustriyelmutfak/endustriyel-davlumbaz.webp"
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
                      {t("ENDÜSTRİYEL DAVLUMBAZ")}
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
                          "Endüstriyel davlumbazlar, mutfakta oluşan kirleticileri emmek ve dışarı atmak için güçlü emiş sistemlerine sahiptir. Bu, ortamın temiz kalmasını sağlar ve çalışanların sağlığını korur."
                        )}
                        <br />
                        {t(
                          "Genellikle yağ ve diğer partikülleri filtrelemek için alüminyum veya paslanmaz çelik filtre sistemleri bulunur. Bu filtreler, yağın davlumbazın içine gitmesini önleyerek yangın riskini azaltır."
                        )}
                        <br />
                        {t(
                          "Endüstriyel davlumbazlar, mutfak tasarımına ve ihtiyaca bağlı olarak ayakta duran modeller veya tavana asılı modeller olarak tasarlanabilir."
                        )}
                        <br />
                        {t(
                          "Bazı endüstriyel davlumbazlar, emilen havayı temizleyerek ve kokuları gidererek geri döndürme özelliğine sahiptir. Bu, enerji tasarrufu sağlar."
                        )}
                        <br />
                        {t(
                          "Endüstriyel mutfaklarda yangın güvenliği ön planda olduğu için, davlumbazlar genellikle yangın söndürme sistemleriyle entegre edilebilir."
                        )}
                        <br />
                        {t(
                          "Endüstriyel davlumbazlar, restoranlar, oteller, hastaneler, endüstriyel mutfaklar ve diğer ticari mekanlarda geniş bir kullanım alanına sahiptir. Bu cihazlar, mutfak çalışma ortamlarını temiz ve güvenli tutarak işletmelerin hijyen standartlarına uymasına yardımcı olur."
                        )}
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

export default EndustriyelMutfakEndustriyelDavlumbaz;
