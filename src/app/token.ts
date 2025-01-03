let accessToken: string | null = null; // 메모리 저장

export function setAccessToken(token: string) {
  accessToken = token;
}

export function getAccessToken() {
  return accessToken;
}
