type TypeConstant = string;

type AsyncActionBuilderConstructor<T1 extends TypeConstant, T2 extends TypeConstant, T3 extends TypeConstant, P1, P2, P3> = {
  request: (...[data]: P1 extends undefined ? []: [P1]) => ({ type: T1, request: P1 | undefined }),
  success: (res: P2) => ({ type: T2, response: P2 }),
  error: (error: P3) => ({ type: T3, error: P3 }),
};

interface AsyncActionBuilder<T1 extends TypeConstant, T2 extends TypeConstant, T3 extends TypeConstant> {
  <P1, P2, P3>(): AsyncActionBuilderConstructor<T1, T2, T3, P1, P2, P3>;
}

export const createAction = <T1 extends TypeConstant, T2 extends TypeConstant, T3 extends TypeConstant>(requestType: T1, successType: T2, failureType: T3): AsyncActionBuilder<T1, T2, T3> => {
  return <P1, P2, P3>(): AsyncActionBuilderConstructor <T1, T2, T3, P1, P2, P3> => {
    return {
      request: (...[data]: P1 extends undefined ? []: [P1]) => ({ type: requestType, request: data }),
      success: (res: P2) => ({ type: successType, response: res }),
      error: (error: any) => ({ type: failureType, error: error }),
    };
  };
};
