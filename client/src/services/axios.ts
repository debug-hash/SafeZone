import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://127.0.0.1:5000';

const axiosClient = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
	timeout: 2000,
});

const _get = (url: string, config = {}) => {
	return axiosClient.get(url, config);
};

const _delete = (url: string, config = {}) => {
	return axiosClient.delete(url, config);
};

const _put = (url: string, data = {}, config = {}) => {
	return axiosClient.put(url, data, config);
};

const _post = (url: string, data = {}, config = {}) => {
	return axiosClient.post(url, data, config);
};

export { _get, _delete, _put, _post };
