import { ComputedRef, Ref } from 'vue';

type IsDefinedReturn = boolean;
declare function isDefined<T>(v: ComputedRef<T>): v is ComputedRef<Exclude<T, null | undefined>>;
declare function isDefined<T>(v: Ref<T>): v is Ref<Exclude<T, null | undefined>>;
declare function isDefined<T>(v: T): v is Exclude<T, null | undefined>;

export { isDefined };
export type { IsDefinedReturn };
