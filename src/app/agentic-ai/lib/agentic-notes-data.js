// lib/agentic-notes-data.js
// Same shape as lib/python-notes-data.js: a list of noteGroups, each with a
// slug/name and a notes array. Kept as one group ("Agentic AI") since
// there's only one subject here, but the shape matches so NotesSidebar.jsx
// and [slug]/page.js can stay nearly identical to the Python versions.

export const noteGroups = [
  {
    slug: "agentic-ai",
    name: "Agentic AI",
    notes: [
      { slug: "agent", title: "Agent", available: true, blocks: agentBlocks() },
      { slug: "messages", title: "Messages", available: true, blocks: messagesBlocks() },
      { slug: "tools", title: "Tools", available: true, blocks: toolsBlocks() },
      { slug: "structured-output", title: "Structured Output", available: true, blocks: structuredOutputBlocks() },
      { slug: "streaming-batching", title: "Streaming & Batching", available: true, blocks: streamingBatchingBlocks() },
      { slug: "middleware", title: "Middleware", available: false, blocks: [] },
      { slug: "langgraph", title: "LangGraph", available: false, blocks: [] },
      { slug: "react-agent", title: "ReAct Agent", available: false, blocks: [] },
      { slug: "ai-governance", title: "AI Governance", available: false, blocks: [] },
    ],
  },
];

// Flat helpers, used by [slug]/page.js for lookup + prev/next nav — same
// job as noteGroups.flatMap(...) does inline in the Python sidebar.
export const notesBySlug = Object.fromEntries(
  noteGroups.flatMap((g) => g.notes).map((n) => [n.slug, n])
);
export const noteOrder = noteGroups.flatMap((g) => g.notes.map((n) => n.slug));

// ---------------------------------------------------------------------
// Block types consumed by NoteCard.js:
//   heading  { type: "heading", text }
//   sub      { type: "sub", text }
//   bullets  { type: "bullets", items: [string | {label, text} | string[]] }
//   flow     { type: "flow", steps: [string], note?: string }
//   table    { type: "table", headers: [string], rows: [[string]] }
//   code     { type: "code", lang: "python" | "json" | "text", code }
//   callout  { type: "callout", text }
// ---------------------------------------------------------------------

