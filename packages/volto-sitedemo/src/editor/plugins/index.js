import installTooltipPlugin from './ToolTipPlugin';
import installSmallTextPlugin from './SmallText';

export default function install(config) {
  return [
    installTooltipPlugin,
    installSmallTextPlugin,
    
  ].reduce((acc, apply) => apply(acc), config);
}
