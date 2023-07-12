import {
	defaultRequestSettings,
	ContentType,
	HTTPMethod,
	ErrorMessage,
	HTTPResponseHeader,
} from './Constants';

function handleError(res: Response) {
	return res.ok ? res : Promise.reject(res.statusText);
}

function handleContentType(res: Response) {
	const contentType = res.headers.get(HTTPResponseHeader.contentType) ?? '';
	const hasJsonPayload = contentType.includes(ContentType.json);

	return hasJsonPayload ? res.json() : Promise.reject(ErrorMessage.unsupportedContentType);
}

function request(url = '', settings: RequestInit = {}) {
	return fetch(url, {
		...defaultRequestSettings,
		...settings,
	}).then(handleError).then(handleContentType);
}

export function get(url: string) {
	return request(url, { method: HTTPMethod.get });
}
