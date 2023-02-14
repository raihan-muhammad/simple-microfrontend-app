import React, { useEffect, useRef} from 'react';
import { mount } from 'marketing/MarketingApp';

export default () => {
	const ref = useRef();
	useEffect(() => {
		mount(ref.current);
	}, []);
	return (
		<div ref={ref}></div>
	)
}