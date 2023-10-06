import sendRequest from "./send-request";
const BASE_URL = "/api/notes";

export function getAll() {
    return sendRequest(BASE_URL)
}

export function createNote(form) {
    return sendRequest(`${BASE_URL}/create`, "POST", form)
}