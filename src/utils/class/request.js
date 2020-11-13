export default class request {
  static async headerSimple() {
    let headers = {};
    headers = await {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    return headers;
  }

  static contentHeaders(jwt) {
    return {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: jwt,
    };
  }
}
