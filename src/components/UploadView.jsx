import React, { useState } from 'react';
import { Upload, TrendingUp } from 'lucide-react';

export default function UploadView({ onFileUpload }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
        // Create a synthetic event that matches the onChange signature
        const syntheticEvent = {
          target: { files: [file] }
        };
        onFileUpload(syntheticEvent);
      } else {
        alert('Please drop a CSV file');
      }
    }
  };

  const handleFileInputChange = (e) => {
    onFileUpload(e);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 p-8">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-12 max-w-2xl w-full border border-slate-700">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/50">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            CSV Analytics Platform
          </h1>
          <p className="text-slate-400 text-lg">Import, process, and visualize your business data</p>
        </div>

        <div
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-12 text-center transition-all cursor-pointer ${
            isDragging 
              ? 'border-indigo-500 bg-indigo-950/50 shadow-lg shadow-indigo-500/20' 
              : 'border-slate-600 hover:border-indigo-500 hover:bg-slate-800/50'
          }`}
          onClick={() => document.getElementById('file-upload').click()}
        >
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all ${
            isDragging 
              ? 'bg-indigo-600 shadow-lg shadow-indigo-500/50' 
              : 'bg-slate-700'
          }`}>
            <Upload className={`w-8 h-8 transition-colors ${isDragging ? 'text-white' : 'text-slate-400'}`} />
          </div>
          <p className="text-lg text-slate-300 mb-2 font-medium">
            {isDragging ? 'Drop your CSV file here' : 'Drop your CSV file here or click to browse'}
          </p>
          <p className="text-sm text-slate-500">Supports any CSV format with headers</p>
          <input
            id="file-upload"
            type="file"
            accept=".csv"
            onChange={handleFileInputChange}
            className="hidden"
          />
        </div>

        <div className="mt-8 p-6 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-700/50">
          <h3 className="font-semibold text-indigo-300 mb-3 text-lg">Features:</h3>
          <ul className="space-y-2 text-sm text-indigo-200">
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Automatic data parsing and validation
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Custom business rules and calculations
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Executive KPI dashboards
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Interactive charts and filters
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Anomaly detection and flagging
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}