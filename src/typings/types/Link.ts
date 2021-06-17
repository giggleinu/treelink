import { LinkType, MusicPlatform } from '@enums';

interface BaseLink {
	id: string;
	title: string;
	type: LinkType;
}

export interface Show {
	date: string; // This would usually be a DateTime object but going to hardcode the date to save efforts
	location: string;
	isSoldOut: boolean;
	url: string;
}

export interface SongPlatform {
	name: MusicPlatform;
	src: string;
	url: string;
}

export interface ClassicLink extends BaseLink {
	type: LinkType.CLASSIC;
	url: string;
}

export interface ShowsLink extends BaseLink {
	type: LinkType.SHOWS;
	shows: Array<Show>;
}

export interface MusicLink extends BaseLink {
	type: LinkType.MUSIC;
	platforms: Array<SongPlatform>;
}

export type Link = ClassicLink | ShowsLink | MusicLink;
