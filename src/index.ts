import _Campaigns from "./Campaigns";
import _Countries from "./Countries";
import _Lists from "./Lists";
import _ListSubscribers from "./ListSubscribers";
import _Templates from "./Templates";
import _TransactionalEmails from "./TransactionEmail";

import _Config from "./types/Config";
import _EmailData from "./types/EmailData";
import _ListInfo from "./types/ListInfo";
import _CampaignInfo from "./types/CampaignInfo";

export const Campaigns = _Campaigns;
export const Countries = _Countries;
export const Lists = _Lists;
export const ListSubscribers = _ListSubscribers;
export const Templates = _Templates;
export const TransactionalEmails = _TransactionalEmails;

export type Config = _Config;
export type EmailData = _EmailData;
export type ListInfo = _ListInfo;
export type CampaignInfo = _CampaignInfo;

export {
	GetAllCountriesResponse,
	GetAllCountriesResponseRecord,
	GetAllZonesResponse,
	GetAllZonesResponseRecord
} from "./types/Countries";
