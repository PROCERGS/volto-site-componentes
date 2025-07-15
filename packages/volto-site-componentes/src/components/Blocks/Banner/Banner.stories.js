import React from 'react';
import BannerBlockDefaultView from './DefaultView';

export default {
  title: 'Blocks/Banner',
  parameters: {
    layout: 'fullscreen',
  },
};

// Mock banner data
const createBanner = (id, title) => ({
  '@id': `/banners/banner-${id}`,
  url: `https://via.placeholder.com/400x200/007bff/ffffff?text=${title}`,
  alt: title,
  title: title,
});

const Template = (args) => <BannerBlockDefaultView {...args} />;

export const Default = Template.bind({});
Default.args = {
  banner1: [createBanner(1, 'Banner 1')],
  banner2: [createBanner(2, 'Banner 2')],
  banner3: [createBanner(3, 'Banner 3')],
  isEditMode: false,
};

export const SingleBanner = Template.bind({});
SingleBanner.args = {
  banner1: [createBanner(1, 'Single Banner')],
  isEditMode: false,
};

export const TwoBanners = Template.bind({});
TwoBanners.args = {
  banner1: [createBanner(1, 'First Banner')],
  banner2: [createBanner(2, 'Second Banner')],
  isEditMode: false,
};

export const DifferentSizes = Template.bind({});
DifferentSizes.args = {
  banner1: [{
    '@id': '/banners/wide',
    url: 'https://via.placeholder.com/600x200/28a745/ffffff?text=Wide+Banner',
    alt: 'Wide Banner',
  }],
  banner2: [{
    '@id': '/banners/square',
    url: 'https://via.placeholder.com/300x300/dc3545/ffffff?text=Square',
    alt: 'Square Banner',
  }],
  banner3: [{
    '@id': '/banners/tall',
    url: 'https://via.placeholder.com/300x400/ffc107/000000?text=Tall',
    alt: 'Tall Banner',
  }],
  isEditMode: false,
};

export const EditMode = Template.bind({});
EditMode.args = {
  banner1: [createBanner(1, 'Edit Mode Banner')],
  isEditMode: true,
};


export const Empty = Template.bind({});
Empty.args = {
  isEditMode: false,
};