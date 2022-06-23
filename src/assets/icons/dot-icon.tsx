import * as React from 'react';
import Svg, {SvgProps, Circle} from 'react-native-svg';

const DotIcon = (props: SvgProps) => (
  <Svg width={3} height={4} fill="none" {...props}>
    <Circle cx={1.5} cy={2} r={1.5} fill="#6C728B" />
  </Svg>
);

export {DotIcon};
