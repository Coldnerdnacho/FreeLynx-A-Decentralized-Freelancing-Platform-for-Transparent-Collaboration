import { useState } from 'react';
import Sidebar from './components/Sidebar';
import DisputeSummary from './components/DisputeSummary';
import RaiseQuery from './components/RaiseQuery';

function App() {
  const [currentPage, setCurrentPage] = useState('summary');

  return (
    <div className="min-h-screen flex">
      <Sidebar currentPage={currentPage} onNavigate={(page) => setCurrentPage(page)} />
      {currentPage === 'summary' ? (
        <DisputeSummary onRaiseQuery={() => setCurrentPage('query')} />
      ) : (
        <RaiseQuery onBack={() => setCurrentPage('summary')} />
      )}
    </div>
  );
}

export default App;
