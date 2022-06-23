import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const CloseIcon = (props: SvgProps) => (
  <Svg width={11} height={10} fill="none" {...props}>
    <Path
      d="M1.063 8.656 9.5.781M1.063.781 9.5 8.656"
      stroke="#D3D3E1"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);

export {CloseIcon};
