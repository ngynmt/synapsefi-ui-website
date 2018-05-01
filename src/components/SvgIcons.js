import React from 'react';
import styled, { css } from 'styled-components';

const changeColor = color => {
  return `
    *,
    g,
    path {
      fill: ${color};
    }
  `;
};

const changeColorWhenHover = hoverColor => {
  return `
    &:hover {
      ${changeColor(hoverColor)};
    }
  `;
};

const StyledSvg = styled.svg`
  ${props => props.width && css`width: props.width;`};
  ${props => props.height && css`width: props.height;`};
  ${props => props.color && css`${changeColor(props.color)};`};
  ${props => props.hoverColor && css`${changeColorWhenHover(props.hoverColor)};`};
  ${props => props.hasCursor && css`cursor: pointer;`};
`;

/*

  If you want to add new icons
  Please add icon in alphabetical order

  - arrow
  - banner
  - checkmark

  - chevronBottom
  - chevronLeft
  - chevronRight
  - chevronUp

  - crossRemoveSign
  - edit
  - errUp
  ---------------------------------
  ------ navbar svg icons ---------
  ---------------------------------
  - navBusiness
  - navIntegration
  - navUser
  - navFlow
  - navDoc
  - navRiskAssessment
  - navFinalPreview
  ---------------------------------

  - plus
  - print
  - profile
  - search
  - shape
  - synapseCircleLogo
  - trashbin
  - warningSign

*/

export const arrow = props => (
  <StyledSvg {...props} xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13">
    <path
      fill="#049CB0"
      fillRule="evenodd"
      d="M6.323 12.657l.839-.839-5.496-5.507L7.126.839 6.3 0 0 6.31z"
    />
  </StyledSvg>
);

export const banner = props => (
  <StyledSvg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="25"
    viewBox="0 0 16 25"
  >
    <g fill="none" fillRule="evenodd">
      <path fill={props.fillPath} fillRule="nonzero" d="M0 0v25h.056L8 20.238 15.944 25H16V0z" />
      <text fill={props.fillText} fontFamily="Roboto-Bold, Roboto" fontSize="12" fontWeight="bold">
        <tspan x="4.13" y="15">
          {props.label}
        </tspan>
      </text>
    </g>
  </StyledSvg>
);

export const checkmark = props => (
  <StyledSvg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="11"
    viewBox="0 0 14 11"
  >
    <path
      fill="#E4E4E4"
      fillRule="nonzero"
      d="M12.63.13a.436.436 0 0 0-.619 0L5.49 6.62a.434.434 0 0 1-.62 0l-2.857-2.91a.434.434 0 0 0-.62 0L.13 4.846a.438.438 0 0 0 .001.624l2.882 3.024c.17.173.45.453.62.624l1.238 1.25c.17.17.449.17.62 0l8.38-8.366a.445.445 0 0 0 0-.625L12.63.13z"
    />
  </StyledSvg>
);

