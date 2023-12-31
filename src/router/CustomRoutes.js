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
      <Route exact path="/GidaSu" element={<GidaSuPage />} />
      <Route exact path="/GidaSoda" element={<GidaSodaPage />} />
      <Route exact path="/GidaKupSeker" element={<GidaKupSekerPage />} />
      <Route
        exact
        path="/GidaCaykurTiryakiCay"
        element={<GidaCaykurTiryakiCayPage />}
      />
      <Route
        exact
        path="/GidaCaykurRizeTuristCay"
        element={<GidaCaykurRizeTuristCayPage />}
      />
      <Route
        exact
        path="/GidaCaykurKamelyaCay"
        element={<GidaCaykurKamelyaCayPage />}
      />
      <Route
        exact
        path="/GidaCaykurFilizCay"
        element={<GidaCaykurFilizCayPage />}
      />
      <Route exact path="/Gida" element={<GidaPage />} />
      <Route
        exact
        path="/AmbalajStrecFilmUzun"
        element={<AmbalajStrecFilmUzunPage />}
      />
      <Route
        exact
        path="/AmbalajStrecFilmKisa"
        element={<AmbalajStrecFilmKisaPage />}
      />
      <Route
        exact
        path="/AmbalajSizdirmazKapOrta"
        element={<AmbalajSizdirmazKapOrtaPage />}
      />
      <Route
        exact
        path="/AmbalajSizdirmazKapKucuk"
        element={<AmbalajSizdirmazKapKucukPage />}
      />
      <Route
        exact
        path="/AmbalajSizdirmazKapBuyuk"
        element={<AmbalajSizdirmazKapBuyukPage />}
      />
      <Route
        exact
        path="/AmbalajOrtaCopTorbasi"
        element={<AmbalajOrtaCopTorbasiPage />}
      />
      <Route
        exact
        path="/AmbalajJumboCopTorbasi"
        element={<AmbalajJumboCopTorbasiPage />}
      />
      <Route
        exact
        path="/AmbalajBuyukCopTorbasi"
        element={<AmbalajBuyukCopTorbasiPage />}
      />
      <Route
        exact
        path="/AmbalajAluminyumFolyoUzun"
        element={<AmbalajAluminyumFolyoUzunPage />}
      />
      <Route
        exact
        path="/AmbalajAluminyumFolyoKisa"
        element={<AmbalajAluminyumFolyoKisaPage />}
      />
      <Route exact path="/Ambalaj" element={<AmbalajPage />} />
      <Route exact path="/BitkiselUrunler" element={<BitkiselUrunlerPage />} />
      <Route
        exact
        path="/BitkiselUrunlerBaproyBabyCamasirDeterjani"
        element={<BitkiselUrunlerBaproyBabyCamasirDeterjaniPage />}
      />
      <Route
        exact
        path="/BitkiselUrunlerBaproySensitiveCamasirDeterjani"
        element={<BitkiselUrunlerBaproySensitiveCamasirDeterjaniPage />}
      />
      <Route
        exact
        path="/BitkiselUrunlerBaproyBitkiselCamasirYumusatici"
        element={<BitkiselUrunlerBaproyBitkiselCamasirYumusaticiPage />}
      />
      <Route
        exact
        path="/BitkiselUrunlerBaproyBabyBitkiselCamasirYumusatici"
        element={<BitkiselUrunlerBaproyBabyBitkiselCamasirYumusaticiPage />}
      />
      <Route
        exact
        path="/BitkiselUrunlerBaproyBitkiselBiberonEmzikTemzileyici"
        element={<BitkiselUrunlerBaproyBitkiselBiberonEmzikTemzileyiciPage />}
      />
      <Route
        exact
        path="/EndustriyelMutfakEndustriyelDavlumbaz"
        element={<EndustriyelMutfakEndustriyelDavlumbazPage />}
      />
      <Route
        exact
        path="/EndustriyelMutfakKuzineFirin"
        element={<EndustriyelMutfakKuzineFirinPage />}
      />
      <Route
        exact
        path="/EndustriyelMutfakPaslanmazTezgah"
        element={<EndustriyelMutfakPaslanmazTezgahPage />}
      />
      <Route
        exact
        path="/EndustriyelMutfakYerOcagi"
        element={<EndustriyelMutfakYerOcagiPage />}
      />
      <Route
        exact
        path="/EndustriyelMutfakOztiryakilerBardakYikamaMakinesi"
        element={<EndustriyelMutfakOztiryakilerBardakYikamaMakinesiPage />}
      />
      <Route
        exact
        path="/EndustriyelMutfakOztiryakilerBulasikMakinesi"
        element={<EndustriyelMutfakOztiryakilerBulasikMakinesiPage />}
      />
      <Route
        exact
        path="/EndustriyelMutfakInoksanBulasikMakinesi"
        element={<EndustriyelMutfakInoksanBulasikMakinesiPage />}
      />
      <Route
        exact
        path="/EndustriyelMutfak"
        element={<EndustriyelMutfakPage />}
      />
      <Route
        exact
        path="/EndustriyelKagitZKatHavlu"
        element={<EndustriyelKagitZKatHavluPage />}
      />
      <Route
        exact
        path="/EndustriyelKagitZKatHavluEko"
        element={<EndustriyelKagitZKatHavluEkoPage />}
      />
      <Route
        exact
        path="/EndustriyelKagitMiniJumboTuvaletKagidi"
        element={<EndustriyelKagitMiniJumboTuvaletKagidiPage />}
      />
      <Route
        exact
        path="/EndustriyelKagitMiniJumboTuvaletKagidiEko"
        element={<EndustriyelKagitMiniJumboTuvaletKagidiEkoPage />}
      />
      <Route
        exact
        path="/EndustriyelKagitIctenCekmeliKagitHavlu"
        element={<EndustriyelKagitIctenCekmeliKagitHavluPage />}
      />
      <Route
        exact
        path="/EndustriyelKagitIctenCekmeliKagitHavluEko"
        element={<EndustriyelKagitIctenCekmeliKagitHavluEkoPage />}
      />
      <Route
        exact
        path="/EndustriyelKagitHareketliKagitHavlu"
        element={<EndustriyelKagitHareketliKagitHavluPage />}
      />
      <Route
        exact
        path="/EndustriyelKagit"
        element={<EndustriyelKagitPage />}
      />
      <Route
        exact
        path="/TemizlikSiviElYikamaMaddesi"
        element={<TemizlikSiviElYikamaMaddesiPage />}
      />
      <Route
        exact
        path="/TemizlikBanyoArmatürDerzTemizleyicisi"
        element={<TemizlikBanyoArmatürDerzTemizleyicisiPage />}
      />
      <Route
        exact
        path="/TemizlikZeminTemizlikOtomatSivisi"
        element={<TemizlikZeminTemizlikOtomatSivisiPage />}
      />
      <Route
        exact
        path="/TemizlikWcKlozetPisuarTemizleme"
        element={<TemizlikWcKlozetPisuarTemizlemePage />}
      />
      <Route
        exact
        path="/TemizlikKurumPasSilikatAsidikTemizleme"
        element={<TemizlikKurumPasSilikatAsidikTemizlemePage />}
      />
      <Route
        exact
        path="TemizlikQacBazliYuzeyTemizleme"
        element={<TemizlikQacBazliYuzeyTemizlemePage />}
      />
      <Route
        exact
        path="/TemizlikSiviOnDaldirmaMaddesi"
        element={<TemizlikSiviOnDaldirmaMaddesiPage />}
      />
      <Route
        exact
        path="/TemizlikAlkolBazliYuzeyTemizleme"
        element={<TemizlikAlkolBazliYuzeyTemizlemePage />}
      />
      <Route
        exact
        path="/TemizlikAgirKirYagCozucu"
        element={<TemizlikAgirKirYagCozucuPage />}
      />
      <Route
        exact
        path="/TemizlikEndustriyelBulasikMakinesKirecTemzileme"
        element={<TemizlikEndustriyelBulasikMakinesKirecTemzilemePage />}
      />
      <Route exact path="/TemizlikKolonya" element={<TemizlikKolonyaPage />} />
      <Route
        exact
        path="/TemizlikYagCozucu"
        element={<TemizlikYagCozucuPage />}
      />
      <Route
        exact
        path="/TemizlikUltraKivamliCamasirSuyu"
        element={<TemizlikUltraKivamliCamasirSuyuPage />}
      />
      <Route
        exact
        path="/TemizlikOxyHijyenikMasaTemizlemeBezi"
        element={<TemizlikOxyHijyenikMasaTemizlemeBeziPage />}
      />
      <Route
        exact
        path="/TemizlikMineralliOvmaKremi"
        element={<TemizlikMineralliOvmaKremiPage />}
      />
      <Route
        exact
        path="/TemizliklavaboGiderAcici"
        element={<TemizliklavaboGiderAciciPage />}
      />
      <Route
        exact
        path="/TemizlikCamasirSuyuTableti"
        element={<TemizlikCamasirSuyuTabletiPage />}
      />
      <Route
        exact
        path="/TemizlikHijyenikMasaGenelAlanTemizleyici"
        element={<TemizlikHijyenikMasaGenelAlanTemizleyiciPage />}
      />
      <Route
        exact
        path="/TemizlikGenelTemizlikMaddesi"
        element={<TemizlikGenelTemizlikMaddesiPage />}
      />
      <Route
        exact
        path="/TemizlikFirinGrillYanmisYagTemizleyici"
        element={<TemizlikFirinGrillYanmisYagTemizleyiciPage />}
      />
      <Route
        exact
        path="/TemizlikEldeBulasikYikamaMaddesi"
        element={<TemizlikEldeBulasikYikamaMaddesiPage />}
      />
      <Route
        exact
        path="/TemizlikClarkHijyenKovasi"
        element={<TemizlikClarkHijyenKovasiPage />}
      />
      <Route
        exact
        path="/TemizlikCamasirSuyu30kg"
        element={<TemizlikCamasirSuyu30kgPage />}
      />
      <Route
        exact
        path="/TemizlikCamasirSuyu5kg"
        element={<TemizlikCamasirSuyu5kgPage />}
      />
      <Route
        exact
        path="/TemizlikBulasikMakinesiSiviDeterjani"
        element={<TemizlikBulasikMakinesiSiviDeterjaniPage />}
      />
      <Route
        exact
        path="/TemizlikBulasikMakinesiDurulamaMaddesi"
        element={<TemizlikBulasikMakinesiDurulamaMaddesiPage />}
      />
      <Route
        exact
        path="/TemizlikViperNitrilEldiven"
        element={<TemizlikViperNitrilEldivenPage />}
      />
      <Route
        exact
        path="/TemizlikBeybiNitrilEldiven"
        element={<TemizlikBeybiNitrilEldivenPage />}
      />
      <Route
        exact
        path="/TemizlikDolphinNitrilEldiven"
        element={<TemizlikDolphinNitrilEldivenPage />}
      />
      <Route
        exact
        path="/TemizlikBeybiLateksPudrasizEldiven"
        element={<TemizlikBeybiLateksPudrasizEldivenPage />}
      />
      <Route
        exact
        path="/TemizlikBeybiLateksPudraliEldiven"
        element={<TemizlikBeybiLateksPudraliEldivenPage />}
      />
      <Route
        exact
        path="/TemizlikDolphinLateksPudrasizEldiven"
        element={<TemizlikDolphinLateksPudrasizEldivenPage />}
      />
      <Route
        exact
        path="/TemizlikDolphinLateksPudraliEldiven"
        element={<TemizlikDolphinLateksPudraliEldivenPage />}
      />
      <Route
        exact
        path="/EndustriyelTemizlik"
        element={<EndustriyelTemizlikPage />}
      />
      <Route
        exact
        path="/YogunBronzlastiriciYag"
        element={<YogunBronzlastiriciYagPage />}
      />
      <Route
        exact
        path="/SPFLekeKarsitiGunesKremi"
        element={<SPFLekeKarsitiGunesKremiPage />}
      />
      <Route
        exact
        path="/NiacinamideLekeKarsitiGözenekSikilastiriciKrem"
        element={<NiacinamideLekeKarsitiGözenekSikilastiriciKremPage />}
      />
      <Route
        exact
        path="/CicaCentellaCiltBakimKremi"
        element={<CicaCentellaCiltBakimKremiPage />}
      />
      <Route
        exact
        path="/AzelaikAsitCiltBakimKremi"
        element={<AzelaikAsitCiltBakimKremiPage />}
      />
      <Route
        exact
        path="/BariyerOnariciCiltBakimKremi"
        element={<BariyerOnariciCiltBakimKremiPage />}
      />
      <Route
        exact
        path="/HyaluronikAsitNemYuzVucutCiltBakimKremi"
        element={<HyaluronikAsitNemYuzVucutCiltBakimKremiPage />}
      />
      <Route
        exact
        path="/LekeKarsitiCiltBeyazlaticiBakimKremi"
        element={<LekeKarsitiCiltBeyazlaticiBakimKremiPage />}
      />
      <Route
        exact
        path="/YagBazliYuzVucutTemizlemeJeli"
        element={<YagBazliYuzVucutTemizlemeJeliPage />}
      />
      <Route
        exact
        path="/HassasAtopikCiltYuzYikamaJeli"
        element={<HassasAtopikCiltYuzYikamaJeliPage />}
      />
      <Route
        exact
        path="/KarmaYagliCiltYuzYikamaJeli"
        element={<KarmaYagliCiltYuzYikamaJeliPage />}
      />
      <Route
        exact
        path="/GozenekSiyahNoktaAkneKarsitiBhaTonik"
        element={<GozenekSiyahNoktaAkneKarsitiBhaTonikPage />}
      />
      <Route
        exact
        path="/LekeKarsitiCiltAydinlaticiAhaTonik"
        element={<LekeKarsitiCiltAydinlaticiAhaTonikPage />}
      />
      <Route
        exact
        path="/GlikolikAsitLekeKarsitiTonik"
        element={<GlikolikAsitLekeKarsitiTonikPage />}
      />
      <Route
        exact
        path="/GlutatyonBeyazlaticiCiltBakimSerumu"
        element={<GlutatyonBeyazlaticiCiltBakimSerumuPage />}
      />
      <Route
        exact
        path="/BeyazlaticiCiltBakimSerumu"
        element={<BeyazlaticiCiltBakimSerumuPage />}
      />
      <Route
        exact
        path="/PeelingMaskeCiltBakimSerumu"
        element={<PeelingMaskeCiltBakimSerumuPage />}
      />
      <Route
        exact
        path="/GinsengCiltYenileyiciSerum"
        element={<GinsengCiltYenileyiciSerumPage />}
      />
      <Route
        exact
        path="/HyaluronikAsitGozCevresiSerumu"
        element={<HyaluronikAsitGozCevresiSerumuPage />}
      />
      <Route
        exact
        path="/RetinolCiltyenileyiciBakimSerumu"
        element={<RetinolCiltyenileyiciBakimSerumuPage />}
      />
      <Route
        exact
        path="/YaslanmaKarsitiCiltBakimSerumu"
        element={<YaslanmaKarsitiCiltBakimSerumuPage />}
      />
      <Route
        exact
        path="/GeceOnariciCiltbakimSerumu"
        element={<GeceOnariciCiltbakimSerumuPage />}
      />
      <Route
        exact
        path="/AydinlaticiCiltBakimSerumu"
        element={<AydinlaticiCiltBakimSerumuPage />}
      />
      <Route
        exact
        path="/NiacinamideCiltBakimSerumu"
        element={<NiacinamideCiltBakimSerumuPage />}
      />
      <Route
        exact
        path="/AzelaikCiltBakimSerum"
        element={<AzelaikCiltBakimSerumPage />}
      />
      <Route
        exact
        path="/KozmetikUrunleri"
        element={<KozmetikUrunleriPage />}
      />
      <Route path="/Contactus" element={<ContactusPage />} />
      <Route
        exact
        path="/ProductSimilarKozmetik"
        element={<ProductSimilarKozmetikPage />}
      />
      <Route
        exact
        path="/ProductSimilarEndustriyelKagit"
        element={<ProductSimilarEndustriyelKagitPage />}
      />
      <Route
        exact
        path="/ProductSimilarAmbalaj"
        element={<ProductSimilarAmbalajPage />}
      />
      <Route
        exact
        path="/ProductSimilarGida"
        element={<ProductSimilarGidaPage />}
      />
      <Route exact path="/ProductSimilar" element={<ProductSimilarPage />} />
      <Route exact path="/ProductDetails" element={<ProductDetailsPage />} />
      <Route exact path="/Question" element={<QuestionPage />} />
      {/* <Route exact path="/TopBar" element={<TopBarPage />} /> */}
      <Route exact path="/Product" element={<ProductPage />} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route path="/Aboutus" element={<AboutusPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default CustomRoutes;
