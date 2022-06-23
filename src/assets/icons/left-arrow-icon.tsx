import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const LeftArrowIcon = (props: SvgProps) => (
  <Svg width={9} height={14} fill="none" {...props}>
    <Path
      d="M7.1 12.883 1.233 7 7.1 1.117"
      stroke="#0F172A"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export {LeftArrowIcon};
