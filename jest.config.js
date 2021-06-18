/* eslint-disable @typescript-eslint/no-var-requires */

const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
	clearMocks: true,

	collectCoverage: true,

	coverageReporters: ["text-summary", "lcov"],

	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: "<rootDir>",
	}),

	preset: "ts-jest",

	moduleFileExtensions: ["js", "json", "ts"],
	rootDir: "./",
	testRegex: ".*\\.spec\\.ts$",
	transform: {
		"^.+\\.(t|j)s$": "ts-jest",
	},
	collectCoverageFrom: ["**/*.(t|j)s"],

	coverageDirectory: "../coverage",

	testEnvironment: "node",

	setupFiles: ["dotenv/config"],
};
