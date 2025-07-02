import type { Config } from "jest";

const config: Config = {
	verbose: true,
	preset: "ts-jest",
	testEnvironment: "node",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	transformIgnorePatterns: ["node_modules/(?!(bson|mongodb|mongoose)/)"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	moduleFileExtensions: ["ts", "tsx", "js"],
};

export default config;
