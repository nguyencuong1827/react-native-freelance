import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const RightArrowIcon = (props: SvgProps) => (
  <Svg width={7} height={9} fill="none" {...props}>
    <Path
      d="M1.74.97 5.26 4.5 1.74 8.03"
      stroke="#9CA1B8"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export {RightArrowIcon};
