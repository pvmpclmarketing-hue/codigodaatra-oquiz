import { useEffect } from 'react';
import { motion } from 'motion/react';
import { PageData } from '../data';

interface SalesPageProps {
  key?: number | string;
  page: PageData;
}

export function SalesPage({ page }: SalesPageProps) {
  const checkoutUrl = "https://go.pepperpay.com.br/irl0x";

  useEffect(() => {
    // Push GTM event when the sales page loads
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      'event': 'quiz_complete',
      'quiz_step': '12',
      'produto': 'codigo_da_atracao'
    });
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen w-full flex flex-col items-center px-6 py-16 md:py-24 max-w-4xl mx-auto relative bg-[#1A0A2E]"
    >
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-[-1]">
        <img 
          src={page.imageUrl} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0A2E]/80 via-[#1A0A2E]/95 to-[#1A0A2E]" />
      </div>

      <div className="w-full flex-1 flex flex-col items-center">
        <motion.h1 
          className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          O Código da Atração foi criado exatamente para desfazer esse bloqueio e fazer essa pessoa sentir uma necessidade magnética e genuína de correr atrás de você
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-16 text-center leading-relaxed max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Agora que você sabe o que está acontecendo energeticamente entre vocês, você tem duas escolhas: continuar tentando no escuro ou usar o sistema exato desenvolvido para reconfigurar esse campo em 7 camadas.
        </motion.p>

        <div className="w-full max-w-3xl space-y-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <h2 className="text-2xl font-serif font-semibold text-[var(--color-brand-gold)] mb-8 text-center">
              O QUE VOCÊ RECEBE:
            </h2>

            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                  <span className="text-2xl">🌀</span> Os 7 Módulos Completos do Código da Atração
                </h3>
                
                <ul className="space-y-6 pl-2 md:pl-8 text-gray-300">
                  <li>
                    <strong className="text-white block mb-1">01. O Despertar Quântico</strong>
                    Descubra qual bloqueio específico está agindo no seu campo e por que sua frequência atual está repelindo a pessoa que você deseja.
                  </li>
                  <li>
                    <strong className="text-white block mb-1">02. A Limpeza do Campo</strong>
                    Rituais de limpeza energética para remover crenças limitantes, contratos kármicos e padrões inconscientes herdados que sabotam sua atração.
                  </li>
                  <li>
                    <strong className="text-white block mb-1">03. A Conexão de Almas</strong>
                    Técnicas de entrelaçamento quântico para criar e fortalecer o elo invisível entre você e a pessoa desejada, além do espaço e do tempo.
                  </li>
                  <li>
                    <strong className="text-white block mb-1">04. A Programação do Subconsciente</strong>
                    Reprogramação profunda para substituir a frequência de carência pela frequência da certeza, do merecimento e do amor já conquistado.
                  </li>
                  <li>
                    <strong className="text-white block mb-1">05. O Ritual de Manifestação</strong>
                    O protocolo passo a passo para manifestar o retorno ou a aproximação dele, com datas, horários e alinhamentos energéticos precisos.
                  </li>
                  <li>
                    <strong className="text-white block mb-1">06. A Manutenção da Chama</strong>
                    Como manter o campo de atração ativo e nutrir a conexão espiritual dia após dia até a manifestação se concretizar no plano físico.
                  </li>
                  <li>
                    <strong className="text-white block mb-1">07. A Selagem do Destino</strong>
                    O ritual final de ancoragem para quando a manifestação começar a aparecer. Você vai saber exatamente como agir para consolidar o amor de forma duradoura.
                  </li>
                </ul>
              </div>

              <div className="space-y-6 pt-6 border-t border-white/10">
                <div className="flex gap-4">
                  <span className="text-2xl">📖</span>
                  <div>
                    <strong className="text-white block mb-1 text-lg">Manual dos Rituais de Manifestação</strong>
                    <p className="text-gray-300">Guia completo com todos os rituais do programa em formato passo a passo, para consultar sempre que precisar, direto e sem rodeios.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">📅</span>
                  <div>
                    <strong className="text-white block mb-1 text-lg">Calendário Energético de 30 Dias</strong>
                    <p className="text-gray-300">Um plano diário de 30 dias alinhado às energias favoráveis para aplicar o Código com a máxima potência, dia a dia, sem perder o ritmo.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">🎁</span>
                  <div>
                    <strong className="text-white block mb-1 text-lg text-[var(--color-brand-gold)]">BÔNUS 1: Afirmações Quânticas</strong>
                    <p className="text-gray-300">Uma sequência de afirmações programadas especificamente para reprogramar sua frequência e emitir o campo magnético de atração. Use pela manhã e sinta a diferença na sua energia ao longo do dia.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">🎁</span>
                  <div>
                    <strong className="text-white block mb-1 text-lg text-[var(--color-brand-gold)]">BÔNUS 2: Guia de Mensagens Energéticas</strong>
                    <p className="text-gray-300">O que escrever para ele nas redes sociais em cada fase da atração, sem parecer ansiosa, sem afastá-lo e sem nunca revelar o que está fazendo.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center pt-4">
                  <span className="text-2xl">♾️</span>
                  <strong className="text-white text-lg">Acesso Vitalício + Todas as Atualizações Futuras</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="py-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center text-white mb-8">
              O que acontece quando você desbloqueia sua frequência:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex text-[var(--color-brand-gold)] mb-3 text-lg">
                  ★★★★★
                </div>
                <p className="text-gray-300 italic mb-4 leading-relaxed">
                  "Estávamos sem nos falar há 3 semanas. Eu já tinha tentado de tudo, mandado textão, chorado... Comecei a aplicar o Código na terça. Na sexta à noite ele me mandou mensagem dizendo que não conseguia parar de pensar em mim. É assustador como funciona rápido."
                </p>
                <p className="text-white font-semibold">— Mariana S., 28 anos</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex text-[var(--color-brand-gold)] mb-3 text-lg">
                  ★★★★★
                </div>
                <p className="text-gray-300 italic mb-4 leading-relaxed">
                  "O bloqueio energético era real. Eu sentia que quanto mais eu ia atrás, mais ele fugia. Quando fiz a limpeza do módulo 2 e apliquei a técnica de conexão, a energia mudou. Ele que me chamou pra sair esse fim de semana!"
                </p>
                <p className="text-white font-semibold">— Camila T., 34 anos</p>
              </div>
            </div>
            <p className="text-center text-[var(--color-brand-gold)] font-medium mt-6">
              Junte-se a mais de 2.450 mulheres que já testaram e comprovaram o Código da Atração.
            </p>
          </div>

          <div className="text-center space-y-4 pt-4">
            <div className="inline-block bg-[var(--color-brand-gold)]/20 text-[var(--color-brand-gold)] px-4 py-1.5 rounded-full text-sm font-bold mb-2 border border-[var(--color-brand-gold)]/30">
              🔥 OFERTA ESPECIAL LIMITADA
            </div>
            <p className="text-xl text-gray-400 line-through">De: R$ 197,00</p>
            <p className="text-4xl md:text-5xl font-bold text-[var(--color-brand-gold)]">Por: R$ 37 <span className="text-xl font-normal text-gray-300">(pagamento único)</span></p>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-center">
            <p className="text-red-200">
              <span className="text-xl mr-2">⚠️</span>
              <strong>Atenção:</strong> Este diagnóstico foi gerado uma única vez, com base nas suas respostas específicas. O acesso ao Código da Atração com <strong>81% de desconto</strong> está disponível agora, mas a página expira assim que você sair.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-6 pt-8">
            <motion.a
              href={checkoutUrl}
              className="w-full md:w-auto px-8 md:px-12 py-6 bg-[var(--color-brand-gold)] text-[var(--color-brand-bg)] font-bold rounded-full text-lg md:text-xl hover:bg-[#d4b55e] transition-colors flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(201,168,76,0.3)] text-center"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              🔓 SIM, QUERO DESBLOQUEAR MINHA FREQUÊNCIA AGORA
            </motion.a>

            <div className="text-sm text-gray-400 space-y-2 text-center">
              <p>✅ Acesso imediato após a confirmação</p>
              <p>✅ Garantia Sagrada de 7 dias: devolvemos 100% sem perguntas</p>
              <p>✅ Método discreto: ninguém precisa saber o que você está fazendo</p>
              <p>✅ Funciona independentemente da distância física</p>
              <p className="mt-4 flex items-center justify-center gap-2">
                <span>🔒</span> Pagamento 100% seguro, processado pela Pepper
              </p>
            </div>
          </div>

          <div className="pt-16 pb-8 text-center max-w-2xl mx-auto">
            <p className="text-xl font-serif italic text-gray-300 leading-relaxed">
              "A pessoa que você ama existe no campo quântico esperando pela sua frequência certa. O Código da Atração vai te ensinar exatamente como chegar até ele no plano invisível que antecede toda realidade visível."
            </p>
          </div>

          <div className="flex justify-center pb-16">
            <motion.a
              href={checkoutUrl}
              className="w-full md:w-auto px-8 md:px-12 py-6 bg-[var(--color-brand-gold)] text-[var(--color-brand-bg)] font-bold rounded-full text-lg md:text-xl hover:bg-[#d4b55e] transition-colors flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(201,168,76,0.3)] text-center"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              🔓 SIM, QUERO DESBLOQUEAR MINHA FREQUÊNCIA AGORA
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
