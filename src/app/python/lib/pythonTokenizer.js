const KEYWORDS = new Set([
  'def', 'return', 'if', 'elif', 'else', 'for', 'while', 'in', 'import', 'from',
  'as', 'class', 'try', 'except', 'finally', 'with', 'lambda', 'pass', 'break',
  'continue', 'None', 'True', 'False', 'and', 'or', 'not', 'is', 'global',
  'nonlocal', 'yield', 'raise', 'assert', 'del', 'async', 'await',
]);

// Order matters: comment/string/number are checked before generic identifiers
// so e.g. a `#` inside a string doesn't get misread as a comment.
const TOKEN_REGEX =
  /(#.*$)|('''[\s\S]*?'''|"""[\s\S]*?"""|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|(\b\d+\.?\d*[jJ]?\b)|([A-Za-z_][A-Za-z0-9_]*)(?=\s*\()|([A-Za-z_][A-Za-z0-9_]*)|([-+*/%=<>!&|^~]+)|([().,:[\]{}])|(\s+)/g;

function tokenizeLine(line) {
  const tokens = [];
  let match;
  TOKEN_REGEX.lastIndex = 0;

  while ((match = TOKEN_REGEX.exec(line)) !== null) {
    const [, comment, string, number, funcName, ident, operator, punct, ws] = match;

    if (comment !== undefined) tokens.push({ text: comment, type: 'comment' });
    else if (string !== undefined) tokens.push({ text: string, type: 'string' });
    else if (number !== undefined) tokens.push({ text: number, type: 'number' });
    else if (funcName !== undefined)
      tokens.push({ text: funcName, type: KEYWORDS.has(funcName) ? 'keyword' : 'func' });
    else if (ident !== undefined)
      tokens.push({ text: ident, type: KEYWORDS.has(ident) ? 'keyword' : 'variable' });
    else if (operator !== undefined) tokens.push({ text: operator, type: 'operator' });
    else if (punct !== undefined) tokens.push({ text: punct, type: 'punctuation' });
    else if (ws !== undefined) tokens.push({ text: ws, type: 'plain' });
  }

  return tokens;
}

// Converts a raw multi-line code string into per-line token arrays,
// ready to be rendered by <Token /> spans.
export function tokenizeCode(code) {
  return code.split('\n').map((line) =>
    line.trim() === '' ? { blank: true } : { tokens: tokenizeLine(line) }
  );
}