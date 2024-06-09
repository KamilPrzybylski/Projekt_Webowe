import { ImportantContainer, ImportantTitle, ImportantText, ImportantArticle1, ImportantArticle2 } from './important.style';

const Important = () => {
    return (
        <ImportantContainer>
            <ImportantArticle1>
                <ImportantTitle>Important Information</ImportantTitle>
                <ImportantText>Orders are placed via the hotline or by e-mail.</ImportantText>
                <ImportantText>Please ensure all vehicle documents are ready at the time of purchase.</ImportantText>
                <ImportantText>For any queries, contact our support team available 24/7.</ImportantText>
            </ImportantArticle1>
            <ImportantArticle2>
                <ImportantTitle>Additional Information</ImportantTitle>
                <ImportantText>Visit our showroom to explore the latest models and offers.</ImportantText>
                <ImportantText>All transactions are subject to our terms and conditions.</ImportantText>
                <ImportantText>We offer financing options to suit your needs.</ImportantText>
            </ImportantArticle2>
        </ImportantContainer>
    );
};

export default Important