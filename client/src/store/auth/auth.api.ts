import { rootApi } from 'store/root.api'
import {
	loginRequest,
	loginResponse,
	loginTransformResponse, resetRequest, resetResponse
} from './types'

export const authApi = rootApi
	.enhanceEndpoints({
		addTagTypes: ['Auth']
	}).injectEndpoints({
		endpoints: builder => ({
			login: builder.mutation<loginResponse, loginRequest>({
				query: credentials => ({
					url: '/api/api-token-auth/',
					method: 'POST',
					body: { ...credentials }
				}),
				transformResponse: (response: loginTransformResponse) => response.token
			}),
			reset: builder.mutation<resetResponse, resetRequest>({
				query: credentials => ({
					url: '/v1/auth/reset',
					method: 'POST',
					body: { ...credentials }
				})
			})
		})
	})

export const { useLoginMutation, useResetMutation } = authApi