import { useState, useEffect } from 'react';
import _ from 'lodash';

export default function useDebounce<T>(value: T, delay: number): T {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = _.debounce(() => {
			setDebouncedValue(value);
		}, delay);

		handler();

		return () => {
			handler.cancel();
		};
	}, [value, delay]);

	return debouncedValue;
}
