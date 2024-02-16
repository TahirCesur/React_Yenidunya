import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import AboutusPage from "../pages/AboutusPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import QuestionPage from "../pages/QuestionPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductSimilarPage from "../pages/ProductSimilarPage";
import ContactusPage from "../pages/ContactusPage";
import NiacinamideCiltBakimSerumuPage from "../pages/NiacinamideCiltBakimSerumuPage";
import GeceOnariciCiltbakimSerumuPage from "../pages/GeceOnariciCiltbakimSerumuPage";
import YaslanmaKarsitiCiltBakimSerumuPage from "../pages/YaslanmaKarsitiCiltBakimSerumuPage";
import AydinlaticiCiltBakimSerumuPage from "../pages/AydinlaticiCiltBakimSerumuPage";
import RetinolCiltyenileyiciBakimSerumuPage from "../pages/RetinolCiltyenileyiciBakimSerumuPage";
import HyaluronikAsitGozCevresiSerumuPage from "../pages/HyaluronikAsitGozCevresiSerumuPage";
import GinsengCiltYenileyiciSerumPage from "../pages/GinsengCiltYenileyiciSerumPage";
import PeelingMaskeCiltBakimSerumuPage from "../pages/PeelingMaskeCiltBakimSerumuPage";
import BeyazlaticiCiltBakimSerumuPage from "../pages/BeyazlaticiCiltBakimSerumuPage";
import GlutatyonBeyazlaticiCiltBakimSerumuPage from "../pages/GlutatyonBeyazlaticiCiltBakimSerumuPage";
import GlikolikAsitLekeKarsitiTonikPage from "../pages/GlikolikAsitLekeKarsitiTonikPage";
import LekeKarsitiCiltAydinlaticiAhaTonikPage from "../pages/LekeKarsitiCiltAydinlaticiAhaTonikPage";
import GozenekSiyahNoktaAkneKarsitiBhaTonikPage from "../pages/GozenekSiyahNoktaAkneKarsitiBhaTonikPage";
import KarmaYagliCiltYuzYikamaJeliPage from "../pages/KarmaYagliCiltYuzYikamaJeliPage";
import YagBazliYuzVucutTemizlemeJeliPage from "../pages/YagBazliYuzVucutTemizlemeJeliPage";
import LekeKarsitiCiltBeyazlaticiBakimKremiPage from "../pages/LekeKarsitiCiltBeyazlaticiBakimKremiPage";
import HyaluronikAsitNemYuzVucutCiltBakimKremiPage from "../pages/HyaluronikAsitNemYuzVucutCiltBakimKremiPage";
import BariyerOnariciCiltBakimKremiPage from "../pages/BariyerOnariciCiltBakimKremiPage";
import AzelaikCiltBakimSerumPage from "../pages/AzelaikCiltBakimSerumPage";
import AzelaikAsitCiltBakimKremiPage from "../pages/AzelaikAsitCiltBakimKremiPage";
import CicaCentellaCiltBakimKremiPage from "../pages/CicaCentellaCiltBakimKremiPage";
import NiacinamideLekeKarsitiGözenekSikilastiriciKremPage from "../pages/NiacinamideLekeKarsitiGözenekSikilastiriciKremPage";
import SPFLekeKarsitiGunesKremiPage from "../pages/SPFLekeKarsitiGunesKremiPage";
import YogunBronzlastiriciYagPage from "../pages/YogunBronzlastiriciYagPage";
import EndustriyelTemizlikPage from "../pages/EndustriyelTemizlikPage";
import EndustriyelKagitPage from "../pages/EndustriyelKagitPage";
import KozmetikUrunleriPage from "../pages/KozmetikUrunleriPage";
import BitkiselUrunlerPage from "../pages/BitkiselUrunlerPage";
import AmbalajPage from "../pages/AmbalajPage";
import GidaPage from "../pages/GidaPage";
import GidaCaykurFilizCayPage from "../pages/GidaCaykurFilizCayPage";
import GidaCaykurKamelyaCayPage from "../pages/GidaCaykurKamelyaCayPage";
import GidaCaykurRizeTuristCayPage from "../pages/GidaCaykurRizeTuristCayPage";
import GidaCaykurTiryakiCayPage from "../pages/GidaCaykurTiryakiCayPage";
import GidaKupSekerPage from "../pages/GidaKupSekerPage";
import GidaSodaPage from "../pages/GidaSodaPage";
import GidaSuPage from "../pages/GidaSuPage";
import AmbalajAluminyumFolyoKisaPage from "../pages/AmbalajAluminyumFolyoKisaPage";
import AmbalajAluminyumFolyoUzunPage from "../pages/AmbalajAluminyumFolyoUzunPage";
import AmbalajBuyukCopTorbasiPage from "../pages/AmbalajBuyukCopTorbasiPage";
import AmbalajJumboCopTorbasiPage from "../pages/AmbalajJumboCopTorbasiPage";
import AmbalajOrtaCopTorbasiPage from "../pages/AmbalajOrtaCopTorbasiPage";
import AmbalajSizdirmazKapBuyukPage from "../pages/AmbalajSizdirmazKapBuyukPage";
import AmbalajSizdirmazKapKucukPage from "../pages/AmbalajSizdirmazKapKucukPage";
import AmbalajSizdirmazKapOrtaPage from "../pages/AmbalajSizdirmazKapOrtaPage";
import AmbalajStrecFilmKisaPage from "../pages/AmbalajStrecFilmKisaPage";
import AmbalajStrecFilmUzunPage from "../pages/AmbalajStrecFilmUzunPage";
import EndustriyelKagitHareketliKagitHavluPage from "../pages/EndustriyelKagitHareketliKagitHavluPage";
import EndustriyelKagitIctenCekmeliKagitHavluEkoPage from "../pages/EndustriyelKagitIctenCekmeliKagitHavluEkoPage";
import EndustriyelKagitIctenCekmeliKagitHavluPage from "../pages/EndustriyelKagitIctenCekmeliKagitHavluPage";
import EndustriyelKagitMiniJumboTuvaletKagidiEkoPage from "../pages/EndustriyelKagitMiniJumboTuvaletKagidiEkoPage";
import EndustriyelKagitMiniJumboTuvaletKagidiPage from "../pages/EndustriyelKagitMiniJumboTuvaletKagidiPage";
import EndustriyelKagitZKatHavluEkoPage from "../pages/EndustriyelKagitZKatHavluEkoPage";
import EndustriyelKagitZKatHavluPage from "../pages/EndustriyelKagitZKatHavluPage";
import ProductSimilarGidaPage from "../pages/ProductSimilarGidaPage";
import ProductSimilarAmbalajPage from "../pages/ProductSimilarAmbalajPage";
import ProductSimilarEndustriyelKagitPage from "../pages/ProductSimilarEndustriyelKagitPage";
import ProductSimilarKozmetikPage from "../pages/ProductSimilarKozmetikPage";
import HassasAtopikCiltYuzYikamaJeliPage from "../pages/HassasAtopikCiltYuzYikamaJeliPage";
import TemizlikDolphinLateksPudraliEldivenPage from "../pages/TemizlikDolphinLateksPudraliEldivenPage";
import TemizlikDolphinLateksPudrasizEldivenPage from "../pages/TemizlikDolphinLateksPudrasizEldivenPage";
import TemizlikBeybiLateksPudraliEldivenPage from "../pages/TemizlikBeybiLateksPudraliEldivenPage";
import TemizlikBeybiLateksPudrasizEldivenPage from "../pages/TemizlikBeybiLateksPudrasizEldivenPage";
import TemizlikDolphinNitrilEldivenPage from "../pages/TemizlikDolphinNitrilEldivenPage";
import TemizlikBeybiNitrilEldivenPage from "../pages/TemizlikBeybiNitrilEldivenPage";
import TemizlikViperNitrilEldivenPage from "../pages/TemizlikViperNitrilEldivenPage";
import TemizlikBulasikMakinesiDurulamaMaddesiPage from "../pages/TemizlikBulasikMakinesiDurulamaMaddesiPage";
import TemizlikBulasikMakinesiSiviDeterjaniPage from "../pages/TemizlikBulasikMakinesiSiviDeterjaniPage";
import TemizlikCamasirSuyu5kgPage from "../pages/TemizlikCamasirSuyu5kgPage";
import TemizlikCamasirSuyu30kgPage from "../pages/TemizlikCamasirSuyu30kgPage";
import TemizlikClarkHijyenKovasiPage from "../pages/TemizlikClarkHijyenKovasiPage";
import TemizlikEldeBulasikYikamaMaddesiPage from "../pages/TemizlikEldeBulasikYikamaMaddesiPage";
import TemizlikFirinGrillYanmisYagTemizleyiciPage from "../pages/TemizlikFirinGrillYanmisYagTemizleyiciPage";
import TemizlikGenelTemizlikMaddesiPage from "../pages/TemizlikGenelTemizlikMaddesiPage";
import TemizlikHijyenikMasaGenelAlanTemizleyiciPage from "../pages/TemizlikHijyenikMasaGenelAlanTemizleyiciPage";
import TemizlikCamasirSuyuTabletiPage from "../pages/TemizlikCamasirSuyuTabletiPage";
import TemizliklavaboGiderAciciPage from "../pages/TemizliklavaboGiderAciciPage";
import TemizlikMineralliOvmaKremiPage from "../pages/TemizlikMineralliOvmaKremiPage";
import TemizlikOxyHijyenikMasaTemizlemeBeziPage from "../pages/TemizlikOxyHijyenikMasaTemizlemeBeziPage";
import TemizlikUltraKivamliCamasirSuyuPage from "../pages/TemizlikUltraKivamliCamasirSuyuPage";
import TemizlikYagCozucuPage from "../pages/TemizlikYagCozucuPage";
import TemizlikKolonyaPage from "../pages/TemizlikKolonyaPage";
import BitkiselUrunlerBaproySensitiveCamasirDeterjaniPage from "../pages/BitkiselUrunlerBaproySensitiveCamasirDeterjaniPage";
import BitkiselUrunlerBaproyBabyCamasirDeterjaniPage from "../pages/BitkiselUrunlerBaproyBabyCamasirDeterjaniPage";
import EndustriyelMutfakPage from "../pages/EndustriyelMutfakPage";
import EndustriyelMutfakInoksanBulasikMakinesiPage from "../pages/EndustriyelMutfakInoksanBulasikMakinesiPage";
import EndustriyelMutfakOztiryakilerBulasikMakinesiPage from "../pages/EndustriyelMutfakOztiryakilerBulasikMakinesiPage";
import EndustriyelMutfakOztiryakilerBardakYikamaMakinesiPage from "../pages/EndustriyelMutfakOztiryakilerBardakYikamaMakinesiPage";
import TemizlikEndustriyelBulasikMakinesKirecTemzilemePage from "../pages/TemizlikEndustriyelBulasikMakinesKirecTemzilemePage";
import TemizlikAgirKirYagCozucuPage from "../pages/TemizlikAgirKirYagCozucuPage";
import TemizlikAlkolBazliYuzeyTemizlemePage from "../pages/TemizlikAlkolBazliYuzeyTemizlemePage";
import TemizlikSiviOnDaldirmaMaddesiPage from "../pages/TemizlikSiviOnDaldirmaMaddesiPage";
import TemizlikQacBazliYuzeyTemizlemePage from "../pages/TemizlikQacBazliYuzeyTemizlemePage";
import TemizlikKurumPasSilikatAsidikTemizlemePage from "../pages/TemizlikKurumPasSilikatAsidikTemizlemePage";
import TemizlikWcKlozetPisuarTemizlemePage from "../pages/TemizlikWcKlozetPisuarTemizlemePage";
import TemizlikZeminTemizlikOtomatSivisiPage from "../pages/TemizlikZeminTemizlikOtomatSivisiPage";
import TemizlikBanyoArmatürDerzTemizleyicisiPage from "../pages/TemizlikBanyoArmatürDerzTemizleyicisiPage";
import TemizlikSiviElYikamaMaddesiPage from "../pages/TemizlikSiviElYikamaMaddesiPage";
import BitkiselUrunlerBaproyBabyBitkiselCamasirYumusaticiPage from "../pages/BitkiselUrunlerBaproyBabyBitkiselCamasirYumusaticiPage";
import BitkiselUrunlerBaproyBitkiselCamasirYumusaticiPage from "../pages/BitkiselUrunlerBaproyBitkiselCamasirYumusaticiPage";
import BitkiselUrunlerBaproyBitkiselBiberonEmzikTemzileyiciPage from "../pages/BitkiselUrunlerBaproyBitkiselBiberonEmzikTemzileyiciPage";
import EndustriyelMutfakEndustriyelDavlumbazPage from "../pages/EndustriyelMutfakEndustriyelDavlumbazPage";
import EndustriyelMutfakKuzineFirinPage from "../pages/EndustriyelMutfakKuzineFirinPage";
import EndustriyelMutfakPaslanmazTezgahPage from "../pages/EndustriyelMutfakPaslanmazTezgahPage";
import EndustriyelMutfakYerOcagiPage from "../pages/EndustriyelMutfakYerOcagiPage";

