const ErrorCode = {
    UNKNOWN_ERROR: { name: "UNKNOWN_ERROR", message: "An unknown error occurred." },
    BAD_REQUEST: { name: "BAD_REQUEST", message: "The request is invalid or malformed." },
    NOT_FOUND: { name: "NOT_FOUND", message: "The requested resource was not found." },
    SERVER_ERROR: { name: "SERVER_ERROR", message: "Internal server error." },
    FORBIDDEN: { name: "FORBIDDEN", message: "You do not have permission to access this resource." },
    UNAUTHORIZED: { name: "UNAUTHORIZED", message: "You are not authorized." }
} as const;

export default ErrorCode;
