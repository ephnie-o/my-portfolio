import { render, fireEvent } from '@testing-library/react';
import Contact from '../components/contact';

describe('Contact component', () => {
    test('renders component without crashing', () => {
        render(<Contact />);
    });

    test('displays section title and description', () => {
        const { getByText } = render(<Contact />);
        const title = getByText('CONTACT ME');
        expect(title).toBeInTheDocument();
    });

    test('renders contact options', () => {
        const { getByTestId } = render(<Contact />);
        const phoneIcon = getByTestId('phone-icon');
        const emailIcon = getByTestId('email-icon');
        const whatsappIcon = getByTestId('whatsApp-icon');
        const linkedInIcon = getByTestId('linkedIn-icon');
        const telegramIcon = getByTestId('telegram-icon');
        const xIcon = getByTestId('X-icon');
        expect(phoneIcon).toBeInTheDocument();
        expect(emailIcon).toBeInTheDocument();
        expect(whatsappIcon).toBeInTheDocument();
        expect(linkedInIcon).toBeInTheDocument();
        expect(telegramIcon).toBeInTheDocument();
        expect(xIcon).toBeInTheDocument();
      });

});