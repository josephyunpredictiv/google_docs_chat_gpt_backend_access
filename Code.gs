function generateChatResponse(prompt) {
  // Your OpenAI API integration code here
  var apiKey = 'XXXXXX'; // Replace with your actual API key
  var apiUrl = 'https://api.openai.com/v1/chat/completions';

  var headers = {
    'Authorization': 'Bearer ' + apiKey,
    'Content-Type': 'application/json'
  };

  var payload = {
    'model': 'gpt-3.5-turbo-0125',
    'messages': [{ 'role': 'user', 'content': prompt }] // 'messages': [{'role': 'system', 'content': 'answer properly'}, {'role': 'user', 'content': prompt}]
  };

  var options = {
    'method': 'post',
    'headers': headers,
    'payload': JSON.stringify(payload)
  };

  var response = UrlFetchApp.fetch(apiUrl, options);
  var data = JSON.parse(response.getContentText());

  var chatResponse = data.choices[0].message.content;

  return chatResponse;
}

function generateChatResponse16k(prompt) {
  // Your OpenAI API integration code here
  var apiKey = 'XXXXXX'; // Replace with your actual API key
  var apiUrl = 'https://api.openai.com/v1/chat/completions';

  var headers = {
    'Authorization': 'Bearer ' + apiKey,
    'Content-Type': 'application/json'
  };

  var payload = {
    'model': 'gpt-3.5-turbo-16k',
    'messages': [{ 'role': 'user', 'content': prompt }] // 'messages': [{'role': 'system', 'content': 'answer properly'}, {'role': 'user', 'content': prompt}]
  };

  var options = {
    'method': 'post',
    'headers': headers,
    'payload': JSON.stringify(payload)
  };

  var response = UrlFetchApp.fetch(apiUrl, options);
  var data = JSON.parse(response.getContentText());

  var chatResponse = data.choices[0].message.content;

  return chatResponse;
}

function generateChatResponse4(prompt) {
  // Your OpenAI API integration code here
  var apiKey = 'XXXXXX'; // Replace with your actual API key
  var apiUrl = 'https://api.openai.com/v1/chat/completions';

  var headers = {
    'Authorization': 'Bearer ' + apiKey,
    'Content-Type': 'application/json'
  };

  var payload = {
    'model': 'gpt-4-turbo',
    'messages': [{ 'role': 'user', 'content': prompt }] // 'messages': [{'role': 'system', 'content': 'answer properly'}, {'role': 'user', 'content': prompt}]
  };

  var options = {
    'method': 'post',
    'headers': headers,
    'payload': JSON.stringify(payload)
  };

  var response = UrlFetchApp.fetch(apiUrl, options);
  var data = JSON.parse(response.getContentText());

  var chatResponse = data.choices[0].message.content;

  return chatResponse;
}

function generateChatResponse4o(prompt) {
  // Your OpenAI API integration code here
  var apiKey = 'XXXXXX'; // Replace with your actual API key
  var apiUrl = 'https://api.openai.com/v1/chat/completions';

  var headers = {
    'Authorization': 'Bearer ' + apiKey,
    'Content-Type': 'application/json'
  };

  var payload = {
    'model': 'gpt-4o',
    'messages': [{ 'role': 'user', 'content': prompt }] // 'messages': [{'role': 'system', 'content': 'answer properly'}, {'role': 'user', 'content': prompt}]
  };

  var options = {
    'method': 'post',
    'headers': headers,
    'payload': JSON.stringify(payload)
  };

  var response = UrlFetchApp.fetch(apiUrl, options);
  var data = JSON.parse(response.getContentText());

  var chatResponse = data.choices[0].message.content;

  return chatResponse;
}

function generateResponseAndAppendToDoc() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();

  // Get the entire document text
  var documentText = body.getText();

  // Generate a response using ChatGPT
  var response = generateChatResponse(documentText);

  // Append the response to the document
  body = doc.getBody();
  body.appendParagraph(response);
}

function generateResponseAndAppendToDoc16k() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();

  // Get the entire document text
  var documentText = body.getText();

  // Generate a response using ChatGPT
  var response = generateChatResponse16k(documentText);

  // Append the response to the document
  body = doc.getBody();
  body.appendParagraph(response);
}

