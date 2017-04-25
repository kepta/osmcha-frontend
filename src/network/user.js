// @flow
import {API_URL} from '../config';

export function networkFetchOauthToken() {
  return fetch(`${API_URL}/login/social/token/openstreetmap`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(res => res.json());
}

export function networkFetchApiToken(
  {oauth_token, oauth_verifier}: {oauth_token: string, oauth_verifier: string},
) {
  return fetch(
    `${API_URL}/login/social/token/openstreetmap??oauth_token=${oauth_token}&oauth_verifier=${oauth_verifier}`,
    {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    },
  ).then(res => res.json());
}

export function networkFetchUserDetails(apiToken: string) {
  return fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: new Headers({
      Authorization: `Token ${apiToken}`,
      'Content-Type': 'application/json',
    }),
  }).then(res => res.json());
}
