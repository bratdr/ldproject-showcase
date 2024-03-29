import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#1d777c')};

    @media screen and (max-width: 768px){
        padding-top: 5rem;
        height: 1200px;
    }

    @media screen and (max-width: 540px){
        padding-top: 1rem;
        height: 1100px;
    }
    
    @media screen and (max-width: 340px) {
        height: 1100px;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 30px 0;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) =>
        imgStart ? `'col2 col1'` : `'col1 col2'`};
    
    @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => 
        imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 450px;
    padding-top: 0;
    padding-bottom: 60px;
    text-align: justify;
    text-justify: inter-word;
    @media screen and (max-width: 768px){
        height: auto;
        padding-top: 0;
    }

    @media screen and (max-width: 540px){
        padding-top: 3rem;
    }

    @media screen and (max-width: 480px){
        height: auto;
        padding-top: 4rem;
    }

    @media screen and (max-width: 340px) {
        text-align: left;
    }
    
`;

export const TopLine = styled.p`
    color: #1d777c;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

    @media screen and (max-width: 480px) {
        font-size: 12px;
        text-align: center;
    }

    @media screen and (max-width: 340px) {
        font-size: 0.8rem;
        text-align: left;
    }
`;

export const Heading = styled.h1`
    margin-bottom: 16px;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1d777c') 
    };

    @media screen and (max-width: 480px) {
        font-size: 18px;
        text-align: center;
    }
    @media screen and (max-width: 340px) {
        font-size: 1.5rem;
        text-align: left;
    }
`;

export const Subtitle = styled.p`
    max-width: 500px;
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#1d777c' : '#fff') 
    };
    @media screen and (max-width: 768px){
    font-size: 14px;
    width: 700px;
    }

    @media screen and (max-width: 540px){
    width: 410px;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
        text-align: justify;
        max-width: 290px;
    }

     @media screen and (max-width: 340px) {
        font-size: 0.8rem;
        max-width: 230px;
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    padding-right: 0.5rem;
`;

export const Img = styled.img`
    max-width: 100%;
    height: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

    @media screen and (max-width: 540px){
        width: 103%;
        height: 100%;
    }
`;