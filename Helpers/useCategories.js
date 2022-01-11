import React from 'react'
import useSWR from 'swr'

function useCategories() {
	const fetcher = async () => {
		const API = 'http://localhost:8000/api/categories'
		const response = await fetch(API);
		const data = await response.json();
		return data;
	}
	return useSWR('categories-fetcher', fetcher)
}

export default useCategories
