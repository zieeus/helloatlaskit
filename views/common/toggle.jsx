/** @jsx jsx */

import { ChangeEventHandler, HTMLAttributes, ReactNode } from 'react';

import { css, jsx } from '@emotion/react';


const labelStyles = css({
  display: 'block',
  whiteSpace: 'nowrap',
});

const Toggle = ({
  children,
  id,
  isChecked,
  onChange,
  ...props
}) => {
  return (
    <label htmlFor={id} css={labelStyles}>
      <input
        id={id}
        type="checkbox"
        onChange={onChange}
        checked={isChecked}
        // eslint-disable-next-line @repo/internal/react/no-unsafe-spread-props
        {...props}
      />
      {children}
    </label>
  );
};

export default Toggle;
