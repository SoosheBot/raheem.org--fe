import styled from 'styled-components';

export const ReportForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    /* radio input container */
    .container {
    position: relative;
    padding-left: 6.3rem;
    margin: 1.2rem 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }

    /* hide the browser's default radio input */
    .container input[type=radio] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    }

    /* custom radio button */
    .checkmark {
    position: absolute;
    top: -2rem;
    left: 0;
    height: 40px;
    width: 40px;
    background-color: #ffffff;
    border: 1px solid #888888;
    border-radius: 50%;
    }

    /* create the indicator (the dot/circle - hidden when not checked) */
    .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    }

    /* show the indicator (dot/circle) when checked */
    .container input[type=radio]:checked ~ .checkmark:after {
    display: block;
    }

    /* style the indicator (dot/circle) */
    .container .checkmark:after {
        top: 4px;
        left: 4px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #111111;
    }

    /* style the actual field text */
    .container span.inp-text {
        font-family: 'neuzeit-grotesk';
        font-size: 2.6rem;
        line-height: 2.8rem;
        font-weight: bold;
        color: #111111;
        position: relative;
        top: -1.3rem;
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        }

        //-- Content and field separation within form --//
        div {
            font-family: 'neuzeit-grotesk', sans-serif;
            display: flex;
            flex-direction: column;

            @media (max-width: 310px) {
                font-size: 1.6rem;
            }
        }

        .about-you {
            padding-bottom: 0;
            margin-top: 5rem;

            @media (max-width: 500px) {
                padding-bottom: 0;
                margin-top: 1rem;
            }
        }

        .page-end-desktop {
            margin-top: 5rem;
            margin-bottom: 3rem;

            @media(max-width: 500px){
                margin-top: 1rem;
                margin-bottom: 2rem;
            }
        }


        //--Radio Button with Label Container, Label Styling--//
        .radio {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 6px 0 6px;
            font-size: 2.6rem;
            line-height: 2.8rem;
            font-weight: bold;
            color: #888888;
            letter-spacing: 0.283636px;
            min-width: 308px;
        }
        //--date input container--//
        .date {
            display: flex;
            flex-direction: row;
        }
        //--date error container--//
        .dateerror {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
        //--race input container--//
        .raceDesktop{ 
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            @media (max-width: 1050px) {
                flex-direction: column;
            }
        }
        //--race columns for desktop--//
        .raceColumns {
            width: 50%;
            display: flex;
            flex-direction: column;

            @media (max-width: 500px){
                width: 100%;
            }
        }

    // Error font styling--//
    .error {
        color: red;
        font-family: 'neuzeit-grotesk', sans-serif;
        font-size: 1.2rem;
        font-weight: 300;
    }

    //--Incident Date Styling--//
    input[type=text].incident::placeholder {
        color: #C4C4C4;
    }

    input[type=text].incident {
        width: 33.3%;
        height: 5rem;
        font-weight: 900;
        font-size: 2rem;
        padding-left: 1rem;
        color: #111111;
        font-family: 'neuzeit-grotesk', sans-serif;

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

    //---Time Input styling---//
    input[type=time] {
        width: 100%;
        height: 5rem;
        font-size: 2rem;
        font-weight: 900;
        padding-left: 1rem;
        font-family: 'neuzeit-grotesk', sans-serif;
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

    //-- DOB Styling --//
        //-- Date of birth container --//
        .dob-container {
            width: 100%;
            margin-bottom: 10rem;
        }

        //-- DOB input styling --//
        input[type=text].dob {
            width: 33.3%;
            height: 5rem;
            font-weight: 900;
            font-size: 2rem;
            padding-left: 1rem;
            font-family: 'neuzeit-grotesk', sans-serif;

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


        //-- Radio button styling --//
        input[type=radio] {
            height: 42px;
            width: 42px;
            margin-right: 2rem;
        }


        //-- self-identify input styling --//
        input[type=text].self::placeholder {
            color: #888888;
            font-size: 2.6rem;
        }

        input[type=text].self {
            width: 100%;
            height: 5rem;
            font-weight: bold;
            font-size: 2.6rem;
            margin: 0 20px 0 0;
            padding-left: .5rem;
            color: #111111;
            border-radius: 6px;
            border: 1px #111111 solid;
            font-family: 'neuzeit-grotesk', sans-serif;

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


        //-- E-mail input styling --//
        input[type=text].email::placeholder {
            color: #888888;
        }

        input[type=text].email {
            width: 100%;
            height: 5rem;
            font-weight: bold;
            font-size: 2.6rem;
            padding-left: 1rem;
            color: #111111;
            border-radius: 6px;
            border: 1px #111111 solid;
            font-family: 'neuzeit-grotesk', sans-serif;

            @media (max-width: 440px) {
                padding-left: 0.5rem;
            }

            &:focus {
                outline: none;
                border: 1px solid #FAEB00;
            }
        }
        

        //-- Checkbox styling --//
        input[type=checkbox] {
            height: 3rem;
            width: 10%;
            border-radius: 50%;

            // mobile breakpoint at 500px
            @media (max-width: 500px) {
                margin-right: 0.5rem;
            }
        }

        //-- Select input styling --//
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
    }
`;

//-- styling for story input --//
export const StoryForm = styled.div`
    margin: 2rem 0 0;

    form {
        width: 100%;

        textarea {
            width: 100%;
            height: 60rem;
            resize: none;
            font-size: 1.6rem;
            font-family: 'neuzeit-grotesk', sans-serif;
            
            border-radius: 20px;
            border: 1px solid #111111;

            &:focus {
                outline: none;
                border: 1px solid #FAEB00;
            }

            @media (max-width: 500px){
                height: 50rem;
                padding: 1rem;
            }
        }
    }
`;

//-- inout styling for other forms--//
export const Input = styled.input`
    margin: 1rem 0;
    width: 100%;
    height: 4.6rem;
    padding-left: 1rem;
    font-weight: 300;
    font-size: 1.8rem;
    color: #ccc;
    border-radius: 0.6rem;
    border: 1px solid #111111;

    &:focus {
        outline: none;
        border: 1px solid #FFF600;
    }
`