interface CodeRowProps {
    type: "keyword" | "string" | "comment" | "var" | "func" | "punct";
    size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
    children: React.ReactNode;
}

export function CodeRow({ type, size = "sm", children }: CodeRowProps) {
    //color mapping
    const colors = {
        keyword: "text-purple-400", // const, export, return..
        var: "text-blue-300",     // variable name
        string: "text-green-400",   // "text"
        comment: "text-slate-600",  // // comment
        punct: "text-slate-500",    // { } [ ] , :
        func: "text-yellow-200",    // functionName()
    };

  // size mapping
    const sizes = {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
    };

    return (
    <span className={`${colors[type]} ${sizes[size]} font-mono transition-all`}>
      {children}
    </span>
  );
}
