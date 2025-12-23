/**
 * Parse CSV file and return data
 */
export function parseCSVFile(file, Papa) {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (error) => {
        reject(error);
      }
    });
  });
}

/**
 * Extract headers from CSV data
 */
export function extractHeaders(data) {
  if (!data || data.length === 0) return [];
  return Object.keys(data[0] || {});
}

/**
 * Generate chart data by grouping data
 */
export function generateChartData(data, headers) {
  if (!data.length || !headers.length) return [];
  
  // Group by first text field and sum numeric fields
  const firstTextField = headers.find(h => 
    typeof data[0][h] === 'string'
  );
  const numericFields = headers.filter(h => 
    typeof data[0][h] === 'number'
  );

  if (!firstTextField || !numericFields.length) return [];

  const grouped = data.reduce((acc, row) => {
    const key = row[firstTextField];
    if (!acc[key]) {
      acc[key] = { name: key };
      numericFields.forEach(f => acc[key][f] = 0);
    }
    numericFields.forEach(f => {
      acc[key][f] += row[f] || 0;
    });
    return acc;
  }, {});

  return Object.values(grouped).slice(0, 10);
}