/* import TopBarPage from "../pages/TopBarPage"; */

const CustomRoutes = () => {
  return (
    <Routes>
      <Route exact path="/gida-su" element={<GidaSuPage />} />
      <Route exact path="/gida-soda" element={<GidaSodaPage />} />
      <Route exact path="/gida-kup-seker" element={<GidaKupSekerPage />} />
      <Route
        exact
        path="/gida-caykur-tiryaki-cay"
        element={<GidaCaykurTiryakiCayPage />}
      />
      <Route
        exact
        path="/gida-caykur-rize-turist-cay"
        element={<GidaCaykurRizeTuristCayPage />}
      />
      <Route
        exact
        path="/gida-caykur-kamelya-cay"
        element={<GidaCaykurKamelyaCayPage />}
      />
      <Route
        exact
        path="/gida-caykur-filiz-cay"
        element={<GidaCaykurFilizCayPage />}
      />
      <Route exact path="/gida" element={<GidaPage />} />
      <Route
        exact
        path="/ambalaj-strec-film-uzun"
        element={<AmbalajStrecFilmUzunPage />}
      />
      <Route
        exact
        path="/ambalaj-strec-film-kisa"
        element={<AmbalajStrecFilmKisaPage />}
      />
      <Route
        exact
        path="/ambalaj-sizdirmaz-kap-orta"
        element={<AmbalajSizdirmazKapOrtaPage />}
      />
      <Route
        exact
        path="/ambalaj-sizdirmaz-kap-kucuk"
        element={<AmbalajSizdirmazKapKucukPage />}
      />
      <Route
        exact
        path="/ambalaj-sizdirmaz-kap-buyuk"
        element={<AmbalajSizdirmazKapBuyukPage />}
      />
      <Route
        exact
        path="/ambalaj-orta-cop-torbasi"
        element={<AmbalajOrtaCopTorbasiPage />}
      />
      <Route
        exact
        path="/ambalaj-jumbo-cop-torbasi"
        element={<AmbalajJumboCopTorbasiPage />}
      />
      <Route
        exact
        path="/ambalaj-buyuk-cop-torbasi"
        element={<AmbalajBuyukCopTorbasiPage />}
      />
      <Route
        exact
        path="/ambalaj-aluminyum-folyo-uzun"
        element={<AmbalajAluminyumFolyoUzunPage />}
      />
      <Route
        exact
        path="/ambalaj-aluminyum-folyo-kisa"
        element={<AmbalajAluminyumFolyoKisaPage />}
      />
      <Route exact path="/ambalaj" element={<AmbalajPage />} />
      <Route exact path="/bitkisel-urunler" element={<BitkiselUrunlerPage />} />
      <Route
        exact
        path="/bitkisel-urunler-baproy-baby-camasir-deterjani"
        element={<BitkiselUrunlerBaproyBabyCamasirDeterjaniPage />}
      />
      <Route
        exact
        path="/bitkisel-urunler-baproy-sensitive-camasir-deterjani"
        element={<BitkiselUrunlerBaproySensitiveCamasirDeterjaniPage />}
      />
      <Route
        exact
        path="/bitkisel-urunler-baproy-bitkisel-camasir-yumusatici"
        element={<BitkiselUrunlerBaproyBitkiselCamasirYumusaticiPage />}
      />
      <Route
        exact
        path="/bitkisel-urunler-baproy-baby-bitkisel-camasir-yumusatici"
        element={<BitkiselUrunlerBaproyBabyBitkiselCamasirYumusaticiPage />}
      />
      <Route
        exact
        path="/bitkisel-urunler-baproy-bitkisel-biberon-emzik-temzileyici"
        element={<BitkiselUrunlerBaproyBitkiselBiberonEmzikTemzileyiciPage />}
      />
      <Route
        exact
        path="/endustriyel-mutfak-endustriyel-davlumbaz"
        element={<EndustriyelMutfakEndustriyelDavlumbazPage />}
      />
      <Route
        exact
        path="/endustriyel-mutfak-kuzine-firin"
        element={<EndustriyelMutfakKuzineFirinPage />}
      />
      <Route
        exact
        path="/endustriyel-mutfak-paslanmaz-tezgah"
        element={<EndustriyelMutfakPaslanmazTezgahPage />}
      />
      <Route
        exact
        path="/endustriyel-mutfak-yer-ocagi"
        element={<EndustriyelMutfakYerOcagiPage />}
      />
      <Route
        exact
        path="/endustriyel-mutfak-oztiryakiler-bardak-yikama-makinesi"
        element={<EndustriyelMutfakOztiryakilerBardakYikamaMakinesiPage />}
      />
      <Route
        exact
        path="/endustriyel-mutfak-oztiryakiler-bulasik-makinesi"
        element={<EndustriyelMutfakOztiryakilerBulasikMakinesiPage />}
      />
      <Route
        exact
        path="/endustriyel-mutfak-inoksan-bulasik-makinesi"
        element={<EndustriyelMutfakInoksanBulasikMakinesiPage />}
      />
      <Route
        exact
        path="/endustriyel-mutfak"
        element={<EndustriyelMutfakPage />}
      />
      <Route
        exact
        path="/endustriyel-kagit-Z-kat-havlu"
        element={<EndustriyelKagitZKatHavluPage />}
      />
      <Route
        exact
        path="/endustriyel-kagit-Z-kat-havlu-eko"
        element={<EndustriyelKagitZKatHavluEkoPage />}
      />
      <Route
        exact
        path="/endustriyel-kagit-mini-jumbo-tuvalet-kagidi"
        element={<EndustriyelKagitMiniJumboTuvaletKagidiPage />}
      />
      <Route
        exact
        path="/endustriyel-kagit-mini-jumbo-tuvalet-kagidi-eko"
        element={<EndustriyelKagitMiniJumboTuvaletKagidiEkoPage />}
      />
      <Route
        exact
        path="/endustriyel-kagit-icten-cekmeli-kagit-havlu"
        element={<EndustriyelKagitIctenCekmeliKagitHavluPage />}
      />
      <Route
        exact
        path="/endustriyel-kagit-icten-cekmeli-kagit-havlu-eko"
        element={<EndustriyelKagitIctenCekmeliKagitHavluEkoPage />}
      />
      <Route
        exact
        path="/endustriyel-kagit-hareketli-kagit-havlu"
        element={<EndustriyelKagitHareketliKagitHavluPage />}
      />
      <Route
        exact
        path="/endustriyel-kagit"
        element={<EndustriyelKagitPage />}
      />
      <Route
        exact
        path="/temizlik-sivi-el-yikama-maddesi"
        element={<TemizlikSiviElYikamaMaddesiPage />}
      />
      <Route
        exact
        path="/temizlik-banyo-armatür-derz-temizleyicisi"
        element={<TemizlikBanyoArmatürDerzTemizleyicisiPage />}
      />
      <Route
        exact
        path="/temizlik-zemin-temizlik-otomat-sivisi"
        element={<TemizlikZeminTemizlikOtomatSivisiPage />}
      />
      <Route
        exact
        path="/temizlik-wc-klozet-pisuar-temizleme"
        element={<TemizlikWcKlozetPisuarTemizlemePage />}
      />
      <Route
        exact
        path="/temizlik-kurum-pas-silikat-asidik-temizleme"
        element={<TemizlikKurumPasSilikatAsidikTemizlemePage />}
      />
      <Route
        exact
        path="temizlik-qac-bazli-yuzey-temizleme"
        element={<TemizlikQacBazliYuzeyTemizlemePage />}
      />
      <Route
        exact
        path="/temizlik-sivi-on-daldirma-maddesi"
        element={<TemizlikSiviOnDaldirmaMaddesiPage />}
      />
      <Route
        exact
        path="/temizlik-alkol-bazli-yuzey-temizleme"
        element={<TemizlikAlkolBazliYuzeyTemizlemePage />}
      />
      <Route
        exact
        path="/temizlik-agir-kir-yag-cozucu"
        element={<TemizlikAgirKirYagCozucuPage />}
      />
      <Route
        exact
        path="/temizlik-endustriyel-bulasik-makines-kirec-temizleme"
        element={<TemizlikEndustriyelBulasikMakinesKirecTemzilemePage />}
      />
      <Route exact path="/temizlik-kolonya" element={<TemizlikKolonyaPage />} />
      <Route
        exact
        path="/temizlik-yag-cozucu"
        element={<TemizlikYagCozucuPage />}
      />
      <Route
        exact
        path="/temizlik-ultra-kivamli-camasir-suyu"
        element={<TemizlikUltraKivamliCamasirSuyuPage />}
      />
      <Route
        exact
        path="/temizlik-oxy-hijyenik-masa-temizleme-bezi"
        element={<TemizlikOxyHijyenikMasaTemizlemeBeziPage />}
      />
      <Route
        exact
        path="/temizlik-mineralli-ovma-kremi"
        element={<TemizlikMineralliOvmaKremiPage />}
      />
      <Route
        exact
        path="/temizlik-lavabo-gider-acici"
        element={<TemizliklavaboGiderAciciPage />}
      />
      <Route
        exact
        path="/temizlik-camasir-suyu-tableti"
        element={<TemizlikCamasirSuyuTabletiPage />}
      />
      <Route
        exact
        path="/temizlik-hijyenik-masa-genel-alan-temizleyici"
        element={<TemizlikHijyenikMasaGenelAlanTemizleyiciPage />}
      />
      <Route
        exact
        path="/temizlik-genel-temizlik-maddesi"
        element={<TemizlikGenelTemizlikMaddesiPage />}
      />
      <Route
        exact
        path="/temizlik-firin-grill-yanmis-yag-temizleyici"
        element={<TemizlikFirinGrillYanmisYagTemizleyiciPage />}
      />
      <Route
        exact
        path="/temizlik-elde-bulasik-yikama-maddesi"
        element={<TemizlikEldeBulasikYikamaMaddesiPage />}
      />
      <Route
        exact
        path="/temizlik-clark-hijyen-kovasi"
        element={<TemizlikClarkHijyenKovasiPage />}
      />
      <Route
        exact
        path="/temizlik-camasir-suyu-30kg"
        element={<TemizlikCamasirSuyu30kgPage />}
      />
      <Route
        exact
        path="/temizlik-camasir-suyu-5kg"
        element={<TemizlikCamasirSuyu5kgPage />}
      />
      <Route
        exact
        path="/temizlik-bulasik-makinesi-sivi-deterjani"
        element={<TemizlikBulasikMakinesiSiviDeterjaniPage />}
      />
      <Route
        exact
        path="/temizlik-bulasik-makinesi-durulama-maddesi"
        element={<TemizlikBulasikMakinesiDurulamaMaddesiPage />}
      />
      <Route
        exact
        path="/temizlik-viper-nitril-eldiven"
        element={<TemizlikViperNitrilEldivenPage />}
      />
      <Route
        exact
        path="/temizlik-beybi-nitril-eldiven"
        element={<TemizlikBeybiNitrilEldivenPage />}
      />
      <Route
        exact
        path="/temizlik-dolphin-nitril-eldiven"
        element={<TemizlikDolphinNitrilEldivenPage />}
      />
      <Route
        exact
        path="/temizlik-beybi-lateks-pudrasiz-eldiven"
        element={<TemizlikBeybiLateksPudrasizEldivenPage />}
      />
      <Route
        exact
        path="/temizlik-beybi-lateks-pudrali-eldiven"
        element={<TemizlikBeybiLateksPudraliEldivenPage />}
      />
      <Route
        exact
        path="/temizlik-dolphin-lateks-pudrasiz-eldiven"
        element={<TemizlikDolphinLateksPudrasizEldivenPage />}
      />
      <Route
        exact
        path="/temizlik-dolphin-lateks-pudrali-eldiven"
        element={<TemizlikDolphinLateksPudraliEldivenPage />}
      />
      <Route
        exact
        path="/endustriyel-temizlik"
        element={<EndustriyelTemizlikPage />}
      />
      <Route
        exact
        path="/yogun-bronzlastirici-yag"
        element={<YogunBronzlastiriciYagPage />}
      />
      <Route
        exact
        path="/SPF-leke-karsiti-gunes-kremi"
        element={<SPFLekeKarsitiGunesKremiPage />}
      />
      <Route
        exact
        path="/niacinamide-leke-karsiti-gözenek-sikilastirici-krem"
        element={<NiacinamideLekeKarsitiGözenekSikilastiriciKremPage />}
      />
      <Route
        exact
        path="/cica-centella-cilt-bakim-kremi"
        element={<CicaCentellaCiltBakimKremiPage />}
      />
      <Route
        exact
        path="/azelaik-asit-cilt-bakim-kremi"
        element={<AzelaikAsitCiltBakimKremiPage />}
      />
      <Route
        exact
        path="/bariyer-onarici-cilt-bakim-kremi"
        element={<BariyerOnariciCiltBakimKremiPage />}
      />
      <Route
        exact
        path="/hyaluronik-asit-nem-yuz-vucut-cilt-bakim-kremi"
        element={<HyaluronikAsitNemYuzVucutCiltBakimKremiPage />}
      />
      <Route
        exact
        path="/leke-karsiti-cilt-beyazlatici-bakim-kremi"
        element={<LekeKarsitiCiltBeyazlaticiBakimKremiPage />}
      />
      <Route
        exact
        path="/yag-bazli-yuz-vucut-temizleme-jeli"
        element={<YagBazliYuzVucutTemizlemeJeliPage />}
      />
      <Route
        exact
        path="/hassas-atopik-cilt-yuz-yikama-jeli"
        element={<HassasAtopikCiltYuzYikamaJeliPage />}
      />
      <Route
        exact
        path="/karma-yagli-cilt-yuz-yikama-jeli"
        element={<KarmaYagliCiltYuzYikamaJeliPage />}
      />
      <Route
        exact
        path="/gozenek-siyah-nokta-akne-karsiti-bha-tonik"
        element={<GozenekSiyahNoktaAkneKarsitiBhaTonikPage />}
      />
      <Route
        exact
        path="/leke-karsiti-cilt-aydinlatici-aha-tonik"
        element={<LekeKarsitiCiltAydinlaticiAhaTonikPage />}
      />
      <Route
        exact
        path="/glikolik-asit-leke-karsiti-tonik"
        element={<GlikolikAsitLekeKarsitiTonikPage />}
      />
      <Route
        exact
        path="/glutatyon-beyazlatici-cilt-bakim-serumu"
        element={<GlutatyonBeyazlaticiCiltBakimSerumuPage />}
      />
      <Route
        exact
        path="/beyazlatici-cilt-bakim-serumu"
        element={<BeyazlaticiCiltBakimSerumuPage />}
      />
      <Route
        exact
        path="/peeling-maske-cilt-bakim-serumu"
        element={<PeelingMaskeCiltBakimSerumuPage />}
      />
      <Route
        exact
        path="/ginseng-cilt-yenileyici-serum"
        element={<GinsengCiltYenileyiciSerumPage />}
      />
      <Route
        exact
        path="/hyaluronik-asit-goz-cevresi-serumu"
        element={<HyaluronikAsitGozCevresiSerumuPage />}
      />
      <Route
        exact
        path="/retinol-cilt-yenileyici-bakim-serumu"
        element={<RetinolCiltyenileyiciBakimSerumuPage />}
      />
      <Route
        exact
        path="/yaslanma-karsiti-cilt-bakim-serumu"
        element={<YaslanmaKarsitiCiltBakimSerumuPage />}
      />
      <Route
        exact
        path="/gece-onarici-cilt-bakim-serumu"
        element={<GeceOnariciCiltbakimSerumuPage />}
      />
      <Route
        exact
        path="/aydinlatici-cilt-bakim-serumu"
        element={<AydinlaticiCiltBakimSerumuPage />}
      />
      <Route
        exact
        path="/niacinamide-cilt-bakim-serumu"
        element={<NiacinamideCiltBakimSerumuPage />}
      />
      <Route
        exact
        path="/azelaik-cilt-bakim-serum"
        element={<AzelaikCiltBakimSerumPage />}
      />
      <Route
        exact
        path="/kozmetik-urunleri"
        element={<KozmetikUrunleriPage />}
      />
      <Route path="/Iletisim" element={<ContactusPage />} />
      <Route
        exact
        path="/product-similarKozmetik"
        element={<ProductSimilarKozmetikPage />}
      />
      <Route
        exact
        path="/product-similar-endustriyel-kagit"
        element={<ProductSimilarEndustriyelKagitPage />}
      />
      <Route
        exact
        path="/product-similar-ambalaj"
        element={<ProductSimilarAmbalajPage />}
      />
      <Route
        exact
        path="/product-similar-gida"
        element={<ProductSimilarGidaPage />}
      />
      <Route exact path="/product-similar" element={<ProductSimilarPage />} />
      <Route exact path="/product-details" element={<ProductDetailsPage />} />
      <Route exact path="/sorular" element={<QuestionPage />} />
      {/* <Route exact path="/topBar" element={<TopBarPage />} /> */}
      <Route exact path="/urunlerimiz" element={<ProductPage />} />
      <Route path="/iletisim" element={<ContactPage />} />
      <Route path="/hakkimizda" element={<AboutusPage />} />
      <Route path="/Hakkimizda" element={<AboutPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default CustomRoutes;
