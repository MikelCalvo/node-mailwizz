export const mockResponses = {
	success: { status: "success" },

	created: (uid: string) => ({
		status: "success",
		data: { record: { uid } }
	})
};
