interface CodeRowProps {
    type: "keyword" | "string" | "comment" | "var" | "func" | "punct";
    children: React.ReactNode;
}

export function CodeRow({ type, children }: CodeRowProps) {
    const colors = {
    keyword: "text-purple-400", // const, export, return..
    var: "text-blue-300",     // variable name
    string: "text-green-400",   // "text"
    comment: "text-slate-600",  // // comment
    punct: "text-slate-500",    // { } [ ] , :
    func: "text-yellow-200",    // functionName()
  };
    return <span className={colors[type]}>{children}</span>;
}
