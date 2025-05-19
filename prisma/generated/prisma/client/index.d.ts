
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model State
 * 
 */
export type State = $Result.DefaultSelection<Prisma.$StatePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Platform
 * 
 */
export type Platform = $Result.DefaultSelection<Prisma.$PlatformPayload>
/**
 * Model Executable
 * 
 */
export type Executable = $Result.DefaultSelection<Prisma.$ExecutablePayload>
/**
 * Model HistoryExecutable
 * 
 */
export type HistoryExecutable = $Result.DefaultSelection<Prisma.$HistoryExecutablePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Configuration
 * 
 */
export type Configuration = $Result.DefaultSelection<Prisma.$ConfigurationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Theme: {
  light: 'light',
  dark: 'dark',
  system: 'system'
};

export type Theme = (typeof Theme)[keyof typeof Theme]

}

export type Theme = $Enums.Theme

export const Theme: typeof $Enums.Theme

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more States
 * const states = await prisma.state.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more States
   * const states = await prisma.state.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.state`: Exposes CRUD operations for the **State** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.state.findMany()
    * ```
    */
  get state(): Prisma.StateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.platform`: Exposes CRUD operations for the **Platform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Platforms
    * const platforms = await prisma.platform.findMany()
    * ```
    */
  get platform(): Prisma.PlatformDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.executable`: Exposes CRUD operations for the **Executable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Executables
    * const executables = await prisma.executable.findMany()
    * ```
    */
  get executable(): Prisma.ExecutableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historyExecutable`: Exposes CRUD operations for the **HistoryExecutable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoryExecutables
    * const historyExecutables = await prisma.historyExecutable.findMany()
    * ```
    */
  get historyExecutable(): Prisma.HistoryExecutableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.configuration`: Exposes CRUD operations for the **Configuration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configurations
    * const configurations = await prisma.configuration.findMany()
    * ```
    */
  get configuration(): Prisma.ConfigurationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    State: 'State',
    Category: 'Category',
    Platform: 'Platform',
    Executable: 'Executable',
    HistoryExecutable: 'HistoryExecutable',
    User: 'User',
    Session: 'Session',
    Post: 'Post',
    Configuration: 'Configuration'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "state" | "category" | "platform" | "executable" | "historyExecutable" | "user" | "session" | "post" | "configuration"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      State: {
        payload: Prisma.$StatePayload<ExtArgs>
        fields: Prisma.StateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findFirst: {
            args: Prisma.StateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findMany: {
            args: Prisma.StateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          create: {
            args: Prisma.StateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          createMany: {
            args: Prisma.StateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          update: {
            args: Prisma.StateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          deleteMany: {
            args: Prisma.StateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          aggregate: {
            args: Prisma.StateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateState>
          }
          groupBy: {
            args: Prisma.StateGroupByArgs<ExtArgs>
            result: $Utils.Optional<StateGroupByOutputType>[]
          }
          count: {
            args: Prisma.StateCountArgs<ExtArgs>
            result: $Utils.Optional<StateCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Platform: {
        payload: Prisma.$PlatformPayload<ExtArgs>
        fields: Prisma.PlatformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          findFirst: {
            args: Prisma.PlatformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          findMany: {
            args: Prisma.PlatformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          create: {
            args: Prisma.PlatformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          createMany: {
            args: Prisma.PlatformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlatformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          update: {
            args: Prisma.PlatformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          deleteMany: {
            args: Prisma.PlatformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlatformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          aggregate: {
            args: Prisma.PlatformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatform>
          }
          groupBy: {
            args: Prisma.PlatformGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatformGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatformCountArgs<ExtArgs>
            result: $Utils.Optional<PlatformCountAggregateOutputType> | number
          }
        }
      }
      Executable: {
        payload: Prisma.$ExecutablePayload<ExtArgs>
        fields: Prisma.ExecutableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutablePayload>
          }
          findFirst: {
            args: Prisma.ExecutableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutablePayload>
          }
          findMany: {
            args: Prisma.ExecutableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutablePayload>[]
          }
          create: {
            args: Prisma.ExecutableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutablePayload>
          }
          createMany: {
            args: Prisma.ExecutableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExecutableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutablePayload>
          }
          update: {
            args: Prisma.ExecutableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutablePayload>
          }
          deleteMany: {
            args: Prisma.ExecutableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExecutableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutablePayload>
          }
          aggregate: {
            args: Prisma.ExecutableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecutable>
          }
          groupBy: {
            args: Prisma.ExecutableGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutableGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecutableCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutableCountAggregateOutputType> | number
          }
        }
      }
      HistoryExecutable: {
        payload: Prisma.$HistoryExecutablePayload<ExtArgs>
        fields: Prisma.HistoryExecutableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryExecutableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryExecutablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryExecutableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryExecutablePayload>
          }
          findFirst: {
            args: Prisma.HistoryExecutableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryExecutablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryExecutableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryExecutablePayload>
          }
          findMany: {
            args: Prisma.HistoryExecutableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryExecutablePayload>[]
          }
          create: {
            args: Prisma.HistoryExecutableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryExecutablePayload>
          }
          createMany: {
            args: Prisma.HistoryExecutableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HistoryExecutableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryExecutablePayload>
          }
          update: {
            args: Prisma.HistoryExecutableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryExecutablePayload>
          }
          deleteMany: {
            args: Prisma.HistoryExecutableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryExecutableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistoryExecutableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryExecutablePayload>
          }
          aggregate: {
            args: Prisma.HistoryExecutableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoryExecutable>
          }
          groupBy: {
            args: Prisma.HistoryExecutableGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryExecutableGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryExecutableCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryExecutableCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Configuration: {
        payload: Prisma.$ConfigurationPayload<ExtArgs>
        fields: Prisma.ConfigurationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfigurationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfigurationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          findFirst: {
            args: Prisma.ConfigurationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfigurationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          findMany: {
            args: Prisma.ConfigurationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>[]
          }
          create: {
            args: Prisma.ConfigurationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          createMany: {
            args: Prisma.ConfigurationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConfigurationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          update: {
            args: Prisma.ConfigurationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          deleteMany: {
            args: Prisma.ConfigurationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfigurationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConfigurationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          aggregate: {
            args: Prisma.ConfigurationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguration>
          }
          groupBy: {
            args: Prisma.ConfigurationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfigurationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfigurationCountArgs<ExtArgs>
            result: $Utils.Optional<ConfigurationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    state?: StateOmit
    category?: CategoryOmit
    platform?: PlatformOmit
    executable?: ExecutableOmit
    historyExecutable?: HistoryExecutableOmit
    user?: UserOmit
    session?: SessionOmit
    post?: PostOmit
    configuration?: ConfigurationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StateCountOutputType
   */

  export type StateCountOutputType = {
    user: number
    executable: number
  }

  export type StateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | StateCountOutputTypeCountUserArgs
    executable?: boolean | StateCountOutputTypeCountExecutableArgs
  }

  // Custom InputTypes
  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateCountOutputType
     */
    select?: StateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeCountExecutableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutableWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    Platform: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Platform?: boolean | CategoryCountOutputTypeCountPlatformArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPlatformArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformWhereInput
  }


  /**
   * Count Type PlatformCountOutputType
   */

  export type PlatformCountOutputType = {
    historyExecutable: number
  }

  export type PlatformCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historyExecutable?: boolean | PlatformCountOutputTypeCountHistoryExecutableArgs
  }

  // Custom InputTypes
  /**
   * PlatformCountOutputType without action
   */
  export type PlatformCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCountOutputType
     */
    select?: PlatformCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlatformCountOutputType without action
   */
  export type PlatformCountOutputTypeCountHistoryExecutableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryExecutableWhereInput
  }


  /**
   * Count Type ExecutableCountOutputType
   */

  export type ExecutableCountOutputType = {
    posts: number
    history: number
  }

  export type ExecutableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | ExecutableCountOutputTypeCountPostsArgs
    history?: boolean | ExecutableCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * ExecutableCountOutputType without action
   */
  export type ExecutableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutableCountOutputType
     */
    select?: ExecutableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExecutableCountOutputType without action
   */
  export type ExecutableCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * ExecutableCountOutputType without action
   */
  export type ExecutableCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryExecutableWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    posts: number
    history: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    history?: boolean | UserCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryExecutableWhereInput
  }


  /**
   * Models
   */

  /**
   * Model State
   */

  export type AggregateState = {
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  export type StateAvgAggregateOutputType = {
    id: number | null
  }

  export type StateSumAggregateOutputType = {
    id: number | null
  }

  export type StateMinAggregateOutputType = {
    id: number | null
    state: string | null
  }

  export type StateMaxAggregateOutputType = {
    id: number | null
    state: string | null
  }

  export type StateCountAggregateOutputType = {
    id: number
    state: number
    _all: number
  }


  export type StateAvgAggregateInputType = {
    id?: true
  }

  export type StateSumAggregateInputType = {
    id?: true
  }

  export type StateMinAggregateInputType = {
    id?: true
    state?: true
  }

  export type StateMaxAggregateInputType = {
    id?: true
    state?: true
  }

  export type StateCountAggregateInputType = {
    id?: true
    state?: true
    _all?: true
  }

  export type StateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which State to aggregate.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned States
    **/
    _count?: true | StateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateMaxAggregateInputType
  }

  export type GetStateAggregateType<T extends StateAggregateArgs> = {
        [P in keyof T & keyof AggregateState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateState[P]>
      : GetScalarType<T[P], AggregateState[P]>
  }




  export type StateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateWhereInput
    orderBy?: StateOrderByWithAggregationInput | StateOrderByWithAggregationInput[]
    by: StateScalarFieldEnum[] | StateScalarFieldEnum
    having?: StateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateCountAggregateInputType | true
    _avg?: StateAvgAggregateInputType
    _sum?: StateSumAggregateInputType
    _min?: StateMinAggregateInputType
    _max?: StateMaxAggregateInputType
  }

  export type StateGroupByOutputType = {
    id: number
    state: string
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  type GetStateGroupByPayload<T extends StateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateGroupByOutputType[P]>
            : GetScalarType<T[P], StateGroupByOutputType[P]>
        }
      >
    >


  export type StateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state?: boolean
    user?: boolean | State$userArgs<ExtArgs>
    executable?: boolean | State$executableArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["state"]>



  export type StateSelectScalar = {
    id?: boolean
    state?: boolean
  }

  export type StateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "state", ExtArgs["result"]["state"]>
  export type StateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | State$userArgs<ExtArgs>
    executable?: boolean | State$executableArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "State"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
      executable: Prisma.$ExecutablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      state: string
    }, ExtArgs["result"]["state"]>
    composites: {}
  }

  type StateGetPayload<S extends boolean | null | undefined | StateDefaultArgs> = $Result.GetResult<Prisma.$StatePayload, S>

  type StateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StateCountAggregateInputType | true
    }

  export interface StateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['State'], meta: { name: 'State' } }
    /**
     * Find zero or one State that matches the filter.
     * @param {StateFindUniqueArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StateFindUniqueArgs>(args: SelectSubset<T, StateFindUniqueArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one State that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StateFindUniqueOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StateFindUniqueOrThrowArgs>(args: SelectSubset<T, StateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StateFindFirstArgs>(args?: SelectSubset<T, StateFindFirstArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StateFindFirstOrThrowArgs>(args?: SelectSubset<T, StateFindFirstOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.state.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.state.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateWithIdOnly = await prisma.state.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StateFindManyArgs>(args?: SelectSubset<T, StateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a State.
     * @param {StateCreateArgs} args - Arguments to create a State.
     * @example
     * // Create one State
     * const State = await prisma.state.create({
     *   data: {
     *     // ... data to create a State
     *   }
     * })
     * 
     */
    create<T extends StateCreateArgs>(args: SelectSubset<T, StateCreateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many States.
     * @param {StateCreateManyArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StateCreateManyArgs>(args?: SelectSubset<T, StateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a State.
     * @param {StateDeleteArgs} args - Arguments to delete one State.
     * @example
     * // Delete one State
     * const State = await prisma.state.delete({
     *   where: {
     *     // ... filter to delete one State
     *   }
     * })
     * 
     */
    delete<T extends StateDeleteArgs>(args: SelectSubset<T, StateDeleteArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one State.
     * @param {StateUpdateArgs} args - Arguments to update one State.
     * @example
     * // Update one State
     * const state = await prisma.state.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StateUpdateArgs>(args: SelectSubset<T, StateUpdateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more States.
     * @param {StateDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.state.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StateDeleteManyArgs>(args?: SelectSubset<T, StateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const state = await prisma.state.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StateUpdateManyArgs>(args: SelectSubset<T, StateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one State.
     * @param {StateUpsertArgs} args - Arguments to update or create a State.
     * @example
     * // Update or create a State
     * const state = await prisma.state.upsert({
     *   create: {
     *     // ... data to create a State
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the State we want to update
     *   }
     * })
     */
    upsert<T extends StateUpsertArgs>(args: SelectSubset<T, StateUpsertArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.state.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends StateCountArgs>(
      args?: Subset<T, StateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StateAggregateArgs>(args: Subset<T, StateAggregateArgs>): Prisma.PrismaPromise<GetStateAggregateType<T>>

    /**
     * Group by State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateGroupByArgs['orderBy'] }
        : { orderBy?: StateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the State model
   */
  readonly fields: StateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for State.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends State$userArgs<ExtArgs> = {}>(args?: Subset<T, State$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    executable<T extends State$executableArgs<ExtArgs> = {}>(args?: Subset<T, State$executableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the State model
   */
  interface StateFieldRefs {
    readonly id: FieldRef<"State", 'Int'>
    readonly state: FieldRef<"State", 'String'>
  }
    

  // Custom InputTypes
  /**
   * State findUnique
   */
  export type StateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findUniqueOrThrow
   */
  export type StateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findFirst
   */
  export type StateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findFirstOrThrow
   */
  export type StateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findMany
   */
  export type StateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which States to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State create
   */
  export type StateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to create a State.
     */
    data?: XOR<StateCreateInput, StateUncheckedCreateInput>
  }

  /**
   * State createMany
   */
  export type StateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State update
   */
  export type StateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to update a State.
     */
    data: XOR<StateUpdateInput, StateUncheckedUpdateInput>
    /**
     * Choose, which State to update.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State updateMany
   */
  export type StateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
    /**
     * Limit how many States to update.
     */
    limit?: number
  }

  /**
   * State upsert
   */
  export type StateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The filter to search for the State to update in case it exists.
     */
    where: StateWhereUniqueInput
    /**
     * In case the State found by the `where` argument doesn't exist, create a new State with this data.
     */
    create: XOR<StateCreateInput, StateUncheckedCreateInput>
    /**
     * In case the State was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StateUpdateInput, StateUncheckedUpdateInput>
  }

  /**
   * State delete
   */
  export type StateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter which State to delete.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State deleteMany
   */
  export type StateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which States to delete
     */
    where?: StateWhereInput
    /**
     * Limit how many States to delete.
     */
    limit?: number
  }

  /**
   * State.user
   */
  export type State$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * State.executable
   */
  export type State$executableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executable
     */
    select?: ExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executable
     */
    omit?: ExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutableInclude<ExtArgs> | null
    where?: ExecutableWhereInput
    orderBy?: ExecutableOrderByWithRelationInput | ExecutableOrderByWithRelationInput[]
    cursor?: ExecutableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutableScalarFieldEnum | ExecutableScalarFieldEnum[]
  }

  /**
   * State without action
   */
  export type StateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Platform?: boolean | Category$PlatformArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Platform?: boolean | Category$PlatformArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      Platform: Prisma.$PlatformPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Platform<T extends Category$PlatformArgs<ExtArgs> = {}>(args?: Subset<T, Category$PlatformArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.Platform
   */
  export type Category$PlatformArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    where?: PlatformWhereInput
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    cursor?: PlatformWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Platform
   */

  export type AggregatePlatform = {
    _count: PlatformCountAggregateOutputType | null
    _avg: PlatformAvgAggregateOutputType | null
    _sum: PlatformSumAggregateOutputType | null
    _min: PlatformMinAggregateOutputType | null
    _max: PlatformMaxAggregateOutputType | null
  }

  export type PlatformAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type PlatformSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type PlatformMinAggregateOutputType = {
    id: number | null
    name: string | null
    categoryId: number | null
  }

  export type PlatformMaxAggregateOutputType = {
    id: number | null
    name: string | null
    categoryId: number | null
  }

  export type PlatformCountAggregateOutputType = {
    id: number
    name: number
    categoryId: number
    _all: number
  }


  export type PlatformAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type PlatformSumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type PlatformMinAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
  }

  export type PlatformMaxAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
  }

  export type PlatformCountAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    _all?: true
  }

  export type PlatformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platform to aggregate.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Platforms
    **/
    _count?: true | PlatformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlatformAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlatformSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformMaxAggregateInputType
  }

  export type GetPlatformAggregateType<T extends PlatformAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatform[P]>
      : GetScalarType<T[P], AggregatePlatform[P]>
  }




  export type PlatformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformWhereInput
    orderBy?: PlatformOrderByWithAggregationInput | PlatformOrderByWithAggregationInput[]
    by: PlatformScalarFieldEnum[] | PlatformScalarFieldEnum
    having?: PlatformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformCountAggregateInputType | true
    _avg?: PlatformAvgAggregateInputType
    _sum?: PlatformSumAggregateInputType
    _min?: PlatformMinAggregateInputType
    _max?: PlatformMaxAggregateInputType
  }

  export type PlatformGroupByOutputType = {
    id: number
    name: string
    categoryId: number
    _count: PlatformCountAggregateOutputType | null
    _avg: PlatformAvgAggregateOutputType | null
    _sum: PlatformSumAggregateOutputType | null
    _min: PlatformMinAggregateOutputType | null
    _max: PlatformMaxAggregateOutputType | null
  }

  type GetPlatformGroupByPayload<T extends PlatformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformGroupByOutputType[P]>
        }
      >
    >


  export type PlatformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    historyExecutable?: boolean | Platform$historyExecutableArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    _count?: boolean | PlatformCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platform"]>



  export type PlatformSelectScalar = {
    id?: boolean
    name?: boolean
    categoryId?: boolean
  }

  export type PlatformOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "categoryId", ExtArgs["result"]["platform"]>
  export type PlatformInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historyExecutable?: boolean | Platform$historyExecutableArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    _count?: boolean | PlatformCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PlatformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Platform"
    objects: {
      historyExecutable: Prisma.$HistoryExecutablePayload<ExtArgs>[]
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      categoryId: number
    }, ExtArgs["result"]["platform"]>
    composites: {}
  }

  type PlatformGetPayload<S extends boolean | null | undefined | PlatformDefaultArgs> = $Result.GetResult<Prisma.$PlatformPayload, S>

  type PlatformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatformFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatformCountAggregateInputType | true
    }

  export interface PlatformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Platform'], meta: { name: 'Platform' } }
    /**
     * Find zero or one Platform that matches the filter.
     * @param {PlatformFindUniqueArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformFindUniqueArgs>(args: SelectSubset<T, PlatformFindUniqueArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Platform that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatformFindUniqueOrThrowArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindFirstArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformFindFirstArgs>(args?: SelectSubset<T, PlatformFindFirstArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindFirstOrThrowArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatformFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Platforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Platforms
     * const platforms = await prisma.platform.findMany()
     * 
     * // Get first 10 Platforms
     * const platforms = await prisma.platform.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platformWithIdOnly = await prisma.platform.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatformFindManyArgs>(args?: SelectSubset<T, PlatformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Platform.
     * @param {PlatformCreateArgs} args - Arguments to create a Platform.
     * @example
     * // Create one Platform
     * const Platform = await prisma.platform.create({
     *   data: {
     *     // ... data to create a Platform
     *   }
     * })
     * 
     */
    create<T extends PlatformCreateArgs>(args: SelectSubset<T, PlatformCreateArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Platforms.
     * @param {PlatformCreateManyArgs} args - Arguments to create many Platforms.
     * @example
     * // Create many Platforms
     * const platform = await prisma.platform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatformCreateManyArgs>(args?: SelectSubset<T, PlatformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Platform.
     * @param {PlatformDeleteArgs} args - Arguments to delete one Platform.
     * @example
     * // Delete one Platform
     * const Platform = await prisma.platform.delete({
     *   where: {
     *     // ... filter to delete one Platform
     *   }
     * })
     * 
     */
    delete<T extends PlatformDeleteArgs>(args: SelectSubset<T, PlatformDeleteArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Platform.
     * @param {PlatformUpdateArgs} args - Arguments to update one Platform.
     * @example
     * // Update one Platform
     * const platform = await prisma.platform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatformUpdateArgs>(args: SelectSubset<T, PlatformUpdateArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Platforms.
     * @param {PlatformDeleteManyArgs} args - Arguments to filter Platforms to delete.
     * @example
     * // Delete a few Platforms
     * const { count } = await prisma.platform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatformDeleteManyArgs>(args?: SelectSubset<T, PlatformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Platforms
     * const platform = await prisma.platform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatformUpdateManyArgs>(args: SelectSubset<T, PlatformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Platform.
     * @param {PlatformUpsertArgs} args - Arguments to update or create a Platform.
     * @example
     * // Update or create a Platform
     * const platform = await prisma.platform.upsert({
     *   create: {
     *     // ... data to create a Platform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Platform we want to update
     *   }
     * })
     */
    upsert<T extends PlatformUpsertArgs>(args: SelectSubset<T, PlatformUpsertArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformCountArgs} args - Arguments to filter Platforms to count.
     * @example
     * // Count the number of Platforms
     * const count = await prisma.platform.count({
     *   where: {
     *     // ... the filter for the Platforms we want to count
     *   }
     * })
    **/
    count<T extends PlatformCountArgs>(
      args?: Subset<T, PlatformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Platform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlatformAggregateArgs>(args: Subset<T, PlatformAggregateArgs>): Prisma.PrismaPromise<GetPlatformAggregateType<T>>

    /**
     * Group by Platform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlatformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformGroupByArgs['orderBy'] }
        : { orderBy?: PlatformGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlatformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Platform model
   */
  readonly fields: PlatformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Platform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historyExecutable<T extends Platform$historyExecutableArgs<ExtArgs> = {}>(args?: Subset<T, Platform$historyExecutableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryExecutablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Platform model
   */
  interface PlatformFieldRefs {
    readonly id: FieldRef<"Platform", 'Int'>
    readonly name: FieldRef<"Platform", 'String'>
    readonly categoryId: FieldRef<"Platform", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Platform findUnique
   */
  export type PlatformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform findUniqueOrThrow
   */
  export type PlatformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform findFirst
   */
  export type PlatformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform findFirstOrThrow
   */
  export type PlatformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform findMany
   */
  export type PlatformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platforms to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform create
   */
  export type PlatformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The data needed to create a Platform.
     */
    data: XOR<PlatformCreateInput, PlatformUncheckedCreateInput>
  }

  /**
   * Platform createMany
   */
  export type PlatformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Platforms.
     */
    data: PlatformCreateManyInput | PlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Platform update
   */
  export type PlatformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The data needed to update a Platform.
     */
    data: XOR<PlatformUpdateInput, PlatformUncheckedUpdateInput>
    /**
     * Choose, which Platform to update.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform updateMany
   */
  export type PlatformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Platforms.
     */
    data: XOR<PlatformUpdateManyMutationInput, PlatformUncheckedUpdateManyInput>
    /**
     * Filter which Platforms to update
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to update.
     */
    limit?: number
  }

  /**
   * Platform upsert
   */
  export type PlatformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The filter to search for the Platform to update in case it exists.
     */
    where: PlatformWhereUniqueInput
    /**
     * In case the Platform found by the `where` argument doesn't exist, create a new Platform with this data.
     */
    create: XOR<PlatformCreateInput, PlatformUncheckedCreateInput>
    /**
     * In case the Platform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformUpdateInput, PlatformUncheckedUpdateInput>
  }

  /**
   * Platform delete
   */
  export type PlatformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter which Platform to delete.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform deleteMany
   */
  export type PlatformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platforms to delete
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to delete.
     */
    limit?: number
  }

  /**
   * Platform.historyExecutable
   */
  export type Platform$historyExecutableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryExecutable
     */
    select?: HistoryExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryExecutable
     */
    omit?: HistoryExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryExecutableInclude<ExtArgs> | null
    where?: HistoryExecutableWhereInput
    orderBy?: HistoryExecutableOrderByWithRelationInput | HistoryExecutableOrderByWithRelationInput[]
    cursor?: HistoryExecutableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryExecutableScalarFieldEnum | HistoryExecutableScalarFieldEnum[]
  }

  /**
   * Platform without action
   */
  export type PlatformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
  }


  /**
   * Model Executable
   */

  export type AggregateExecutable = {
    _count: ExecutableCountAggregateOutputType | null
    _avg: ExecutableAvgAggregateOutputType | null
    _sum: ExecutableSumAggregateOutputType | null
    _min: ExecutableMinAggregateOutputType | null
    _max: ExecutableMaxAggregateOutputType | null
  }

  export type ExecutableAvgAggregateOutputType = {
    stateId: number | null
  }

  export type ExecutableSumAggregateOutputType = {
    stateId: number | null
  }

  export type ExecutableMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type_app: string | null
    stateId: number | null
  }

  export type ExecutableMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type_app: string | null
    stateId: number | null
  }

  export type ExecutableCountAggregateOutputType = {
    id: number
    name: number
    description: number
    type_app: number
    stateId: number
    _all: number
  }


  export type ExecutableAvgAggregateInputType = {
    stateId?: true
  }

  export type ExecutableSumAggregateInputType = {
    stateId?: true
  }

  export type ExecutableMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type_app?: true
    stateId?: true
  }

  export type ExecutableMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type_app?: true
    stateId?: true
  }

  export type ExecutableCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type_app?: true
    stateId?: true
    _all?: true
  }

  export type ExecutableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Executable to aggregate.
     */
    where?: ExecutableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executables to fetch.
     */
    orderBy?: ExecutableOrderByWithRelationInput | ExecutableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Executables
    **/
    _count?: true | ExecutableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExecutableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExecutableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutableMaxAggregateInputType
  }

  export type GetExecutableAggregateType<T extends ExecutableAggregateArgs> = {
        [P in keyof T & keyof AggregateExecutable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecutable[P]>
      : GetScalarType<T[P], AggregateExecutable[P]>
  }




  export type ExecutableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutableWhereInput
    orderBy?: ExecutableOrderByWithAggregationInput | ExecutableOrderByWithAggregationInput[]
    by: ExecutableScalarFieldEnum[] | ExecutableScalarFieldEnum
    having?: ExecutableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutableCountAggregateInputType | true
    _avg?: ExecutableAvgAggregateInputType
    _sum?: ExecutableSumAggregateInputType
    _min?: ExecutableMinAggregateInputType
    _max?: ExecutableMaxAggregateInputType
  }

  export type ExecutableGroupByOutputType = {
    id: string
    name: string
    description: string
    type_app: string
    stateId: number
    _count: ExecutableCountAggregateOutputType | null
    _avg: ExecutableAvgAggregateOutputType | null
    _sum: ExecutableSumAggregateOutputType | null
    _min: ExecutableMinAggregateOutputType | null
    _max: ExecutableMaxAggregateOutputType | null
  }

  type GetExecutableGroupByPayload<T extends ExecutableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutableGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutableGroupByOutputType[P]>
        }
      >
    >


  export type ExecutableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type_app?: boolean
    stateId?: boolean
    state?: boolean | StateDefaultArgs<ExtArgs>
    posts?: boolean | Executable$postsArgs<ExtArgs>
    history?: boolean | Executable$historyArgs<ExtArgs>
    _count?: boolean | ExecutableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executable"]>



  export type ExecutableSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    type_app?: boolean
    stateId?: boolean
  }

  export type ExecutableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "type_app" | "stateId", ExtArgs["result"]["executable"]>
  export type ExecutableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | StateDefaultArgs<ExtArgs>
    posts?: boolean | Executable$postsArgs<ExtArgs>
    history?: boolean | Executable$historyArgs<ExtArgs>
    _count?: boolean | ExecutableCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ExecutablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Executable"
    objects: {
      state: Prisma.$StatePayload<ExtArgs>
      posts: Prisma.$PostPayload<ExtArgs>[]
      history: Prisma.$HistoryExecutablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      type_app: string
      stateId: number
    }, ExtArgs["result"]["executable"]>
    composites: {}
  }

  type ExecutableGetPayload<S extends boolean | null | undefined | ExecutableDefaultArgs> = $Result.GetResult<Prisma.$ExecutablePayload, S>

  type ExecutableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExecutableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExecutableCountAggregateInputType | true
    }

  export interface ExecutableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Executable'], meta: { name: 'Executable' } }
    /**
     * Find zero or one Executable that matches the filter.
     * @param {ExecutableFindUniqueArgs} args - Arguments to find a Executable
     * @example
     * // Get one Executable
     * const executable = await prisma.executable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecutableFindUniqueArgs>(args: SelectSubset<T, ExecutableFindUniqueArgs<ExtArgs>>): Prisma__ExecutableClient<$Result.GetResult<Prisma.$ExecutablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Executable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExecutableFindUniqueOrThrowArgs} args - Arguments to find a Executable
     * @example
     * // Get one Executable
     * const executable = await prisma.executable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecutableFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecutableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecutableClient<$Result.GetResult<Prisma.$ExecutablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Executable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutableFindFirstArgs} args - Arguments to find a Executable
     * @example
     * // Get one Executable
     * const executable = await prisma.executable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecutableFindFirstArgs>(args?: SelectSubset<T, ExecutableFindFirstArgs<ExtArgs>>): Prisma__ExecutableClient<$Result.GetResult<Prisma.$ExecutablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Executable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutableFindFirstOrThrowArgs} args - Arguments to find a Executable
     * @example
     * // Get one Executable
     * const executable = await prisma.executable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecutableFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecutableFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecutableClient<$Result.GetResult<Prisma.$ExecutablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Executables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Executables
     * const executables = await prisma.executable.findMany()
     * 
     * // Get first 10 Executables
     * const executables = await prisma.executable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executableWithIdOnly = await prisma.executable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecutableFindManyArgs>(args?: SelectSubset<T, ExecutableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Executable.
     * @param {ExecutableCreateArgs} args - Arguments to create a Executable.
     * @example
     * // Create one Executable
     * const Executable = await prisma.executable.create({
     *   data: {
     *     // ... data to create a Executable
     *   }
     * })
     * 
     */
    create<T extends ExecutableCreateArgs>(args: SelectSubset<T, ExecutableCreateArgs<ExtArgs>>): Prisma__ExecutableClient<$Result.GetResult<Prisma.$ExecutablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Executables.
     * @param {ExecutableCreateManyArgs} args - Arguments to create many Executables.
     * @example
     * // Create many Executables
     * const executable = await prisma.executable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecutableCreateManyArgs>(args?: SelectSubset<T, ExecutableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Executable.
     * @param {ExecutableDeleteArgs} args - Arguments to delete one Executable.
     * @example
     * // Delete one Executable
     * const Executable = await prisma.executable.delete({
     *   where: {
     *     // ... filter to delete one Executable
     *   }
     * })
     * 
     */
    delete<T extends ExecutableDeleteArgs>(args: SelectSubset<T, ExecutableDeleteArgs<ExtArgs>>): Prisma__ExecutableClient<$Result.GetResult<Prisma.$ExecutablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Executable.
     * @param {ExecutableUpdateArgs} args - Arguments to update one Executable.
     * @example
     * // Update one Executable
     * const executable = await prisma.executable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecutableUpdateArgs>(args: SelectSubset<T, ExecutableUpdateArgs<ExtArgs>>): Prisma__ExecutableClient<$Result.GetResult<Prisma.$ExecutablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Executables.
     * @param {ExecutableDeleteManyArgs} args - Arguments to filter Executables to delete.
     * @example
     * // Delete a few Executables
     * const { count } = await prisma.executable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecutableDeleteManyArgs>(args?: SelectSubset<T, ExecutableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Executables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Executables
     * const executable = await prisma.executable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecutableUpdateManyArgs>(args: SelectSubset<T, ExecutableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Executable.
     * @param {ExecutableUpsertArgs} args - Arguments to update or create a Executable.
     * @example
     * // Update or create a Executable
     * const executable = await prisma.executable.upsert({
     *   create: {
     *     // ... data to create a Executable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Executable we want to update
     *   }
     * })
     */
    upsert<T extends ExecutableUpsertArgs>(args: SelectSubset<T, ExecutableUpsertArgs<ExtArgs>>): Prisma__ExecutableClient<$Result.GetResult<Prisma.$ExecutablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Executables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutableCountArgs} args - Arguments to filter Executables to count.
     * @example
     * // Count the number of Executables
     * const count = await prisma.executable.count({
     *   where: {
     *     // ... the filter for the Executables we want to count
     *   }
     * })
    **/
    count<T extends ExecutableCountArgs>(
      args?: Subset<T, ExecutableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Executable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExecutableAggregateArgs>(args: Subset<T, ExecutableAggregateArgs>): Prisma.PrismaPromise<GetExecutableAggregateType<T>>

    /**
     * Group by Executable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExecutableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutableGroupByArgs['orderBy'] }
        : { orderBy?: ExecutableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExecutableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Executable model
   */
  readonly fields: ExecutableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Executable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    state<T extends StateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StateDefaultArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    posts<T extends Executable$postsArgs<ExtArgs> = {}>(args?: Subset<T, Executable$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends Executable$historyArgs<ExtArgs> = {}>(args?: Subset<T, Executable$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryExecutablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Executable model
   */
  interface ExecutableFieldRefs {
    readonly id: FieldRef<"Executable", 'String'>
    readonly name: FieldRef<"Executable", 'String'>
    readonly description: FieldRef<"Executable", 'String'>
    readonly type_app: FieldRef<"Executable", 'String'>
    readonly stateId: FieldRef<"Executable", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Executable findUnique
   */
  export type ExecutableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executable
     */
    select?: ExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executable
     */
    omit?: ExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutableInclude<ExtArgs> | null
    /**
     * Filter, which Executable to fetch.
     */
    where: ExecutableWhereUniqueInput
  }

  /**
   * Executable findUniqueOrThrow
   */
  export type ExecutableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executable
     */
    select?: ExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executable
     */
    omit?: ExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutableInclude<ExtArgs> | null
    /**
     * Filter, which Executable to fetch.
     */
    where: ExecutableWhereUniqueInput
  }

  /**
   * Executable findFirst
   */
  export type ExecutableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executable
     */
    select?: ExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executable
     */
    omit?: ExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutableInclude<ExtArgs> | null
    /**
     * Filter, which Executable to fetch.
     */
    where?: ExecutableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executables to fetch.
     */
    orderBy?: ExecutableOrderByWithRelationInput | ExecutableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Executables.
     */
    cursor?: ExecutableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Executables.
     */
    distinct?: ExecutableScalarFieldEnum | ExecutableScalarFieldEnum[]
  }

  /**
   * Executable findFirstOrThrow
   */
  export type ExecutableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executable
     */
    select?: ExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executable
     */
    omit?: ExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutableInclude<ExtArgs> | null
    /**
     * Filter, which Executable to fetch.
     */
    where?: ExecutableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executables to fetch.
     */
    orderBy?: ExecutableOrderByWithRelationInput | ExecutableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Executables.
     */
    cursor?: ExecutableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Executables.
     */
    distinct?: ExecutableScalarFieldEnum | ExecutableScalarFieldEnum[]
  }

  /**
   * Executable findMany
   */
  export type ExecutableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executable
     */
    select?: ExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executable
     */
    omit?: ExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutableInclude<ExtArgs> | null
    /**
     * Filter, which Executables to fetch.
     */
    where?: ExecutableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executables to fetch.
     */
    orderBy?: ExecutableOrderByWithRelationInput | ExecutableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Executables.
     */
    cursor?: ExecutableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executables.
     */
    skip?: number
    distinct?: ExecutableScalarFieldEnum | ExecutableScalarFieldEnum[]
  }

  /**
   * Executable create
   */
  export type ExecutableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executable
     */
    select?: ExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executable
     */
    omit?: ExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutableInclude<ExtArgs> | null
    /**
     * The data needed to create a Executable.
     */
    data: XOR<ExecutableCreateInput, ExecutableUncheckedCreateInput>
  }

  /**
   * Executable createMany
   */
  export type ExecutableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Executables.
     */
    data: ExecutableCreateManyInput | ExecutableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Executable update
   */
  export type ExecutableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executable
     */
    select?: ExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executable
     */
    omit?: ExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutableInclude<ExtArgs> | null
    /**
     * The data needed to update a Executable.
     */
    data: XOR<ExecutableUpdateInput, ExecutableUncheckedUpdateInput>
    /**
     * Choose, which Executable to update.
     */
    where: ExecutableWhereUniqueInput
  }

  /**
   * Executable updateMany
   */
  export type ExecutableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Executables.
     */
    data: XOR<ExecutableUpdateManyMutationInput, ExecutableUncheckedUpdateManyInput>
    /**
     * Filter which Executables to update
     */
    where?: ExecutableWhereInput
    /**
     * Limit how many Executables to update.
     */
    limit?: number
  }

  /**
   * Executable upsert
   */
  export type ExecutableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executable
     */
    select?: ExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executable
     */
    omit?: ExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutableInclude<ExtArgs> | null
    /**
     * The filter to search for the Executable to update in case it exists.
     */
    where: ExecutableWhereUniqueInput
    /**
     * In case the Executable found by the `where` argument doesn't exist, create a new Executable with this data.
     */
    create: XOR<ExecutableCreateInput, ExecutableUncheckedCreateInput>
    /**
     * In case the Executable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutableUpdateInput, ExecutableUncheckedUpdateInput>
  }

  /**
   * Executable delete
   */
  export type ExecutableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executable
     */
    select?: ExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executable
     */
    omit?: ExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutableInclude<ExtArgs> | null
    /**
     * Filter which Executable to delete.
     */
    where: ExecutableWhereUniqueInput
  }

  /**
   * Executable deleteMany
   */
  export type ExecutableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Executables to delete
     */
    where?: ExecutableWhereInput
    /**
     * Limit how many Executables to delete.
     */
    limit?: number
  }

  /**
   * Executable.posts
   */
  export type Executable$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Executable.history
   */
  export type Executable$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryExecutable
     */
    select?: HistoryExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryExecutable
     */
    omit?: HistoryExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryExecutableInclude<ExtArgs> | null
    where?: HistoryExecutableWhereInput
    orderBy?: HistoryExecutableOrderByWithRelationInput | HistoryExecutableOrderByWithRelationInput[]
    cursor?: HistoryExecutableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryExecutableScalarFieldEnum | HistoryExecutableScalarFieldEnum[]
  }

  /**
   * Executable without action
   */
  export type ExecutableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executable
     */
    select?: ExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executable
     */
    omit?: ExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutableInclude<ExtArgs> | null
  }


  /**
   * Model HistoryExecutable
   */

  export type AggregateHistoryExecutable = {
    _count: HistoryExecutableCountAggregateOutputType | null
    _avg: HistoryExecutableAvgAggregateOutputType | null
    _sum: HistoryExecutableSumAggregateOutputType | null
    _min: HistoryExecutableMinAggregateOutputType | null
    _max: HistoryExecutableMaxAggregateOutputType | null
  }

  export type HistoryExecutableAvgAggregateOutputType = {
    userId: number | null
    platformId: number | null
  }

  export type HistoryExecutableSumAggregateOutputType = {
    userId: number | null
    platformId: number | null
  }

  export type HistoryExecutableMinAggregateOutputType = {
    id: string | null
    executableId: string | null
    pathExecutable: string | null
    filename: string | null
    version: string | null
    createdAt: Date | null
    userId: number | null
    platformId: number | null
  }

  export type HistoryExecutableMaxAggregateOutputType = {
    id: string | null
    executableId: string | null
    pathExecutable: string | null
    filename: string | null
    version: string | null
    createdAt: Date | null
    userId: number | null
    platformId: number | null
  }

  export type HistoryExecutableCountAggregateOutputType = {
    id: number
    executableId: number
    pathExecutable: number
    filename: number
    version: number
    createdAt: number
    userId: number
    platformId: number
    _all: number
  }


  export type HistoryExecutableAvgAggregateInputType = {
    userId?: true
    platformId?: true
  }

  export type HistoryExecutableSumAggregateInputType = {
    userId?: true
    platformId?: true
  }

  export type HistoryExecutableMinAggregateInputType = {
    id?: true
    executableId?: true
    pathExecutable?: true
    filename?: true
    version?: true
    createdAt?: true
    userId?: true
    platformId?: true
  }

  export type HistoryExecutableMaxAggregateInputType = {
    id?: true
    executableId?: true
    pathExecutable?: true
    filename?: true
    version?: true
    createdAt?: true
    userId?: true
    platformId?: true
  }

  export type HistoryExecutableCountAggregateInputType = {
    id?: true
    executableId?: true
    pathExecutable?: true
    filename?: true
    version?: true
    createdAt?: true
    userId?: true
    platformId?: true
    _all?: true
  }

  export type HistoryExecutableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryExecutable to aggregate.
     */
    where?: HistoryExecutableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryExecutables to fetch.
     */
    orderBy?: HistoryExecutableOrderByWithRelationInput | HistoryExecutableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryExecutableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryExecutables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryExecutables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoryExecutables
    **/
    _count?: true | HistoryExecutableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoryExecutableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoryExecutableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryExecutableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryExecutableMaxAggregateInputType
  }

  export type GetHistoryExecutableAggregateType<T extends HistoryExecutableAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoryExecutable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoryExecutable[P]>
      : GetScalarType<T[P], AggregateHistoryExecutable[P]>
  }




  export type HistoryExecutableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryExecutableWhereInput
    orderBy?: HistoryExecutableOrderByWithAggregationInput | HistoryExecutableOrderByWithAggregationInput[]
    by: HistoryExecutableScalarFieldEnum[] | HistoryExecutableScalarFieldEnum
    having?: HistoryExecutableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryExecutableCountAggregateInputType | true
    _avg?: HistoryExecutableAvgAggregateInputType
    _sum?: HistoryExecutableSumAggregateInputType
    _min?: HistoryExecutableMinAggregateInputType
    _max?: HistoryExecutableMaxAggregateInputType
  }

  export type HistoryExecutableGroupByOutputType = {
    id: string
    executableId: string
    pathExecutable: string
    filename: string
    version: string
    createdAt: Date
    userId: number
    platformId: number
    _count: HistoryExecutableCountAggregateOutputType | null
    _avg: HistoryExecutableAvgAggregateOutputType | null
    _sum: HistoryExecutableSumAggregateOutputType | null
    _min: HistoryExecutableMinAggregateOutputType | null
    _max: HistoryExecutableMaxAggregateOutputType | null
  }

  type GetHistoryExecutableGroupByPayload<T extends HistoryExecutableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryExecutableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryExecutableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryExecutableGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryExecutableGroupByOutputType[P]>
        }
      >
    >


  export type HistoryExecutableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    executableId?: boolean
    pathExecutable?: boolean
    filename?: boolean
    version?: boolean
    createdAt?: boolean
    userId?: boolean
    platformId?: boolean
    executable?: boolean | ExecutableDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyExecutable"]>



  export type HistoryExecutableSelectScalar = {
    id?: boolean
    executableId?: boolean
    pathExecutable?: boolean
    filename?: boolean
    version?: boolean
    createdAt?: boolean
    userId?: boolean
    platformId?: boolean
  }

  export type HistoryExecutableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "executableId" | "pathExecutable" | "filename" | "version" | "createdAt" | "userId" | "platformId", ExtArgs["result"]["historyExecutable"]>
  export type HistoryExecutableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executable?: boolean | ExecutableDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }

  export type $HistoryExecutablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoryExecutable"
    objects: {
      executable: Prisma.$ExecutablePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      platform: Prisma.$PlatformPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      executableId: string
      pathExecutable: string
      filename: string
      version: string
      createdAt: Date
      userId: number
      platformId: number
    }, ExtArgs["result"]["historyExecutable"]>
    composites: {}
  }

  type HistoryExecutableGetPayload<S extends boolean | null | undefined | HistoryExecutableDefaultArgs> = $Result.GetResult<Prisma.$HistoryExecutablePayload, S>

  type HistoryExecutableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoryExecutableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoryExecutableCountAggregateInputType | true
    }

  export interface HistoryExecutableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoryExecutable'], meta: { name: 'HistoryExecutable' } }
    /**
     * Find zero or one HistoryExecutable that matches the filter.
     * @param {HistoryExecutableFindUniqueArgs} args - Arguments to find a HistoryExecutable
     * @example
     * // Get one HistoryExecutable
     * const historyExecutable = await prisma.historyExecutable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryExecutableFindUniqueArgs>(args: SelectSubset<T, HistoryExecutableFindUniqueArgs<ExtArgs>>): Prisma__HistoryExecutableClient<$Result.GetResult<Prisma.$HistoryExecutablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoryExecutable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoryExecutableFindUniqueOrThrowArgs} args - Arguments to find a HistoryExecutable
     * @example
     * // Get one HistoryExecutable
     * const historyExecutable = await prisma.historyExecutable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryExecutableFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryExecutableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryExecutableClient<$Result.GetResult<Prisma.$HistoryExecutablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoryExecutable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryExecutableFindFirstArgs} args - Arguments to find a HistoryExecutable
     * @example
     * // Get one HistoryExecutable
     * const historyExecutable = await prisma.historyExecutable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryExecutableFindFirstArgs>(args?: SelectSubset<T, HistoryExecutableFindFirstArgs<ExtArgs>>): Prisma__HistoryExecutableClient<$Result.GetResult<Prisma.$HistoryExecutablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoryExecutable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryExecutableFindFirstOrThrowArgs} args - Arguments to find a HistoryExecutable
     * @example
     * // Get one HistoryExecutable
     * const historyExecutable = await prisma.historyExecutable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryExecutableFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryExecutableFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryExecutableClient<$Result.GetResult<Prisma.$HistoryExecutablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoryExecutables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryExecutableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoryExecutables
     * const historyExecutables = await prisma.historyExecutable.findMany()
     * 
     * // Get first 10 HistoryExecutables
     * const historyExecutables = await prisma.historyExecutable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyExecutableWithIdOnly = await prisma.historyExecutable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoryExecutableFindManyArgs>(args?: SelectSubset<T, HistoryExecutableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryExecutablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoryExecutable.
     * @param {HistoryExecutableCreateArgs} args - Arguments to create a HistoryExecutable.
     * @example
     * // Create one HistoryExecutable
     * const HistoryExecutable = await prisma.historyExecutable.create({
     *   data: {
     *     // ... data to create a HistoryExecutable
     *   }
     * })
     * 
     */
    create<T extends HistoryExecutableCreateArgs>(args: SelectSubset<T, HistoryExecutableCreateArgs<ExtArgs>>): Prisma__HistoryExecutableClient<$Result.GetResult<Prisma.$HistoryExecutablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoryExecutables.
     * @param {HistoryExecutableCreateManyArgs} args - Arguments to create many HistoryExecutables.
     * @example
     * // Create many HistoryExecutables
     * const historyExecutable = await prisma.historyExecutable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryExecutableCreateManyArgs>(args?: SelectSubset<T, HistoryExecutableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HistoryExecutable.
     * @param {HistoryExecutableDeleteArgs} args - Arguments to delete one HistoryExecutable.
     * @example
     * // Delete one HistoryExecutable
     * const HistoryExecutable = await prisma.historyExecutable.delete({
     *   where: {
     *     // ... filter to delete one HistoryExecutable
     *   }
     * })
     * 
     */
    delete<T extends HistoryExecutableDeleteArgs>(args: SelectSubset<T, HistoryExecutableDeleteArgs<ExtArgs>>): Prisma__HistoryExecutableClient<$Result.GetResult<Prisma.$HistoryExecutablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoryExecutable.
     * @param {HistoryExecutableUpdateArgs} args - Arguments to update one HistoryExecutable.
     * @example
     * // Update one HistoryExecutable
     * const historyExecutable = await prisma.historyExecutable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryExecutableUpdateArgs>(args: SelectSubset<T, HistoryExecutableUpdateArgs<ExtArgs>>): Prisma__HistoryExecutableClient<$Result.GetResult<Prisma.$HistoryExecutablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoryExecutables.
     * @param {HistoryExecutableDeleteManyArgs} args - Arguments to filter HistoryExecutables to delete.
     * @example
     * // Delete a few HistoryExecutables
     * const { count } = await prisma.historyExecutable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryExecutableDeleteManyArgs>(args?: SelectSubset<T, HistoryExecutableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoryExecutables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryExecutableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoryExecutables
     * const historyExecutable = await prisma.historyExecutable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryExecutableUpdateManyArgs>(args: SelectSubset<T, HistoryExecutableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HistoryExecutable.
     * @param {HistoryExecutableUpsertArgs} args - Arguments to update or create a HistoryExecutable.
     * @example
     * // Update or create a HistoryExecutable
     * const historyExecutable = await prisma.historyExecutable.upsert({
     *   create: {
     *     // ... data to create a HistoryExecutable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoryExecutable we want to update
     *   }
     * })
     */
    upsert<T extends HistoryExecutableUpsertArgs>(args: SelectSubset<T, HistoryExecutableUpsertArgs<ExtArgs>>): Prisma__HistoryExecutableClient<$Result.GetResult<Prisma.$HistoryExecutablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoryExecutables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryExecutableCountArgs} args - Arguments to filter HistoryExecutables to count.
     * @example
     * // Count the number of HistoryExecutables
     * const count = await prisma.historyExecutable.count({
     *   where: {
     *     // ... the filter for the HistoryExecutables we want to count
     *   }
     * })
    **/
    count<T extends HistoryExecutableCountArgs>(
      args?: Subset<T, HistoryExecutableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryExecutableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoryExecutable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryExecutableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoryExecutableAggregateArgs>(args: Subset<T, HistoryExecutableAggregateArgs>): Prisma.PrismaPromise<GetHistoryExecutableAggregateType<T>>

    /**
     * Group by HistoryExecutable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryExecutableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoryExecutableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryExecutableGroupByArgs['orderBy'] }
        : { orderBy?: HistoryExecutableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoryExecutableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryExecutableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoryExecutable model
   */
  readonly fields: HistoryExecutableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoryExecutable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryExecutableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    executable<T extends ExecutableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExecutableDefaultArgs<ExtArgs>>): Prisma__ExecutableClient<$Result.GetResult<Prisma.$ExecutablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    platform<T extends PlatformDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlatformDefaultArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HistoryExecutable model
   */
  interface HistoryExecutableFieldRefs {
    readonly id: FieldRef<"HistoryExecutable", 'String'>
    readonly executableId: FieldRef<"HistoryExecutable", 'String'>
    readonly pathExecutable: FieldRef<"HistoryExecutable", 'String'>
    readonly filename: FieldRef<"HistoryExecutable", 'String'>
    readonly version: FieldRef<"HistoryExecutable", 'String'>
    readonly createdAt: FieldRef<"HistoryExecutable", 'DateTime'>
    readonly userId: FieldRef<"HistoryExecutable", 'Int'>
    readonly platformId: FieldRef<"HistoryExecutable", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * HistoryExecutable findUnique
   */
  export type HistoryExecutableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryExecutable
     */
    select?: HistoryExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryExecutable
     */
    omit?: HistoryExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryExecutableInclude<ExtArgs> | null
    /**
     * Filter, which HistoryExecutable to fetch.
     */
    where: HistoryExecutableWhereUniqueInput
  }

  /**
   * HistoryExecutable findUniqueOrThrow
   */
  export type HistoryExecutableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryExecutable
     */
    select?: HistoryExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryExecutable
     */
    omit?: HistoryExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryExecutableInclude<ExtArgs> | null
    /**
     * Filter, which HistoryExecutable to fetch.
     */
    where: HistoryExecutableWhereUniqueInput
  }

  /**
   * HistoryExecutable findFirst
   */
  export type HistoryExecutableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryExecutable
     */
    select?: HistoryExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryExecutable
     */
    omit?: HistoryExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryExecutableInclude<ExtArgs> | null
    /**
     * Filter, which HistoryExecutable to fetch.
     */
    where?: HistoryExecutableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryExecutables to fetch.
     */
    orderBy?: HistoryExecutableOrderByWithRelationInput | HistoryExecutableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryExecutables.
     */
    cursor?: HistoryExecutableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryExecutables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryExecutables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryExecutables.
     */
    distinct?: HistoryExecutableScalarFieldEnum | HistoryExecutableScalarFieldEnum[]
  }

  /**
   * HistoryExecutable findFirstOrThrow
   */
  export type HistoryExecutableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryExecutable
     */
    select?: HistoryExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryExecutable
     */
    omit?: HistoryExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryExecutableInclude<ExtArgs> | null
    /**
     * Filter, which HistoryExecutable to fetch.
     */
    where?: HistoryExecutableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryExecutables to fetch.
     */
    orderBy?: HistoryExecutableOrderByWithRelationInput | HistoryExecutableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryExecutables.
     */
    cursor?: HistoryExecutableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryExecutables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryExecutables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryExecutables.
     */
    distinct?: HistoryExecutableScalarFieldEnum | HistoryExecutableScalarFieldEnum[]
  }

  /**
   * HistoryExecutable findMany
   */
  export type HistoryExecutableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryExecutable
     */
    select?: HistoryExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryExecutable
     */
    omit?: HistoryExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryExecutableInclude<ExtArgs> | null
    /**
     * Filter, which HistoryExecutables to fetch.
     */
    where?: HistoryExecutableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryExecutables to fetch.
     */
    orderBy?: HistoryExecutableOrderByWithRelationInput | HistoryExecutableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoryExecutables.
     */
    cursor?: HistoryExecutableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryExecutables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryExecutables.
     */
    skip?: number
    distinct?: HistoryExecutableScalarFieldEnum | HistoryExecutableScalarFieldEnum[]
  }

  /**
   * HistoryExecutable create
   */
  export type HistoryExecutableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryExecutable
     */
    select?: HistoryExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryExecutable
     */
    omit?: HistoryExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryExecutableInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoryExecutable.
     */
    data: XOR<HistoryExecutableCreateInput, HistoryExecutableUncheckedCreateInput>
  }

  /**
   * HistoryExecutable createMany
   */
  export type HistoryExecutableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoryExecutables.
     */
    data: HistoryExecutableCreateManyInput | HistoryExecutableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoryExecutable update
   */
  export type HistoryExecutableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryExecutable
     */
    select?: HistoryExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryExecutable
     */
    omit?: HistoryExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryExecutableInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoryExecutable.
     */
    data: XOR<HistoryExecutableUpdateInput, HistoryExecutableUncheckedUpdateInput>
    /**
     * Choose, which HistoryExecutable to update.
     */
    where: HistoryExecutableWhereUniqueInput
  }

  /**
   * HistoryExecutable updateMany
   */
  export type HistoryExecutableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoryExecutables.
     */
    data: XOR<HistoryExecutableUpdateManyMutationInput, HistoryExecutableUncheckedUpdateManyInput>
    /**
     * Filter which HistoryExecutables to update
     */
    where?: HistoryExecutableWhereInput
    /**
     * Limit how many HistoryExecutables to update.
     */
    limit?: number
  }

  /**
   * HistoryExecutable upsert
   */
  export type HistoryExecutableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryExecutable
     */
    select?: HistoryExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryExecutable
     */
    omit?: HistoryExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryExecutableInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoryExecutable to update in case it exists.
     */
    where: HistoryExecutableWhereUniqueInput
    /**
     * In case the HistoryExecutable found by the `where` argument doesn't exist, create a new HistoryExecutable with this data.
     */
    create: XOR<HistoryExecutableCreateInput, HistoryExecutableUncheckedCreateInput>
    /**
     * In case the HistoryExecutable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryExecutableUpdateInput, HistoryExecutableUncheckedUpdateInput>
  }

  /**
   * HistoryExecutable delete
   */
  export type HistoryExecutableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryExecutable
     */
    select?: HistoryExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryExecutable
     */
    omit?: HistoryExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryExecutableInclude<ExtArgs> | null
    /**
     * Filter which HistoryExecutable to delete.
     */
    where: HistoryExecutableWhereUniqueInput
  }

  /**
   * HistoryExecutable deleteMany
   */
  export type HistoryExecutableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryExecutables to delete
     */
    where?: HistoryExecutableWhereInput
    /**
     * Limit how many HistoryExecutables to delete.
     */
    limit?: number
  }

  /**
   * HistoryExecutable without action
   */
  export type HistoryExecutableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryExecutable
     */
    select?: HistoryExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryExecutable
     */
    omit?: HistoryExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryExecutableInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    stateId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    stateId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    reset_password_token: string | null
    reset_password_expires: Date | null
    stateId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    reset_password_token: string | null
    reset_password_expires: Date | null
    stateId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    reset_password_token: number
    reset_password_expires: number
    stateId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    stateId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    stateId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    reset_password_token?: true
    reset_password_expires?: true
    stateId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    reset_password_token?: true
    reset_password_expires?: true
    stateId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    reset_password_token?: true
    reset_password_expires?: true
    stateId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    phone: string
    reset_password_token: string | null
    reset_password_expires: Date | null
    stateId: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    reset_password_token?: boolean
    reset_password_expires?: boolean
    stateId?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    state?: boolean | StateDefaultArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    reset_password_token?: boolean
    reset_password_expires?: boolean
    stateId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "reset_password_token" | "reset_password_expires" | "stateId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    state?: boolean | StateDefaultArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      state: Prisma.$StatePayload<ExtArgs>
      posts: Prisma.$PostPayload<ExtArgs>[]
      history: Prisma.$HistoryExecutablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      phone: string
      reset_password_token: string | null
      reset_password_expires: Date | null
      stateId: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    state<T extends StateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StateDefaultArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends User$historyArgs<ExtArgs> = {}>(args?: Subset<T, User$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryExecutablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly reset_password_token: FieldRef<"User", 'String'>
    readonly reset_password_expires: FieldRef<"User", 'DateTime'>
    readonly stateId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.history
   */
  export type User$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryExecutable
     */
    select?: HistoryExecutableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryExecutable
     */
    omit?: HistoryExecutableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryExecutableInclude<ExtArgs> | null
    where?: HistoryExecutableWhereInput
    orderBy?: HistoryExecutableOrderByWithRelationInput | HistoryExecutableOrderByWithRelationInput[]
    cursor?: HistoryExecutableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryExecutableScalarFieldEnum | HistoryExecutableScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    userId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    token: string | null
    date_created: string | null
    time_created: string | null
    type: string | null
    userId: number | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    token: string | null
    date_created: string | null
    time_created: string | null
    type: string | null
    userId: number | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    token: number
    date_created: number
    time_created: number
    type: number
    userId: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    token?: true
    date_created?: true
    time_created?: true
    type?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    token?: true
    date_created?: true
    time_created?: true
    type?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    token?: true
    date_created?: true
    time_created?: true
    type?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    token: string | null
    date_created: string
    time_created: string
    type: string
    userId: number
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    date_created?: boolean
    time_created?: boolean
    type?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    token?: boolean
    date_created?: boolean
    time_created?: boolean
    type?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "date_created" | "time_created" | "type" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string | null
      date_created: string
      time_created: string
      type: string
      userId: number
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly date_created: FieldRef<"Session", 'String'>
    readonly time_created: FieldRef<"Session", 'String'>
    readonly type: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    userId: number | null
    executableId: string | null
    createdAt: Date | null
    comment: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    executableId: string | null
    createdAt: Date | null
    comment: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    userId: number
    executableId: number
    createdAt: number
    comment: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    userId?: true
    executableId?: true
    createdAt?: true
    comment?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    userId?: true
    executableId?: true
    createdAt?: true
    comment?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    userId?: true
    executableId?: true
    createdAt?: true
    comment?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    userId: number
    executableId: string
    createdAt: Date
    comment: string | null
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    executableId?: boolean
    createdAt?: boolean
    comment?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    executable?: boolean | ExecutableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>



  export type PostSelectScalar = {
    id?: boolean
    userId?: boolean
    executableId?: boolean
    createdAt?: boolean
    comment?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "executableId" | "createdAt" | "comment", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    executable?: boolean | ExecutableDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      executable: Prisma.$ExecutablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      executableId: string
      createdAt: Date
      comment: string | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    executable<T extends ExecutableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExecutableDefaultArgs<ExtArgs>>): Prisma__ExecutableClient<$Result.GetResult<Prisma.$ExecutablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly userId: FieldRef<"Post", 'Int'>
    readonly executableId: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly comment: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Configuration
   */

  export type AggregateConfiguration = {
    _count: ConfigurationCountAggregateOutputType | null
    _avg: ConfigurationAvgAggregateOutputType | null
    _sum: ConfigurationSumAggregateOutputType | null
    _min: ConfigurationMinAggregateOutputType | null
    _max: ConfigurationMaxAggregateOutputType | null
  }

  export type ConfigurationAvgAggregateOutputType = {
    id: number | null
  }

  export type ConfigurationSumAggregateOutputType = {
    id: number | null
  }

  export type ConfigurationMinAggregateOutputType = {
    id: number | null
    theme: $Enums.Theme | null
  }

  export type ConfigurationMaxAggregateOutputType = {
    id: number | null
    theme: $Enums.Theme | null
  }

  export type ConfigurationCountAggregateOutputType = {
    id: number
    theme: number
    _all: number
  }


  export type ConfigurationAvgAggregateInputType = {
    id?: true
  }

  export type ConfigurationSumAggregateInputType = {
    id?: true
  }

  export type ConfigurationMinAggregateInputType = {
    id?: true
    theme?: true
  }

  export type ConfigurationMaxAggregateInputType = {
    id?: true
    theme?: true
  }

  export type ConfigurationCountAggregateInputType = {
    id?: true
    theme?: true
    _all?: true
  }

  export type ConfigurationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configuration to aggregate.
     */
    where?: ConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configurations to fetch.
     */
    orderBy?: ConfigurationOrderByWithRelationInput | ConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Configurations
    **/
    _count?: true | ConfigurationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfigurationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfigurationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigurationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigurationMaxAggregateInputType
  }

  export type GetConfigurationAggregateType<T extends ConfigurationAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguration[P]>
      : GetScalarType<T[P], AggregateConfiguration[P]>
  }




  export type ConfigurationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfigurationWhereInput
    orderBy?: ConfigurationOrderByWithAggregationInput | ConfigurationOrderByWithAggregationInput[]
    by: ConfigurationScalarFieldEnum[] | ConfigurationScalarFieldEnum
    having?: ConfigurationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigurationCountAggregateInputType | true
    _avg?: ConfigurationAvgAggregateInputType
    _sum?: ConfigurationSumAggregateInputType
    _min?: ConfigurationMinAggregateInputType
    _max?: ConfigurationMaxAggregateInputType
  }

  export type ConfigurationGroupByOutputType = {
    id: number
    theme: $Enums.Theme
    _count: ConfigurationCountAggregateOutputType | null
    _avg: ConfigurationAvgAggregateOutputType | null
    _sum: ConfigurationSumAggregateOutputType | null
    _min: ConfigurationMinAggregateOutputType | null
    _max: ConfigurationMaxAggregateOutputType | null
  }

  type GetConfigurationGroupByPayload<T extends ConfigurationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfigurationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigurationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigurationGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigurationGroupByOutputType[P]>
        }
      >
    >


  export type ConfigurationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theme?: boolean
  }, ExtArgs["result"]["configuration"]>



  export type ConfigurationSelectScalar = {
    id?: boolean
    theme?: boolean
  }

  export type ConfigurationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "theme", ExtArgs["result"]["configuration"]>

  export type $ConfigurationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Configuration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      theme: $Enums.Theme
    }, ExtArgs["result"]["configuration"]>
    composites: {}
  }

  type ConfigurationGetPayload<S extends boolean | null | undefined | ConfigurationDefaultArgs> = $Result.GetResult<Prisma.$ConfigurationPayload, S>

  type ConfigurationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfigurationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfigurationCountAggregateInputType | true
    }

  export interface ConfigurationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Configuration'], meta: { name: 'Configuration' } }
    /**
     * Find zero or one Configuration that matches the filter.
     * @param {ConfigurationFindUniqueArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfigurationFindUniqueArgs>(args: SelectSubset<T, ConfigurationFindUniqueArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Configuration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfigurationFindUniqueOrThrowArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfigurationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfigurationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationFindFirstArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfigurationFindFirstArgs>(args?: SelectSubset<T, ConfigurationFindFirstArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationFindFirstOrThrowArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfigurationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfigurationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configurations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configurations
     * const configurations = await prisma.configuration.findMany()
     * 
     * // Get first 10 Configurations
     * const configurations = await prisma.configuration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configurationWithIdOnly = await prisma.configuration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfigurationFindManyArgs>(args?: SelectSubset<T, ConfigurationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Configuration.
     * @param {ConfigurationCreateArgs} args - Arguments to create a Configuration.
     * @example
     * // Create one Configuration
     * const Configuration = await prisma.configuration.create({
     *   data: {
     *     // ... data to create a Configuration
     *   }
     * })
     * 
     */
    create<T extends ConfigurationCreateArgs>(args: SelectSubset<T, ConfigurationCreateArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configurations.
     * @param {ConfigurationCreateManyArgs} args - Arguments to create many Configurations.
     * @example
     * // Create many Configurations
     * const configuration = await prisma.configuration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfigurationCreateManyArgs>(args?: SelectSubset<T, ConfigurationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Configuration.
     * @param {ConfigurationDeleteArgs} args - Arguments to delete one Configuration.
     * @example
     * // Delete one Configuration
     * const Configuration = await prisma.configuration.delete({
     *   where: {
     *     // ... filter to delete one Configuration
     *   }
     * })
     * 
     */
    delete<T extends ConfigurationDeleteArgs>(args: SelectSubset<T, ConfigurationDeleteArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Configuration.
     * @param {ConfigurationUpdateArgs} args - Arguments to update one Configuration.
     * @example
     * // Update one Configuration
     * const configuration = await prisma.configuration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfigurationUpdateArgs>(args: SelectSubset<T, ConfigurationUpdateArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configurations.
     * @param {ConfigurationDeleteManyArgs} args - Arguments to filter Configurations to delete.
     * @example
     * // Delete a few Configurations
     * const { count } = await prisma.configuration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfigurationDeleteManyArgs>(args?: SelectSubset<T, ConfigurationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configurations
     * const configuration = await prisma.configuration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfigurationUpdateManyArgs>(args: SelectSubset<T, ConfigurationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Configuration.
     * @param {ConfigurationUpsertArgs} args - Arguments to update or create a Configuration.
     * @example
     * // Update or create a Configuration
     * const configuration = await prisma.configuration.upsert({
     *   create: {
     *     // ... data to create a Configuration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configuration we want to update
     *   }
     * })
     */
    upsert<T extends ConfigurationUpsertArgs>(args: SelectSubset<T, ConfigurationUpsertArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationCountArgs} args - Arguments to filter Configurations to count.
     * @example
     * // Count the number of Configurations
     * const count = await prisma.configuration.count({
     *   where: {
     *     // ... the filter for the Configurations we want to count
     *   }
     * })
    **/
    count<T extends ConfigurationCountArgs>(
      args?: Subset<T, ConfigurationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigurationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configuration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConfigurationAggregateArgs>(args: Subset<T, ConfigurationAggregateArgs>): Prisma.PrismaPromise<GetConfigurationAggregateType<T>>

    /**
     * Group by Configuration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConfigurationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfigurationGroupByArgs['orderBy'] }
        : { orderBy?: ConfigurationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConfigurationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigurationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Configuration model
   */
  readonly fields: ConfigurationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Configuration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfigurationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Configuration model
   */
  interface ConfigurationFieldRefs {
    readonly id: FieldRef<"Configuration", 'Int'>
    readonly theme: FieldRef<"Configuration", 'Theme'>
  }
    

  // Custom InputTypes
  /**
   * Configuration findUnique
   */
  export type ConfigurationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which Configuration to fetch.
     */
    where: ConfigurationWhereUniqueInput
  }

  /**
   * Configuration findUniqueOrThrow
   */
  export type ConfigurationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which Configuration to fetch.
     */
    where: ConfigurationWhereUniqueInput
  }

  /**
   * Configuration findFirst
   */
  export type ConfigurationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which Configuration to fetch.
     */
    where?: ConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configurations to fetch.
     */
    orderBy?: ConfigurationOrderByWithRelationInput | ConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configurations.
     */
    cursor?: ConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configurations.
     */
    distinct?: ConfigurationScalarFieldEnum | ConfigurationScalarFieldEnum[]
  }

  /**
   * Configuration findFirstOrThrow
   */
  export type ConfigurationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which Configuration to fetch.
     */
    where?: ConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configurations to fetch.
     */
    orderBy?: ConfigurationOrderByWithRelationInput | ConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configurations.
     */
    cursor?: ConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configurations.
     */
    distinct?: ConfigurationScalarFieldEnum | ConfigurationScalarFieldEnum[]
  }

  /**
   * Configuration findMany
   */
  export type ConfigurationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which Configurations to fetch.
     */
    where?: ConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configurations to fetch.
     */
    orderBy?: ConfigurationOrderByWithRelationInput | ConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Configurations.
     */
    cursor?: ConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configurations.
     */
    skip?: number
    distinct?: ConfigurationScalarFieldEnum | ConfigurationScalarFieldEnum[]
  }

  /**
   * Configuration create
   */
  export type ConfigurationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * The data needed to create a Configuration.
     */
    data?: XOR<ConfigurationCreateInput, ConfigurationUncheckedCreateInput>
  }

  /**
   * Configuration createMany
   */
  export type ConfigurationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Configurations.
     */
    data: ConfigurationCreateManyInput | ConfigurationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Configuration update
   */
  export type ConfigurationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * The data needed to update a Configuration.
     */
    data: XOR<ConfigurationUpdateInput, ConfigurationUncheckedUpdateInput>
    /**
     * Choose, which Configuration to update.
     */
    where: ConfigurationWhereUniqueInput
  }

  /**
   * Configuration updateMany
   */
  export type ConfigurationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Configurations.
     */
    data: XOR<ConfigurationUpdateManyMutationInput, ConfigurationUncheckedUpdateManyInput>
    /**
     * Filter which Configurations to update
     */
    where?: ConfigurationWhereInput
    /**
     * Limit how many Configurations to update.
     */
    limit?: number
  }

  /**
   * Configuration upsert
   */
  export type ConfigurationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * The filter to search for the Configuration to update in case it exists.
     */
    where: ConfigurationWhereUniqueInput
    /**
     * In case the Configuration found by the `where` argument doesn't exist, create a new Configuration with this data.
     */
    create: XOR<ConfigurationCreateInput, ConfigurationUncheckedCreateInput>
    /**
     * In case the Configuration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfigurationUpdateInput, ConfigurationUncheckedUpdateInput>
  }

  /**
   * Configuration delete
   */
  export type ConfigurationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Filter which Configuration to delete.
     */
    where: ConfigurationWhereUniqueInput
  }

  /**
   * Configuration deleteMany
   */
  export type ConfigurationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configurations to delete
     */
    where?: ConfigurationWhereInput
    /**
     * Limit how many Configurations to delete.
     */
    limit?: number
  }

  /**
   * Configuration without action
   */
  export type ConfigurationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StateScalarFieldEnum: {
    id: 'id',
    state: 'state'
  };

  export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const PlatformScalarFieldEnum: {
    id: 'id',
    name: 'name',
    categoryId: 'categoryId'
  };

  export type PlatformScalarFieldEnum = (typeof PlatformScalarFieldEnum)[keyof typeof PlatformScalarFieldEnum]


  export const ExecutableScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    type_app: 'type_app',
    stateId: 'stateId'
  };

  export type ExecutableScalarFieldEnum = (typeof ExecutableScalarFieldEnum)[keyof typeof ExecutableScalarFieldEnum]


  export const HistoryExecutableScalarFieldEnum: {
    id: 'id',
    executableId: 'executableId',
    pathExecutable: 'pathExecutable',
    filename: 'filename',
    version: 'version',
    createdAt: 'createdAt',
    userId: 'userId',
    platformId: 'platformId'
  };

  export type HistoryExecutableScalarFieldEnum = (typeof HistoryExecutableScalarFieldEnum)[keyof typeof HistoryExecutableScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    reset_password_token: 'reset_password_token',
    reset_password_expires: 'reset_password_expires',
    stateId: 'stateId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    token: 'token',
    date_created: 'date_created',
    time_created: 'time_created',
    type: 'type',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    executableId: 'executableId',
    createdAt: 'createdAt',
    comment: 'comment'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const ConfigurationScalarFieldEnum: {
    id: 'id',
    theme: 'theme'
  };

  export type ConfigurationScalarFieldEnum = (typeof ConfigurationScalarFieldEnum)[keyof typeof ConfigurationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StateOrderByRelevanceFieldEnum: {
    state: 'state'
  };

  export type StateOrderByRelevanceFieldEnum = (typeof StateOrderByRelevanceFieldEnum)[keyof typeof StateOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const PlatformOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type PlatformOrderByRelevanceFieldEnum = (typeof PlatformOrderByRelevanceFieldEnum)[keyof typeof PlatformOrderByRelevanceFieldEnum]


  export const ExecutableOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    type_app: 'type_app'
  };

  export type ExecutableOrderByRelevanceFieldEnum = (typeof ExecutableOrderByRelevanceFieldEnum)[keyof typeof ExecutableOrderByRelevanceFieldEnum]


  export const HistoryExecutableOrderByRelevanceFieldEnum: {
    id: 'id',
    executableId: 'executableId',
    pathExecutable: 'pathExecutable',
    filename: 'filename',
    version: 'version'
  };

  export type HistoryExecutableOrderByRelevanceFieldEnum = (typeof HistoryExecutableOrderByRelevanceFieldEnum)[keyof typeof HistoryExecutableOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    reset_password_token: 'reset_password_token'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    token: 'token',
    date_created: 'date_created',
    time_created: 'time_created',
    type: 'type'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const PostOrderByRelevanceFieldEnum: {
    executableId: 'executableId',
    comment: 'comment'
  };

  export type PostOrderByRelevanceFieldEnum = (typeof PostOrderByRelevanceFieldEnum)[keyof typeof PostOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Theme'
   */
  export type EnumThemeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Theme'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type StateWhereInput = {
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    id?: IntFilter<"State"> | number
    state?: StringFilter<"State"> | string
    user?: UserListRelationFilter
    executable?: ExecutableListRelationFilter
  }

  export type StateOrderByWithRelationInput = {
    id?: SortOrder
    state?: SortOrder
    user?: UserOrderByRelationAggregateInput
    executable?: ExecutableOrderByRelationAggregateInput
    _relevance?: StateOrderByRelevanceInput
  }

  export type StateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    state?: string
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    user?: UserListRelationFilter
    executable?: ExecutableListRelationFilter
  }, "id" | "state">

  export type StateOrderByWithAggregationInput = {
    id?: SortOrder
    state?: SortOrder
    _count?: StateCountOrderByAggregateInput
    _avg?: StateAvgOrderByAggregateInput
    _max?: StateMaxOrderByAggregateInput
    _min?: StateMinOrderByAggregateInput
    _sum?: StateSumOrderByAggregateInput
  }

  export type StateScalarWhereWithAggregatesInput = {
    AND?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    OR?: StateScalarWhereWithAggregatesInput[]
    NOT?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"State"> | number
    state?: StringWithAggregatesFilter<"State"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    Platform?: PlatformListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Platform?: PlatformOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    Platform?: PlatformListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type PlatformWhereInput = {
    AND?: PlatformWhereInput | PlatformWhereInput[]
    OR?: PlatformWhereInput[]
    NOT?: PlatformWhereInput | PlatformWhereInput[]
    id?: IntFilter<"Platform"> | number
    name?: StringFilter<"Platform"> | string
    categoryId?: IntFilter<"Platform"> | number
    historyExecutable?: HistoryExecutableListRelationFilter
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type PlatformOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    historyExecutable?: HistoryExecutableOrderByRelationAggregateInput
    category?: CategoryOrderByWithRelationInput
    _relevance?: PlatformOrderByRelevanceInput
  }

  export type PlatformWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlatformWhereInput | PlatformWhereInput[]
    OR?: PlatformWhereInput[]
    NOT?: PlatformWhereInput | PlatformWhereInput[]
    name?: StringFilter<"Platform"> | string
    categoryId?: IntFilter<"Platform"> | number
    historyExecutable?: HistoryExecutableListRelationFilter
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id">

  export type PlatformOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    _count?: PlatformCountOrderByAggregateInput
    _avg?: PlatformAvgOrderByAggregateInput
    _max?: PlatformMaxOrderByAggregateInput
    _min?: PlatformMinOrderByAggregateInput
    _sum?: PlatformSumOrderByAggregateInput
  }

  export type PlatformScalarWhereWithAggregatesInput = {
    AND?: PlatformScalarWhereWithAggregatesInput | PlatformScalarWhereWithAggregatesInput[]
    OR?: PlatformScalarWhereWithAggregatesInput[]
    NOT?: PlatformScalarWhereWithAggregatesInput | PlatformScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Platform"> | number
    name?: StringWithAggregatesFilter<"Platform"> | string
    categoryId?: IntWithAggregatesFilter<"Platform"> | number
  }

  export type ExecutableWhereInput = {
    AND?: ExecutableWhereInput | ExecutableWhereInput[]
    OR?: ExecutableWhereInput[]
    NOT?: ExecutableWhereInput | ExecutableWhereInput[]
    id?: StringFilter<"Executable"> | string
    name?: StringFilter<"Executable"> | string
    description?: StringFilter<"Executable"> | string
    type_app?: StringFilter<"Executable"> | string
    stateId?: IntFilter<"Executable"> | number
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
    posts?: PostListRelationFilter
    history?: HistoryExecutableListRelationFilter
  }

  export type ExecutableOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type_app?: SortOrder
    stateId?: SortOrder
    state?: StateOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    history?: HistoryExecutableOrderByRelationAggregateInput
    _relevance?: ExecutableOrderByRelevanceInput
  }

  export type ExecutableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ExecutableWhereInput | ExecutableWhereInput[]
    OR?: ExecutableWhereInput[]
    NOT?: ExecutableWhereInput | ExecutableWhereInput[]
    description?: StringFilter<"Executable"> | string
    type_app?: StringFilter<"Executable"> | string
    stateId?: IntFilter<"Executable"> | number
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
    posts?: PostListRelationFilter
    history?: HistoryExecutableListRelationFilter
  }, "id" | "name">

  export type ExecutableOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type_app?: SortOrder
    stateId?: SortOrder
    _count?: ExecutableCountOrderByAggregateInput
    _avg?: ExecutableAvgOrderByAggregateInput
    _max?: ExecutableMaxOrderByAggregateInput
    _min?: ExecutableMinOrderByAggregateInput
    _sum?: ExecutableSumOrderByAggregateInput
  }

  export type ExecutableScalarWhereWithAggregatesInput = {
    AND?: ExecutableScalarWhereWithAggregatesInput | ExecutableScalarWhereWithAggregatesInput[]
    OR?: ExecutableScalarWhereWithAggregatesInput[]
    NOT?: ExecutableScalarWhereWithAggregatesInput | ExecutableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Executable"> | string
    name?: StringWithAggregatesFilter<"Executable"> | string
    description?: StringWithAggregatesFilter<"Executable"> | string
    type_app?: StringWithAggregatesFilter<"Executable"> | string
    stateId?: IntWithAggregatesFilter<"Executable"> | number
  }

  export type HistoryExecutableWhereInput = {
    AND?: HistoryExecutableWhereInput | HistoryExecutableWhereInput[]
    OR?: HistoryExecutableWhereInput[]
    NOT?: HistoryExecutableWhereInput | HistoryExecutableWhereInput[]
    id?: StringFilter<"HistoryExecutable"> | string
    executableId?: StringFilter<"HistoryExecutable"> | string
    pathExecutable?: StringFilter<"HistoryExecutable"> | string
    filename?: StringFilter<"HistoryExecutable"> | string
    version?: StringFilter<"HistoryExecutable"> | string
    createdAt?: DateTimeFilter<"HistoryExecutable"> | Date | string
    userId?: IntFilter<"HistoryExecutable"> | number
    platformId?: IntFilter<"HistoryExecutable"> | number
    executable?: XOR<ExecutableScalarRelationFilter, ExecutableWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    platform?: XOR<PlatformScalarRelationFilter, PlatformWhereInput>
  }

  export type HistoryExecutableOrderByWithRelationInput = {
    id?: SortOrder
    executableId?: SortOrder
    pathExecutable?: SortOrder
    filename?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    platformId?: SortOrder
    executable?: ExecutableOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    platform?: PlatformOrderByWithRelationInput
    _relevance?: HistoryExecutableOrderByRelevanceInput
  }

  export type HistoryExecutableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    version?: string
    AND?: HistoryExecutableWhereInput | HistoryExecutableWhereInput[]
    OR?: HistoryExecutableWhereInput[]
    NOT?: HistoryExecutableWhereInput | HistoryExecutableWhereInput[]
    executableId?: StringFilter<"HistoryExecutable"> | string
    pathExecutable?: StringFilter<"HistoryExecutable"> | string
    filename?: StringFilter<"HistoryExecutable"> | string
    createdAt?: DateTimeFilter<"HistoryExecutable"> | Date | string
    userId?: IntFilter<"HistoryExecutable"> | number
    platformId?: IntFilter<"HistoryExecutable"> | number
    executable?: XOR<ExecutableScalarRelationFilter, ExecutableWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    platform?: XOR<PlatformScalarRelationFilter, PlatformWhereInput>
  }, "id" | "version">

  export type HistoryExecutableOrderByWithAggregationInput = {
    id?: SortOrder
    executableId?: SortOrder
    pathExecutable?: SortOrder
    filename?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    platformId?: SortOrder
    _count?: HistoryExecutableCountOrderByAggregateInput
    _avg?: HistoryExecutableAvgOrderByAggregateInput
    _max?: HistoryExecutableMaxOrderByAggregateInput
    _min?: HistoryExecutableMinOrderByAggregateInput
    _sum?: HistoryExecutableSumOrderByAggregateInput
  }

  export type HistoryExecutableScalarWhereWithAggregatesInput = {
    AND?: HistoryExecutableScalarWhereWithAggregatesInput | HistoryExecutableScalarWhereWithAggregatesInput[]
    OR?: HistoryExecutableScalarWhereWithAggregatesInput[]
    NOT?: HistoryExecutableScalarWhereWithAggregatesInput | HistoryExecutableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HistoryExecutable"> | string
    executableId?: StringWithAggregatesFilter<"HistoryExecutable"> | string
    pathExecutable?: StringWithAggregatesFilter<"HistoryExecutable"> | string
    filename?: StringWithAggregatesFilter<"HistoryExecutable"> | string
    version?: StringWithAggregatesFilter<"HistoryExecutable"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HistoryExecutable"> | Date | string
    userId?: IntWithAggregatesFilter<"HistoryExecutable"> | number
    platformId?: IntWithAggregatesFilter<"HistoryExecutable"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    reset_password_token?: StringNullableFilter<"User"> | string | null
    reset_password_expires?: DateTimeNullableFilter<"User"> | Date | string | null
    stateId?: IntFilter<"User"> | number
    sessions?: SessionListRelationFilter
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
    posts?: PostListRelationFilter
    history?: HistoryExecutableListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    reset_password_token?: SortOrderInput | SortOrder
    reset_password_expires?: SortOrderInput | SortOrder
    stateId?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    state?: StateOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    history?: HistoryExecutableOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    reset_password_token?: StringNullableFilter<"User"> | string | null
    reset_password_expires?: DateTimeNullableFilter<"User"> | Date | string | null
    stateId?: IntFilter<"User"> | number
    sessions?: SessionListRelationFilter
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
    posts?: PostListRelationFilter
    history?: HistoryExecutableListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    reset_password_token?: SortOrderInput | SortOrder
    reset_password_expires?: SortOrderInput | SortOrder
    stateId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    reset_password_token?: StringNullableWithAggregatesFilter<"User"> | string | null
    reset_password_expires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    stateId?: IntWithAggregatesFilter<"User"> | number
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    token?: StringNullableFilter<"Session"> | string | null
    date_created?: StringFilter<"Session"> | string
    time_created?: StringFilter<"Session"> | string
    type?: StringFilter<"Session"> | string
    userId?: IntFilter<"Session"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrderInput | SortOrder
    date_created?: SortOrder
    time_created?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    date_created?: StringFilter<"Session"> | string
    time_created?: StringFilter<"Session"> | string
    type?: StringFilter<"Session"> | string
    userId?: IntFilter<"Session"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrderInput | SortOrder
    date_created?: SortOrder
    time_created?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    token?: StringNullableWithAggregatesFilter<"Session"> | string | null
    date_created?: StringWithAggregatesFilter<"Session"> | string
    time_created?: StringWithAggregatesFilter<"Session"> | string
    type?: StringWithAggregatesFilter<"Session"> | string
    userId?: IntWithAggregatesFilter<"Session"> | number
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    userId?: IntFilter<"Post"> | number
    executableId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    comment?: StringNullableFilter<"Post"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    executable?: XOR<ExecutableScalarRelationFilter, ExecutableWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    executableId?: SortOrder
    createdAt?: SortOrder
    comment?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    executable?: ExecutableOrderByWithRelationInput
    _relevance?: PostOrderByRelevanceInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    userId?: IntFilter<"Post"> | number
    executableId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    comment?: StringNullableFilter<"Post"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    executable?: XOR<ExecutableScalarRelationFilter, ExecutableWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    executableId?: SortOrder
    createdAt?: SortOrder
    comment?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    userId?: IntWithAggregatesFilter<"Post"> | number
    executableId?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    comment?: StringNullableWithAggregatesFilter<"Post"> | string | null
  }

  export type ConfigurationWhereInput = {
    AND?: ConfigurationWhereInput | ConfigurationWhereInput[]
    OR?: ConfigurationWhereInput[]
    NOT?: ConfigurationWhereInput | ConfigurationWhereInput[]
    id?: IntFilter<"Configuration"> | number
    theme?: EnumThemeFilter<"Configuration"> | $Enums.Theme
  }

  export type ConfigurationOrderByWithRelationInput = {
    id?: SortOrder
    theme?: SortOrder
  }

  export type ConfigurationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConfigurationWhereInput | ConfigurationWhereInput[]
    OR?: ConfigurationWhereInput[]
    NOT?: ConfigurationWhereInput | ConfigurationWhereInput[]
    theme?: EnumThemeFilter<"Configuration"> | $Enums.Theme
  }, "id">

  export type ConfigurationOrderByWithAggregationInput = {
    id?: SortOrder
    theme?: SortOrder
    _count?: ConfigurationCountOrderByAggregateInput
    _avg?: ConfigurationAvgOrderByAggregateInput
    _max?: ConfigurationMaxOrderByAggregateInput
    _min?: ConfigurationMinOrderByAggregateInput
    _sum?: ConfigurationSumOrderByAggregateInput
  }

  export type ConfigurationScalarWhereWithAggregatesInput = {
    AND?: ConfigurationScalarWhereWithAggregatesInput | ConfigurationScalarWhereWithAggregatesInput[]
    OR?: ConfigurationScalarWhereWithAggregatesInput[]
    NOT?: ConfigurationScalarWhereWithAggregatesInput | ConfigurationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Configuration"> | number
    theme?: EnumThemeWithAggregatesFilter<"Configuration"> | $Enums.Theme
  }

  export type StateCreateInput = {
    state?: string
    user?: UserCreateNestedManyWithoutStateInput
    executable?: ExecutableCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateInput = {
    id?: number
    state?: string
    user?: UserUncheckedCreateNestedManyWithoutStateInput
    executable?: ExecutableUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateUpdateInput = {
    state?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateManyWithoutStateNestedInput
    executable?: ExecutableUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateManyWithoutStateNestedInput
    executable?: ExecutableUncheckedUpdateManyWithoutStateNestedInput
  }

  export type StateCreateManyInput = {
    id?: number
    state?: string
  }

  export type StateUpdateManyMutationInput = {
    state?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    name: string
    Platform?: PlatformCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    Platform?: PlatformUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Platform?: PlatformUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Platform?: PlatformUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PlatformCreateInput = {
    name: string
    historyExecutable?: HistoryExecutableCreateNestedManyWithoutPlatformInput
    category: CategoryCreateNestedOneWithoutPlatformInput
  }

  export type PlatformUncheckedCreateInput = {
    id?: number
    name: string
    categoryId: number
    historyExecutable?: HistoryExecutableUncheckedCreateNestedManyWithoutPlatformInput
  }

  export type PlatformUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    historyExecutable?: HistoryExecutableUpdateManyWithoutPlatformNestedInput
    category?: CategoryUpdateOneRequiredWithoutPlatformNestedInput
  }

  export type PlatformUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    historyExecutable?: HistoryExecutableUncheckedUpdateManyWithoutPlatformNestedInput
  }

  export type PlatformCreateManyInput = {
    id?: number
    name: string
    categoryId: number
  }

  export type PlatformUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PlatformUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ExecutableCreateInput = {
    id?: string
    name: string
    description: string
    type_app: string
    state: StateCreateNestedOneWithoutExecutableInput
    posts?: PostCreateNestedManyWithoutExecutableInput
    history?: HistoryExecutableCreateNestedManyWithoutExecutableInput
  }

  export type ExecutableUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    type_app: string
    stateId: number
    posts?: PostUncheckedCreateNestedManyWithoutExecutableInput
    history?: HistoryExecutableUncheckedCreateNestedManyWithoutExecutableInput
  }

  export type ExecutableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type_app?: StringFieldUpdateOperationsInput | string
    state?: StateUpdateOneRequiredWithoutExecutableNestedInput
    posts?: PostUpdateManyWithoutExecutableNestedInput
    history?: HistoryExecutableUpdateManyWithoutExecutableNestedInput
  }

  export type ExecutableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type_app?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
    posts?: PostUncheckedUpdateManyWithoutExecutableNestedInput
    history?: HistoryExecutableUncheckedUpdateManyWithoutExecutableNestedInput
  }

  export type ExecutableCreateManyInput = {
    id?: string
    name: string
    description: string
    type_app: string
    stateId: number
  }

  export type ExecutableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type_app?: StringFieldUpdateOperationsInput | string
  }

  export type ExecutableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type_app?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoryExecutableCreateInput = {
    id?: string
    pathExecutable: string
    filename: string
    version: string
    createdAt: Date | string
    executable: ExecutableCreateNestedOneWithoutHistoryInput
    user: UserCreateNestedOneWithoutHistoryInput
    platform: PlatformCreateNestedOneWithoutHistoryExecutableInput
  }

  export type HistoryExecutableUncheckedCreateInput = {
    id?: string
    executableId: string
    pathExecutable: string
    filename: string
    version: string
    createdAt: Date | string
    userId: number
    platformId: number
  }

  export type HistoryExecutableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathExecutable?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executable?: ExecutableUpdateOneRequiredWithoutHistoryNestedInput
    user?: UserUpdateOneRequiredWithoutHistoryNestedInput
    platform?: PlatformUpdateOneRequiredWithoutHistoryExecutableNestedInput
  }

  export type HistoryExecutableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    executableId?: StringFieldUpdateOperationsInput | string
    pathExecutable?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    platformId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoryExecutableCreateManyInput = {
    id?: string
    executableId: string
    pathExecutable: string
    filename: string
    version: string
    createdAt: Date | string
    userId: number
    platformId: number
  }

  export type HistoryExecutableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathExecutable?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryExecutableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    executableId?: StringFieldUpdateOperationsInput | string
    pathExecutable?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    platformId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    phone: string
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    state?: StateCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    history?: HistoryExecutableCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    stateId?: number
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryExecutableUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    state?: StateUpdateOneRequiredWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    history?: HistoryExecutableUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stateId?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryExecutableUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    stateId?: number
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stateId?: IntFieldUpdateOperationsInput | number
  }

  export type SessionCreateInput = {
    id?: string
    token?: string | null
    date_created: string
    time_created: string
    type: string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    token?: string | null
    date_created: string
    time_created: string
    type: string
    userId: number
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    date_created?: StringFieldUpdateOperationsInput | string
    time_created?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    date_created?: StringFieldUpdateOperationsInput | string
    time_created?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SessionCreateManyInput = {
    id?: string
    token?: string | null
    date_created: string
    time_created: string
    type: string
    userId: number
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    date_created?: StringFieldUpdateOperationsInput | string
    time_created?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    date_created?: StringFieldUpdateOperationsInput | string
    time_created?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateInput = {
    createdAt?: Date | string
    comment?: string | null
    user: UserCreateNestedOneWithoutPostsInput
    executable: ExecutableCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    userId: number
    executableId: string
    createdAt?: Date | string
    comment?: string | null
  }

  export type PostUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    executable?: ExecutableUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    executableId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateManyInput = {
    id?: number
    userId: number
    executableId: string
    createdAt?: Date | string
    comment?: string | null
  }

  export type PostUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    executableId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConfigurationCreateInput = {
    theme?: $Enums.Theme
  }

  export type ConfigurationUncheckedCreateInput = {
    id?: number
    theme?: $Enums.Theme
  }

  export type ConfigurationUpdateInput = {
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
  }

  export type ConfigurationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
  }

  export type ConfigurationCreateManyInput = {
    id?: number
    theme?: $Enums.Theme
  }

  export type ConfigurationUpdateManyMutationInput = {
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
  }

  export type ConfigurationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ExecutableListRelationFilter = {
    every?: ExecutableWhereInput
    some?: ExecutableWhereInput
    none?: ExecutableWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExecutableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StateOrderByRelevanceInput = {
    fields: StateOrderByRelevanceFieldEnum | StateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StateCountOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
  }

  export type StateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StateMaxOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
  }

  export type StateMinOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
  }

  export type StateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PlatformListRelationFilter = {
    every?: PlatformWhereInput
    some?: PlatformWhereInput
    none?: PlatformWhereInput
  }

  export type PlatformOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HistoryExecutableListRelationFilter = {
    every?: HistoryExecutableWhereInput
    some?: HistoryExecutableWhereInput
    none?: HistoryExecutableWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type HistoryExecutableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlatformOrderByRelevanceInput = {
    fields: PlatformOrderByRelevanceFieldEnum | PlatformOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlatformCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
  }

  export type PlatformAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type PlatformMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
  }

  export type PlatformMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
  }

  export type PlatformSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type StateScalarRelationFilter = {
    is?: StateWhereInput
    isNot?: StateWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExecutableOrderByRelevanceInput = {
    fields: ExecutableOrderByRelevanceFieldEnum | ExecutableOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExecutableCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type_app?: SortOrder
    stateId?: SortOrder
  }

  export type ExecutableAvgOrderByAggregateInput = {
    stateId?: SortOrder
  }

  export type ExecutableMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type_app?: SortOrder
    stateId?: SortOrder
  }

  export type ExecutableMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type_app?: SortOrder
    stateId?: SortOrder
  }

  export type ExecutableSumOrderByAggregateInput = {
    stateId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ExecutableScalarRelationFilter = {
    is?: ExecutableWhereInput
    isNot?: ExecutableWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlatformScalarRelationFilter = {
    is?: PlatformWhereInput
    isNot?: PlatformWhereInput
  }

  export type HistoryExecutableOrderByRelevanceInput = {
    fields: HistoryExecutableOrderByRelevanceFieldEnum | HistoryExecutableOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HistoryExecutableCountOrderByAggregateInput = {
    id?: SortOrder
    executableId?: SortOrder
    pathExecutable?: SortOrder
    filename?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    platformId?: SortOrder
  }

  export type HistoryExecutableAvgOrderByAggregateInput = {
    userId?: SortOrder
    platformId?: SortOrder
  }

  export type HistoryExecutableMaxOrderByAggregateInput = {
    id?: SortOrder
    executableId?: SortOrder
    pathExecutable?: SortOrder
    filename?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    platformId?: SortOrder
  }

  export type HistoryExecutableMinOrderByAggregateInput = {
    id?: SortOrder
    executableId?: SortOrder
    pathExecutable?: SortOrder
    filename?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    platformId?: SortOrder
  }

  export type HistoryExecutableSumOrderByAggregateInput = {
    userId?: SortOrder
    platformId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    reset_password_token?: SortOrder
    reset_password_expires?: SortOrder
    stateId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    stateId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    reset_password_token?: SortOrder
    reset_password_expires?: SortOrder
    stateId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    reset_password_token?: SortOrder
    reset_password_expires?: SortOrder
    stateId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    stateId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    date_created?: SortOrder
    time_created?: SortOrder
    type?: SortOrder
    userId?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    date_created?: SortOrder
    time_created?: SortOrder
    type?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    date_created?: SortOrder
    time_created?: SortOrder
    type?: SortOrder
    userId?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type PostOrderByRelevanceInput = {
    fields: PostOrderByRelevanceFieldEnum | PostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    executableId?: SortOrder
    createdAt?: SortOrder
    comment?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    executableId?: SortOrder
    createdAt?: SortOrder
    comment?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    executableId?: SortOrder
    createdAt?: SortOrder
    comment?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumThemeFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[]
    notIn?: $Enums.Theme[]
    not?: NestedEnumThemeFilter<$PrismaModel> | $Enums.Theme
  }

  export type ConfigurationCountOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
  }

  export type ConfigurationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConfigurationMaxOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
  }

  export type ConfigurationMinOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
  }

  export type ConfigurationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumThemeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[]
    notIn?: $Enums.Theme[]
    not?: NestedEnumThemeWithAggregatesFilter<$PrismaModel> | $Enums.Theme
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumThemeFilter<$PrismaModel>
    _max?: NestedEnumThemeFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutStateInput = {
    create?: XOR<UserCreateWithoutStateInput, UserUncheckedCreateWithoutStateInput> | UserCreateWithoutStateInput[] | UserUncheckedCreateWithoutStateInput[]
    connectOrCreate?: UserCreateOrConnectWithoutStateInput | UserCreateOrConnectWithoutStateInput[]
    createMany?: UserCreateManyStateInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExecutableCreateNestedManyWithoutStateInput = {
    create?: XOR<ExecutableCreateWithoutStateInput, ExecutableUncheckedCreateWithoutStateInput> | ExecutableCreateWithoutStateInput[] | ExecutableUncheckedCreateWithoutStateInput[]
    connectOrCreate?: ExecutableCreateOrConnectWithoutStateInput | ExecutableCreateOrConnectWithoutStateInput[]
    createMany?: ExecutableCreateManyStateInputEnvelope
    connect?: ExecutableWhereUniqueInput | ExecutableWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<UserCreateWithoutStateInput, UserUncheckedCreateWithoutStateInput> | UserCreateWithoutStateInput[] | UserUncheckedCreateWithoutStateInput[]
    connectOrCreate?: UserCreateOrConnectWithoutStateInput | UserCreateOrConnectWithoutStateInput[]
    createMany?: UserCreateManyStateInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExecutableUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<ExecutableCreateWithoutStateInput, ExecutableUncheckedCreateWithoutStateInput> | ExecutableCreateWithoutStateInput[] | ExecutableUncheckedCreateWithoutStateInput[]
    connectOrCreate?: ExecutableCreateOrConnectWithoutStateInput | ExecutableCreateOrConnectWithoutStateInput[]
    createMany?: ExecutableCreateManyStateInputEnvelope
    connect?: ExecutableWhereUniqueInput | ExecutableWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutStateNestedInput = {
    create?: XOR<UserCreateWithoutStateInput, UserUncheckedCreateWithoutStateInput> | UserCreateWithoutStateInput[] | UserUncheckedCreateWithoutStateInput[]
    connectOrCreate?: UserCreateOrConnectWithoutStateInput | UserCreateOrConnectWithoutStateInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutStateInput | UserUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: UserCreateManyStateInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutStateInput | UserUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: UserUpdateManyWithWhereWithoutStateInput | UserUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExecutableUpdateManyWithoutStateNestedInput = {
    create?: XOR<ExecutableCreateWithoutStateInput, ExecutableUncheckedCreateWithoutStateInput> | ExecutableCreateWithoutStateInput[] | ExecutableUncheckedCreateWithoutStateInput[]
    connectOrCreate?: ExecutableCreateOrConnectWithoutStateInput | ExecutableCreateOrConnectWithoutStateInput[]
    upsert?: ExecutableUpsertWithWhereUniqueWithoutStateInput | ExecutableUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: ExecutableCreateManyStateInputEnvelope
    set?: ExecutableWhereUniqueInput | ExecutableWhereUniqueInput[]
    disconnect?: ExecutableWhereUniqueInput | ExecutableWhereUniqueInput[]
    delete?: ExecutableWhereUniqueInput | ExecutableWhereUniqueInput[]
    connect?: ExecutableWhereUniqueInput | ExecutableWhereUniqueInput[]
    update?: ExecutableUpdateWithWhereUniqueWithoutStateInput | ExecutableUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: ExecutableUpdateManyWithWhereWithoutStateInput | ExecutableUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: ExecutableScalarWhereInput | ExecutableScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<UserCreateWithoutStateInput, UserUncheckedCreateWithoutStateInput> | UserCreateWithoutStateInput[] | UserUncheckedCreateWithoutStateInput[]
    connectOrCreate?: UserCreateOrConnectWithoutStateInput | UserCreateOrConnectWithoutStateInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutStateInput | UserUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: UserCreateManyStateInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutStateInput | UserUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: UserUpdateManyWithWhereWithoutStateInput | UserUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExecutableUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<ExecutableCreateWithoutStateInput, ExecutableUncheckedCreateWithoutStateInput> | ExecutableCreateWithoutStateInput[] | ExecutableUncheckedCreateWithoutStateInput[]
    connectOrCreate?: ExecutableCreateOrConnectWithoutStateInput | ExecutableCreateOrConnectWithoutStateInput[]
    upsert?: ExecutableUpsertWithWhereUniqueWithoutStateInput | ExecutableUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: ExecutableCreateManyStateInputEnvelope
    set?: ExecutableWhereUniqueInput | ExecutableWhereUniqueInput[]
    disconnect?: ExecutableWhereUniqueInput | ExecutableWhereUniqueInput[]
    delete?: ExecutableWhereUniqueInput | ExecutableWhereUniqueInput[]
    connect?: ExecutableWhereUniqueInput | ExecutableWhereUniqueInput[]
    update?: ExecutableUpdateWithWhereUniqueWithoutStateInput | ExecutableUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: ExecutableUpdateManyWithWhereWithoutStateInput | ExecutableUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: ExecutableScalarWhereInput | ExecutableScalarWhereInput[]
  }

  export type PlatformCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PlatformCreateWithoutCategoryInput, PlatformUncheckedCreateWithoutCategoryInput> | PlatformCreateWithoutCategoryInput[] | PlatformUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PlatformCreateOrConnectWithoutCategoryInput | PlatformCreateOrConnectWithoutCategoryInput[]
    createMany?: PlatformCreateManyCategoryInputEnvelope
    connect?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
  }

  export type PlatformUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PlatformCreateWithoutCategoryInput, PlatformUncheckedCreateWithoutCategoryInput> | PlatformCreateWithoutCategoryInput[] | PlatformUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PlatformCreateOrConnectWithoutCategoryInput | PlatformCreateOrConnectWithoutCategoryInput[]
    createMany?: PlatformCreateManyCategoryInputEnvelope
    connect?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
  }

  export type PlatformUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PlatformCreateWithoutCategoryInput, PlatformUncheckedCreateWithoutCategoryInput> | PlatformCreateWithoutCategoryInput[] | PlatformUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PlatformCreateOrConnectWithoutCategoryInput | PlatformCreateOrConnectWithoutCategoryInput[]
    upsert?: PlatformUpsertWithWhereUniqueWithoutCategoryInput | PlatformUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PlatformCreateManyCategoryInputEnvelope
    set?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    disconnect?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    delete?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    connect?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    update?: PlatformUpdateWithWhereUniqueWithoutCategoryInput | PlatformUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PlatformUpdateManyWithWhereWithoutCategoryInput | PlatformUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PlatformScalarWhereInput | PlatformScalarWhereInput[]
  }

  export type PlatformUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PlatformCreateWithoutCategoryInput, PlatformUncheckedCreateWithoutCategoryInput> | PlatformCreateWithoutCategoryInput[] | PlatformUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PlatformCreateOrConnectWithoutCategoryInput | PlatformCreateOrConnectWithoutCategoryInput[]
    upsert?: PlatformUpsertWithWhereUniqueWithoutCategoryInput | PlatformUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PlatformCreateManyCategoryInputEnvelope
    set?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    disconnect?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    delete?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    connect?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    update?: PlatformUpdateWithWhereUniqueWithoutCategoryInput | PlatformUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PlatformUpdateManyWithWhereWithoutCategoryInput | PlatformUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PlatformScalarWhereInput | PlatformScalarWhereInput[]
  }

  export type HistoryExecutableCreateNestedManyWithoutPlatformInput = {
    create?: XOR<HistoryExecutableCreateWithoutPlatformInput, HistoryExecutableUncheckedCreateWithoutPlatformInput> | HistoryExecutableCreateWithoutPlatformInput[] | HistoryExecutableUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: HistoryExecutableCreateOrConnectWithoutPlatformInput | HistoryExecutableCreateOrConnectWithoutPlatformInput[]
    createMany?: HistoryExecutableCreateManyPlatformInputEnvelope
    connect?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutPlatformInput = {
    create?: XOR<CategoryCreateWithoutPlatformInput, CategoryUncheckedCreateWithoutPlatformInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPlatformInput
    connect?: CategoryWhereUniqueInput
  }

  export type HistoryExecutableUncheckedCreateNestedManyWithoutPlatformInput = {
    create?: XOR<HistoryExecutableCreateWithoutPlatformInput, HistoryExecutableUncheckedCreateWithoutPlatformInput> | HistoryExecutableCreateWithoutPlatformInput[] | HistoryExecutableUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: HistoryExecutableCreateOrConnectWithoutPlatformInput | HistoryExecutableCreateOrConnectWithoutPlatformInput[]
    createMany?: HistoryExecutableCreateManyPlatformInputEnvelope
    connect?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
  }

  export type HistoryExecutableUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<HistoryExecutableCreateWithoutPlatformInput, HistoryExecutableUncheckedCreateWithoutPlatformInput> | HistoryExecutableCreateWithoutPlatformInput[] | HistoryExecutableUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: HistoryExecutableCreateOrConnectWithoutPlatformInput | HistoryExecutableCreateOrConnectWithoutPlatformInput[]
    upsert?: HistoryExecutableUpsertWithWhereUniqueWithoutPlatformInput | HistoryExecutableUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: HistoryExecutableCreateManyPlatformInputEnvelope
    set?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    disconnect?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    delete?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    connect?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    update?: HistoryExecutableUpdateWithWhereUniqueWithoutPlatformInput | HistoryExecutableUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: HistoryExecutableUpdateManyWithWhereWithoutPlatformInput | HistoryExecutableUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: HistoryExecutableScalarWhereInput | HistoryExecutableScalarWhereInput[]
  }

  export type CategoryUpdateOneRequiredWithoutPlatformNestedInput = {
    create?: XOR<CategoryCreateWithoutPlatformInput, CategoryUncheckedCreateWithoutPlatformInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPlatformInput
    upsert?: CategoryUpsertWithoutPlatformInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPlatformInput, CategoryUpdateWithoutPlatformInput>, CategoryUncheckedUpdateWithoutPlatformInput>
  }

  export type HistoryExecutableUncheckedUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<HistoryExecutableCreateWithoutPlatformInput, HistoryExecutableUncheckedCreateWithoutPlatformInput> | HistoryExecutableCreateWithoutPlatformInput[] | HistoryExecutableUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: HistoryExecutableCreateOrConnectWithoutPlatformInput | HistoryExecutableCreateOrConnectWithoutPlatformInput[]
    upsert?: HistoryExecutableUpsertWithWhereUniqueWithoutPlatformInput | HistoryExecutableUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: HistoryExecutableCreateManyPlatformInputEnvelope
    set?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    disconnect?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    delete?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    connect?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    update?: HistoryExecutableUpdateWithWhereUniqueWithoutPlatformInput | HistoryExecutableUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: HistoryExecutableUpdateManyWithWhereWithoutPlatformInput | HistoryExecutableUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: HistoryExecutableScalarWhereInput | HistoryExecutableScalarWhereInput[]
  }

  export type StateCreateNestedOneWithoutExecutableInput = {
    create?: XOR<StateCreateWithoutExecutableInput, StateUncheckedCreateWithoutExecutableInput>
    connectOrCreate?: StateCreateOrConnectWithoutExecutableInput
    connect?: StateWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutExecutableInput = {
    create?: XOR<PostCreateWithoutExecutableInput, PostUncheckedCreateWithoutExecutableInput> | PostCreateWithoutExecutableInput[] | PostUncheckedCreateWithoutExecutableInput[]
    connectOrCreate?: PostCreateOrConnectWithoutExecutableInput | PostCreateOrConnectWithoutExecutableInput[]
    createMany?: PostCreateManyExecutableInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type HistoryExecutableCreateNestedManyWithoutExecutableInput = {
    create?: XOR<HistoryExecutableCreateWithoutExecutableInput, HistoryExecutableUncheckedCreateWithoutExecutableInput> | HistoryExecutableCreateWithoutExecutableInput[] | HistoryExecutableUncheckedCreateWithoutExecutableInput[]
    connectOrCreate?: HistoryExecutableCreateOrConnectWithoutExecutableInput | HistoryExecutableCreateOrConnectWithoutExecutableInput[]
    createMany?: HistoryExecutableCreateManyExecutableInputEnvelope
    connect?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutExecutableInput = {
    create?: XOR<PostCreateWithoutExecutableInput, PostUncheckedCreateWithoutExecutableInput> | PostCreateWithoutExecutableInput[] | PostUncheckedCreateWithoutExecutableInput[]
    connectOrCreate?: PostCreateOrConnectWithoutExecutableInput | PostCreateOrConnectWithoutExecutableInput[]
    createMany?: PostCreateManyExecutableInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type HistoryExecutableUncheckedCreateNestedManyWithoutExecutableInput = {
    create?: XOR<HistoryExecutableCreateWithoutExecutableInput, HistoryExecutableUncheckedCreateWithoutExecutableInput> | HistoryExecutableCreateWithoutExecutableInput[] | HistoryExecutableUncheckedCreateWithoutExecutableInput[]
    connectOrCreate?: HistoryExecutableCreateOrConnectWithoutExecutableInput | HistoryExecutableCreateOrConnectWithoutExecutableInput[]
    createMany?: HistoryExecutableCreateManyExecutableInputEnvelope
    connect?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
  }

  export type StateUpdateOneRequiredWithoutExecutableNestedInput = {
    create?: XOR<StateCreateWithoutExecutableInput, StateUncheckedCreateWithoutExecutableInput>
    connectOrCreate?: StateCreateOrConnectWithoutExecutableInput
    upsert?: StateUpsertWithoutExecutableInput
    connect?: StateWhereUniqueInput
    update?: XOR<XOR<StateUpdateToOneWithWhereWithoutExecutableInput, StateUpdateWithoutExecutableInput>, StateUncheckedUpdateWithoutExecutableInput>
  }

  export type PostUpdateManyWithoutExecutableNestedInput = {
    create?: XOR<PostCreateWithoutExecutableInput, PostUncheckedCreateWithoutExecutableInput> | PostCreateWithoutExecutableInput[] | PostUncheckedCreateWithoutExecutableInput[]
    connectOrCreate?: PostCreateOrConnectWithoutExecutableInput | PostCreateOrConnectWithoutExecutableInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutExecutableInput | PostUpsertWithWhereUniqueWithoutExecutableInput[]
    createMany?: PostCreateManyExecutableInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutExecutableInput | PostUpdateWithWhereUniqueWithoutExecutableInput[]
    updateMany?: PostUpdateManyWithWhereWithoutExecutableInput | PostUpdateManyWithWhereWithoutExecutableInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type HistoryExecutableUpdateManyWithoutExecutableNestedInput = {
    create?: XOR<HistoryExecutableCreateWithoutExecutableInput, HistoryExecutableUncheckedCreateWithoutExecutableInput> | HistoryExecutableCreateWithoutExecutableInput[] | HistoryExecutableUncheckedCreateWithoutExecutableInput[]
    connectOrCreate?: HistoryExecutableCreateOrConnectWithoutExecutableInput | HistoryExecutableCreateOrConnectWithoutExecutableInput[]
    upsert?: HistoryExecutableUpsertWithWhereUniqueWithoutExecutableInput | HistoryExecutableUpsertWithWhereUniqueWithoutExecutableInput[]
    createMany?: HistoryExecutableCreateManyExecutableInputEnvelope
    set?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    disconnect?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    delete?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    connect?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    update?: HistoryExecutableUpdateWithWhereUniqueWithoutExecutableInput | HistoryExecutableUpdateWithWhereUniqueWithoutExecutableInput[]
    updateMany?: HistoryExecutableUpdateManyWithWhereWithoutExecutableInput | HistoryExecutableUpdateManyWithWhereWithoutExecutableInput[]
    deleteMany?: HistoryExecutableScalarWhereInput | HistoryExecutableScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutExecutableNestedInput = {
    create?: XOR<PostCreateWithoutExecutableInput, PostUncheckedCreateWithoutExecutableInput> | PostCreateWithoutExecutableInput[] | PostUncheckedCreateWithoutExecutableInput[]
    connectOrCreate?: PostCreateOrConnectWithoutExecutableInput | PostCreateOrConnectWithoutExecutableInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutExecutableInput | PostUpsertWithWhereUniqueWithoutExecutableInput[]
    createMany?: PostCreateManyExecutableInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutExecutableInput | PostUpdateWithWhereUniqueWithoutExecutableInput[]
    updateMany?: PostUpdateManyWithWhereWithoutExecutableInput | PostUpdateManyWithWhereWithoutExecutableInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type HistoryExecutableUncheckedUpdateManyWithoutExecutableNestedInput = {
    create?: XOR<HistoryExecutableCreateWithoutExecutableInput, HistoryExecutableUncheckedCreateWithoutExecutableInput> | HistoryExecutableCreateWithoutExecutableInput[] | HistoryExecutableUncheckedCreateWithoutExecutableInput[]
    connectOrCreate?: HistoryExecutableCreateOrConnectWithoutExecutableInput | HistoryExecutableCreateOrConnectWithoutExecutableInput[]
    upsert?: HistoryExecutableUpsertWithWhereUniqueWithoutExecutableInput | HistoryExecutableUpsertWithWhereUniqueWithoutExecutableInput[]
    createMany?: HistoryExecutableCreateManyExecutableInputEnvelope
    set?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    disconnect?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    delete?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    connect?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    update?: HistoryExecutableUpdateWithWhereUniqueWithoutExecutableInput | HistoryExecutableUpdateWithWhereUniqueWithoutExecutableInput[]
    updateMany?: HistoryExecutableUpdateManyWithWhereWithoutExecutableInput | HistoryExecutableUpdateManyWithWhereWithoutExecutableInput[]
    deleteMany?: HistoryExecutableScalarWhereInput | HistoryExecutableScalarWhereInput[]
  }

  export type ExecutableCreateNestedOneWithoutHistoryInput = {
    create?: XOR<ExecutableCreateWithoutHistoryInput, ExecutableUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: ExecutableCreateOrConnectWithoutHistoryInput
    connect?: ExecutableWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutHistoryInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type PlatformCreateNestedOneWithoutHistoryExecutableInput = {
    create?: XOR<PlatformCreateWithoutHistoryExecutableInput, PlatformUncheckedCreateWithoutHistoryExecutableInput>
    connectOrCreate?: PlatformCreateOrConnectWithoutHistoryExecutableInput
    connect?: PlatformWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ExecutableUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<ExecutableCreateWithoutHistoryInput, ExecutableUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: ExecutableCreateOrConnectWithoutHistoryInput
    upsert?: ExecutableUpsertWithoutHistoryInput
    connect?: ExecutableWhereUniqueInput
    update?: XOR<XOR<ExecutableUpdateToOneWithWhereWithoutHistoryInput, ExecutableUpdateWithoutHistoryInput>, ExecutableUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    upsert?: UserUpsertWithoutHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoryInput, UserUpdateWithoutHistoryInput>, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type PlatformUpdateOneRequiredWithoutHistoryExecutableNestedInput = {
    create?: XOR<PlatformCreateWithoutHistoryExecutableInput, PlatformUncheckedCreateWithoutHistoryExecutableInput>
    connectOrCreate?: PlatformCreateOrConnectWithoutHistoryExecutableInput
    upsert?: PlatformUpsertWithoutHistoryExecutableInput
    connect?: PlatformWhereUniqueInput
    update?: XOR<XOR<PlatformUpdateToOneWithWhereWithoutHistoryExecutableInput, PlatformUpdateWithoutHistoryExecutableInput>, PlatformUncheckedUpdateWithoutHistoryExecutableInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StateCreateNestedOneWithoutUserInput = {
    create?: XOR<StateCreateWithoutUserInput, StateUncheckedCreateWithoutUserInput>
    connectOrCreate?: StateCreateOrConnectWithoutUserInput
    connect?: StateWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type HistoryExecutableCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryExecutableCreateWithoutUserInput, HistoryExecutableUncheckedCreateWithoutUserInput> | HistoryExecutableCreateWithoutUserInput[] | HistoryExecutableUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryExecutableCreateOrConnectWithoutUserInput | HistoryExecutableCreateOrConnectWithoutUserInput[]
    createMany?: HistoryExecutableCreateManyUserInputEnvelope
    connect?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type HistoryExecutableUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryExecutableCreateWithoutUserInput, HistoryExecutableUncheckedCreateWithoutUserInput> | HistoryExecutableCreateWithoutUserInput[] | HistoryExecutableUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryExecutableCreateOrConnectWithoutUserInput | HistoryExecutableCreateOrConnectWithoutUserInput[]
    createMany?: HistoryExecutableCreateManyUserInputEnvelope
    connect?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type StateUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<StateCreateWithoutUserInput, StateUncheckedCreateWithoutUserInput>
    connectOrCreate?: StateCreateOrConnectWithoutUserInput
    upsert?: StateUpsertWithoutUserInput
    connect?: StateWhereUniqueInput
    update?: XOR<XOR<StateUpdateToOneWithWhereWithoutUserInput, StateUpdateWithoutUserInput>, StateUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type HistoryExecutableUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoryExecutableCreateWithoutUserInput, HistoryExecutableUncheckedCreateWithoutUserInput> | HistoryExecutableCreateWithoutUserInput[] | HistoryExecutableUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryExecutableCreateOrConnectWithoutUserInput | HistoryExecutableCreateOrConnectWithoutUserInput[]
    upsert?: HistoryExecutableUpsertWithWhereUniqueWithoutUserInput | HistoryExecutableUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoryExecutableCreateManyUserInputEnvelope
    set?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    disconnect?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    delete?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    connect?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    update?: HistoryExecutableUpdateWithWhereUniqueWithoutUserInput | HistoryExecutableUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoryExecutableUpdateManyWithWhereWithoutUserInput | HistoryExecutableUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoryExecutableScalarWhereInput | HistoryExecutableScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type HistoryExecutableUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoryExecutableCreateWithoutUserInput, HistoryExecutableUncheckedCreateWithoutUserInput> | HistoryExecutableCreateWithoutUserInput[] | HistoryExecutableUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryExecutableCreateOrConnectWithoutUserInput | HistoryExecutableCreateOrConnectWithoutUserInput[]
    upsert?: HistoryExecutableUpsertWithWhereUniqueWithoutUserInput | HistoryExecutableUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoryExecutableCreateManyUserInputEnvelope
    set?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    disconnect?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    delete?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    connect?: HistoryExecutableWhereUniqueInput | HistoryExecutableWhereUniqueInput[]
    update?: HistoryExecutableUpdateWithWhereUniqueWithoutUserInput | HistoryExecutableUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoryExecutableUpdateManyWithWhereWithoutUserInput | HistoryExecutableUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoryExecutableScalarWhereInput | HistoryExecutableScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type ExecutableCreateNestedOneWithoutPostsInput = {
    create?: XOR<ExecutableCreateWithoutPostsInput, ExecutableUncheckedCreateWithoutPostsInput>
    connectOrCreate?: ExecutableCreateOrConnectWithoutPostsInput
    connect?: ExecutableWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type ExecutableUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<ExecutableCreateWithoutPostsInput, ExecutableUncheckedCreateWithoutPostsInput>
    connectOrCreate?: ExecutableCreateOrConnectWithoutPostsInput
    upsert?: ExecutableUpsertWithoutPostsInput
    connect?: ExecutableWhereUniqueInput
    update?: XOR<XOR<ExecutableUpdateToOneWithWhereWithoutPostsInput, ExecutableUpdateWithoutPostsInput>, ExecutableUncheckedUpdateWithoutPostsInput>
  }

  export type EnumThemeFieldUpdateOperationsInput = {
    set?: $Enums.Theme
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumThemeFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[]
    notIn?: $Enums.Theme[]
    not?: NestedEnumThemeFilter<$PrismaModel> | $Enums.Theme
  }

  export type NestedEnumThemeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[]
    notIn?: $Enums.Theme[]
    not?: NestedEnumThemeWithAggregatesFilter<$PrismaModel> | $Enums.Theme
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumThemeFilter<$PrismaModel>
    _max?: NestedEnumThemeFilter<$PrismaModel>
  }

  export type UserCreateWithoutStateInput = {
    name: string
    email: string
    password: string
    phone: string
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    history?: HistoryExecutableCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStateInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryExecutableUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStateInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStateInput, UserUncheckedCreateWithoutStateInput>
  }

  export type UserCreateManyStateInputEnvelope = {
    data: UserCreateManyStateInput | UserCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type ExecutableCreateWithoutStateInput = {
    id?: string
    name: string
    description: string
    type_app: string
    posts?: PostCreateNestedManyWithoutExecutableInput
    history?: HistoryExecutableCreateNestedManyWithoutExecutableInput
  }

  export type ExecutableUncheckedCreateWithoutStateInput = {
    id?: string
    name: string
    description: string
    type_app: string
    posts?: PostUncheckedCreateNestedManyWithoutExecutableInput
    history?: HistoryExecutableUncheckedCreateNestedManyWithoutExecutableInput
  }

  export type ExecutableCreateOrConnectWithoutStateInput = {
    where: ExecutableWhereUniqueInput
    create: XOR<ExecutableCreateWithoutStateInput, ExecutableUncheckedCreateWithoutStateInput>
  }

  export type ExecutableCreateManyStateInputEnvelope = {
    data: ExecutableCreateManyStateInput | ExecutableCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutStateInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutStateInput, UserUncheckedUpdateWithoutStateInput>
    create: XOR<UserCreateWithoutStateInput, UserUncheckedCreateWithoutStateInput>
  }

  export type UserUpdateWithWhereUniqueWithoutStateInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutStateInput, UserUncheckedUpdateWithoutStateInput>
  }

  export type UserUpdateManyWithWhereWithoutStateInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutStateInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    reset_password_token?: StringNullableFilter<"User"> | string | null
    reset_password_expires?: DateTimeNullableFilter<"User"> | Date | string | null
    stateId?: IntFilter<"User"> | number
  }

  export type ExecutableUpsertWithWhereUniqueWithoutStateInput = {
    where: ExecutableWhereUniqueInput
    update: XOR<ExecutableUpdateWithoutStateInput, ExecutableUncheckedUpdateWithoutStateInput>
    create: XOR<ExecutableCreateWithoutStateInput, ExecutableUncheckedCreateWithoutStateInput>
  }

  export type ExecutableUpdateWithWhereUniqueWithoutStateInput = {
    where: ExecutableWhereUniqueInput
    data: XOR<ExecutableUpdateWithoutStateInput, ExecutableUncheckedUpdateWithoutStateInput>
  }

  export type ExecutableUpdateManyWithWhereWithoutStateInput = {
    where: ExecutableScalarWhereInput
    data: XOR<ExecutableUpdateManyMutationInput, ExecutableUncheckedUpdateManyWithoutStateInput>
  }

  export type ExecutableScalarWhereInput = {
    AND?: ExecutableScalarWhereInput | ExecutableScalarWhereInput[]
    OR?: ExecutableScalarWhereInput[]
    NOT?: ExecutableScalarWhereInput | ExecutableScalarWhereInput[]
    id?: StringFilter<"Executable"> | string
    name?: StringFilter<"Executable"> | string
    description?: StringFilter<"Executable"> | string
    type_app?: StringFilter<"Executable"> | string
    stateId?: IntFilter<"Executable"> | number
  }

  export type PlatformCreateWithoutCategoryInput = {
    name: string
    historyExecutable?: HistoryExecutableCreateNestedManyWithoutPlatformInput
  }

  export type PlatformUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    historyExecutable?: HistoryExecutableUncheckedCreateNestedManyWithoutPlatformInput
  }

  export type PlatformCreateOrConnectWithoutCategoryInput = {
    where: PlatformWhereUniqueInput
    create: XOR<PlatformCreateWithoutCategoryInput, PlatformUncheckedCreateWithoutCategoryInput>
  }

  export type PlatformCreateManyCategoryInputEnvelope = {
    data: PlatformCreateManyCategoryInput | PlatformCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PlatformUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PlatformWhereUniqueInput
    update: XOR<PlatformUpdateWithoutCategoryInput, PlatformUncheckedUpdateWithoutCategoryInput>
    create: XOR<PlatformCreateWithoutCategoryInput, PlatformUncheckedCreateWithoutCategoryInput>
  }

  export type PlatformUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PlatformWhereUniqueInput
    data: XOR<PlatformUpdateWithoutCategoryInput, PlatformUncheckedUpdateWithoutCategoryInput>
  }

  export type PlatformUpdateManyWithWhereWithoutCategoryInput = {
    where: PlatformScalarWhereInput
    data: XOR<PlatformUpdateManyMutationInput, PlatformUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PlatformScalarWhereInput = {
    AND?: PlatformScalarWhereInput | PlatformScalarWhereInput[]
    OR?: PlatformScalarWhereInput[]
    NOT?: PlatformScalarWhereInput | PlatformScalarWhereInput[]
    id?: IntFilter<"Platform"> | number
    name?: StringFilter<"Platform"> | string
    categoryId?: IntFilter<"Platform"> | number
  }

  export type HistoryExecutableCreateWithoutPlatformInput = {
    id?: string
    pathExecutable: string
    filename: string
    version: string
    createdAt: Date | string
    executable: ExecutableCreateNestedOneWithoutHistoryInput
    user: UserCreateNestedOneWithoutHistoryInput
  }

  export type HistoryExecutableUncheckedCreateWithoutPlatformInput = {
    id?: string
    executableId: string
    pathExecutable: string
    filename: string
    version: string
    createdAt: Date | string
    userId: number
  }

  export type HistoryExecutableCreateOrConnectWithoutPlatformInput = {
    where: HistoryExecutableWhereUniqueInput
    create: XOR<HistoryExecutableCreateWithoutPlatformInput, HistoryExecutableUncheckedCreateWithoutPlatformInput>
  }

  export type HistoryExecutableCreateManyPlatformInputEnvelope = {
    data: HistoryExecutableCreateManyPlatformInput | HistoryExecutableCreateManyPlatformInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutPlatformInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutPlatformInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutPlatformInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPlatformInput, CategoryUncheckedCreateWithoutPlatformInput>
  }

  export type HistoryExecutableUpsertWithWhereUniqueWithoutPlatformInput = {
    where: HistoryExecutableWhereUniqueInput
    update: XOR<HistoryExecutableUpdateWithoutPlatformInput, HistoryExecutableUncheckedUpdateWithoutPlatformInput>
    create: XOR<HistoryExecutableCreateWithoutPlatformInput, HistoryExecutableUncheckedCreateWithoutPlatformInput>
  }

  export type HistoryExecutableUpdateWithWhereUniqueWithoutPlatformInput = {
    where: HistoryExecutableWhereUniqueInput
    data: XOR<HistoryExecutableUpdateWithoutPlatformInput, HistoryExecutableUncheckedUpdateWithoutPlatformInput>
  }

  export type HistoryExecutableUpdateManyWithWhereWithoutPlatformInput = {
    where: HistoryExecutableScalarWhereInput
    data: XOR<HistoryExecutableUpdateManyMutationInput, HistoryExecutableUncheckedUpdateManyWithoutPlatformInput>
  }

  export type HistoryExecutableScalarWhereInput = {
    AND?: HistoryExecutableScalarWhereInput | HistoryExecutableScalarWhereInput[]
    OR?: HistoryExecutableScalarWhereInput[]
    NOT?: HistoryExecutableScalarWhereInput | HistoryExecutableScalarWhereInput[]
    id?: StringFilter<"HistoryExecutable"> | string
    executableId?: StringFilter<"HistoryExecutable"> | string
    pathExecutable?: StringFilter<"HistoryExecutable"> | string
    filename?: StringFilter<"HistoryExecutable"> | string
    version?: StringFilter<"HistoryExecutable"> | string
    createdAt?: DateTimeFilter<"HistoryExecutable"> | Date | string
    userId?: IntFilter<"HistoryExecutable"> | number
    platformId?: IntFilter<"HistoryExecutable"> | number
  }

  export type CategoryUpsertWithoutPlatformInput = {
    update: XOR<CategoryUpdateWithoutPlatformInput, CategoryUncheckedUpdateWithoutPlatformInput>
    create: XOR<CategoryCreateWithoutPlatformInput, CategoryUncheckedCreateWithoutPlatformInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPlatformInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPlatformInput, CategoryUncheckedUpdateWithoutPlatformInput>
  }

  export type CategoryUpdateWithoutPlatformInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutPlatformInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StateCreateWithoutExecutableInput = {
    state?: string
    user?: UserCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateWithoutExecutableInput = {
    id?: number
    state?: string
    user?: UserUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateCreateOrConnectWithoutExecutableInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutExecutableInput, StateUncheckedCreateWithoutExecutableInput>
  }

  export type PostCreateWithoutExecutableInput = {
    createdAt?: Date | string
    comment?: string | null
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutExecutableInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    comment?: string | null
  }

  export type PostCreateOrConnectWithoutExecutableInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutExecutableInput, PostUncheckedCreateWithoutExecutableInput>
  }

  export type PostCreateManyExecutableInputEnvelope = {
    data: PostCreateManyExecutableInput | PostCreateManyExecutableInput[]
    skipDuplicates?: boolean
  }

  export type HistoryExecutableCreateWithoutExecutableInput = {
    id?: string
    pathExecutable: string
    filename: string
    version: string
    createdAt: Date | string
    user: UserCreateNestedOneWithoutHistoryInput
    platform: PlatformCreateNestedOneWithoutHistoryExecutableInput
  }

  export type HistoryExecutableUncheckedCreateWithoutExecutableInput = {
    id?: string
    pathExecutable: string
    filename: string
    version: string
    createdAt: Date | string
    userId: number
    platformId: number
  }

  export type HistoryExecutableCreateOrConnectWithoutExecutableInput = {
    where: HistoryExecutableWhereUniqueInput
    create: XOR<HistoryExecutableCreateWithoutExecutableInput, HistoryExecutableUncheckedCreateWithoutExecutableInput>
  }

  export type HistoryExecutableCreateManyExecutableInputEnvelope = {
    data: HistoryExecutableCreateManyExecutableInput | HistoryExecutableCreateManyExecutableInput[]
    skipDuplicates?: boolean
  }

  export type StateUpsertWithoutExecutableInput = {
    update: XOR<StateUpdateWithoutExecutableInput, StateUncheckedUpdateWithoutExecutableInput>
    create: XOR<StateCreateWithoutExecutableInput, StateUncheckedCreateWithoutExecutableInput>
    where?: StateWhereInput
  }

  export type StateUpdateToOneWithWhereWithoutExecutableInput = {
    where?: StateWhereInput
    data: XOR<StateUpdateWithoutExecutableInput, StateUncheckedUpdateWithoutExecutableInput>
  }

  export type StateUpdateWithoutExecutableInput = {
    state?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutExecutableInput = {
    id?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateManyWithoutStateNestedInput
  }

  export type PostUpsertWithWhereUniqueWithoutExecutableInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutExecutableInput, PostUncheckedUpdateWithoutExecutableInput>
    create: XOR<PostCreateWithoutExecutableInput, PostUncheckedCreateWithoutExecutableInput>
  }

  export type PostUpdateWithWhereUniqueWithoutExecutableInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutExecutableInput, PostUncheckedUpdateWithoutExecutableInput>
  }

  export type PostUpdateManyWithWhereWithoutExecutableInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutExecutableInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    userId?: IntFilter<"Post"> | number
    executableId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    comment?: StringNullableFilter<"Post"> | string | null
  }

  export type HistoryExecutableUpsertWithWhereUniqueWithoutExecutableInput = {
    where: HistoryExecutableWhereUniqueInput
    update: XOR<HistoryExecutableUpdateWithoutExecutableInput, HistoryExecutableUncheckedUpdateWithoutExecutableInput>
    create: XOR<HistoryExecutableCreateWithoutExecutableInput, HistoryExecutableUncheckedCreateWithoutExecutableInput>
  }

  export type HistoryExecutableUpdateWithWhereUniqueWithoutExecutableInput = {
    where: HistoryExecutableWhereUniqueInput
    data: XOR<HistoryExecutableUpdateWithoutExecutableInput, HistoryExecutableUncheckedUpdateWithoutExecutableInput>
  }

  export type HistoryExecutableUpdateManyWithWhereWithoutExecutableInput = {
    where: HistoryExecutableScalarWhereInput
    data: XOR<HistoryExecutableUpdateManyMutationInput, HistoryExecutableUncheckedUpdateManyWithoutExecutableInput>
  }

  export type ExecutableCreateWithoutHistoryInput = {
    id?: string
    name: string
    description: string
    type_app: string
    state: StateCreateNestedOneWithoutExecutableInput
    posts?: PostCreateNestedManyWithoutExecutableInput
  }

  export type ExecutableUncheckedCreateWithoutHistoryInput = {
    id?: string
    name: string
    description: string
    type_app: string
    stateId: number
    posts?: PostUncheckedCreateNestedManyWithoutExecutableInput
  }

  export type ExecutableCreateOrConnectWithoutHistoryInput = {
    where: ExecutableWhereUniqueInput
    create: XOR<ExecutableCreateWithoutHistoryInput, ExecutableUncheckedCreateWithoutHistoryInput>
  }

  export type UserCreateWithoutHistoryInput = {
    name: string
    email: string
    password: string
    phone: string
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    state?: StateCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHistoryInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    stateId?: number
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
  }

  export type PlatformCreateWithoutHistoryExecutableInput = {
    name: string
    category: CategoryCreateNestedOneWithoutPlatformInput
  }

  export type PlatformUncheckedCreateWithoutHistoryExecutableInput = {
    id?: number
    name: string
    categoryId: number
  }

  export type PlatformCreateOrConnectWithoutHistoryExecutableInput = {
    where: PlatformWhereUniqueInput
    create: XOR<PlatformCreateWithoutHistoryExecutableInput, PlatformUncheckedCreateWithoutHistoryExecutableInput>
  }

  export type ExecutableUpsertWithoutHistoryInput = {
    update: XOR<ExecutableUpdateWithoutHistoryInput, ExecutableUncheckedUpdateWithoutHistoryInput>
    create: XOR<ExecutableCreateWithoutHistoryInput, ExecutableUncheckedCreateWithoutHistoryInput>
    where?: ExecutableWhereInput
  }

  export type ExecutableUpdateToOneWithWhereWithoutHistoryInput = {
    where?: ExecutableWhereInput
    data: XOR<ExecutableUpdateWithoutHistoryInput, ExecutableUncheckedUpdateWithoutHistoryInput>
  }

  export type ExecutableUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type_app?: StringFieldUpdateOperationsInput | string
    state?: StateUpdateOneRequiredWithoutExecutableNestedInput
    posts?: PostUpdateManyWithoutExecutableNestedInput
  }

  export type ExecutableUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type_app?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
    posts?: PostUncheckedUpdateManyWithoutExecutableNestedInput
  }

  export type UserUpsertWithoutHistoryInput = {
    update: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateWithoutHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    state?: StateUpdateOneRequiredWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stateId?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlatformUpsertWithoutHistoryExecutableInput = {
    update: XOR<PlatformUpdateWithoutHistoryExecutableInput, PlatformUncheckedUpdateWithoutHistoryExecutableInput>
    create: XOR<PlatformCreateWithoutHistoryExecutableInput, PlatformUncheckedCreateWithoutHistoryExecutableInput>
    where?: PlatformWhereInput
  }

  export type PlatformUpdateToOneWithWhereWithoutHistoryExecutableInput = {
    where?: PlatformWhereInput
    data: XOR<PlatformUpdateWithoutHistoryExecutableInput, PlatformUncheckedUpdateWithoutHistoryExecutableInput>
  }

  export type PlatformUpdateWithoutHistoryExecutableInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutPlatformNestedInput
  }

  export type PlatformUncheckedUpdateWithoutHistoryExecutableInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    token?: string | null
    date_created: string
    time_created: string
    type: string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token?: string | null
    date_created: string
    time_created: string
    type: string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StateCreateWithoutUserInput = {
    state?: string
    executable?: ExecutableCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateWithoutUserInput = {
    id?: number
    state?: string
    executable?: ExecutableUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateCreateOrConnectWithoutUserInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutUserInput, StateUncheckedCreateWithoutUserInput>
  }

  export type PostCreateWithoutUserInput = {
    createdAt?: Date | string
    comment?: string | null
    executable: ExecutableCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    executableId: string
    createdAt?: Date | string
    comment?: string | null
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HistoryExecutableCreateWithoutUserInput = {
    id?: string
    pathExecutable: string
    filename: string
    version: string
    createdAt: Date | string
    executable: ExecutableCreateNestedOneWithoutHistoryInput
    platform: PlatformCreateNestedOneWithoutHistoryExecutableInput
  }

  export type HistoryExecutableUncheckedCreateWithoutUserInput = {
    id?: string
    executableId: string
    pathExecutable: string
    filename: string
    version: string
    createdAt: Date | string
    platformId: number
  }

  export type HistoryExecutableCreateOrConnectWithoutUserInput = {
    where: HistoryExecutableWhereUniqueInput
    create: XOR<HistoryExecutableCreateWithoutUserInput, HistoryExecutableUncheckedCreateWithoutUserInput>
  }

  export type HistoryExecutableCreateManyUserInputEnvelope = {
    data: HistoryExecutableCreateManyUserInput | HistoryExecutableCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    token?: StringNullableFilter<"Session"> | string | null
    date_created?: StringFilter<"Session"> | string
    time_created?: StringFilter<"Session"> | string
    type?: StringFilter<"Session"> | string
    userId?: IntFilter<"Session"> | number
  }

  export type StateUpsertWithoutUserInput = {
    update: XOR<StateUpdateWithoutUserInput, StateUncheckedUpdateWithoutUserInput>
    create: XOR<StateCreateWithoutUserInput, StateUncheckedCreateWithoutUserInput>
    where?: StateWhereInput
  }

  export type StateUpdateToOneWithWhereWithoutUserInput = {
    where?: StateWhereInput
    data: XOR<StateUpdateWithoutUserInput, StateUncheckedUpdateWithoutUserInput>
  }

  export type StateUpdateWithoutUserInput = {
    state?: StringFieldUpdateOperationsInput | string
    executable?: ExecutableUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    executable?: ExecutableUncheckedUpdateManyWithoutStateNestedInput
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type HistoryExecutableUpsertWithWhereUniqueWithoutUserInput = {
    where: HistoryExecutableWhereUniqueInput
    update: XOR<HistoryExecutableUpdateWithoutUserInput, HistoryExecutableUncheckedUpdateWithoutUserInput>
    create: XOR<HistoryExecutableCreateWithoutUserInput, HistoryExecutableUncheckedCreateWithoutUserInput>
  }

  export type HistoryExecutableUpdateWithWhereUniqueWithoutUserInput = {
    where: HistoryExecutableWhereUniqueInput
    data: XOR<HistoryExecutableUpdateWithoutUserInput, HistoryExecutableUncheckedUpdateWithoutUserInput>
  }

  export type HistoryExecutableUpdateManyWithWhereWithoutUserInput = {
    where: HistoryExecutableScalarWhereInput
    data: XOR<HistoryExecutableUpdateManyMutationInput, HistoryExecutableUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutSessionsInput = {
    name: string
    email: string
    password: string
    phone: string
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    state?: StateCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    history?: HistoryExecutableCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    stateId?: number
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryExecutableUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: StateUpdateOneRequiredWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    history?: HistoryExecutableUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stateId?: IntFieldUpdateOperationsInput | number
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryExecutableUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    name: string
    email: string
    password: string
    phone: string
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    state?: StateCreateNestedOneWithoutUserInput
    history?: HistoryExecutableCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    stateId?: number
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryExecutableUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type ExecutableCreateWithoutPostsInput = {
    id?: string
    name: string
    description: string
    type_app: string
    state: StateCreateNestedOneWithoutExecutableInput
    history?: HistoryExecutableCreateNestedManyWithoutExecutableInput
  }

  export type ExecutableUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    description: string
    type_app: string
    stateId: number
    history?: HistoryExecutableUncheckedCreateNestedManyWithoutExecutableInput
  }

  export type ExecutableCreateOrConnectWithoutPostsInput = {
    where: ExecutableWhereUniqueInput
    create: XOR<ExecutableCreateWithoutPostsInput, ExecutableUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    state?: StateUpdateOneRequiredWithoutUserNestedInput
    history?: HistoryExecutableUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stateId?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryExecutableUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExecutableUpsertWithoutPostsInput = {
    update: XOR<ExecutableUpdateWithoutPostsInput, ExecutableUncheckedUpdateWithoutPostsInput>
    create: XOR<ExecutableCreateWithoutPostsInput, ExecutableUncheckedCreateWithoutPostsInput>
    where?: ExecutableWhereInput
  }

  export type ExecutableUpdateToOneWithWhereWithoutPostsInput = {
    where?: ExecutableWhereInput
    data: XOR<ExecutableUpdateWithoutPostsInput, ExecutableUncheckedUpdateWithoutPostsInput>
  }

  export type ExecutableUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type_app?: StringFieldUpdateOperationsInput | string
    state?: StateUpdateOneRequiredWithoutExecutableNestedInput
    history?: HistoryExecutableUpdateManyWithoutExecutableNestedInput
  }

  export type ExecutableUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type_app?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
    history?: HistoryExecutableUncheckedUpdateManyWithoutExecutableNestedInput
  }

  export type UserCreateManyStateInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
  }

  export type ExecutableCreateManyStateInput = {
    id?: string
    name: string
    description: string
    type_app: string
  }

  export type UserUpdateWithoutStateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    history?: HistoryExecutableUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryExecutableUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExecutableUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type_app?: StringFieldUpdateOperationsInput | string
    posts?: PostUpdateManyWithoutExecutableNestedInput
    history?: HistoryExecutableUpdateManyWithoutExecutableNestedInput
  }

  export type ExecutableUncheckedUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type_app?: StringFieldUpdateOperationsInput | string
    posts?: PostUncheckedUpdateManyWithoutExecutableNestedInput
    history?: HistoryExecutableUncheckedUpdateManyWithoutExecutableNestedInput
  }

  export type ExecutableUncheckedUpdateManyWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type_app?: StringFieldUpdateOperationsInput | string
  }

  export type PlatformCreateManyCategoryInput = {
    id?: number
    name: string
  }

  export type PlatformUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    historyExecutable?: HistoryExecutableUpdateManyWithoutPlatformNestedInput
  }

  export type PlatformUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    historyExecutable?: HistoryExecutableUncheckedUpdateManyWithoutPlatformNestedInput
  }

  export type PlatformUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HistoryExecutableCreateManyPlatformInput = {
    id?: string
    executableId: string
    pathExecutable: string
    filename: string
    version: string
    createdAt: Date | string
    userId: number
  }

  export type HistoryExecutableUpdateWithoutPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathExecutable?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executable?: ExecutableUpdateOneRequiredWithoutHistoryNestedInput
    user?: UserUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type HistoryExecutableUncheckedUpdateWithoutPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    executableId?: StringFieldUpdateOperationsInput | string
    pathExecutable?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoryExecutableUncheckedUpdateManyWithoutPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    executableId?: StringFieldUpdateOperationsInput | string
    pathExecutable?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateManyExecutableInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    comment?: string | null
  }

  export type HistoryExecutableCreateManyExecutableInput = {
    id?: string
    pathExecutable: string
    filename: string
    version: string
    createdAt: Date | string
    userId: number
    platformId: number
  }

  export type PostUpdateWithoutExecutableInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutExecutableInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUncheckedUpdateManyWithoutExecutableInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoryExecutableUpdateWithoutExecutableInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathExecutable?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHistoryNestedInput
    platform?: PlatformUpdateOneRequiredWithoutHistoryExecutableNestedInput
  }

  export type HistoryExecutableUncheckedUpdateWithoutExecutableInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathExecutable?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    platformId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoryExecutableUncheckedUpdateManyWithoutExecutableInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathExecutable?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    platformId?: IntFieldUpdateOperationsInput | number
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token?: string | null
    date_created: string
    time_created: string
    type: string
  }

  export type PostCreateManyUserInput = {
    id?: number
    executableId: string
    createdAt?: Date | string
    comment?: string | null
  }

  export type HistoryExecutableCreateManyUserInput = {
    id?: string
    executableId: string
    pathExecutable: string
    filename: string
    version: string
    createdAt: Date | string
    platformId: number
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    date_created?: StringFieldUpdateOperationsInput | string
    time_created?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    date_created?: StringFieldUpdateOperationsInput | string
    time_created?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    date_created?: StringFieldUpdateOperationsInput | string
    time_created?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    executable?: ExecutableUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    executableId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    executableId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoryExecutableUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathExecutable?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executable?: ExecutableUpdateOneRequiredWithoutHistoryNestedInput
    platform?: PlatformUpdateOneRequiredWithoutHistoryExecutableNestedInput
  }

  export type HistoryExecutableUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    executableId?: StringFieldUpdateOperationsInput | string
    pathExecutable?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platformId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoryExecutableUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    executableId?: StringFieldUpdateOperationsInput | string
    pathExecutable?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platformId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}