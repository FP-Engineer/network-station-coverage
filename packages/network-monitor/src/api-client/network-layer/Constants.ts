export enum ContentType {
	json = 'application/json',
}

export enum HTTPMethod {
	get = 'GET',
}

export enum HTTPRequestHeader {
	accept = 'accept',
}

export enum HTTPResponseHeader {
	contentType = 'content-type',
}

export enum ErrorMessage {
	unsupportedContentType = 'Content Type is unsupported.',
}

export const defaultRequestSettings: RequestInit = {
	mode: 'cors',
	cache: 'no-cache',
	headers: { [HTTPRequestHeader.accept]: ContentType.json },
};
