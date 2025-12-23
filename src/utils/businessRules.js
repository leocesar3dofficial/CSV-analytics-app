/**
 * Evaluate a sum rule on the dataset
 */
export function evaluateSumRule(data, rule) {
  const sum = data.reduce((acc, row) => acc + (parseFloat(row[rule.field]) || 0), 0);
  return { [rule.label || rule.field]: sum };
}

/**
 * Evaluate an average rule on the dataset
 */
export function evaluateAverageRule(data, rule) {
  if (data.length === 0) return { [rule.label || rule.field]: 0 };
  const sum = data.reduce((acc, row) => acc + (parseFloat(row[rule.field]) || 0), 0);
  return { [rule.label || rule.field]: sum / data.length };
}

/**
 * Evaluate a count rule on the dataset
 */
export function evaluateCountRule(data, rule) {
  return { [rule.label || 'Count']: data.length };
}

/**
 * Evaluate a flag rule on the dataset
 * Returns an array of flagged rows and modifies the original data by adding _flagged property
 */
export function evaluateFlagRule(data, rule) {
  const flags = [];
  
  data.forEach((row, idx) => {
    try {
      // Replace field names in condition with actual values
      const condition = rule.condition.replace(/(\w+)/g, (match) => {
        // If it's a field name, return its value
        if (row.hasOwnProperty(match)) {
          return JSON.stringify(row[match]);
        }
        return match; // Keep operators and numbers as-is
      });
      
      if (eval(condition)) {
        flags.push({ ...row, _index: idx, _flag: rule.label });
        row._flagged = true; // Mark the row itself
      }
    } catch (e) {
      console.error('Error evaluating condition:', e);
    }
  });
  
  return flags;
}

/**
 * Process all business rules on the dataset
 */
export function processBusinessRules(data, rules) {
  const metrics = {};
  const flags = [];

  rules.rules.forEach(rule => {
    if (rule.type === 'sum') {
      Object.assign(metrics, evaluateSumRule(data, rule));
    } else if (rule.type === 'average') {
      Object.assign(metrics, evaluateAverageRule(data, rule));
    } else if (rule.type === 'count') {
      Object.assign(metrics, evaluateCountRule(data, rule));
    } else if (rule.type === 'flag') {
      const ruleFlags = evaluateFlagRule(data, rule);
      flags.push(...ruleFlags);
    }
  });

  return { metrics, flags };
}