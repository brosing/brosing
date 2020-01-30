import preval from "babel-plugin-preval/macro";

const posts = preval`
    module.exports = require('./getPosts.js');
`;

module.exports = posts;
