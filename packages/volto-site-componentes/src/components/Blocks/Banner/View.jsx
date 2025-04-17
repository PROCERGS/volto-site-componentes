import { withBlockExtensions } from '@plone/volto/helpers';
import BannerBlockDefaultView from './DefaultView';

const BannerBlockView = (props) => {
  const { data, isEditMode } = props;

  return <BannerBlockDefaultView {...data} isEditMode={isEditMode} />;
};

export default withBlockExtensions(BannerBlockView);
