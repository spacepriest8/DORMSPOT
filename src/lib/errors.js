export class CustomError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  
  export class NotFoundError extends CustomError {
    constructor(resource = 'Resource') {
      super(`${resource} not found`, 404);
    }
  }
  
  export class BadRequestError extends CustomError {
    constructor(message = 'Bad request') {
      super(message, 400);
    }
  }
  
  export class UnauthorizedError extends CustomError {
    constructor(message = 'Unauthorized') {
      super(message, 401);
    }
  }
  
  export class ForbiddenError extends CustomError {
    constructor(message = 'Forbidden') {
      super(message, 403);
    }
  }
  
  export class ConflictError extends CustomError {
    constructor(message = 'Conflict') {
      super(message, 409);
    }
  }
  