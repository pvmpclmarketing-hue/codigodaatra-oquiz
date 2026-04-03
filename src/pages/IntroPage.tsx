import { motion } from 'motion/react';
import { PageData } from '../data';

interface IntroPageProps {
  key?: number | string;
  page: PageData;
  onNext: () => void;
}

export function IntroPage({ page, onNext }: IntroPageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-12 max-w-3xl mx-auto relative"
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

      <div className="w-full flex-1 flex flex-col justify-center items-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-[var(--color-brand-gold)] font-semibold tracking-wider uppercase text-sm md:text-base mb-4 block">
            Diagnóstico Energético Gratuito
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Descubra o Bloqueio Invisível que Está Afastando Ele de Você
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
        >
          <p>
            Você já sentiu que quanto mais você tenta se aproximar, mais ele se afasta? Isso não é culpa sua. Existe um <strong>bloqueio na sua Frequência Energética</strong> que está agindo como um repelente invisível.
          </p>
          <p>
            Responda a este rápido diagnóstico de 9 perguntas para descobrir qual é o seu bloqueio atual e como ativar o <strong className="text-white">Código da Atração</strong> — o segredo quântico para inverter o jogo e fazer ele sentir uma <strong>necessidade magnética de correr atrás de você</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full pt-8"
        >
          <button
            onClick={onNext}
            className="w-full md:w-auto px-10 py-5 bg-[var(--color-brand-gold)] text-[var(--color-brand-bg)] font-bold rounded-full text-lg md:text-xl hover:bg-[#d4b55e] transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(201,168,76,0.3)] flex items-center justify-center gap-3 mx-auto"
          >
            INICIAR DIAGNÓSTICO AGORA
          </button>
          <p className="text-sm text-gray-500 mt-6 flex items-center justify-center gap-2">
            <span>🔒</span> 100% Anônimo e Confidencial
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
