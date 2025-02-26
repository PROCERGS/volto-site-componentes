import installTooltipPlugin from './ToolTipPlugin';
import installSmallTextPlugin from './SmallText';
import installTextSize from './TextSize';

export default function install(config) {
  return [installTextSize, installSmallTextPlugin, installTooltipPlugin].reduce(
    (acc, apply) => apply(acc),
    config,
  );
}
