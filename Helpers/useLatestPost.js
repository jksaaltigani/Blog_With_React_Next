import React from 'react'
import useSWR from 'swr'

function useLatestPost() {
	const fetcher = async () => {
		const API = 'http://localhost:8000/api/quetions'
		const response = await fetch(API);
		const data = await response.json();
		return data.data;
	}
	return useSWR('latest-post-query-fetcher', fetcher)
}

export default useLatestPost
