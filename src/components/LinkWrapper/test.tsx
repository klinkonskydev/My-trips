import { screen, render } from '@testing-library/react';
import LinkWrapper from '.';

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/my-link">Anything</LinkWrapper>);

    const children = screen.getByRole('link', { name: /Anything/i });

    expect(children).toBeInTheDocument();
    expect(children).toHaveAttribute('href', '/my-link');
  });
});