function agentBlocks() {
  return [
    {
      type: "bullets",
      items: [
        "An AI agent is an LLM-based system that can:",
        [
          "Understand a goal",
          "Decide what actions are needed",
          "Use tools",
          "Observe the results",
          "Decide the next action",
          "Continue until the goal is completed",
        ],
        "A normal LLM mostly generates an answer.",
        "An agent can take actions to accomplish a goal.",
      ],
    },
    { type: "heading", text: "Agent vs Chatbot vs Workflow" },
    {
      type: "bullets",
      items: [
        "A chatbot primarily: User \u2192 LLM \u2192 Response. It doesn't necessarily take actions.",
        "An agent can:",
      ],
    },
    {
      type: "flow",
      steps: ["User", "LLM", "Decision", "Tool", "Observation", "Decision", "Tool", "Final answer"],
      note: "another decision, and continues until the goal is completed",
    },
    { type: "bullets", items: ["A workflow follows a predefined sequence."] },
    {
      type: "flow",
      steps: ["START", "Get resume", "Extract text", "Calculate skills", "Generate report", "END"],
    },
    {
      type: "bullets",
      items: [
        "The developer decides the path.",
        'The system isn\u2019t deciding: "Hmm, maybe I should call this tool instead."',
        "It's following the programmed flow.",
      ],
    },
    {
      type: "table",
      headers: ["Workflow", "Agent", "Chatbot"],
      rows: [
        ["Predefined path", "Dynamic path", "Mainly responds"],
        ["Developer controls flow", "LLM can influence flow", "Usually conversation-focused"],
        ["More predictable", "More flexible", "May not use tools"],
        ["Easier to test", "Harder to test", "Usually simpler flow"],
        ["Usually cheaper", "Can consume more tokens", "User drives each step"],
        ["\u2014", "Agent can decide next step", "\u2014"],
      ],
    },
    { type: "heading", text: "AI Agent Components" },
    { type: "sub", text: "1. Planning" },
    {
      type: "bullets",
      items: ["Planning = deciding what steps are needed to achieve a goal.", "The agent may plan:"],
    },
    {
      type: "flow",
      steps: ["Goal", "1. Search available flights", "2. Compare prices", "3. Check timings", "4. Select cheapest suitable flight", "5. Book it"],
    },
    { type: "sub", text: "2. Reasoning" },
    {
      type: "bullets",
      items: [
        "Reasoning = deciding what the information means and what action should happen next.",
        "Planning: What steps should I take?",
        "Reasoning: Given what I know right now, what should I do next?",
      ],
    },
    {
      type: "code",
      lang: "text",
      code: `Observation:\n  Flight A = \u20b95,000\n  Flight B = \u20b94,200\n  Flight C = \u20b94,500\n\nReasoning:\n  Flight B is the cheapest.\n  Therefore, select Flight B.`,
    },
    { type: "sub", text: "3. Memory" },
    { type: "bullets", items: ["Memory = information the agent can retain and use later."] },
    {
      type: "flow",
      steps: ["Conversation 1", "Agent forgets", "Conversation 2", "Starts from scratch"],
      note: "Without memory",
    },
    {
      type: "flow",
      steps: ["Conversation 1", "Store information", "Conversation 2", "Retrieve information", "Use it"],
      note: "With memory",
    },
    {
      type: "bullets",
      items: [
        "Types of memory",
        [
          "Short-term memory \u2192 current conversation/context",
          "Long-term memory \u2192 information stored for future interactions",
          "In LangGraph, persistence/checkpointing can also allow an agent's state to survive across runs.",
        ],
      ],
    },
    { type: "sub", text: "4. Observation" },
    { type: "bullets", items: ["Observation = the result/information received after an action."] },
    { type: "code", lang: "text", code: `Action:\n  Search weather\n\nObservation:\n  32\u00b0C, 80% chance of rain` },
    { type: "bullets", items: ["The agent then uses that observation to decide what to do next:"] },
    { type: "flow", steps: ["Action", "Tool", "Observation", "Reasoning"] },
    {
      type: "code",
      lang: "text",
      code: `User: "Is it safe to go outside?"\n\nAction: call weather API\nObservation: Heavy rain expected\nReasoning: Outdoor activity is probably not ideal\n"You may want to postpone it."`,
    },
    { type: "callout", text: "Observation is therefore the feedback/information coming back from the environment or tool." },
    { type: "sub", text: "5. Action" },
    {
      type: "bullets",
      items: [
        "Action = something the agent does to move toward its goal.",
        "An action could be:",
        ["Call an API", "Search the web", "Query a database", "Send an email", "Execute code", "Call a calculator", "Retrieve a document", "Ask the user for clarification"],
      ],
    },
    { type: "sub", text: "6. Feedback Loop" },
    {
      type: "bullets",
      items: ["A feedback loop means the agent takes an action, receives the result, uses that result to make another decision, and continues until the goal is achieved."],
    },
    { type: "flow", steps: ["Reason", "Action", "Observation", "Reason", "Action", "Observation", "Repeat"] },
  ];
}

function messagesBlocks() {
  return [
    {
      type: "bullets",
      items: [
        "Messages are the fundamental unit of context for models in LangChain.",
        "They represent the input and output of models, carrying the content and metadata needed to represent the state of a conversation when interacting with an LLM.",
      ],
    },
    { type: "heading", text: "Messages Are Objects That Contain" },
    {
      type: "bullets",
      items: [
        { label: "Role", text: "Identifies the message type, such as system or user" },
        { label: "Content", text: "The actual content of the message, such as text, images, audio, or documents" },
        { label: "Metadata", text: "Optional information such as response details, message IDs, and token usage" },
      ],
    },
  ];
}

