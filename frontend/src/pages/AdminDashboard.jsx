import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAdmissions = async () => {
    try {
      setLoading(true);
      const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000/api';
      const response = await fetch(`${apiUrl}/admissions`);
      const result = await response.json();
      if (result.success) {
        setAdmissions(result.data);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Failed to connect to backend. Make sure it is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmissions();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#c8f000] to-cyan-400 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-slate-400 mt-2">Manage Student Admissions & Leads</p>
          </div>
          <button 
            onClick={fetchAdmissions}
            className="px-4 py-2 bg-[#c8f000]/10 border border-[#c8f000]/30 rounded-lg hover:bg-[#c8f000]/20 transition-all text-[#c8f000]"
          >
            Refresh Data
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#c8f000]"></div>
          </div>
        ) : error ? (
          <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-lg text-red-400 text-center">
            {error}
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-800/50">
                  <th className="p-4 font-semibold text-slate-300">Student Name</th>
                  <th className="p-4 font-semibold text-slate-300">Mobile</th>
                  <th className="p-4 font-semibold text-slate-300">Email</th>
                  <th className="p-4 font-semibold text-slate-300">Course</th>
                  <th className="p-4 font-semibold text-slate-300">Type</th>
                  <th className="p-4 font-semibold text-slate-300">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {admissions.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="p-8 text-center text-slate-500">No admissions found yet.</td>
                  </tr>
                ) : (
                  admissions.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 font-medium">{item.studentName}</td>
                      <td className="p-4 text-slate-400">{item.mobile}</td>
                      <td className="p-4 text-slate-400">{item.email}</td>
                      <td className="p-4">
                        <span className="px-2 py-1 rounded text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {item.courseApplied || 'N/A'}
                        </span>
                      </td>
                      <td className="p-4">
                        {item.isQuickLead ? (
                          <span className="px-2 py-1 rounded text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            Quick Lead
                          </span>
                        ) : (
                          <span className="px-2 py-1 rounded text-xs bg-[#c8f000]/10 text-[#c8f000] border border-[#c8f000]/20">
                            Full Admission
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-slate-500 text-sm">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};


export default AdminDashboard;
