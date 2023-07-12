import React from "react";

export abstract class PageComponent<TInject = unknown, TProps = unknown, TState = unknown> extends React.Component<TProps, TState> { // идейно пока это мало имеет смысл, но мне лень писать injected
  get injected() {
    return this.props as TInject;
  }
}
