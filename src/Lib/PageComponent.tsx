import React from "react";

export abstract class PageComponent<TInject = unknown, TProps = unknown, TState = unknown> extends React.Component<TProps, TState> {
  get injected() {
    return this.props as TInject;
  }
}
