import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageData } from '../data';

interface QuestionPageProps {
  key?: number | string;
  page: PageData;
  onNext: () => void;
}

export function QuestionPage({ page, onNext }: QuestionPageProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Reset state when page changes
  useEffect(() => {
    setSelectedOption(null);
  }, [page.id]);

  const handleOptionClick = (id: string) => {
    setSelectedOption(id);
    
    // Auto-advance for all pages after a short delay to show selection
    setTimeout(() => {
      onNext();
    }, 400);
  };

  const isPage5 = page.id === 5;
  const isPage6 = page.id === 6;
  const isPage8 = page.id === 8;

  return (
    <motion.div 
      key={page.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen w-full flex flex-col items-center px-6 py-12 md:py-20 max-w-2xl mx-auto relative"
    >
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-[-1]">
        <img 
          src={page.imageUrl} 
          alt="" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-bg)]/80 via-[var(--color-brand-bg)] to-[var(--color-brand-bg)]" />
      </div>

      <div className="w-full flex-1 flex flex-col justify-center">
        <motion.h1 
          className={`text-3xl md:text-4xl font-serif font-semibold text-white mb-6 leading-tight text-center ${isPage5 ? 'text-4xl md:text-5xl' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {page.title?.split('\n\n').map((line, i) => (
            <span key={i} className="block mb-4 last:mb-0">{line}</span>
          ))}
        </motion.h1>

        {page.subtitle && (
          <motion.p 
            className={`text-lg text-gray-300 mb-10 leading-relaxed text-center ${page.id === 3 ? 'italic text-base text-gray-400' : ''} ${isPage6 ? 'font-light' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: isPage5 ? 0.8 : 0.4 }}
          >
            {page.subtitle.split('\n\n').map((line, i) => (
              <span key={i} className="block mb-4 last:mb-0">{line}</span>
            ))}
          </motion.p>
        )}

        <div className="space-y-4 w-full">
          {page.options?.map((option, index) => {
            const isSelected = selectedOption === option.id;
            
            // Calculate delay based on page requirements
            let delay = 0.6 + (index * 0.4); // Default sequential
            if (isPage5) delay = 1.2; // All together after subtitle
            if (page.id === 3) delay = 0.8 + (index * 0.5); // Slower for page 3

            return (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay, duration: 0.5 }}
                onClick={() => handleOptionClick(option.id)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center gap-4
                  ${isSelected 
                    ? 'border-[var(--color-brand-gold)] bg-[var(--color-brand-gold)]/10 shadow-[0_0_15px_rgba(201,168,76,0.2)]' 
                    : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                  }
                  ${isPage8 && isSelected ? 'shadow-[0_0_20px_rgba(201,168,76,0.4)] border-[var(--color-brand-gold)]' : ''}
                `}
              >
                <span className="text-lg flex-1">{option.text}</span>
                {page.id === 9 && isSelected && (
                  <motion.span 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    className="text-[var(--color-brand-gold)] text-xl"
                  >
                    ✓
                  </motion.span>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
