import { Request, Response, NextFunction } from 'express';
import { status } from 'http-status';
import { ApiError, ApiResponse } from '../types';

export function errorHandler(
  err: ApiError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  const statusCode = err.code ?? status.INTERNAL_SERVER_ERROR;

  const response: ApiResponse<never> = {
    success: false,
    error: err,
  };

  res.status(statusCode).json(response);
}
