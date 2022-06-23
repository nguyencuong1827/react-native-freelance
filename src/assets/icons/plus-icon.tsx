import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const PlusIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill="#0F172A"
    />
    <Path
      d="M12 18.75c-.41 0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75s.75.34.75.75v12c0 .41-.34.75-.75.75Z"
      fill="#0F172A"
    />
  </Svg>
);

export {PlusIcon};
