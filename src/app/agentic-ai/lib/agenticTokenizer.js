// lib/agenticTokenizer.js
// Same job as pythonTokenizer.js, reusing the exact VS Code "Dark+" palette
// from CodeCell.jsx / CodeNoteCard.js so code panels look identical across
// both note sections. Handles python / json; "text" (ASCII diagrams, raw
// tool output) is passed through unhighlighted.

const PY_KEYWORDS = new Set([
  "def", "return", "if", "else", "elif", "for", "while", "import", "from",
  "class", "try", "except", "with", "as", "pass", "None", "True", "False",
  "and", "or", "not", "in", "is", "lambda", "yield",
]);

const JSON_KEYWORDS = new Set(["true", "false", "null"]);

export const TOKEN_COLORS = {
  comment: "#6A9955",   // green, italic
  string: "#CE9178",    // orange
  number: "#B5CEA8",    // soft green
  keyword: "#569CD6",   // blue
  variable: "#9CDCFE",  // light blue (also used for JSON keys)
  func: "#DCDCAA",      // yellow (identifiers/functions)
  operator: "#D4D4D4",  // near-white
  punctuation: "#D4D4D4",
  plain: "#D4D4D4",
};

function tokenizeLine(line, lang) {
  const tokens = [];
  const pattern =
    /("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')|(#.*$)|(\b\d+\.?\d*\b)|([A-Za-z_][A-Za-z0-9_]*)|(\s+)|(.)/g;

  let match;
  while ((match = pattern.exec(line)) !== null) {
    const [full, dqString, sqString, comment, number, word, space, punct] = match;

    if (dqString || sqString) {
      tokens.push({ text: full, type: "string" });
    } else if (comment) {
      tokens.push({ text: full, type: "comment" });
    } else if (number) {
      tokens.push({ text: full, type: "number" });
    } else if (word) {
      const isKeyword = lang === "python" ? PY_KEYWORDS.has(word) : JSON_KEYWORDS.has(word);
      tokens.push({ text: full, type: isKeyword ? "keyword" : "func" });
    } else if (space) {
      tokens.push({ text: full, type: "space" });
    } else {
      tokens.push({ text: full, type: /[{}[\]]/.test(punct) ? "punctuation" : "operator" });
    }
  }

  return tokens;
}

// JSON object keys ("name":) get the "variable" color, same as the rest of
// the palette treats identifiers/keys.
function markJsonKeys(tokens) {
  return tokens.map((tok, i) => {
    if (tok.type !== "string") return tok;
    const next = tokens.slice(i + 1).find((t) => t.type !== "space");
    return next && next.text === ":" ? { ...tok, type: "variable" } : tok;
  });
}

export function tokenizeCode(code, lang = "text") {
  if (lang !== "python" && lang !== "json") {
    return code.split("\n").map((line) => ({
      blank: line.length === 0,
      tokens: [{ text: line, type: "plain" }],
    }));
  }

  return code.split("\n").map((line) => {
    if (line.length === 0) return { blank: true, tokens: [] };
    const tokens = tokenizeLine(line, lang);
    return { blank: false, tokens: lang === "json" ? markJsonKeys(tokens) : tokens };
  });
}