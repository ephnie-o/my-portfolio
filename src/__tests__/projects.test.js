import { render } from '@testing-library/react';
import Project from '../components/projects';

describe('Project component', () => {
    test('renders component without crashing', () => {
        render(<Project />);
    });

    test('displays section title', () => {
        const { getByText } = render(<Project />);
        const title = getByText('Projects');
        expect(title).toBeInTheDocument();
    });

    test('displays project descriptions', () => {
        const { getByText } = render(<Project />);
        const project1Description = getByText(/PROJECT 1:/i);
        expect(project1Description).toBeInTheDocument();
        const project2Description = getByText(/PROJECT 2:/i);
        expect(project2Description).toBeInTheDocument();
    });
});