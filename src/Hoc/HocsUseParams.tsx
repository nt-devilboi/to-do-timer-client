import React, { ComponentType } from "react";
/**
 * https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
 */
import hoistNonReactStatics from "hoist-non-react-statics";
import { useParams } from "react-router";

export type TWithStoreHOC = <P>(
    Component: ComponentType<P>,
) => (props: P) => JSX.Element;

/* export const withStore = (WrappedComponent) => (props) => {
  const ComponentWithStore = () => {
    const params = useParams();

    return <WrappedComponent {...props} store={params}/>;
  };

  ComponentWithStore.defaultProps = { ...WrappedComponent.defaultProps };
  ComponentWithStore.displayName = `WithStores(${
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    WrappedComponent.name || WrappedComponent.displayName
  })`;

  hoistNonReactStatics(ComponentWithStore, WrappedComponent);

  return <ComponentWithStore/>;
}; */
