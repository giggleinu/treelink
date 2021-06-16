module.exports = {
	verbose: true,
	transform: {
		'^.+\\.(ts|tsx|js)$': 'babel-jest',
	},
	globals: {
		'ts-jest': {
			tsConfig: '<rootDir>/tsconfig.json',
		},
		window: true,
	},
	moduleNameMapper: {
		Karla: '',
		'^@components/(.*)': ['<rootDir>/src/components/$1'],
		'^@types': ['<rootDir>/src/typings/types/index.ts'],
		'^@enums': ['<rootDir>/src/typings/enums/index.ts'],
		'^@assets': ['<rootDir>/src/assets/$1'],
		'\\.(png)': ['<rootDir>/src/__mocks__/pngMock.ts'],
		'\\.(svg)': ['<rootDir>/src/__mocks__/svgrMock.tsx'],
	},
};
