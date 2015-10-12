html_comment_in_expression: {
    input: {
        function f(a, b, x, y) { return a < !--b && x-- > y; }
    }
    expect_exact: "function f(a,b,x,y){return a< !--b&&x-- >y}";
}

html_comment_in_string_literal: {
    input: {
        function f() { return "<!--HTML-->comment in<!--string literal-->"; }
    }
    expect_exact: 'function f(){return"\\x3c!--HTML--\\x3ecomment in\\x3c!--string literal--\\x3e"}';
}