export const chevronDown = props => {
  return (
    <StyledSvg
      {...props}
      onClick={props.onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="20"
      viewBox="0 0 32 20"
    >
      <path fillRule="nonzero" d="M28.24 0L32 3.806 16 20 0 3.806 3.76 0 16 12.362z" />
    </StyledSvg>
  );
};

export const chevronLeft = props => (
  <StyledSvg
    {...props}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="32"
    viewBox="0 0 20 32"
  >
    <path fillRule="nonzero" d="M20 3.76L16.194 0 0 16l16.194 16L20 28.24 7.638 16z" />
  </StyledSvg>
);

export const chevronRight = props => (
  <StyledSvg
    {...props}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="32"
    viewBox="0 0 20 32"
  >
    <path fillRule="nonzero" d="M0 3.76L3.806 0 20 16 3.806 32 0 28.24 12.362 16z" />
  </StyledSvg>
);

export const chevronUp = props => (
  <StyledSvg
    {...props}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="20"
    viewBox="0 0 32 20"
  >
    <path fillRule="nonzero" d="M28.24 20L32 16.194 16 0 0 16.194 3.76 20 16 7.638z" />
  </StyledSvg>
);

export const crossRemoveSign = props => {
  return (
    <StyledSvg
      {...props}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path
        fillRule="nonzero"
        d="M32 3.223L28.777 0 16 12.777 3.223 0 0 3.223 12.777 16 0 28.777 3.223 32 16 19.223 28.777 32 32 28.777 19.223 16z"
      />
    </StyledSvg>
  );
};

export const edit = props => (
  <StyledSvg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <g fillRule="nonzero">
      <path d="M30.963 4.624l-3.584-3.579A1.894 1.894 0 0 0 26.037.49a1.89 1.89 0 0 0-1.342.555l-2.867 2.858 6.268 6.257 2.867-2.857c.74-.74.74-1.94 0-2.679zM3.218 22.479l6.269 6.258L26.754 11.5l-6.268-6.258zM1.865 23.818L.527 31.409l7.607-1.334z" />
    </g>
  </StyledSvg>
);

export const error = props => (
  <StyledSvg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <g fill="none" fillRule="evenodd">
      <path fill="#000" d="M0 0h32v32H0z" />
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M13.559 17.435l-.593-7.965c-.111-1.552-.166-2.667-.166-3.343 0-.92.269-1.638.805-2.153.537-.517 1.245-.774 2.122-.774 1.062 0 1.773.33 2.13.99.358.66.538 1.61.538 2.85 0 .733-.044 1.477-.13 2.229l-.796 8.198c-.087.976-.272 1.724-.557 2.246-.284.52-.754.78-1.408.78-.667 0-1.13-.25-1.389-.756-.26-.503-.445-1.271-.556-2.302zM15.515 28.8a2.792 2.792 0 0 1-1.903-.712c-.542-.474-.812-1.14-.812-1.993 0-.746.26-1.381.776-1.905.518-.523 1.153-.785 1.903-.785.751 0 1.39.261 1.92.785.53.523.796 1.158.796 1.905 0 .842-.268 1.503-.805 1.984-.536.48-1.16.721-1.875.721z"
      />
    </g>
  </StyledSvg>
);

// -----------------------------------------------------------------------------------------
// ------------------------------------ navbar svg icons -----------------------------------
// -----------------------------------------------------------------------------------------
export const navBusiness = props => {
  return (
    <StyledSvg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="28"
      viewBox="0 0 32 28"
    >
      <g fill="#000" fillRule="nonzero">
        <path d="M19.986 19.103c0 .313-.114.585-.34.814a1.09 1.09 0 0 1-.803.343h-5.71a1.09 1.09 0 0 1-.803-.343 1.118 1.118 0 0 1-.339-.814v-2.892H0v8.677c0 .796.28 1.477.839 2.043.559.567 1.23.85 2.016.85h26.267c.785 0 1.457-.283 2.016-.85.56-.566.839-1.247.839-2.043v-8.677H19.986v2.892z" />
        <path d="M13.091 16.211H19v2.314h-5.909zM31.138 5.478a2.731 2.731 0 0 0-2.016-.85H22.84V1.735c0-.482-.166-.891-.5-1.229A1.641 1.641 0 0 0 21.129 0H10.849c-.475 0-.88.169-1.213.506-.333.337-.5.747-.5 1.23v2.892h-6.28c-.786 0-1.458.283-2.017.85A2.803 2.803 0 0 0 0 7.52v6.942h31.977V7.521c0-.796-.28-1.477-.839-2.043zm-10.582-.85H11.42V2.314h9.136v2.314z" />
      </g>
    </StyledSvg>
  );
};

export const navIntegration = props => (
  <StyledSvg
    {...props}
    width="21px"
    height="24px"
    viewBox="0 0 21 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="0317_modals_Doc"
        transform="translate(-1480.000000, -1727.000000)"
        fill="#000000"
        fillRule="nonzero"
      >
        <g id="Group-5" transform="translate(1480.000000, 1727.000000)">
          <g id="Group-2">
            <g id="file">
              <path
                d="M14.4878049,0.642063983 L19.3170732,4.72875129 L20.1680976,5.44891641 L14.4878049,5.44891641 L14.4878049,0.642063983 Z M0,23.1578947 L0,21.7956656 L0,0 L13.4146341,0 L13.4146341,6.35706914 L20.9268293,6.35706914 L20.9268293,23.1578947 L0,23.1578947 Z M7.75452315,8.62745098 L7.75452315,11.5569752 L4.29268293,11.5569752 L4.29268293,19.9793602 L14.2454768,19.9793602 L14.2454768,17.0498359 L17.7073171,17.0498359 L17.7073171,8.62745098 L7.75452315,8.62745098 Z M12.9472966,18.8807969 L5.59086319,18.8807969 L5.59086319,12.6555385 L7.75452315,12.6555385 L7.75452315,17.0498359 L12.9472966,17.0498359 L12.9472966,18.8807969 Z M12.9472966,15.9512727 L9.05270341,15.9512727 L9.05270341,12.6555385 L12.9472966,12.6555385 L12.9472966,15.9512727 Z M16.4091368,15.9512727 L14.2454768,15.9512727 L14.2454768,11.5569752 L9.05270341,11.5569752 L9.05270341,9.72601425 L16.4091368,9.72601425 L16.4091368,15.9512727 Z"
                id="Combined-Shape"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </StyledSvg>
);

export const navUser = props => (
  <StyledSvg
    {...props}
    width="33px"
    height="21px"
    viewBox="0 0 33 21"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="0317_modals_Doc"
        transform="translate(-1559.000000, -1728.000000)"
        fill="#242831"
        fillRule="nonzero"
      >
        <g id="Group-3" transform="translate(1559.000000, 1728.000000)">
          <g id="user-info_ico">
            <g id="user">
              <ellipse id="Oval" cx="9.96001998" cy="5" rx="5.00001998" ry="5" />
              <path
                d="M10.00004,10.56 C4.47715042,10.56 0,14.8513027 0,20.144859 L20,20.144859 C20,14.8513027 15.5228496,10.56 10.00004,10.56 Z"
                id="Shape"
              />
            </g>
            <g
              id="cross-remove-sign"
              transform="translate(25.485281, 9.485281) rotate(45.000000) translate(-25.485281, -9.485281) translate(19.485281, 3.485281)"
            >
              <path
                d="M7.852375,5.99625 L11.919,1.9295 C12.016625,1.831875 12.016625,1.673625 11.919,1.576 L10.416625,0.07325 C10.36975,0.026375 10.306,0 10.239875,0 C10.173625,0 10.11,0.026375 10.063125,0.07325 L5.99625,4.140125 L1.929375,0.07325 C1.835625,-0.0205 1.669625,-0.0205 1.575875,0.07325 L0.073375,1.576 C-0.02425,1.673625 -0.02425,1.831875 0.073375,1.9295 L4.140125,5.99625 L0.073375,10.063 C-0.02425,10.160625 -0.02425,10.318875 0.073375,10.4165 L1.575875,11.919125 C1.62275,11.966 1.686375,11.992375 1.752625,11.992375 C1.818875,11.992375 1.8825,11.966 1.929375,11.919125 L5.99625,7.85225 L10.063125,11.919125 C10.11,11.966 10.173625,11.992375 10.239875,11.992375 C10.306,11.992375 10.36975,11.966 10.416625,11.919125 L11.919125,10.4165 C12.01675,10.318875 12.01675,10.1605 11.919125,10.063 L7.852375,5.99625 Z"
                id="Shape"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </StyledSvg>
);

export const navFlow = props => (
  <StyledSvg
    {...props}
    width="42px"
    height="12px"
    viewBox="0 0 42 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="0317_modals_Doc"
        transform="translate(-1625.000000, -1732.000000)"
        fill="#000000"
        fillRule="nonzero"
      >
        <g id="Group-4" transform="translate(1625.000000, 1732.000000)">
          <g
            id="diagram"
            transform="translate(21.000000, 6.000000) scale(-1, -1) rotate(90.000000) translate(-21.000000, -6.000000) translate(15.000000, -15.000000)"
          >
            <path
              d="M11.1428342,29.1428571 L0.857165816,29.1428571 C0.384025071,29.1428571 0,29.5268848 0,30.0000287 L0,40.2857659 C0,40.7588295 0.384025071,41.1428571 0.857165816,41.1428571 L11.1428342,41.1428571 C11.6159749,41.1428571 12,40.7588295 12,40.2856856 L12,29.9999483 C12,29.5268044 11.6159749,29.1428571 11.1428342,29.1428571 Z"
              id="Shape"
            />
            <path
              d="M11.1428342,0 L0.857165816,0 C0.384025071,0 0,0.378025629 0,0.843774719 L0,10.9687549 C0,11.434504 0.384025071,11.8125297 0.857165816,11.8125297 L5.14283418,11.8125297 L5.14283418,24.1194431 L3.17658403,22.1855719 C2.84229981,21.85651 2.29884688,21.85651 1.96456266,22.1855719 C1.63027844,22.5146338 1.63027844,23.0495966 1.96456266,23.3786584 L5.39314557,26.7536782 C5.42231508,26.7806518 5.45831492,26.792517 5.48917192,26.8160892 C5.54743059,26.8599905 5.60400177,26.907214 5.67262646,26.9341876 C5.77717064,26.9780889 5.8886255,27 6.00008036,27 C6.11153522,27 6.22290972,26.9780889 6.32753425,26.9341876 C6.42356061,26.8953488 6.50584596,26.8363392 6.58122062,26.7687866 C6.58577417,26.7643042 7.73664403,25.6342351 10.0338302,23.3785793 C10.3681144,23.0495175 10.3681144,22.5145547 10.0338302,22.1854928 C9.69954598,21.8564309 9.15609305,21.8564309 8.82180883,22.1854928 L6.85724617,24.119364 L6.85724617,11.8124506 L11.1428342,11.8124506 C11.6159749,11.8124506 12,11.4344249 12,10.9686758 L12,0.843695618 C12,0.378025629 11.6159749,0 11.1428342,0 Z"
              id="Shape"
            />
          </g>
        </g>
      </g>
    </g>
  </StyledSvg>
);

export const navDoc = props => (
  <StyledSvg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="31"
    viewBox="0 0 28 31"
  >
    <g fill="none" fillRule="nonzero">
      <path
        fill="#000"
        d="M19.323.856l6.44 5.449 1.136.96h-7.576V.856zM0 30.877V0h17.891v8.476h10.02v22.401H0z"
      />
      <path
        fill="#FFF"
        d="M23.52 9.687H4.586c-.418 0-.757.27-.757.605 0 .335.34.606.757.606h18.936c.418 0 .757-.27.757-.606 0-.334-.34-.605-.757-.605zM4.585 7.265h7.574c.419 0 .758-.27.758-.605 0-.335-.34-.606-.758-.606H4.585c-.418 0-.757.271-.757.606 0 .335.34.605.757.605zM23.52 13.32H4.586c-.418 0-.757.27-.757.605 0 .335.34.605.757.605h18.936c.418 0 .757-.27.757-.605 0-.335-.34-.605-.757-.605z"
      />
      <g fill="#FFF" transform="translate(12.35 16.982)">
        <ellipse cx="6.03" cy="2.902" rx="3.027" ry="2.902" />
        <path d="M6.054 6.393C2.711 6.393 0 8.992 0 12.196h12.109c0-3.204-2.71-5.803-6.055-5.803z" />
      </g>
    </g>
  </StyledSvg>
);

export const navRiskAssessment = props => (
  <StyledSvg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="27"
    viewBox="0 0 28 36"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#000"
        fillRule="nonzero"
        d="M20 3.508v1.324c0 .675-.546 1.219-1.221 1.219H9.221c-.151 0-.297-.028-.432-.08A1.215 1.215 0 0 1 8 4.83V3.509a1.22 1.22 0 0 1 1.221-1.221h.839V1.22A1.22 1.22 0 0 1 11.28 0h5.442c.415 0 .781.207.999.524.139.197.22.437.22.697v1.066h.838c.675 0 1.221.546 1.221 1.22z"
      />
      <path
        fill="#000"
        d="M7.003 4A1.45 1.45 0 0 0 7 4.092v1.545c0 .61.383 1.128.92 1.329.157.06.328.093.505.093h11.15c.788 0 1.425-.634 1.425-1.422V4.092L20.997 4H27a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6.003zm16.783 24.857l-9.329-15.565a.591.591 0 0 0-.506-.292.592.592 0 0 0-.507.292L4.09 28.9a.635.635 0 0 0-.015.625.593.593 0 0 0 .52.317h18.71a.607.607 0 0 0 .6-.617.632.632 0 0 0-.119-.368zM13.472 22.42l-.223-3.879a33.402 33.402 0 0 1-.062-1.628c0-.448.1-.797.303-1.048a.974.974 0 0 1 .798-.377c.4 0 .667.16.802.482.134.321.202.784.202 1.388 0 .357-.016.719-.049 1.085l-.3 3.992c-.032.476-.102.84-.209 1.094-.107.253-.284.38-.53.38-.251 0-.425-.122-.522-.368-.098-.245-.168-.62-.21-1.121zm.774 5.7a1.09 1.09 0 0 1-.742-.278c-.212-.185-.317-.445-.317-.778 0-.291.1-.539.303-.743.202-.205.45-.307.742-.307.293 0 .542.102.75.307.206.204.31.452.31.743 0 .329-.105.587-.314.774-.21.188-.453.282-.732.282z"
      />
    </g>
  </StyledSvg>
);

export const navFinalPreview = props => (
  <StyledSvg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="27"
    viewBox="0 0 28 36"
  >
    <g fill="#000" fillRule="evenodd">
      <path
        fillRule="nonzero"
        d="M20 3.508v1.324c0 .675-.546 1.219-1.221 1.219H9.221c-.151 0-.297-.028-.432-.08A1.215 1.215 0 0 1 8 4.83V3.509a1.22 1.22 0 0 1 1.221-1.221h.839V1.22A1.22 1.22 0 0 1 11.28 0h5.442c.415 0 .781.207.999.524.139.197.22.437.22.697v1.066h.838c.675 0 1.221.546 1.221 1.22z"
      />
      <path d="M7.003 4A1.45 1.45 0 0 0 7 4.092v1.545c0 .61.383 1.128.92 1.329.157.06.328.093.505.093h11.15c.788 0 1.425-.634 1.425-1.422V4.092L20.997 4H27a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6.003zm-.025 6.819a.261.261 0 0 0 0-.371l-.371-.37a.26.26 0 0 0-.37 0l-2.442 2.44-.87-.872a.264.264 0 0 0-.371 0l-.478.477a.265.265 0 0 0 0 .373l1.43 1.428a.262.262 0 0 0 .37 0l.055-.056.42-.424 2.627-2.625zM8 11v2h17v-2H8zm-1.022 5.819a.261.261 0 0 0 0-.371l-.371-.37a.26.26 0 0 0-.37 0l-2.442 2.44-.87-.872a.264.264 0 0 0-.371 0l-.478.477a.265.265 0 0 0 0 .373l1.43 1.428a.262.262 0 0 0 .37 0l.055-.056.42-.424 2.627-2.625zM8 17v2h17v-2H8zm-1.022 5.819a.261.261 0 0 0 0-.371l-.371-.37a.26.26 0 0 0-.37 0l-2.442 2.44-.87-.872a.264.264 0 0 0-.371 0l-.478.477a.265.265 0 0 0 0 .373l1.43 1.428a.262.262 0 0 0 .37 0l.055-.056.42-.424 2.627-2.625zM8 23v2h17v-2H8zm-1.022 5.819a.261.261 0 0 0 0-.371l-.371-.37a.26.26 0 0 0-.37 0l-2.442 2.44-.87-.872a.264.264 0 0 0-.371 0l-.478.477a.265.265 0 0 0 0 .373l1.43 1.428a.262.262 0 0 0 .37 0l.055-.056.42-.424 2.627-2.625zM8 29v2h17v-2H8z" />
    </g>
  </StyledSvg>
);
// -----------------------------------------------------------------------------------------
// -------------------------------- end of navbar svg icons --------------------------------
// -----------------------------------------------------------------------------------------

export const plus = props => (
  <StyledSvg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="nonzero"
      d="M15 6h-5V1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5v5c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-5h5c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z"
    />
  </StyledSvg>
);

export const print = props => (
  <StyledSvg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="30"
    viewBox="0 0 32 30"
  >
    <g fillRule="nonzero">
      <path d="M26.465 2.183c0-1.197-.993-2.176-2.206-2.176H7.72c-1.213 0-2.205.98-2.205 2.176v6.53h20.95v-6.53zM5.514 27.212c0 1.197.992 2.176 2.205 2.176h16.54c1.213 0 2.206-.98 2.206-2.176v-8.706H5.514v8.706zm2.205-5.441h16.54v1.088H7.72v-1.088zm0 3.265h16.54v1.088H7.72v-1.088z" />
      <path d="M28.67 9.8H3.308C1.433 9.8 0 11.216 0 13.066v9.794c0 1.85 1.433 3.265 3.308 3.265h1.103v-8.706h23.157v8.706h1.102c1.875 0 3.308-1.415 3.308-3.265v-9.794c0-1.85-1.433-3.264-3.308-3.264zm-3.308 5.442c-.661 0-1.103-.435-1.103-1.088s.442-1.089 1.103-1.089c.662 0 1.103.436 1.103 1.089s-.441 1.088-1.103 1.088z" />
    </g>
  </StyledSvg>
);

export const profile = props => (
  <StyledSvg
    {...props}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <title>profile</title>
    <path d="M27 0h-24c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h24c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM26 28h-22v-24h22v24zM8 18h14v2h-14zM8 22h14v2h-14zM10 9c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3s-3-1.343-3-3zM15 12h-4c-1.65 0-3 0.9-3 2v2h10v-2c0-1.1-1.35-2-3-2z" />
  </StyledSvg>
);

export const search = props => (
  <StyledSvg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="33"
    viewBox="0 0 33 33"
  >
    <path
      fillRule="nonzero"
      d="M23.12 20.376h-1.445l-.512-.494a11.84 11.84 0 0 0 2.872-7.74C24.035 5.575 18.711.25 12.143.25 5.574.25.25 5.574.25 12.143c0 6.568 5.324 11.892 11.893 11.892a11.84 11.84 0 0 0 7.739-2.872l.494.512v1.445l9.148 9.13 2.726-2.726-9.13-9.148zm-10.977 0a8.222 8.222 0 0 1-8.234-8.233 8.222 8.222 0 0 1 8.234-8.234 8.222 8.222 0 0 1 8.233 8.234 8.222 8.222 0 0 1-8.233 8.233z"
    />
  </StyledSvg>
);

export const shape = props => (
  <StyledSvg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <path
      fill="#049CB0"
      fillRule="nonzero"
      d="M18.75 7.5H12.5V1.25C12.5.562 11.937 0 11.25 0h-2.5C8.062 0 7.5.563 7.5 1.25V7.5H1.25C.562 7.5 0 8.063 0 8.75v2.5c0 .688.563 1.25 1.25 1.25H7.5v6.25c0 .688.563 1.25 1.25 1.25h2.5c.688 0 1.25-.563 1.25-1.25V12.5h6.25c.688 0 1.25-.563 1.25-1.25v-2.5c0-.688-.563-1.25-1.25-1.25z"
    />
  </StyledSvg>
);

export const synapseCircleLogo = props => (
  <StyledSvg
    {...props}
    version="1.1"
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 151.9 153.2"
    preserveAspectRatio="xMidYMid meet"
  >
    <g>
      <g>
        <path d="M11.6,113.2c-1.3,0-2.6-0.7-3.2-2C2.9,100.6,0,88.6,0,76.6c0-13.3,3.5-26.5,10.2-38c1-1.7,3.2-2.3,4.9-1.3
          c1.7,1,2.3,3.2,1.3,4.9c-6,10.4-9.2,22.3-9.2,34.4c0,11.1,2.5,21.6,7.6,31.4c0.9,1.8,0.2,3.9-1.6,4.9
              C12.7,113.1,12.1,113.2,11.6,113.2z" />
      </g>
      <g>
        <path d="M140.3,113.6c-0.6,0-1.1-0.1-1.6-0.4c-1.8-0.9-2.5-3.1-1.6-4.8c5-9.6,7.6-20.5,7.6-31.4
          c0-12.1-3.2-24-9.2-34.4c-1-1.7-0.4-3.9,1.3-4.9c1.7-1,3.9-0.4,4.9,1.3c6.6,11.5,10.2,24.6,10.2,38c0,12.1-2.9,24.1-8.4,34.7
              C142.9,112.9,141.6,113.6,140.3,113.6z" />
      </g>
      <g>
        <path d="M148.3,76.6" />
      </g>
      <path d="M118.1,113.4c8.6-9.9,13.9-22.7,13.9-36.8c0-30.9-25.1-56-56-56c-14.1,0-27,5.3-36.9,14L29.5,25
        C42.3,13.5,58.6,7.2,76,7.2c18.4,0,35.8,7.1,48.8,20.1l0.2,0.2c1.4,1.4,3.7,1.4,5.1,0.1c1.4-1.4,1.4-3.7,0-5.1l-0.3-0.3
            C115.5,7.9,96.3,0,76,0C55.5,0,36.3,8,21.8,22.4c-0.7,0.7-1.1,1.6-1.1,2.5c0,1,0.4,1.9,1.1,2.6L34,39.7c-8.7,9.9-14,22.8-14,36.9
            c0,30.9,25.1,56,56,56c14.2,0,27.1-5.4,37-14.1l9.2,9.9C109.5,139.7,93.2,146,76,146c-18.2,0-35.5-7.2-48.6-20.3
            c-1.4-1.4-3.7-1.4-5.1,0c-1.4,1.4-1.4,3.7,0,5.1c14.5,14.5,33.5,22.4,53.7,22.4c20.3,0,39.4-7.9,53.8-22.1c1.4-1.4,1.4-3.6,0.1-5
            L118.1,113.4z M76,125.4c-26.9,0-48.8-21.9-48.8-48.8c0-26.9,21.9-48.8,48.8-48.8c26.9,0,48.8,21.9,48.8,48.8
            C124.7,103.5,102.9,125.4,76,125.4z" />
    </g>
  </StyledSvg>
);

export const trashbin = props => (
  <StyledSvg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="32"
    viewBox="0 0 25 32"
  >
    <path
      fillRule="nonzero"
      d="M1.786 28.444C1.786 30.4 3.393 32 5.357 32h14.286c1.964 0 3.571-1.6 3.571-3.556V7.111H1.786v21.333zM25 1.778h-6.25L16.964 0H8.036L6.25 1.778H0v3.555h25V1.778z"
    />
  </StyledSvg>
);

export const warningSign = props => (
  <StyledSvg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="26"
    viewBox="0 0 32 26"
  >
    <g fill="none" fillRule="nonzero">
      <path
        fill="#FEC500"
        d="M31.8 24.44L16.806.45a.96.96 0 0 0-1.628 0L.144 24.506a.944.944 0 0 0-.023.963.96.96 0 0 0 .837.489h30.07a.947.947 0 1 0 .772-1.518z"
      />
      <path
        fill="#FFF"
        d="M14.876 16.034l-.31-4.617c-.059-.9-.088-1.546-.088-1.938 0-.534.141-.95.422-1.249.282-.3.653-.448 1.113-.448.556 0 .93.19 1.116.573.188.383.282.934.282 1.653 0 .425-.023.856-.068 1.292l-.417 4.753c-.046.566-.143 1-.292 1.302-.149.302-.395.453-.738.453-.35 0-.593-.146-.728-.439-.136-.292-.234-.737-.292-1.335zm1.078 6.344c-.395 0-.74-.127-1.034-.38-.295-.254-.442-.61-.442-1.066 0-.398.141-.737.422-1.017.282-.28.627-.42 1.035-.42.408 0 .755.14 1.044.42.288.28.432.619.432 1.017 0 .45-.146.803-.438 1.06-.29.257-.63.386-1.019.386z"
      />
    </g>
  </StyledSvg>
);

/*

  If you want to add new icons
  Please add icon in alphabetical order

*/
