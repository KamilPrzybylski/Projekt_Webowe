import React from 'react';
import { ImportantContainer, ImportantTitle, ImportantText, ImportantArticle1, ImportantArticle2 } from './important.style';

const Important = () => {
    return (
        <ImportantContainer>
            <ImportantArticle1 data-testid="important-section">
                <ImportantTitle>Important Information</ImportantTitle>
                <ImportantText data-testid="important-text">Orders are placed via the hotline or by e-mail.</ImportantText>
                <ImportantText data-testid="important-text">Please ensure all vehicle documents are ready at the time of purchase.</ImportantText>
                <ImportantText data-testid="important-text">For any queries, contact our support team available 24/7.</ImportantText>
            </ImportantArticle1>
            <ImportantArticle2 data-testid="additional-section">
                <ImportantTitle>Additional Information</ImportantTitle>
                <ImportantText data-testid="additional-text">Visit our showroom to explore the latest models and offers.</ImportantText>
                <ImportantText data-testid="additional-text">All transactions are subject to our terms and conditions.</ImportantText>
                <ImportantText data-testid="additional-text">We offer financing options to suit your needs.</ImportantText>
            </ImportantArticle2>
        </ImportantContainer>
    );
};

export default Important