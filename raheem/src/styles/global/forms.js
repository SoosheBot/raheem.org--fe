import styled from 'styled-components';

export const ReportForm = styled.div`
    margin: 1rem 0;
    font-family: 'Noto Serif', serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p.description {
        margin: 0 0 1rem;
        font-size: 1.8rem;
        line-height: 1.6rem;
        font-family: 'Roboto', sans-serif;
    }

    form {
        background: #ffffff;
        display: flex;
        flex-direction: column;
        width: 100%;

        .description {
            margin: 1rem 0;
            padding: 0 20px;
            font-size: 1.8rem;
            line-height: 1.6rem;
            font-family: 'Roboto', sans-serif; 
        }

        // Content and field separation within form
        div {
            font-family: 'Roboto', sans-serif;
            font-size: 2rem;
            font-weight: 900;
            display: flex;
            align-items: center;

            @media (max-width: 310px) {
                font-size: 1.6rem;
            }
        }

        .radio {
            margin: 6px 0 6px;
            font-size: 2.6rem;
            line-height: 2.8rem;
            font-weight: bold;
            color: #888888;
            letter-spacing: 0.283636px;
        }

        .inputs {
            padding: 0 20px;

            h3 {
                width: 100%;
                text-align: left;
                margin-top: 5rem;
                padding: 0;
            }
        }

    // Top heading
    h2 {
        font-size: 2.8rem;
        font-weight: 900;
        font-family: 'Roboto', sans-serif;
    }

    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 1.6rem;
        margin: 5rem 0 1rem;
        padding: 0 20px;
    }

    span {
        margin-top: 3rem;
        font-family: 'Roboto', sans-serif;
        font-weight: normal;
        font-size: 1.6rem;
        line-height: 2.2rem;
    }

    .error {
        color: red;
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
        font-weight: 300;
    }

    input[type=text].incident::placeholder {
        color: #C4C4C4;
    }

    input[type=text].incident {
        width: 33%;
        height: 5rem;
        font-weight: 900;
        font-size: 2rem;
        padding-left: 1rem;
        color: #111111;

        &:first-child {
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
            border: 1px solid #111111;
        }

        &:nth-child(2) {
            border-top: 1px solid #111111;
            border-bottom: 1px solid #111111;
            border-left: none;
            border-right: none;
        }

        &:last-child {
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
            border: 1px solid #111111;
        }

        @media (max-width: 440px) {
            font-size: 1.6rem;
            padding-left: 0.5rem;
        }

        @media (max-width: 360px) {
            font-size: 1.2rem;
            padding-left: 0.5rem;
        }

        @media (max-width: 285px) {
            font-size: 1.2rem;
        }

        @media (max-width: 265px) {
            font-size: 1rem;
        }

        &:focus {
            outline: none;
            border: 1px solid #FAEB00;
        }
    }

    input[type=time] {
        margin-top: 2rem;
        width: 99%;
        height: 5rem;
        font-size: 2rem;
        font-weight: 900;
        padding-left: 1rem;
        font-family: 'Roboto', sans-serif;
        border-radius: 0.5rem;
        border: 1px solid #111111;
        color: #C4C4C4;
    }

    input[type=time]::-webkit-datetime-edit-text {
        font-size: 2rem;
        padding: 0 15%;
    }

    input[type=time]::-webkit-clear-button {
        display: none;
    }

    input[type=time]::-webkit-inner-spin-button {
        height: 5rem;
    }

        // Date of birth container
        .dob-container {
            width: 100%;
            margin-bottom: 10rem;
        }

        // Date of birth input styling
        input[type=text].dob {
            width: 33%;
            height: 5rem;
            font-weight: 900;
            font-size: 2rem;
            padding-left: 1rem;

            @media (max-width: 440px) {
                font-size: 1.6rem;
                padding-left: 0.5rem;
            }

            @media (max-width: 360px) {
                font-size: 1.2rem;
                padding-left: 0.5rem;
            }

            @media (max-width: 285px) {
                font-size: 1.2rem;
            }

            @media (max-width: 265px) {
                font-size: 1rem;
            }

            &:focus {
                outline: none;
                border: 1px solid #FAEB00;
            }
        }

        // Radio button styling
        input[type=radio] {
            height: 42px;
            width: 42px;
            margin-right: 2rem;
            margin-left: 20px;
        }

        // Checkbox styling
        input[type=checkbox] {
            height: 3rem;
            width: 10%;
            border-radius: 50%;

            // mobile breakpoint at 600px
            @media (max-width: 600px) {
                margin-right: 0.5rem;
            }
        }

        // Select input styling
        select {
            margin: 1rem 0 0.5rem;
            height: 5rem;
            font-size: 1.6rem;
            padding-left: 1rem;
            font-weight: 700;

            &:focus {
                outline: none;
                border: 1px solid #FAEB00;
            }

            @media (max-width: 300px) {
                font-size: 1.4rem;
            }

            @media (max-width: 255px) {
                font-size: 1.2rem;
            }
        }

        // Submit button styling
        input[type=submit] {
            font-family: 'Noto Serif', serif;
            font-weight: 700;
            font-size: 2rem;
            height: 5rem;
            border: none;
            border-radius: 0.5rem;
            background: #FFF600;
            padding: 0.5rem 1rem;
            transition: all 300ms;
            margin: 3rem 0 0;

            @media (max-width: 340px) {
                font-size: 1.6rem;
            }

            @media (max-width: 265px) {
                font-size: 1.4rem;
            }

            &:hover {
                transition: background 300ms;
                background: #FAEB00;
                cursor: pointer;
            }
        }
    }
`;

export const StoryForm = styled.div`
    margin: 2rem 0 0;

    form {
        width: 100%;

        textarea {
            width: 100%;
            height: 50rem;
            resize: none;
            font-size: 1.2rem;
            font-family: 'Roboto', sans-serif;
            padding: 1rem;

            &:focus {
                outline: none;
                border: 1px solid #FAEB00;
            }
        }
    }
`;