export type UnicornType = 'pegasus' | 'unicorn' | 'alicorn' | 'narwhal' | 'rhino' | 'horse' | 'special';

export type UnicornSize = 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'humongous';

export interface Unicorn {
	number: number,
	id: string,

	name: string,
	favorite_color?: string,
	birthday: Date,
	description?: string,

	type: UnicornType,
	size: UnicornSize,
	horse_power: number,
	cuteness: number,
	magic: number,

	adopted_at?: Date,
	adopted_by?: string,

	created_at: Date,
	updated_at: Date
}

export interface Appointment {
	number: number,
	id: string,
	patient: string,
	owner: string,
	date: Date,

	created_at: Date,
	updated_at: Date
}
