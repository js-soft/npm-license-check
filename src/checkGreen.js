const DEFAULT_GREEN_LICENSES = [
    "AFL-2.1",
    "AFLv2.1",
    "AFL-3.0",
    "AFLv3.0",
    "APSL-2.0",
    "Apache-1.1",
    "Apache-2.0",
    "Apache 2.0",
    "Artistic-1.0",
    "Artistic-2.0",
    "BSD",
    "BSD-2-Clause",
    "BSD-3-Clause",
    "BSL-1.0",
    "CC-BY-1.0",
    "CC-BY-2.0",
    "CC-BY-2.5",
    "CC-BY-3.0",
    "CC-BY-4.0",
    "CC0-1.0",
    "CDDL-1.0",
    "CDDL-1.1",
    "CPL-1.0",
    "EPL-1.0",
    "FTL",
    "IPL-1.0",
    "ISC",
    "LGPL-2.0",
    "LGPL-2.1",
    "LGPL-3.0",
    "LPL-1.02",
    "MIT",
    "MIT*",
    "MPL-1.0",
    "MPL-1.1",
    "MPL-2.0",
    "MS-PL",
    "NCSA",
    "OpenSSL",
    "PHP-3.0",
    "Ruby",
    "Unlicense",
    "W3C",
    "Xnet",
    "ZPL-2.0",
    "Zend-2.0",
    "Zlib",
    "libtiff",
    "Public Domain",
    "0BSD",
    "WTFPL",
    "Python-2.0"
];

function isGreen(license) {
    return DEFAULT_GREEN_LICENSES.indexOf(license) !== -1;
}

module.exports = function (license) {
    license = license.replace("(", "").replace(")", "");

    // if (!(license.includes("AND") || license.includes("OR"))) {
    //     return isGreen(license)
    // }

    const split = license.split(/ AND | OR |,/);

    for (const l of split) {
        if (!isGreen(l)) {
            return false;
        }
    }

    return true;
};
