const core = require('@actions/core');
const inputs = require('./inputs.json');

/**
 * Handle Branch Option
 * @returns {{}|{branch: string}}
 */
exports.handleBranchOption = () => {
  const branchOption = {};
  const branch = core.getInput(inputs.branch);

  if (branch) {
    branchOption.branch = branch;
  }

  return branchOption;
};

/**
 * Handle DryRun Option
 * @returns {{}|{dryRun: boolean}}
 */
exports.handleDryRunOption = () => {
  const dryRun = core.getInput(inputs.dry_run);

  switch (dryRun) {
    case 'true':
      return {dryRun: true};

    case 'false':
      return {dryRun: false};

    default:
      return {};
  }
};
