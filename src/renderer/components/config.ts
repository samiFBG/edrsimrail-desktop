
import LAYOVER from "@assets/images/icons/png/layover.png";
import TRACK from '@assets/images/icons/png/track.png';
import RIGHT_ARROW from '@assets/images/icons/png/right-chevron.png';
import BELL from '@assets/images/icons/png/bell.png';
import CHECK from '@assets/images/icons/png/check.png';
import LAYOVER_WEBP from "@assets/images/icons/png/layover.png";
import TRACK_WEBP from '@assets/images/icons/png/track.png';
import RIGHT_ARROW_WEBP from '@assets/images/icons/png/right-chevron.png';
import BELL_WEBP from '@assets/images/icons/png/bell.png';
import CHECK_WEBP from '@assets/images/icons/png/check.png';

import GW from "@assets/images/posts/jpg/gw.jpg";
import PS from "@assets/images/posts/jpg/ps.jpg";
import KN from "@assets/images/posts/jpg/kn.jpg";
import WP from "@assets/images/posts/jpg/wp.jpg";
import OL from "@assets/images/posts/jpg/ol.jpg";
import PI from "@assets/images/posts/jpg/pi.jpg";
import KZ from "@assets/images/posts/jpg/kz.jpg";
import SG from "@assets/images/posts/jpg/sg.jpg";
import DG from "@assets/images/posts/jpg/dg.jpg";
import BN from "@assets/images/posts/jpg/bn.jpg";
import LC from "@assets/images/posts/jpg/lc.jpg";
import ZA from "@assets/images/posts/jpg/zw.jpg";
import OP_PO from "@assets/images/posts/jpg/op_po.jpg";
import DGW from "@assets/images/posts/jpg/dgw.jpg";
import GW_WEBP from "@assets/images/posts/webp/gw.webp";
import PS_WEBP from "@assets/images/posts/webp/ps.webp";
import KN_WEBP from "@assets/images/posts/webp/kn.webp";
import WP_WEBP from "@assets/images/posts/webp/wp.webp";
import OL_WEBP from "@assets/images/posts/webp/ol.webp";
import PI_WEBP from "@assets/images/posts/webp/pi.webp";
import KZ_WEBP from "@assets/images/posts/webp/kz.webp";
import SG_WEBP from "@assets/images/posts/webp/sg.webp";
import DG_WEBP from "@assets/images/posts/webp/dg.webp";
import BN_WEBP from "@assets/images/posts/webp/bn.webp";
import LC_WEBP from "@assets/images/posts/webp/lc.webp";
import ZA_WEBP from "@assets/images/posts/webp/zw.webp";
import OP_PO_WEBP from "@assets/images/posts/webp/op_po.webp";
import DGW_WEBP from "@assets/images/posts/webp/dgw.webp";

import { GB, FR, PL, CZ, ES, DE, UA, IT, CN, PT, HU, NL} from 'country-flag-icons/string/3x2'

export const LOGGING = false;

export const countriesFlags: {[k: string]: string} = {
    EN: GB,
    FR,
    PL,
    CZ,
    ES,
    DE,
    UA,
    IT,
    CN,
    PT,
    HU,
    NL
}


// Polish characters are not allowed as map keys
// TODO: Is this still really usefull ? If yes, calc automatically
export const internalConfigPostIds: {[k: string]: string} = {
    "GW": encodeURIComponent("Góra Włodowska"),
    "PS": encodeURIComponent("Psary"),
    "KN": encodeURIComponent("Knapówka"),
    "WP": encodeURIComponent("Włoszczowa Północ"),
    "OZ": encodeURIComponent("Olszamowice"),
    "PI": encodeURIComponent("Pilichowice"),
    "KZ": encodeURIComponent("Katowice_Zawodzie"),
    "SG": encodeURIComponent("Sosnowiec Główny"),
    "DG": encodeURIComponent("Dąbrowa Górnicza"),
    "T1_BZ": encodeURIComponent("Będzin"),
    "LZ_LC": encodeURIComponent("Łazy Łc")
};

export const optimizedPostsImagesMap: {[k: string]: string} = {
    GW,
    PS,
    KN,
    WP,
    OL,
    PI,
    KZ,
    SG,
    DG,
    BN,
    ŁC: LC,
    ZW: ZA,
    OP: OP_PO,
    DW: DGW
}

export const optimizedPostsWebpImagesMap: {[k: string]: string} = {
    GW: GW_WEBP,
    PS: PS_WEBP,
    KN: KN_WEBP,
    WP: WP_WEBP,
    OL: OL_WEBP,
    PI: PI_WEBP,
    KZ: KZ_WEBP,
    SG: SG_WEBP,
    DG: DG_WEBP,
    BN: BN_WEBP,
    ŁC: LC_WEBP,
    ZW: ZA_WEBP,
    OP: OP_PO_WEBP,
    DW: DGW_WEBP
}

export const edrImagesMap : {[k: string]: string} = {
    LAYOVER,
    TRACK,
    RIGHT_ARROW,
    BELL,
    CHECK,
}

export const edrWebpImagesMap : {[k: string]: string} = {
    LAYOVER: LAYOVER_WEBP,
    TRACK: TRACK_WEBP,
    RIGHT_ARROW: RIGHT_ARROW_WEBP,
    BELL: BELL_WEBP,
    CHECK: CHECK_WEBP,
}

export const serverTzMap: {[k: string]: string} = {
    FR1: 'Europe/Paris',
    FR2: 'Europe/Paris',
    CZ1: 'Europe/Prague',
    CZ2: 'Europe/Prague',
    DE1: 'Europe/Paris',
    DE2: 'Europe/Paris',
    DE3: 'Europe/Paris',
    DE4: 'Pacific/Honolulu',
    DE5: 'Europe/Paris',
    HU1: 'Europe/Paris',
    UA1: 'Europe/Paris',
    ES1: 'Europe/Paris',
    ES2: 'America/Argentina/Buenos_Aires',
    EN1: 'Europe/London',
    EN2: 'America/New_York',
    EN3: 'America/Vancouver',
    EN4: 'America/Vancouver',
    EN5: 'America/New_York',
    EN6: 'Asia/Sakhalin',
    EN8: 'Asia/Sakhalin',
    EN9: 'Europe/Paris',
    IT1: 'Europe/Paris',
    PL1: 'Europe/Warsaw',
    PL2: 'Europe/Warsaw',
    PL3: 'US/Hawaii',
    PL4: 'Europe/Warsaw',
    PL5: 'Europe/Warsaw',
    PL6: 'Europe/Warsaw',
    PL7: 'Europe/Warsaw',
    PL8: 'America/Mexico_City',
    CN1: 'Asia/Seoul',
    NL1: 'Europe/London',
}

export const searchSeparator = ','

