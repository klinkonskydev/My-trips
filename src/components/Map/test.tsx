import { screen, render } from '@testing-library/react';
import Map from '.';

describe('<Map />', () => {
  it('should render without any market', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    );
  });

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Petrópolis',
      slug: 'petrópolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    };

    const placeTwo = {
      id: '2',
      name: 'Maringá',
      slug: 'maringá',
      location: {
        latitude: -23.4,
        longitude: -52
      }
    };

    render(<Map places={[place, placeTwo]} />);

    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument();
    expect(screen.getByTitle(/maringá/i)).toBeInTheDocument();
  });
});
