import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export const TEST_CONFIG = {
	publicKey: "test-public-key",
	secret: "test-secret-key",
	baseUrl: "https://api.example.com/api"
};

export function createMockAdapter(): MockAdapter {
	return new MockAdapter(axios);
}
