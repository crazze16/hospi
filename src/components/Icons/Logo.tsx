import styled from "styled-components";
import Icon, { ISvg } from "./Icon";

const Svg = styled(Icon)`
  width: 82px;
  height: 48px;
`;

export const Logo = ({ className }: ISvg) => (
  <Svg viewBox="0 0 82 48" fill="none" className={className}>
    <path
      d="M21.1781 34.0229C20.5602 33.3584 19.9423 32.6927 19.3245 32.0282C17.8533 30.4451 16.3821 28.862 14.9097 27.2777C13.1249 25.3577 11.3412 23.4376 9.55644 21.5176C8.01412 19.8587 6.47179 18.1986 4.92947 16.5397C4.18454 15.7377 3.46526 14.896 2.68652 14.1266C2.67486 14.1149 2.66437 14.1033 2.65388 14.0916C2.39741 13.8153 1.96257 13.7524 1.62683 13.8922C1.26427 14.0426 1.07425 14.3667 1.04394 14.7503C0.984485 15.4882 0.994977 16.2366 1.01946 16.9757C1.07891 18.799 1.29808 20.6269 1.69328 22.4071C2.18407 24.6139 2.9768 26.7927 4.16705 28.7233C5.51003 30.9009 7.37527 32.7522 9.64853 33.9459C12.5303 35.4603 15.8376 35.9196 19.0598 35.7459C19.5425 35.7202 20.0239 35.6794 20.5054 35.6281C20.9939 35.5757 21.473 35.2388 21.452 34.6909C21.4334 34.2281 21.0393 33.6883 20.5147 33.7443C18.7451 33.9343 16.9533 33.9658 15.186 33.7373C14.9178 33.7023 15.369 33.7652 15.0997 33.7256C15.0076 33.7116 14.9155 33.6976 14.8246 33.6825C14.6264 33.6498 14.4294 33.6137 14.2324 33.5741C13.8698 33.5006 13.5096 33.4155 13.1529 33.3164C12.8194 33.2243 12.4884 33.1206 12.1631 33.0052C12.0081 32.9504 11.8553 32.8932 11.7026 32.8326C11.6269 32.8035 11.5522 32.7732 11.4776 32.7417C11.4403 32.7265 11.4042 32.709 11.3669 32.6951C11.6408 32.7988 11.48 32.744 11.4159 32.7149C10.8236 32.4467 10.2501 32.1483 9.70099 31.7997C9.43753 31.633 9.18106 31.457 8.93158 31.2705C8.87329 31.2273 8.815 31.1819 8.75672 31.1387C8.62265 31.0385 8.91759 31.267 8.8255 31.1924C8.79752 31.1691 8.76837 31.1469 8.7404 31.1248C8.61682 31.0257 8.49442 30.9242 8.37434 30.8193C7.92552 30.43 7.50351 30.0103 7.11064 29.5638C6.92295 29.3504 6.74342 29.1289 6.56622 28.9063C6.44848 28.7582 6.71544 29.108 6.56156 28.9005C6.52076 28.8457 6.47995 28.7897 6.43915 28.7349C6.35405 28.6183 6.27128 28.5006 6.19084 28.3817C5.5485 27.4421 5.05304 26.4383 4.58557 25.4043C4.72779 25.719 4.61938 25.4859 4.58907 25.4101C4.56458 25.3495 4.5401 25.2877 4.51562 25.2271C4.46316 25.093 4.41187 24.959 4.36174 24.8237C4.26731 24.5684 4.17871 24.312 4.09478 24.0532C3.93506 23.5612 3.79284 23.0622 3.66694 22.561C3.42679 21.605 3.24726 20.6363 3.11552 19.6605C3.08172 19.4134 3.13651 19.833 3.12252 19.7165C3.11552 19.6628 3.1097 19.6104 3.1027 19.5568C3.08871 19.4413 3.07589 19.3259 3.06306 19.2105C3.03975 18.9983 3.01876 18.7862 3.00011 18.574C2.9663 18.1905 2.94066 17.8069 2.92201 17.4222C2.88004 16.5432 2.91151 15.6736 2.92667 14.7957C2.92667 14.7829 2.92783 14.7712 2.929 14.7584C2.39274 14.9776 1.85532 15.1968 1.31906 15.4159C1.93692 16.0804 2.55479 16.7461 3.17265 17.4106C4.64386 18.9937 6.11507 20.5768 7.58744 22.1611C9.37225 24.0811 11.1559 26.0012 12.9407 27.9212C14.483 29.5801 16.0253 31.2402 17.5677 32.8991C18.3138 33.7023 19.0389 34.5335 19.8106 35.3122C19.8223 35.3239 19.8328 35.3355 19.8433 35.3472C20.179 35.7086 20.8365 35.7191 21.1746 35.3542C21.5266 34.9695 21.536 34.4076 21.1781 34.0229Z"
      fill="#F29723"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32.3784 46.4545C32.3749 46.5591 32.3564 46.6583 32.3249 46.7503C32.2814 46.8829 32.2082 47.0098 32.1056 47.1225C31.9448 47.2979 31.7086 47.3881 31.4693 47.3945C31.4584 47.3953 31.4474 47.396 31.4364 47.3965C31.2948 47.4028 31.1562 47.3691 31.0307 47.3064C30.9344 47.2619 30.8468 47.2005 30.7742 47.1225L30.7253 47.07C30.4607 46.7968 30.2036 46.5156 29.9468 46.2347C29.8233 46.0997 29.6999 45.9648 29.5758 45.8308C29.0291 45.2424 28.483 44.6535 27.937 44.0648L27.1475 43.2136C26.4066 42.416 25.6662 41.6178 24.9257 40.8195L23.7703 39.5741C23.1046 38.856 22.4387 38.1382 21.7727 37.4203C21.1068 36.7025 20.4408 35.9847 19.7751 35.2666C19.0673 34.5033 18.3595 33.7403 17.6518 32.9773L17.6003 32.9219C16.8972 32.164 16.1941 31.406 15.4909 30.6477C14.7862 29.8882 14.0818 29.1287 13.3774 28.3692C12.6729 27.6097 11.9685 26.8502 11.2638 26.0907C9.97097 24.6976 8.67929 23.3057 7.38761 21.9126C6.69244 21.1623 5.99676 20.4125 5.30124 19.6629L2.06351 16.1723C1.93181 16.0307 1.80039 15.8888 1.66898 15.7469C1.53754 15.605 1.40601 15.4629 1.27428 15.3213C0.951357 14.9739 0.875582 14.3269 1.27428 13.99C1.27836 13.9859 1.28302 13.9821 1.28768 13.9783C1.29235 13.9745 1.29701 13.9707 1.30109 13.9667C1.69107 13.6033 2.10683 13.2631 2.52151 12.9238C2.72412 12.758 2.92657 12.5923 3.12553 12.4243C3.75285 11.8944 4.37987 11.3644 5.0069 10.8345C5.63366 10.3047 6.26043 9.77499 6.88749 9.24526C7.38487 8.82464 7.88239 8.40417 8.37985 7.98373C9.33269 7.17845 10.2859 6.37286 11.237 5.56723C11.8369 5.06064 12.4364 4.55405 13.036 4.04746C13.6354 3.54099 14.2349 3.03452 14.8346 2.52805C15.0832 2.31778 15.3321 2.1075 15.581 1.89723L15.5833 1.89531C15.8331 1.68422 16.083 1.47312 16.3326 1.26202C16.7535 0.906457 17.2454 0.916949 17.6639 1.26202C17.6919 1.28535 17.7202 1.30869 17.7485 1.33202C17.7768 1.35532 17.805 1.37862 17.833 1.40191C18.4088 1.87695 18.985 2.3517 19.5612 2.82645C20.1374 3.30123 20.7136 3.776 21.2895 4.25107C22.2325 5.02856 23.1755 5.80577 24.1185 6.58297C25.0618 7.36033 26.005 8.13769 26.9482 8.91534C27.759 9.58391 28.5701 10.2525 29.3811 10.9211C30.1922 11.5896 31.0033 12.2582 31.8141 12.9268L31.9923 13.0738C32.333 13.355 32.6745 13.6367 33.016 13.9177C33.3017 14.1532 33.4276 14.4889 33.4159 14.855L33.311 18.0469C33.2436 20.0683 33.1774 22.0897 33.1112 24.1111L33.1105 24.1322C33.03 26.6094 32.9484 29.0869 32.8668 31.564L32.629 38.8163C32.5988 39.741 32.5683 40.6654 32.5378 41.5896C32.5082 42.4843 32.4787 43.3788 32.4495 44.2733C32.438 44.6293 32.4263 44.9856 32.4146 45.342L32.4145 45.3453C32.4024 45.7149 32.3902 46.0847 32.3784 46.4545ZM30.5609 44.1258L28.0759 41.4467C27.3809 40.6977 26.6857 39.9484 25.9911 39.1987C24.6994 37.8056 23.4077 36.4137 22.1149 35.0206C21.4096 34.2605 20.7047 33.5004 19.9997 32.7403C19.2958 31.9814 18.5919 31.2225 17.8878 30.4636C17.174 29.6938 16.4602 28.9244 15.7465 28.155L15.739 28.1469C15.0271 27.3796 14.3153 26.6123 13.6035 25.8447C12.9376 25.1263 12.2714 24.4082 11.6052 23.6901C10.9395 22.9726 10.2738 22.255 9.60841 21.5372L8.45252 20.2913C7.71213 19.4931 6.9719 18.6951 6.23116 17.8976L5.44222 17.0471C4.89605 16.4582 4.34971 15.8691 3.80285 15.2805C3.67804 15.1458 3.55422 15.0098 3.43034 14.8738L3.30074 14.7316L3.35312 14.6874C3.60279 14.4764 3.85307 14.265 4.10245 14.0541C4.70218 13.5476 5.30162 13.0411 5.90106 12.5346C6.50062 12.0281 7.10018 11.5215 7.70004 11.0149L12.053 7.33688C12.6802 6.8071 13.307 6.27732 13.9338 5.74754L13.9399 5.74238C14.5648 5.21419 15.1898 4.686 15.815 4.15781C16.0139 3.98992 16.216 3.8243 16.4184 3.65846C16.6205 3.49286 16.8228 3.32705 17.0224 3.15856C17.3069 3.39311 17.5913 3.62781 17.8761 3.86287L17.8862 3.87118L17.8871 3.87192C19.1168 4.88546 20.3465 5.899 21.5763 6.9137C22.319 7.52586 23.0618 8.13831 23.8045 8.75076C24.547 9.36296 25.2894 9.97516 26.0319 10.5871C27.1328 11.4951 28.2337 12.4022 29.3354 13.31L29.9046 13.779C30.112 13.95 30.3175 14.1266 30.5235 14.3037C30.8528 14.5868 31.1836 14.8712 31.5254 15.1351L31.4883 16.2685C31.4711 16.7948 31.4539 17.3212 31.4364 17.8475L31.4283 18.0966C31.3482 20.5411 31.2681 22.9865 31.1869 25.4309C31.0867 28.4899 30.9864 31.5477 30.885 34.6067C30.8413 35.9287 30.7979 37.2504 30.7545 38.5721L30.7544 38.5739C30.711 39.8961 30.6676 41.2184 30.6239 42.541C30.6098 42.973 30.5914 43.4053 30.5731 43.8379L30.5609 44.1258Z"
      fill="#EC6A24"
    />
    <path
      d="M38.2998 14.3564H39.7687V17.9097H44.0949V14.3564H45.5638V22.9844H44.0949V19.2865H39.7687V22.9844H38.2998V14.3564Z"
      fill="#EC6A24"
    />
    <path
      d="M67.0314 14.2993H66.9918C66.6013 14.2993 66.2842 14.6164 66.2842 15.0069C66.2842 15.3975 66.6013 15.7146 66.9918 15.7146H67.0314C67.422 15.7146 67.7391 15.3975 67.7391 15.0069C67.7391 14.6164 67.422 14.2993 67.0314 14.2993Z"
      fill="#EC6A24"
    />
    <path d="M67.7262 16.8489H66.297V22.9855H67.7262V16.8489Z" fill="#EC6A24" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M49.945 16.7043C48.0564 16.7043 46.7974 17.989 46.7974 19.93C46.7974 21.8571 48.0564 23.1289 49.945 23.1289C51.8335 23.1289 53.0926 21.8443 53.0926 19.9032C53.0926 17.9762 51.8335 16.7043 49.945 16.7043ZM49.945 18.003C50.9673 18.003 51.6493 18.7759 51.6493 19.93C51.6493 21.0702 50.9673 21.8314 49.945 21.8314C48.9226 21.8314 48.2406 21.0585 48.2406 19.9044C48.2406 18.7631 48.9226 18.003 49.945 18.003Z"
      fill="#EC6A24"
    />
    <path
      d="M54.0749 21.4374V22.7092C54.6392 22.9459 55.3468 23.1161 55.9763 23.1161C57.4976 23.1161 58.2974 22.356 58.2974 21.1623C58.2974 20.2436 57.7728 19.6934 56.5009 19.2609L56.3039 19.1956C55.6615 18.9729 55.4389 18.7759 55.4389 18.4483C55.4389 18.0811 55.7536 17.8713 56.2911 17.8713C56.8681 17.8713 57.5105 18.0426 58.0222 18.3306V17.0587C57.458 16.8629 56.7632 16.7183 56.1733 16.7183C54.7569 16.7183 54.0225 17.3991 54.0225 18.5404C54.0225 19.5115 54.5471 20.0489 55.7921 20.4814L55.9891 20.5467C56.6326 20.7694 56.8681 20.9792 56.8681 21.3196C56.8681 21.7393 56.5277 21.962 55.911 21.962C55.2943 21.962 54.6123 21.765 54.0749 21.4374Z"
      fill="#EC6A24"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M59.4517 16.849H60.8809V17.5566C61.2481 16.9923 61.8776 16.7172 62.6121 16.7172C64.1066 16.7172 65.0905 17.9623 65.0905 19.7599C65.0905 21.8315 63.9108 23.1162 62.1143 23.1162C61.7342 23.1162 61.2749 23.0241 60.8809 22.8795V25.7112H59.4517V16.849ZM63.6613 19.8905C63.6613 18.7235 63.111 17.9763 62.1539 17.9763C61.669 17.9763 61.17 18.2117 60.8821 18.579V21.6473C61.2365 21.7918 61.5897 21.87 61.9965 21.87C62.9921 21.87 63.6613 21.1227 63.6613 19.8905Z"
      fill="#EC6A24"
    />
    <path
      d="M38.4048 27.3223H39.1392V31.1775H44.5682V27.3223H45.3027V35.9502H44.5682V31.8595H39.1392V35.9502H38.4048V27.3223Z"
      fill="#EC6A24"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M49.932 29.7353C48.0959 29.7353 46.8765 31.0072 46.8765 32.9214C46.8765 34.8227 48.0959 36.0818 49.932 36.0818C51.7541 36.0818 52.9875 34.8227 52.9875 32.9085C52.9875 30.9943 51.7541 29.7353 49.932 29.7353ZM49.9308 30.3776C51.3216 30.3776 52.2519 31.4 52.2519 32.9214C52.2519 34.4287 51.3216 35.4383 49.9308 35.4394C48.5284 35.4394 47.6097 34.4299 47.6097 32.9085C47.6097 31.3872 48.5284 30.3776 49.9308 30.3776Z"
      fill="#EC6A24"
    />
    <path
      d="M54.5088 33.8388V29.8658H55.2292V33.7607C55.2292 34.8495 55.8063 35.4394 56.7506 35.4394C57.5503 35.4394 58.1402 34.9941 58.4549 34.3646V29.867H59.1626V35.9512H58.5202L58.4549 35.1118C58.0353 35.7414 57.4186 36.0818 56.5932 36.0818C55.2164 36.0818 54.5088 35.176 54.5088 33.8388Z"
      fill="#EC6A24"
    />
    <path
      d="M60.6323 34.8742V35.583C61.1966 35.8977 61.8249 36.0819 62.4801 36.0819C63.7391 36.0819 64.4864 35.3871 64.4864 34.3251C64.4864 33.4065 63.9361 32.8819 62.7167 32.489L62.5069 32.4237C61.72 32.1614 61.3924 31.8198 61.3924 31.322C61.3924 30.7054 61.8389 30.3381 62.599 30.3381C63.2157 30.3381 63.8056 30.4955 64.3173 30.8499V30.1283C63.7671 29.866 63.1772 29.7214 62.5605 29.7214C61.3668 29.7214 60.672 30.351 60.672 31.3605C60.672 32.2255 61.1698 32.7233 62.2714 33.0777L62.4684 33.143C63.3463 33.4181 63.7659 33.7982 63.7659 34.3752C63.7659 35.0572 63.2682 35.4641 62.4684 35.4641C61.7993 35.4641 61.1697 35.267 60.6323 34.8742Z"
      fill="#EC6A24"
    />
    <path
      d="M66.3299 27.3444H66.3427C66.5561 27.3444 66.7298 27.5181 66.7298 27.7315C66.7298 27.9448 66.5561 28.1185 66.3427 28.1185H66.3299C66.1166 28.1185 65.9429 27.9448 65.9429 27.7315C65.944 27.517 66.1166 27.3444 66.3299 27.3444Z"
      fill="#EC6A24"
    />
    <path d="M65.9825 29.866H66.6913V35.9502H65.9825V29.866Z" fill="#EC6A24" />
    <path
      d="M69.2604 29.8659H68.5527V35.95H69.2604V31.3872C69.6404 30.7833 70.2699 30.3905 70.9915 30.3905C71.9358 30.3905 72.5129 30.9419 72.5129 32.0564V35.9512H73.2333V31.9386C73.2333 30.6003 72.4989 29.7353 71.1221 29.7353C70.3888 29.7353 69.6929 30.1025 69.2604 30.7052V29.8659Z"
      fill="#EC6A24"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M74.9786 38.3238V37.5497C75.6466 37.9565 76.4603 38.2445 77.2729 38.2445C78.4923 38.2445 79.292 37.4448 79.292 36.1461V35.189C78.8595 35.7789 78.1903 36.0808 77.4699 36.0808C75.8436 36.0808 74.7163 34.992 74.7163 32.9204C74.7163 30.8744 75.9357 29.7343 77.562 29.7343C78.2311 29.7343 78.9912 30.0223 79.4237 30.4559L79.6079 29.866H80.0008V36.0948C80.0008 37.7992 78.9516 38.9136 77.3393 38.9136C76.5524 38.9136 75.6874 38.7166 74.9786 38.3238ZM79.2932 34.4033V31.0726C78.9259 30.6401 78.2311 30.365 77.6016 30.365C76.2773 30.365 75.4379 31.4014 75.4379 32.9087C75.4379 34.4557 76.212 35.4524 77.576 35.4524C78.3489 35.4524 78.9644 35.0188 79.2932 34.4033Z"
      fill="#EC6A24"
    />
  </Svg>
);
