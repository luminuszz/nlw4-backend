// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pathsToModuleNameMapper } = require("ts-jest/utils");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { compilerOptions } = require("../tsconfig.json");

module.exports = {
	clearMocks: true,

	collectCoverage: true,

	coverageReporters: ["text-summary", "lcov"],

	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: "<rootDir>../",
	}),

	preset: "ts-jest",

	testRegex: ".e2e-spec.ts$",

	moduleFileExtensions: ["js", "json", "ts"],

	rootDir: "./",

	transform: {
		"^.+\\.(t|j)s$": "ts-jest",
	},
	collectCoverageFrom: ["**/*.(t|j)s"],

	coverageDirectory: "../coverage",

	testEnvironment: "node",

	setupFiles: ["dotenv/config"],
	globalSetup: "./config/setupFiles.ts",
	globalTeardown: "./config/teardown.ts",
};
