/* eslint-disable no-undef */

type HTTPMethods =
    "GET" |
    "POST" |
    "PUT" |
    "DELETE" |
    "TRACE" |
    "HEAD" |
    "OPTIONS" |
    "PATCH"

class Fetcher {
    private headers: HeadersInit;

    private baseUrl: string;

    constructor() {
      this.headers = {
        "Content-Type": "application/json",
      };

      this.baseUrl = process.env.NODE_ENV === "production"
        ? "https://refuah.org.il/api"
        : "http://10.0.0.18:3000/api";
    }

    private composeUrl(endpoint: string) {
      return `${this.baseUrl}/${endpoint}`;
    }

    private async baseRequest(endpoint: string, method: HTTPMethods, data?: unknown) {
      const response = await fetch(
        this.composeUrl(endpoint),
        {
          method,
          headers: this.headers,
          body: JSON.stringify(data),
          credentials: "include",
        },
      );

      if (response.statusText !== "OK") {
        const error = await response.json();

        throw error;
      }

      return response.json();
    }

    get<T>(endnpoint: string): Promise<T> {
      return this.baseRequest(endnpoint, "GET");
    }

    post<T>(endpoint: string, data: unknown): Promise<T> {
      return this.baseRequest(endpoint, "POST", data);
    }

    put<T>(endpoint: string, data?: unknown): Promise<T> {
      return this.baseRequest(endpoint, "PUT", data);
    }

    delete<T>(endpoint: string, data?: unknown): Promise<T> {
      return this.baseRequest(endpoint, "DELETE", data);
    }
}

export default Fetcher;
