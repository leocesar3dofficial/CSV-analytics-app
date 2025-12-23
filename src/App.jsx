import { useState, useMemo } from 'react';
import Papa from 'papaparse';
import { DEFAULT_RULES } from './utils/constants';
import useCSVProcessor from './hooks/useCSVProcessor';
import usePagination from './hooks/usePagination';
import UploadView from './components/UploadView';
import DashboardView from './components/DashboardView';
import DataTableView from './components/DataTableView';
import RulesView from './components/RulesView';
import { extractHeaders, generateChartData } from './utils/csvHelpers';

export default function CSVAnalyticsApp() {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [rules, setRules] = useState(DEFAULT_RULES);
  const [filterField, setFilterField] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [view, setView] = useState('upload');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data);
        setHeaders(extractHeaders(results.data));
        pagination.resetPagination();
        setView('dashboard');
      },
      error: (error) => {
        alert('Error parsing CSV: ' + error.message);
      }
    });
  };

  const processedData = useCSVProcessor(data, rules, filterField, filterValue);
  const pagination = usePagination(processedData.filtered, 25);

  const chartData = useMemo(() => {
    return generateChartData(processedData.filtered, headers);
  }, [processedData.filtered, headers]);
  if (view === 'upload') {
    return <UploadView onFileUpload={handleFileUpload} />;
  }

  if (view === 'dashboard') {
    return (
      <DashboardView
        metrics={processedData.metrics}
        flags={processedData.flags}
        chartData={chartData}
        onViewData={() => setView('data')}
        onViewRules={() => setView('rules')}
        onLoadOtherDataSet={() => {
          setData([]);
          setHeaders([]);
          pagination.resetPagination();
          setFilterField('');
          setFilterValue('');
          setView('upload');
        }}
      />
    );
  }

  if (view === 'data') {
    return (
      <DataTableView
        headers={headers}
        processedData={processedData}
        pagination={pagination}
        filterField={filterField}
        filterValue={filterValue}
        onFilterFieldChange={(e) => {
          setFilterField(e.target.value);
          pagination.resetPagination();
        }}
        onFilterValueChange={(e) => {
          setFilterValue(e.target.value);
          pagination.resetPagination();
        }}
        onClearFilters={() => {
          setFilterField('');
          setFilterValue('');
          pagination.resetPagination();
        }}
        onBackToDashboard={() => setView('dashboard')}
      />
    );
  }

  if (view === 'rules') {
    return (
      <RulesView
        rules={rules}
        onRulesChange={setRules}
        onBackToDashboard={() => setView('dashboard')}
      />
    );
  }
}