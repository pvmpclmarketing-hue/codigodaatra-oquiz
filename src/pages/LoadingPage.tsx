import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageData } from '../data';

interface LoadingPageProps {
  key?: number | string;
  page: PageData;
  onNext: () => void;
  setProgress: (progress: number) => void;
}

export function LoadingPage({ page, onNext, setProgress }: LoadingPageProps) {
  const [step, setStep] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Set initial progress
    setProgress(95);

    const sequence = [
      { step: 1, time: 1000 }, // 🔍 Identificando padrão...
      { step: 2, time: 1500 }, // ✓
      { step: 3, time: 2300 }, // 🧬 Mapeando assinatura...
      { step: 4, time: 2800 }, // ✓
      { step: 5, time: 3600 }, // 📡 Detectando pontos...
      { step: 6, time: 4100 }, // ✓
      { step: 7, time: 5000 }, // 🔗 Analisando nível...
      { step: 8, time: 5500 }, // ✓
      { step: 9, time: 6300 }, // 🛡️ Identificando tipo...
      { step: 10, time: 6800 }, // ✓
      { step: 11, time: 7600 }, // 🧭 Calculando protocolo...
      { step: 12, time: 8100 }, // ✓ + progress 100%
    ];

    const timeouts = sequence.map(({ step: s, time }) => 
      setTimeout(() => {
        setStep(s);
        if (s === 12) {
          setProgress(100);
        }
      }, time)
    );

    const finalTimeout = setTimeout(() => {
      setShowFinal(true);
    }, 8900);

    const buttonTimeout = setTimeout(() => {
      setShowButton(true);
    }, 10400);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(finalTimeout);
      clearTimeout(buttonTimeout);
    };
  }, [setProgress]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-12 max-w-2xl mx-auto relative bg-[#0a0512]"
    >
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-[-1]">
        <img 
          src={page.imageUrl} 
          alt="" 
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0512]/90 via-[#0a0512]/95 to-[#0a0512]" />
      </div>

      <div className="w-full flex-1 flex flex-col justify-center">
        <motion.h1 
          className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Analisando seu perfil vibracional…
        </motion.h1>

        <motion.p 
          className="text-lg text-gray-400 mb-12 text-center leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Com base nas suas respostas, nosso sistema está mapeando o padrão exato de frequência que está criando o bloqueio entre você e essa pessoa. Isso leva apenas alguns instantes.
        </motion.p>

        <div className="font-mono text-sm md:text-base text-[#4ade80] space-y-3 bg-black/40 p-6 rounded-lg border border-[#4ade80]/20 shadow-[0_0_30px_rgba(74,222,128,0.05)]">
          <div className="flex items-center gap-3">
            <span className="opacity-70">{step >= 1 ? '🔍 Identificando padrão de frequência emocional...' : ''}</span>
            {step >= 2 && <span className="text-[#4ade80] font-bold">✓</span>}
          </div>
          <div className="flex items-center gap-3">
            <span className="opacity-70">{step >= 3 ? '🧬 Mapeando assinatura do Campo Morfogenético...' : ''}</span>
            {step >= 4 && <span className="text-[#4ade80] font-bold">✓</span>}
          </div>
          <div className="flex items-center gap-3">
            <span className="opacity-70">{step >= 5 ? '📡 Detectando pontos de vazamento de energia vibracional...' : ''}</span>
            {step >= 6 && <span className="text-[#4ade80] font-bold">✓</span>}
          </div>
          <div className="flex items-center gap-3">
            <span className="opacity-70">{step >= 7 ? '🔗 Analisando nível de entrelaçamento quântico entre os campos...' : ''}</span>
            {step >= 8 && <span className="text-[#4ade80] font-bold">✓</span>}
          </div>
          <div className="flex items-center gap-3">
            <span className="opacity-70">{step >= 9 ? '🛡️ Identificando tipo de bloqueio ativo na conexão...' : ''}</span>
            {step >= 10 && <span className="text-[#4ade80] font-bold">✓</span>}
          </div>
          <div className="flex items-center gap-3">
            <span className="opacity-70">{step >= 11 ? '🧭 Calculando protocolo de realinhamento de frequência...' : ''}</span>
            {step >= 12 && <span className="text-[#4ade80] font-bold">✓</span>}
          </div>
        </div>

        <AnimatePresence>
          {showFinal && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-12 text-center text-xl font-serif italic text-[var(--color-brand-gold)]"
            >
              "Diagnóstico concluído. O que encontramos pode mudar tudo o que você pensava saber sobre essa situação."
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 flex justify-center"
            >
              <button
                onClick={onNext}
                className="w-full md:w-auto px-10 py-4 bg-[var(--color-brand-gold)] text-[var(--color-brand-bg)] font-bold rounded-full text-lg hover:bg-[#d4b55e] transition-colors flex items-center justify-center gap-2"
              >
                Ver meu diagnóstico completo
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
