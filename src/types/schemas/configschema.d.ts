/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type IgnoreGamesWhileImporting = string[] | null;
export type CustomDataRun =
	| {
			name: string;
			key: string;
			ignoreMarkdown?: boolean;
	  }[]
	| null;

export interface Configschema {
	language: 'en' | 'ja';
	twitch: {
		enabled: boolean;
		clientID: string;
		clientSecret: string;
		redirectURI: string;
		additionalScopes?: string[] | null;
		channelName?: string;
		streamTitle: string;
		tagPlayersInStreamTitle: boolean;
		streamDefaultGame: string;
		metadataUseExternal?: boolean;
		commercialsExtraButtons?: boolean;
		commercialsUseExternal?: boolean;
		ffzIntegration: boolean;
		ffzUseRepeater?: boolean;
		ffzBlacklist?: string[] | null;
	};
	schedule?: Horaro | null;
	horaro: Horaro;
	oengus: {
		defaultMarathon: string;
		ignoreGamesWhileImporting?: IgnoreGamesWhileImporting;
		disableSpeedrunComLookup: boolean;
		useSandbox?: boolean | null;
	};
	customData?: {
		run?: CustomDataRun;
		player?:
			| {
					name: string;
					key: string;
			  }[]
			| null;
	} | null;
}
export interface Horaro {
	defaultURL: string;
	ignoreGamesWhileImporting?: IgnoreGamesWhileImporting;
	disableSpeedrunComLookup: boolean;
	customData?: CustomDataRun;
}
