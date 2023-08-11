const fs = require("fs");
const path = require("path");
const YAML = require("yaml");

const collections = {};
const contests = [];

const content_dir = path.join(__dirname, "../content");

for (const collection_filename of fs.readdirSync(content_dir)) {
    const collection_filedir = path.join(content_dir, collection_filename);
    const collection = YAML.parse(fs.readFileSync(collection_filedir).toString());
    console.log(collection);
}