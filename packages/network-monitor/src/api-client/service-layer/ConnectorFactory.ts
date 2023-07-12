import { useEffect, useState } from 'react';
import { get } from '../network-layer';

export interface RemoteData<T> {
	isLoading: boolean;
	error?: string;
	data?: T;
}

export interface RemoteDataConnector<T> {
	(): RemoteData<T>;
}

export function connectRemoteData<T>(serviceUrl: string): RemoteDataConnector<T> {

	return function useRemoteData() {

		const [data, setData] = useState<T>();
		const [error, setError] = useState<string>();
		const [isLoading, setIsLoading] = useState(false);

		useEffect(() => {
			
			setIsLoading(true);
			get(serviceUrl)
				.then(setData)
				.catch(setError)
				.finally(() => setIsLoading(false));

		}, [setData, setIsLoading, setError]);

		return { data, error, isLoading };
	}
}