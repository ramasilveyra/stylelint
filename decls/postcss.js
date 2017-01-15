declare class postcss$node {
  raw: Function,
  type: 'rule' | 'atrule' | 'root' | 'comment' | 'decl';
  parent: Object;
  nodes: Array<Object>;
  next(): postcss$node | void;
  prev(): postcss$node | void;
  source: {
    start: {
      line: number,
      column: number,
    },
    end: {
      line: number,
      column: number,
    },
  };
  error(message: string, options: { plugin: string }): void,
}

declare class postcss$comment extends postcss$node {
  text: string;
  raws: {
    before?: string,
    after?: string,
  };
}

declare class postcss$atRule extends postcss$node {
  name: string;
  params: string;
  raws: {
    before?: string,
    after?: string,
    afterName?: string,
  };
}

declare class postcss$rule extends postcss$node {
  selector: string;
  raws: {
    before?: string,
    after?: string,
  };
}

declare class postcss$decl extends postcss$node {
  prop: string;
  value: string;
  raws: {
    before?: string,
    after?: string,
  };
}
