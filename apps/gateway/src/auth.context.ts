import { UnauthorizedException } from '@nestjs/common';

export const authContext = ({ req }) => {
  if (req.headers?.authorization) {
    //validate jwt

    return { user: { id: '1234' } };
  }
  throw new UnauthorizedException();
};
