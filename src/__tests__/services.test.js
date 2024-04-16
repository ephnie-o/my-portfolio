import { render } from '@testing-library/react';
import Services from '../components/Services';

describe('Services component', () => {
    test('renders component without crashing', () => {
        render(<Services />);
    });

    test('displays section title', () => {
        const { getByText } = render(<Services />);
        const title = getByText('Services');
        expect(title).toBeInTheDocument();
    });

    test('displays service descriptions', () => {
        const { getByText } = render(<Services />);
        const websiteDevelopmentService = getByText(/Website Development/);
        expect(websiteDevelopmentService).toBeInTheDocument();

        const pharmaceuticalConsultationService = getByText(/Pharmaceutical Consultation/);
        expect(pharmaceuticalConsultationService).toBeInTheDocument();

        const fitnessConsultationService = getByText(/Fitness Consultation/);
        expect(fitnessConsultationService).toBeInTheDocument();
    });

    test('displays service links', () => {
        const { getByText } = render(<Services />);
        const pharmacyWebsiteLink = getByText(/www.steredapharmacy.com/i);
        expect(pharmacyWebsiteLink).toBeInTheDocument();
    });
});