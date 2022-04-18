import ky from 'ky';

import { consent } from './consent';
import {
  register,
  sendRegisterEmailPasscode,
  sendRegisterSmsPasscode,
  verifyRegisterEmailPasscode,
  verifyRegisterSmsPasscode,
} from './register';
import {
  signInBasic,
  sendSignInSmsPasscode,
  sendSignInEmailPasscode,
  verifySignInEmailPasscode,
  verifySignInSmsPasscode,
} from './sign-in';
import {
  invokeSocialSignIn,
  signInWithSoical,
  bindSocialAccount,
  registerWithSocial,
} from './social';

jest.mock('ky', () => ({
  post: jest.fn(() => ({
    json: jest.fn(),
  })),
}));

describe('api', () => {
  const username = 'username';
  const password = 'password';
  const phone = '18888888';
  const passcode = '111111';
  const email = 'foo@logto.io';

  const mockKyPost = ky.post as jest.Mock;

  afterEach(() => {
    mockKyPost.mockClear();
  });

  it('signInBasic', async () => {
    await signInBasic(username, password);
    expect(ky.post).toBeCalledWith('/api/session/sign-in/username-password', {
      json: {
        username,
        password,
      },
    });
  });

  it('sendSignInSmsPasscode', async () => {
    await sendSignInSmsPasscode(phone);
    expect(ky.post).toBeCalledWith('/api/session/sign-in/passwordless/sms/send-passcode', {
      json: {
        phone,
      },
    });
  });

  it('verifySignInSmsPasscode', async () => {
    await verifySignInSmsPasscode(phone, passcode);
    expect(ky.post).toBeCalledWith('/api/session/sign-in/passwordless/sms/verify-passcode', {
      json: {
        phone,
        passcode,
      },
    });
  });

  it('sendSignInEmailPasscode', async () => {
    await sendSignInEmailPasscode(email);
    expect(ky.post).toBeCalledWith('/api/session/sign-in/passwordless/email/send-passcode', {
      json: {
        email,
      },
    });
  });

  it('verifySignInEmailPasscode', async () => {
    await verifySignInEmailPasscode(email, passcode);
    expect(ky.post).toBeCalledWith('/api/session/sign-in/passwordless/email/verify-passcode', {
      json: {
        email,
        passcode,
      },
    });
  });

  it('consent', async () => {
    await consent();
    expect(ky.post).toBeCalledWith('/api/session/consent');
  });

  it('register', async () => {
    await register(username, password);
    expect(ky.post).toBeCalledWith('/api/session/register/username-password', {
      json: {
        username,
        password,
      },
    });
  });

  it('sendRegisterSmsPasscode', async () => {
    await sendRegisterSmsPasscode(phone);
    expect(ky.post).toBeCalledWith('/api/session/register/passwordless/sms/send-passcode', {
      json: {
        phone,
      },
    });
  });

  it('verifyRegisterSmsPasscode', async () => {
    await verifyRegisterSmsPasscode(phone, passcode);
    expect(ky.post).toBeCalledWith('/api/session/register/passwordless/sms/verify-passcode', {
      json: {
        phone,
        passcode,
      },
    });
  });

  it('sendRegisterEmailPasscode', async () => {
    await sendRegisterEmailPasscode(email);
    expect(ky.post).toBeCalledWith('/api/session/register/passwordless/email/send-passcode', {
      json: {
        email,
      },
    });
  });

  it('verifyRegisterEmailPasscode', async () => {
    await verifyRegisterEmailPasscode(email, passcode);
    expect(ky.post).toBeCalledWith('/api/session/register/passwordless/email/verify-passcode', {
      json: {
        email,
        passcode,
      },
    });
  });

  it('invokeSocialSignIn', async () => {
    await invokeSocialSignIn('connectorId', 'state', 'redirectUri');
    expect(ky.post).toBeCalledWith('/api/session/sign-in/social', {
      json: {
        connectorId: 'connectorId',
        state: 'state',
        redirectUri: 'redirectUri',
      },
    });
  });

  it('signInWithSoical', async () => {
    const parameters = {
      connectorId: 'connectorId',
      state: 'state',
      redirectUri: 'redirectUri',
      code: 'code',
    };
    await signInWithSoical(parameters);
    expect(ky.post).toBeCalledWith('/api/session/sign-in/social', {
      json: parameters,
    });
  });

  it('bindSocialAccount', async () => {
    await bindSocialAccount('connectorId');
    expect(ky.post).toBeCalledWith('/api/session/sign-in/bind-social-related-user', {
      json: {
        connectorId: 'connectorId',
      },
    });
  });

  it('registerWithSocial', async () => {
    await registerWithSocial('connectorId');
    expect(ky.post).toBeCalledWith('/api/session/register/social', {
      json: {
        connectorId: 'connectorId',
      },
    });
  });
});