import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { pages } from './data';
import { ProgressBar } from './components/ProgressBar';
import { IntroPage } from './pages/IntroPage';
import { QuestionPage } from './pages/QuestionPage';
import { LoadingPage } from './pages/LoadingPage';
import { DiagnosticPage } from './pages/DiagnosticPage';
import { SalesPage } from './pages/SalesPage';

export default function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(95);

  const currentPage = pages[currentPageIndex];

  const handleNext = () => {
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  // Determine progress bar value
  let progress = 0;
  if (currentPage.type === 'intro' || currentPage.type === 'hook' || currentPage.type === 'sales') {
    progress = 0; // Don't show progress bar
  } else if (currentPage.type === 'loading') {
    progress = loadingProgress;
  } else if (currentPage.progress) {
    progress = currentPage.progress;
  }

  const showProgressBar = progress > 0 && currentPage.type !== 'sales';

  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)] text-white font-sans overflow-x-hidden">
      {showProgressBar && <ProgressBar progress={progress} />}

      <AnimatePresence mode="wait">
        {currentPage.type === 'intro' && (
          <IntroPage key={currentPage.id} page={currentPage} onNext={handleNext} />
        )}
        {currentPage.type === 'hook' && (
          <QuestionPage key={currentPage.id} page={currentPage} onNext={handleNext} />
        )}
        {currentPage.type === 'question' && (
          <QuestionPage key={currentPage.id} page={currentPage} onNext={handleNext} />
        )}
        {currentPage.type === 'loading' && (
          <LoadingPage key={currentPage.id} page={currentPage} onNext={handleNext} setProgress={setLoadingProgress} />
        )}
        {currentPage.type === 'diagnostic' && (
          <DiagnosticPage key={currentPage.id} page={currentPage} onNext={handleNext} />
        )}
        {currentPage.type === 'sales' && (
          <SalesPage key={currentPage.id} page={currentPage} />
        )}
      </AnimatePresence>
    </div>
  );
}
