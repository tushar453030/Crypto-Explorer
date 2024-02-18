import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    // 'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    'X-RapidAPI-Key': '116844b3cbmsh8a8f3ee41f88d55p1862a7jsn6e0ae533ae0a',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        }),
    })
})

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery
} = cryptoApi;

