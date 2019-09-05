const fs = require('fs');
const path = require('path');

module.exports = {
    /**
     * Gets the current directory's base directory.
     */
    
    getCurrentDirBase: () => {
        return path.basename(process.cwd());
    },

    /**
     * Checks if 'x' directory exists
     * @param {string} filePath The folder's name
     */

    dirExists: (filePath) => {
        try {
            return fs.statSync(filePath).isDirectory();
        } catch (err) {
            return false;
        }
    }
};