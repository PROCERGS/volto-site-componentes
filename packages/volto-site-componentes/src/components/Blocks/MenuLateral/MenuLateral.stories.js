import React from 'react';
import MenuLateralView from './View';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureStore([]);

export default {
  title: 'Blocks/MenuLateral',
  component: MenuLateralView,
  parameters: {
    layout: 'padded',
  },
};

const mockMenuItems = [
  { '@id': '/home', Title: 'Home', getURL: '/', '@type': 'Document' },
  {
    '@id': '/sobre',
    Title: 'Sobre Nós',
    getURL: '/sobre',
    '@type': 'Document',
  },
  {
    '@id': '/servicos',
    Title: 'Serviços',
    getURL: '/servicos',
    '@type': 'Document',
  },
  {
    '@id': '/contato',
    Title: 'Contato',
    getURL: '/contato',
    '@type': 'Document',
  },
];

const createStoreWithItems = (items = mockMenuItems, currentPath = '/') => {
  const store = mockStore({
    router: {
      location: {
        pathname: currentPath,
      },
    },
    search: {
      subrequests: {
        menuLateral: {
          items: items,
        },
      },
    },
  });

  // Override dispatch to return a Promise
  const originalDispatch = store.dispatch;
  store.dispatch = (action) => {
    originalDispatch(action);
    return Promise.resolve();
  };

  return store;
};

const Template = (args) => (
  <Provider store={args.store || createStoreWithItems()}>
    <MemoryRouter initialEntries={[args.currentPath || '/']}>
      <MenuLateralView {...args} />
    </MemoryRouter>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  data: {
    title: 'Menu de Navegação',
    caminho: '/site',
  },
  isEditMode: false,
  store: createStoreWithItems(),
};

export const WithActiveItem = Template.bind({});
WithActiveItem.args = {
  data: {
    title: 'Menu de Navegação',
    caminho: '/site',
  },
  isEditMode: false,
  currentPath: '/servicos',
  store: createStoreWithItems(mockMenuItems, '/servicos'),
};

export const EditMode = Template.bind({});
EditMode.args = {
  data: {
    title: 'Menu de Navegação',
    caminho: '/site',
  },
  isEditMode: true,
  store: createStoreWithItems(),
};

export const NoTitle = Template.bind({});
NoTitle.args = {
  data: {
    caminho: '/site',
  },
  isEditMode: false,
  store: createStoreWithItems(),
};

export const EmptyMenu = Template.bind({});
EmptyMenu.args = {
  data: {
    title: 'Menu Vazio',
    caminho: '/site',
  },
  isEditMode: false,
  store: createStoreWithItems([]),
};
