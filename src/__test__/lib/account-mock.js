'use strict';

import faker from 'faker';
import uuid from 'uuid/v4';
import Account from '../../model/account';

const createAccountMock = () => {
  const mock = {};
  mock.request = {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    googleToken: uuid(),
  };

  return Account.create(
    mock.request.email,
    mock.request.username,
    mock.request.googleToken,
  )
    .then((account) => {
      mock.account = account;
      return account.pCreateLoginToken();
    })
    .then((token) => {
      mock.token = token;
      return Account.findById(mock.account._id);
    })
    .then((account) => {
      mock.account = account;
      return mock;
    });
};

const removeAccountMock = () => Account.remove({});

export { createAccountMock, removeAccountMock };
