module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("assets");

    return {
        dir: {
            input: ".",
            output: "public"
        }
    };
}

const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addFilter("date", (dateObj, format = "dd LLL yyyy") => {
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
    });

    return {
        dir: {
            input: ".",
            output: "public"
        }
    };
}