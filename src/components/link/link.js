import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

const Link = ({ url, isExternal, children }) => {
  return isExternal ? (
    <a href={url} target="_blank">
      {children}
    </a>
  ) : (
    <RouterLink to={url}>{children}</RouterLink>
  );
};

export default Link;
