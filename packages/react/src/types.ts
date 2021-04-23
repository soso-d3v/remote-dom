import type {ReactNode, ComponentType, ReactElement} from 'react';
import type {RemoteComponentType, RemoteFragment} from '@remote-ui/core';

type PropsForRemoteComponent<T> = T extends RemoteComponentType<
  string,
  infer Props,
  any
>
  ? {[K in keyof Props]: RemoteFragmentToReactElement<Props[K]>}
  : never;

type RemoteFragmentToReactElement<T> = T extends RemoteFragment
  ? ReactElement
  : T;

export type ReactPropsFromRemoteComponentType<
  Type extends RemoteComponentType<string, any, any>
> = PropsForRemoteComponent<Type> & {
  children?: ReactNode;
};

export type ReactComponentTypeFromRemoteComponentType<
  Type extends RemoteComponentType<string, any, any>
> = ComponentType<ReactPropsFromRemoteComponentType<Type>>;