function toolsBlocks() {
  return [
    {
      type: "bullets",
      items: [
        "In LangChain, a tool is an external function that an LLM can call to perform an action or access information that it cannot reliably do by itself.",
        "An LLM can generate text, but tools allow it to interact with the outside world.",
      ],
    },
    { type: "sub", text: "Examples" },
    {
      type: "table",
      headers: ["Tool", "What it does"],
      rows: [
        ["Search tool", "Search the web"],
        ["Calculator", "Perform calculations"],
        ["Weather API", "Get current weather"],
        ["SQL tool", "Query a database"],
        ["File tool", "Read files"],
        ["Email tool", "Send/read emails"],
        ["Python tool", "Execute Python"],
        ["API tool", "Call external APIs"],
      ],
    },
    { type: "heading", text: "Tool Calling" },
    {
      type: "bullets",
      items: ["Tool calling means allowing an LLM to request the execution of an external tool.", "The LLM itself doesn't actually execute the tool."],
    },
    { type: "bullets", items: ["For example, suppose we give it:"] },
    { type: "code", lang: "python", code: `def get_weather(city: str):\n    ...` },
    {
      type: "bullets",
      items: ["We tell the LLM that this tool exists.", 'User: "What\u2019s the weather in Delhi?"', "The LLM may produce something conceptually like:"],
    },
    { type: "code", lang: "json", code: `{\n  "name": "get_weather",\n  "arguments": {\n    "city": "Delhi"\n  }\n}` },
    { type: "bullets", items: ["Your application sees that request and executes:"] },
    { type: "code", lang: "python", code: `get_weather("Delhi")` },
    { type: "bullets", items: ["Then the result goes back to the LLM:"] },
    { type: "code", lang: "text", code: `Tool result:\n32\u00b0C, cloudy` },
    { type: "bullets", items: ['Then the LLM responds: "It\u2019s 32\u00b0C and cloudy in Delhi."'] },
    { type: "heading", text: "Function Calling" },
    {
      type: "bullets",
      items: [
        "Function calling is closely related to tool calling (the model wants to use this external capability).",
        "It allows the model to generate a structured request to call a function, rather than trying to execute the function itself.",
      ],
    },
    { type: "bullets", items: ["For example:"] },
    { type: "code", lang: "python", code: `def get_stock_price(symbol: str):\n    ...` },
    { type: "bullets", items: ["The model might return:"] },
    { type: "code", lang: "json", code: `{\n  "name": "get_stock_price",\n  "arguments": {\n    "symbol": "AAPL"\n  }\n}` },
    { type: "bullets", items: ["Your application then executes:"] },
    { type: "code", lang: "python", code: `get_stock_price("AAPL")` },
    { type: "bullets", items: ["...and sends the result back to the model."] },
  ];
}

function structuredOutputBlocks() {
  return [
    {
      type: "bullets",
      items: [
        "Structured output means forcing or guiding an LLM to return its response in a specific, predictable format, instead of returning free-form text.",
        "Structured output is a technique where we constrain an LLM's response to follow a predefined schema, such as JSON or a Pydantic model, making the output predictable, machine-readable, and easier to validate and use in applications.",
        "You can tell the model to return:",
      ],
    },
    { type: "code", lang: "json", code: `{\n  "name": "Ritesh Patel",\n  "age": 22,\n  "email": "ritesh@example.com"\n}` },
    {
      type: "bullets",
      items: ["Now your application can reliably use:", ['Response["name"]', 'Response["age"]', 'response["email"]']],
    },
    { type: "heading", text: "Why is it useful?" },
    {
      type: "bullets",
      items: [
        "LLMs are good at generating natural language, but applications usually need machine-readable data.",
        "Useful for:",
        ["Information extraction", "Classification", "API responses", "Database operations", "Agents", "RAG pipelines", "Resume parsing", "Sentiment analysis", "Form filling"],
      ],
    },
  ];
}

function streamingBatchingBlocks() {
  return [
    { type: "heading", text: "Streaming in LLMs" },
    {
      type: "bullets",
      items: ["Streaming = getting the LLM response piece-by-piece as it is generated, instead of waiting for the entire response.", "With Streaming"],
    },
    { type: "flow", steps: ["User \u2192 LLM", '"Here"', '"is"', '"the"', '"answer..."'] },
    {
      type: "bullets",
      items: ["Why Use It?", ["Better UX", "User sees the response immediately", "Useful for chatbots", "Reduces perceived waiting time"]],
    },
    { type: "callout", text: "Streaming does not make the model generate tokens faster. It just delivers the generated output progressively." },
    { type: "heading", text: "Batching in LLMs" },
    {
      type: "bullets",
      items: [
        "Batching = sending multiple inputs to the model or chain together.",
        "Why Use It?",
        ["Process many independent requests", "Better throughput", "Useful for document processing", "Useful for embeddings/classification", "Can take advantage of parallel execution where supported", "Improve performance and reduce costs"],
      ],
    },
    {
      type: "table",
      headers: ["Feature", "Streaming", "Batching"],
      rows: [
        ["Main idea", "Output comes gradually", "Multiple inputs processed together"],
        ["Goal", "Better responsiveness", "Better throughput"],
        ["Input", "Usually one input", "Multiple inputs"],
        ["Output", "Tokens/chunks progressively", "Results for multiple inputs"],
        ["User experience", "User sees response immediately", "User usually waits for results"],
        ["Best for", "Chatbots, real-time applications", "Document processing, embeddings, classification"],
        ["Performance focus", "Reduces perceived waiting time", "Improves overall throughput"],
        ["Cost", "Doesn't necessarily reduce cost", "Can improve efficiency/cost depending on provider"],
        ["LangChain", ".stream()", ".batch()"],
        ["Example", "Chatbot generating an answer", "Processing 100 documents"],
      ],
    },
  ];
}