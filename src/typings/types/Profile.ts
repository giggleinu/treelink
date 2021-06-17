interface ProfileData {
	// Unique link handle
	id: string;

	// Bio photo src
	photo: string;
}

export interface ProfileTheme {
	// Link gackground colour
	linkBgColor: string;

	// Link foreground colour
	linkFgColor: string;

	// Border colour etc...
	// Page bg colour etc...
}

export type Profile = ProfileData & ProfileTheme;
