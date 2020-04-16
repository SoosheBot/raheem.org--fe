import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';


import Officer from './Officer';

//styles
import { PageContainer, Container, BackButton, Feedback, Content, Divider, Controls, HeaderContainer, HeadingContainer } from '../styles/global';

//buttons
import { ButtonPrimary, ButtonSecondary } from '../styles/global';

/* assets */
import Back from '../assets/Back.svg';

function ThankYou() {

    /* useHistory from react-router-dom */
    const history = useHistory();
    const location = useLocation();

    /* we could possibly store some value in localStorage to determine
        whether or not the user has rendered the Thank You component from
        the cancel button on the initial landing, or from actually completing
        a submission */
    const [cancelled, setCancelled] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    /* state for officer from Story or Email component */
    const [officer, setOfficer] = useState(location.state);

    useEffect(() => {
        if (localStorage.getItem('completed') === 'true') {
            setSubmitted(true);
        }
        else if (localStorage.getItem('completed') === 'false') {
            setCancelled(true);
        }
    }, []);

    return (
        <PageContainer>
            <Container>
                <HeaderContainer>
                    <BackButton className="go-back">
                        <img data-testid="goBackButton" onClick={() => history.goBack()} src={Back} alt="Go Back" />
                    </BackButton>
                

                {location.state === undefined &&
                    <div className="no-officer">
                        <p className="no-officer-text">No officer information was loaded.</p>
                        <p className="no-officer-text">Please rescan your QR code or continue submitting
                                your report with no officer information attached.</p>
                    </div>
                }

                {officer && officer.officer !== false &&
                    <Officer profile={{
                        officer: `${officer.officerRank} ${officer.officerLName}`,
                        precinct: officer.PoliceDepartment,
                        badge: officer.officerBadgeID,
                        img: officer.img
                    }} />
                }
                </HeaderContainer>
            </Container>

            <Divider />

            <Container>
            {cancelled === true &&
                <Content>
                    <Feedback>Thank you for your feedback!</Feedback>
                    <HeadingContainer>
                        <h2>Reminder Sent!</h2>
                    </HeadingContainer>
                    <p className="instruction">Follow the link in your email to complete your story.</p>

                    <Controls >
                        <ButtonPrimary data-testid="homePageButton">Home</ButtonPrimary>
                        <ButtonSecondary data-testid="officerPageButton">Officer Page</ButtonSecondary>
                    </Controls>
                </Content>}

            {submitted &&
                <Content >
                    <div>
                        <Feedback>Thank you for your feedback!</Feedback>
                    </div>
                    <div>
                        <HeaderContainer>
                            <h2>Report Submitted!</h2>
                        </HeaderContainer>
                        <p>Your story will help end police violence.</p>

                        <Controls>
                            <ButtonPrimary data-testid="homePageButton" onClick={() => history.push(`/`)}>Home</ButtonPrimary>
                            <ButtonSecondary data-testid="officerPageButton">Officer Page</ButtonSecondary>
                        </Controls>
                    </div>
                </Content>}
            </Container>
        </PageContainer>
    )
}

export default ThankYou;