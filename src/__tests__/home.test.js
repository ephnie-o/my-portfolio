import { render } from "@testing-library/react";
import Home from "../components/home";

describe('Home component', ()=>{
    test('displays the image with correct source', () => {
        const { getByAltText } = render(<Home />);
        const image = getByAltText('A picture of Stephanie Odoom');
        expect(image.src).toContain('Me.jpeg');
    });

    test('displays the image with correct alt text', () => { 
        const { getByAltText } = render(<Home />);
        const image = getByAltText('A picture of Stephanie Odoom');
        expect(image).toBeInTheDocument();
    });

    test('displays the image with fluid prop', () => {
        const { getByAltText } = render(<Home />);
        const image = getByAltText('A picture of Stephanie Odoom');
        expect(image).toHaveClass('img-fluid');
    });
});