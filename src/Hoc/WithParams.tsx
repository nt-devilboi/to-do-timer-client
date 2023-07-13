import React, { useState, ComponentType } from "react";
import { useParams } from "react-router";

export type RouterParams = {
    id: string
}

export function useParamsInClass<T>(Component: ComponentType<T>) {
  return function (props: T) {
    // eslint-disable-next-line react-hooks/rules-of-hooks,@typescript-eslint/no-unsafe-assignment
    const params = useParams<RouterParams>();

    // Передача состояния и функции обновления через props
    return <Component {...props} params={params}/>;
  };
}

// Пример использования декоратора
interface MyComponentProps {
    id: string;
}
