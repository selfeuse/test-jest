import axios from "axios";

// @ts-ignore
const BASE_URL = "http://localhost:9000";

async function handleResponse(resp: any) {
  switch (resp.status) {
    case 200: {
      return resp.data;
    }
    case 201: {
      return { message: "done" };
    }
    default: {
      return { error: resp.status };
    }
  }
}

export async function getCountByStatus() {
  try {
    const resp = await axios.get(`${BASE_URL}/api/glaciere/count`);

    return handleResponse(resp);
  } catch (error) {
    if (error?.response?.data?.error) {
      return handleResponse({
        status: error?.response?.status,
        error: error?.response?.data?.error
      });
    }
    return handleResponse({ status: 503 });
  }
}
