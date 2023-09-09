import { Api } from 'schemas'
import { PayloadAction } from '@reduxjs/toolkit'

export type AuthState = {
	token: string | null
}
export type setTokenPayload = PayloadAction<string>

// AUTH LOGIN
export type loginRequest = Api.Request
export type loginResponse = string
export type loginTransformResponse = { token: string }

// AUTH RESET
export type resetRequest = Api.Request
export type resetResponse = {}
