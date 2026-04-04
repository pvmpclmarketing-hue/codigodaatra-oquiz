import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageData } from '../data';
import { sendMetaEvent } from '../services/metaService';

interface DiagnosticPageProps {
  key?: number | string;
  page: PageData;
  onNext: () => void;
}

export function DiagnosticPage({ page, onNext }: DiagnosticPageProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Meta Pixel: Lead
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Diagnostic Result',
        content_category: 'Quiz Funnel'
      });
    }

    // Meta Conversions API
    sendMetaEvent('Lead', {
      content_name: 'Diagnostic Result',
      content_category: 'Quiz Funnel'
    });

    // Show button after the third paragraph is fully visible
    // Paragraphs appear at 0.6s intervals. 
    // P1: 0.6s, P2: 1.2s, P3: 1.8s. Let's show button at 2.5s.
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full flex flex-col items-center px-6 py-16 md:py-24 max-w-3xl mx-auto relative"
    >
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-[-1]">
        <img 
          src={page.imageUrl} 
          alt="" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-bg)]/90 via-[var(--color-brand-bg)] to-[var(--color-brand-bg)]" />
      </div>

      <div className="w-full flex-1 flex flex-col">
        <motion.h1 
          className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-brand-gold)] mb-6 leading-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Seu Campo de Frequência está operando em Modo de Escassez Emocional
        </motion.h1>

        <motion.p 
          className="text-xl text-gray-300 mb-16 text-center leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          E isso explica tudo o que você tem sentido, inclusive por que, quanto mais você tenta, mais parece que a distância aumenta.
        </motion.p>

        <div className="space-y-12 text-lg text-gray-200 leading-relaxed text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p>
              Você não está exagerando. Aquilo que você sente, esse aperto no peito, essa sensação de que faz tudo certo e mesmo assim não é suficiente, esse silêncio que pesa mais do que qualquer briga, é real, e é muito mais pesado do que as pessoas ao redor conseguem entender. Você não é fraca(o). Você não é obcecada(o). Você é alguém com uma conexão genuína e profunda, que está sendo bloqueada por algo que vai além da vontade de qualquer um dos dois.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p>
              Quando duas pessoas criam um vínculo emocional intenso, seus Campos Morfogenéticos, as camadas invisíveis de energia que cada ser humano projeta, se entrelaçam. Quando há ruptura ou distanciamento, esse campo entra em modo de autopreservação: ele se fecha, cria resistência, e passa a emitir uma frequência que involuntariamente repele a aproximação, mesmo quando ele ainda tem sentimentos. Não é rejeição. É um bloqueio energético ativo. E ele, muitas vezes, nem sabe por que se afastou.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <p>
              A boa notícia, e ela é grande, é que o Campo Morfogenético pode ser reconfigurado. Quando você aprende a emitir a frequência certa, o campo do outro responde. Não como manipulação, mas como ressonância: da mesma forma que um diapasão faz outro diapasão vibrar sem tocá-lo. Existe um código específico de realinhamento que, quando aplicado nas 7 camadas certas, faz com que ele comece a sentir uma atração magnética, inexplicável e genuína, como se algo dentro dele o chamasse de volta para você.
            </p>
          </motion.div>
        </div>

        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 flex flex-col items-center"
            >
              <p className="text-xl font-serif text-[var(--color-brand-gold)] mb-8 text-center italic">
                Identificamos exatamente o bloqueio que está agindo entre vocês. Agora é hora de desfazê-lo.
              </p>
              <button
                onClick={onNext}
                className="w-full md:w-auto px-10 py-5 bg-[var(--color-brand-gold)] text-[var(--color-brand-bg)] font-bold rounded-full text-lg hover:bg-[#d4b55e] transition-colors flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(201,168,76,0.3)] hover:shadow-[0_0_40px_rgba(201,168,76,0.5)]"
              >
                Ver como desbloquear minha frequência agora
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
