import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const response = await client.messages.create({
  model: "claude-haiku-4-5",
  max_tokens: 1024,
  messages: [{
    role: "user",
    // system: '', // system prompt for the persona
    content: "Hello, Claude",
  }],
});

console.log('USAGE: ', response.usage)
for (const block of response.content) {
  if (block.type === "text") {
    console.log('TEXT: ', block.text);
  }
}
