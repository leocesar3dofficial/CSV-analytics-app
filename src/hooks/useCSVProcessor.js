import { useMemo } from 'react';
import { processBusinessRules } from '../utils/businessRules';

export default function useCSVProcessor(data, rules, filterField, filterValue) {
  const processedData = useMemo(() => {
    if (!data.length) return { filtered: [], metrics: {}, flags: [] };

    // Create deep copies to ensure we can modify them
    let filtered = data.map(row => ({ ...row }));

    // Apply filters
    if (filterField && filterValue) {
      filtered = filtered.filter(row => {
        const value = row[filterField];
        if (typeof value === 'number') {
          return value.toString().includes(filterValue);
        }
        return String(value).toLowerCase().includes(filterValue.toLowerCase());
      });
    }

    // Process business rules
    const { metrics, flags } = processBusinessRules(filtered, rules);

    return { filtered, metrics, flags };
  }, [data, rules, filterField, filterValue]);

  return processedData;
}