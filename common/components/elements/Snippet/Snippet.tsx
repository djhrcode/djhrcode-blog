import { Box } from "@chakra-ui/react";
import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import php from "react-syntax-highlighter/dist/cjs/languages/prism/php";
import { materialDark as themeStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";

export type SnippetProps = {
    content?: string;
    children?: string;
    language?: string;
};

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("php", php);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

export const Snippet: React.FC<SnippetProps> = function (props) {
    return (
        // <Box display="flex">
        <SyntaxHighlighter
            language={props.language}
            style={{
                "code[class*=\"language-\"]": {
                    "textAlign": "left",
                    "whiteSpace": "pre",
                    "wordSpacing": "normal",
                    "wordBreak": "normal",
                    "wordWrap": "normal",
                    "color": "#eee",
                    "background": "#FFFFFF00",
                    "fontFamily": "JetBrains Mono, monospace",
                    "fontSize": "1em",
                    "lineHeight": "1.5em",
                    "MozTabSize": "4",
                    "OTabSize": "4",
                    "tabSize": "4",
                    "WebkitHyphens": "none",
                    "MozHyphens": "none",
                    "msHyphens": "none",
                    "hyphens": "none",
                },
                "pre[class*=\"language-\"]": {
                    "textAlign": "left",
                    "whiteSpace": "pre",
                    "wordSpacing": "normal",
                    "wordBreak": "normal",
                    "wordWrap": "normal",
                    "color": "#eee",
                    "background": "#14121a",
                    "fontFamily": "JetBrains Mono, monospace",
                    "fontSize": "1em",
                    "lineHeight": "1.5em",
                    "MozTabSize": "4",
                    "OTabSize": "4",
                    "tabSize": "4",
                    "WebkitHyphens": "none",
                    "MozHyphens": "none",
                    "msHyphens": "none",
                    "hyphens": "none",
                    "overflow": "auto",
                    "position": "relative",
                    "margin": "0.5em 0",
                    "padding": "1.25em 1em",
                    "borderRadius": "0.5em",
                    "boxShadow": "0px 0px 0px 2px #FFFFFF11, 0px 0px 30px 2px #FFFFFF09"
                },
                "code[class*=\"language-\"]::-moz-selection": {
                    "background": "#363636"
                },
                "pre[class*=\"language-\"]::-moz-selection": {
                    "background": "#363636"
                },
                "code[class*=\"language-\"] ::-moz-selection": {
                    "background": "#363636"
                },
                "pre[class*=\"language-\"] ::-moz-selection": {
                    "background": "#363636"
                },
                "code[class*=\"language-\"]::selection": {
                    "background": "#363636"
                },
                "pre[class*=\"language-\"]::selection": {
                    "background": "#363636"
                },
                "code[class*=\"language-\"] ::selection": {
                    "background": "#363636"
                },
                "pre[class*=\"language-\"] ::selection": {
                    "background": "#363636"
                },
                ":not(pre) > code[class*=\"language-\"]": {
                    "whiteSpace": "normal",
                    "borderRadius": "0.2em",
                    "padding": "0.1em"
                },
                ".language-css > code": {
                    "color": "#FF6AA0"
                },
                ".language-sass > code": {
                    "color": "#FF6AA0"
                },
                ".language-scss > code": {
                    "color": "#FF6AA0"
                },
                "[class*=\"language-\"] .namespace": {
                    "opacity": "0.7"
                },
                "atrule": {
                    "color": "#40FFBA"
                },
                "attr-name": {
                    "color": "#ffcb6b"
                },
                "attr-value": {
                    "color": "#F5B800"
                },
                "attribute": {
                    "color": "#F5B800"
                },
                "boolean": {
                    "color": "#40FFBA"
                },
                "builtin": {
                    "color": "#ffcb6b"
                },
                "cdata": {
                    "color": "#BDB7FF"
                },
                "char": {
                    "color": "#BDB7FF"
                },
                "class": {
                    "color": "#ffcb6b"
                },
                "class-name": {
                    "color": "#938AFF"
                },
                "comment": {
                    "color": "#616161"
                },
                "constant": {
                    "color": "#40FFBA"
                },
                "deleted": {
                    "color": "#FF6AA0"
                },
                "doctype": {
                    "color": "#616161"
                },
                "entity": {
                    "color": "#FF6AA0"
                },
                "function": {
                    "color": "#40FFBA"
                },
                "hexcode": {
                    "color": "#938AFF"
                },
                "id": {
                    "color": "#40FFBA",
                    "fontWeight": "bold"
                },
                "important": {
                    "color": "#40FFBA",
                    "fontWeight": "bold"
                },
                "inserted": {
                    "color": "#BDB7FF"
                },
                "keyword": {
                    "color": "#40FFBA"
                },
                "number": {
                    "color": "#FF6AA0"
                },
                "operator": {
                    "color": "#89ddff"
                },
                "prolog": {
                    "color": "#616161"
                },
                "property": {
                    "color": "#BDB7FF"
                },
                "pseudo-class": {
                    "color": "#F5B800"
                },
                "pseudo-element": {
                    "color": "#F5B800"
                },
                "punctuation": {
                    "color": "#89ddff"
                },
                "regex": {
                    "color": "#938AFF"
                },
                "selector": {
                    "color": "#FF6AA0"
                },
                "string": {
                    "color": "#F5B800"
                },
                "symbol": {
                    "color": "#40FFBA"
                },
                "tag": {
                    "color": "#FF6AA0"
                },
                "unit": {
                    "color": "#FF6AA0"
                },
                "url": {
                    "color": "#FF6AA0"
                },
                "variable": {
                    "color": "#FF6AA0"
                }
            }}
            PreTag="div"
            useInlineStyles={true}
        >
            {props.children ?? props.content ?? ""}
        </SyntaxHighlighter>
        // </Box>
    );
};
