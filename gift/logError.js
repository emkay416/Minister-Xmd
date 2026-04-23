function logError(label, error) {
    const status = error?.response?.status;
    const code = error?.code;
    const msg =
        error?.response?.data?.message ||
        error?.message ||
        (typeof error === "string" ? error : "Unknown error");
    const tag = status ? `[${status}]` : code ? `[${code}]` : "";
    console.error(`${label} ${tag}: ${msg}`.trim());
}

module.exports = { logError };
