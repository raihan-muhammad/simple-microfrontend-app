import React, { useEffect, useRef} from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef();
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref}></div>;
};