function generateResponseAndAppendToDoc4() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();

  // Get the entire document text
  var documentText = body.getText();

  // Generate a response using ChatGPT
  var response = generateChatResponse4(documentText);

  // Append the response to the document
  body.appendParagraph(response);
}

function generateResponseAndAppendToDoc4o() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();

  // Get the entire document text
  var documentText = body.getText();

  // Generate a response using ChatGPT
  var response = generateChatResponse4o(documentText);

  // Append the response to the document
  body.appendParagraph(response);
}


function del() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  
  body.clear();
}

function idk() {
  //doesn't do anything
}

function generateFakeScript() {
  //We DONT do anything here lol
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();

  var response = "            Sleep is a crucial aspect of human life that is often overlooked in today's fast-paced society. It is necessary for our overall well-being and cognitive functioning. However, the lack of sufficient sleep has become a common issue, with many people viewing it as a luxury rather than a priority. This essay will examine the statistics surrounding sleep deprivation and its transformative power on attention span.\n\n            According to the National Sleep Foundation, adults aged 18-64 require 7-9 hours of sleep per night for optimal functioning. Shockingly, a survey conducted by the Centers for Disease Control and Prevention (CDC) revealed that approximately 35% of adults in the United States do not meet this recommendation. This statistic highlights a widespread problem that could potentially hinder our attention span.\n\n            When we do not get enough sleep, our attention span suffers, leading to decreased focus and reduced cognitive performance. A survey conducted by the American Academy of Sleep Medicine found that sleep-deprived individuals had trouble paying attention during daily activities 2.3 times more frequently than those who slept adequately. Furthermore, a study published in the journal 'Sleep' revealed that inadequate sleep reduced attention span and concentration by a staggering 50%. These statistics clearly demonstrate the transformative power of sleep on our ability to sustain attention.\n\n            But how exactly does sleep impact our attention span? Research indicates that sleep plays a vital role in consolidating memories and clearing out unnecessary information, ultimately enhancing our ability to focus. A study published in the journal 'Nature Communications' revealed that during sleep, the neural connections associated with new information are strengthened, leading to improved attention and memory recall. Additionally, a study conducted at the University of California, Berkeley, found that a brief nap of just 1 hour improved individuals' attention span and performance on cognitive tasks by a remarkable 34%.\n\n            Sadly, the consequences of sleep deprivation extend beyond weakened attention span. The CDC estimates that drowsy driving, a direct result of lack of sleep, causes around 6,000 fatal crashes annually in the United States alone. This statistic underscores the importance of prioritizing sleep and recognizing its transformative potential.\n\n            To address the issue of sleep deprivation and its impact on attention span, it is crucial to educate individuals about the significance of quality sleep and dispel the myth that sacrificing sleep for productivity is a worthy trade-off. Employers should implement policies that promote a healthy work-life balance, encouraging employees to prioritize sleep just as they do exercise and nutrition. Additionally, education systems should integrate sleep education into their curriculum, teaching students the importance of sleep hygiene and equipping them with tools to maintain a healthy sleep routine.\n\n            In conclusion, the transformative power of sleep on attention span cannot be overstated. The statistics clearly indicate the detrimental effects of sleep deprivation on our ability to sustain focus and cognitive performance. It is imperative that we recognize the importance of sleep and prioritize it in our lives. By doing so, we can unlock our full attentional potential and lead healthier, more productive lives.";

  body.clear();
  body.appendParagraph(response);
}

function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createMenu('Shortcuts')
    .addItem('Zoom In', 'generateResponseAndAppendToDoc4o')
    .addItem('Zoom Out', 'generateResponseAndAppendToDoc16k')
    .addItem('Reset Zoom', 'generateResponseAndAppendToDoc4',)
    .addItem('Clear', 'generateResponseAndAppendToDoc')
    .addItem('Scroll', 'idk')
    .addItem('Magnify', 'idk')
    .addItem('View', 'generateFakeScript')
    .addToUi();
}
