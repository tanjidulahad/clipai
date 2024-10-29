const {
    GoogleGenerativeAI,
  } = require("@google/generative-ai");
  
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMENI_API_KEY);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  export async function aiScriptModel(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "write a script to generate 15 seconds video on topic : scary_story along with AI image prompt in Realistic format for each scene. Also generate a Title and a short description and give me result in JSON fromat with title, description, imagePrompt and ContentText as field, No Plain text."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"title\": \"The Whispering Attic\",\n  \"description\": \"A young woman discovers a chilling secret hidden in her new attic, leading to a terrifying encounter with the unknown.\",\n  \"scenes\": [\n    {\n      \"imagePrompt\": \"A dimly lit attic with cobwebs and dusty furniture, a single ray of sunlight cutting through the dust, highlighting a wooden door in the back\",\n      \"contentText\": \"The attic door creaked open, revealing a space shrouded in darkness. Dust motes danced in the single shaft of sunlight piercing through a cracked window, illuminating a heavy, wooden door at the far end.\"\n    },\n    {\n      \"imagePrompt\": \"A close-up of the wooden door, the grain of the wood worn and scratched, with an old, rusty handle\",\n      \"contentText\": \"The door looked ancient, its surface etched with time and neglect. A rusty handle, cold and unforgiving, beckoned with a silent invitation.\"\n    },\n    {\n      \"imagePrompt\": \"The woman's hand, trembling slightly, reaching out to touch the handle, a single bead of sweat rolling down her forehead\",\n      \"contentText\": \"She hesitated, a shiver running down her spine. A single bead of sweat rolled down her temple, betraying her growing fear.\"\n    },\n    {\n      \"imagePrompt\": \"The door creaking open, revealing a dark, shadowy room, with a faint whisper emanating from within\",\n      \"contentText\": \"With a groan that echoed through the attic, the door swung open, revealing a dark, shadowy chamber beyond. A faint whisper, barely audible, drifted from the depths.\"\n    },\n    {\n      \"imagePrompt\": \"The woman's face, pale and wide-eyed, as she peers into the darkness, a single flickering candle casting a menacing shadow on the wall\",\n      \"contentText\": \"Her heart hammered against her ribs as she peered into the darkness, her eyes wide with fear. A single flickering candle on a nearby table cast a menacing shadow against the wall, dancing in time with the whispering voice.\"\n    },\n    {\n      \"imagePrompt\": \"A close-up of the whispering voice, a shadowy figure with glowing eyes, its face obscured by the darkness\",\n      \"contentText\": \"From the depths of the room, a figure emerged. Its face was hidden in the shadows, only its glowing eyes piercing the darkness, like two burning embers.\"\n    },\n    {\n      \"imagePrompt\": \"The woman screaming in terror, running back towards the attic door, the shadowy figure pursuing her with a chilling laughter\",\n      \"contentText\": \"A scream ripped from her throat as she turned and fled, the terrifying figure pursuing her with a chilling laughter that echoed through the attic.\"\n    },\n    {\n      \"imagePrompt\": \"The woman collapsing on the attic floor, gasping for breath, the shadowy figure standing above her, its glowing eyes staring down at her\",\n      \"contentText\": \"She stumbled, her legs giving way, and collapsed on the attic floor, gasping for breath. The shadowy figure loomed over her, its glowing eyes burning into her soul.\"\n    },\n    {\n      \"imagePrompt\": \"A close-up of the woman's terrified face, tears streaming down her cheeks, as the shadowy figure reaches out a skeletal hand towards her\",\n      \"contentText\": \"Tears streamed down her cheeks as she looked up at the skeletal hand reaching towards her, its fingers long and sharp, like the claws of a ravenous beast.\"\n    },\n    {\n      \"imagePrompt\": \"The attic door slamming shut, a blinding flash of white light, the shadowy figure disappearing into thin air, leaving the woman alone in the darkness\",\n      \"contentText\": \"Suddenly, the attic door slammed shut, a blinding flash of white light engulfing the room. When the light faded, the figure was gone, leaving the woman trembling in the chilling silence.\"\n    }\n  ]\n}\n```"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    return JSON.parse(result.response.text())
  }
  