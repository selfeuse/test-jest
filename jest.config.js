const ignorePatterns = [
	"<rootDir>/.github/",
	"<rootDir>/node_modules/",
	"<rootDir>/__tests__/config",
	"<rootDir>/__tests__/mocks",
	"<rootDir>/__tests__/(.*).mock.(js|ts)"
];

module.exports = {
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/__tests__/config/jest.setup.ts"],
	coveragePathIgnorePatterns: ignorePatterns,
	transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
	testPathIgnorePatterns: ignorePatterns,
	moduleNameMapper: {
		"^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
		"^@/(.*)$": "<rootDir>/src/$1",
		"^@components/(.*)$": "<rootDir>/src/components/$1",
		"^@api/(.*)$": "<rootDir>/src/api/$1",
		"^@pages/(.*)$": "<rootDir>/src/pages/$1",
		"^__tests__/(.*)$": "<rootDir>/__tests__/$1",
		"^public/(.*)$": "<rootDir>/public/$1"
	}
};
