import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import BannerBlockView from '../components/Blocks/Banner/DefaultView';

const mockStore = configureStore();

jest.mock('react-portal', () => ({
  Portal: ({ children }) => <>{children}</>,
}));

describe('BannerBlockView', () => {
  it('renders three banner links', () => {
    const store = mockStore({ intl: { locale: 'en', messages: {} } });

    const data = {
      banner1: [
        {
          '@id': '/banner1',
          url: 'http://example.com/banner1.jpg',
          alt: 'Banner 1',
        },
      ],
      banner2: [
        {
          '@id': '/banner2',
          url: 'http://example.com/banner2.jpg',
          alt: 'Banner 2',
        },
      ],
      banner3: [
        {
          '@id': '/banner3',
          url: 'http://example.com/banner3.jpg',
          alt: 'Banner 3',
        },
      ],
    };

    render(
      <Provider store={store}>
        <MemoryRouter>
          <BannerBlockView {...data} />
        </MemoryRouter>
      </Provider>,
    );

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute('href', 'http://example.com/banner1.jpg');
  });
});
