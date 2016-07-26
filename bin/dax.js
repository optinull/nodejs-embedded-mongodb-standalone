/** DAX - Download and extract mongodb with given version and extraction directory or defaults **/

var
  logger = require('npmlog'),
  sprintf = require('sprintf-js').sprintf,
  args = process.argv.splice(process.execArgv.length + 2),
  
  nems = require('../lib/nems'),

  MODULE_NAME = require('../package.json').name,
  MESSAGE_START = 'Starting distribution of mongodb!',
  MESSAGE_USAGE = 'Usage:\n\nnode ./lib/nems.js [version [dir]]\n\nversion - the version of the mongodb\ndir - the directory to download and extract to',
  MESSAGE_DEFAULTS = 'Using default configuration for download and extraction.',
  MESSAGE_FAILURE = 'Download or extraction failed. No file information returned from extraction',
  MESSAGE_EXTRACTED = 'Extracted %s files to %s.',
  MESSAGE_SUCCESS = 'Download and extraction completed.';

logger.info(MODULE_NAME, MESSAGE_START);

if (args.length > 2) {
  logger.warn(MODULE_NAME, MESSAGE_USAGE);
  return;
} else if (args.length === 0) {
  logger.info(MODULE_NAME, MESSAGE_DEFAULTS);
}

var
  VERSION = (args[0]) ? args[0] : '2.4.9',
  DOWNLOAD_DIR = args[1];

nems.distribute(VERSION, DOWNLOAD_DIR)
  .then(function(files) {
    if (!files || files.length === 0) {
      logger.info(MODULE_NAME, MESSAGE_FAILURE);
      return;
    }
    logger.info(MODULE_NAME, sprintf(MESSAGE_EXTRACTED, files.length, files[0]['base']));
    logger.info(MODULE_NAME, MESSAGE_SUCCESS);
  });