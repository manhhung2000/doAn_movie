import styled from "styled-components";
import buttonPrev from './img/button-prev.png';
import buttonNext from './img/button-next.png';
export const ButtonSlick = styled.div`
    .slick-prev {
        display: block;
        background-image: url(${buttonPrev});
        position: absolute;
        top: 45%;
        transform: translateY(-50%);
        background-color: transparent;
        border: none;
        width: 50px;
        height: 100px;
        z-index: 2;
        opacity: .5;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        left: 0%;
    }
    .slick-prev:before {
        display: none;
    }
    .slick-next {
        display: block;
        background-image: url(${buttonNext});
        position: absolute;
        top: 45%;
        transform: translateY(-50%);
        background-color: transparent;
        border: none;
        width: 50px;
        height: 100px;
        z-index: 2;
        opacity: .5;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        right: 0%;
    }
    .slick-next:before {
        display: none;
    }
    @media (max-width: 1280px) {
        .slick-arrow {
            display: none !important;
        }
        .MuiGrid-grid-md-6 {
            flex-grow: 0;
            max-width: 100%;
            flex-basis: 100%;
    }
    @media (max-width: 500px) {
        img {
            width: 100% !important;
        }
    }
`;