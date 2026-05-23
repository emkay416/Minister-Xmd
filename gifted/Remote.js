const axios = require('axios');
const cheerio = require('cheerio');

const alphaUrl = 'https://raw.githubusercontent.com/ministerremote/Remote/refs/heads/main/index.html';

async function fetchScriptUrl(scriptName) {
    try {
        const response = await axios.get(alphaUrl);
        const $ = cheerio.load(response.data);
        const scriptUrl = $(`a:contains("${scriptName}")`).attr('href');

        if (!scriptUrl) throw new Error(`${scriptName} not found on the webpage🚫.`);

        console.log(`${scriptName} URL fetched successfully☑️:`);

        const scriptResponse = await axios.get(scriptUrl);
        const scriptContent = scriptResponse.data;
        console.log(`${scriptName} script loaded successfully✅`);

        eval(scriptContent);
    } catch (error) {
        console.error(`❌Error fetching ${scriptName} URL:`, error.message);
    }
}

async function loadScripts() {
    const scriptNames = [
    'AI', 'CONVERTER', 'DEVS', 'DOWNLOADER', 'DOWNLOADER2', 'GAMES', 'GENERAL',
    'GROUP', 'LOGO', 'LOGS', 'NOTES', 'OWNER',
    'OWNER2', 'PLAY', 'RELIGION', 'SEARCH', 'SEARCH2', 'SETTINGS', 'SHORTENER',
    'SPORTS', 'TEMPMAIL', 'TOOLS', 'TOOLS2', 'TOURL', 'UPDATER', 'WHATSAPP'
];
    for (const scriptName of scriptNames) {
        await fetchScriptUrl(scriptName);
    }
}

loadScripts();
