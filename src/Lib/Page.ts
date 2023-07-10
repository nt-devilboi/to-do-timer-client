class Page {// дааа своя библиотка для работы с страничкой)))
  Parameters() {
    const regGetParams = /:(\w+)/;
    const matches = window.location.pathname.match(regGetParams);
    if (matches === null) {
      throw new Error("У этого адреса нету PathVariable");
    }

    const result: string[] = [];
    for (let i = 1; i < matches.length; ++i) {
      result.push(matches[i]);
    }

    return result;
  }
}

export default new Page();
