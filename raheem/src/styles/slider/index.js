import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

export const SliderContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    // padding: 0 0 0 20px;
    // margin: 3rem 0;
    margin: 5rem auto 10rem;
`

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 4.3rem;
    padding: 0 20px;
    background: #FFF600;

    h2 {
        font-size: 2.8rem;
        font-weight: 900;
        font-family: 'Roboto', sans-serif;
    }

    span.light {
        font-weight: 300;
        font-size: 1.6rem;
        line-height: 2.2rem;
        font-family: 'Roboto', sans-serif;
    }
`

export const TxSlider = withStyles({
    root: {
        color: '#FFF600',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#FFF600',
        border: '1px solid #555555',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    markLabel: {
        fontSize: '1.5rem',
        padding: '20px',
        // paddingLeft: '40px',
        fontFamily: 'Roboto',
        lineHeight: '1.8rem',
        letterSpacing: -0.2,
        color: '#111111'
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
        color: '#111111',
        fontFamily: 'Neuzeit Grotesk',
        fontSize: '1.2rem',
    },
    track: {
        height: 8,
        borderRadius: 10,
        color: '#111111'
    },
    rail: {
        height: 8,
        borderRadius: 10,
        border: '1px solid #111111',
        color: '#555555',
    },
})(Slider);

export const marks = [
    {
        value: 1,
        label: 'Very Poorly',
    },
    {
        value: 10,
        label: 'Very Well',
    },
];